<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Client;
use App\Models\Quotation;
use App\Models\QuotationDetail;
use App\Models\Product;
use App\Models\Employee;
use App\Models\ManufacturingOrder;
use App\Models\ManufacturingOrderStage;
use App\Models\ManufacturingTimeLog;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\Jewelry\ManufacturingConversionController;
use App\Http\Controllers\Jewelry\ManufacturingStageController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;

class JewelryExtensionsTest extends TestCase
{
    use RefreshDatabase;

    protected function migrateFreshUsing(): array
    {
        return [
            '--path' => 'database/migrations/tenant',
        ];
    }

    protected function setUp(): void
    {
        parent::setUp();
        \Illuminate\Support\Facades\Gate::before(function ($user = null) {
            return true;
        });

        $user = new \App\Models\User(['id' => 1, 'username' => 'admin']);
        $this->actingAs($user);
    }

    /**
     * Test Phase 1: Customer Personalization.
     */
    public function test_customer_personalization(): void
    {
        $partner = Client::create([
            'code' => '1',
            'firstname' => 'Partner',
            'lastname' => 'User',
            'name' => 'Partner User',
            'email' => 'partner@example.com',
            'phone' => '123456789',
        ]);

        $controller = new ClientController();

        $request = Request::create('/api/clients', 'POST', [
            'code' => '2',
            'firstname' => 'Test',
            'lastname' => 'User',
            'name' => 'Test User',
            'email' => 'test@example.com',
            'phone' => '987654321',
            'ring_size' => '7.5',
            'anniversary_date' => '2026-08-24',
            'preferred_metals' => 'Gold, Platinum',
            'partner_customer_id' => $partner->id,
        ]);

        // Mock Auth check or similar if required, otherwise just call store
        $response = $controller->store($request);
        $this->assertEquals(200, $response->getStatusCode());

        $client = Client::where('email', 'test@example.com')->first();
        $this->assertNotNull($client);
        $this->assertEquals('7.5', $client->ring_size);
        $this->assertEquals('2026-08-24', $client->anniversary_date);
        $this->assertEquals('Gold, Platinum', $client->preferred_metals);
        $this->assertEquals($partner->id, $client->partner_customer_id);

        // Test self-relationship prevention
        $updateRequest = Request::create("/api/clients/{$client->id}", 'PUT', [
            'code' => '2',
            'firstname' => 'Test',
            'lastname' => 'User',
            'name' => 'Test User',
            'email' => 'test@example.com',
            'phone' => '987654321',
            'partner_customer_id' => $client->id, // self
        ]);

        try {
            $controller->update($updateRequest, $client->id);
            $this->fail('Self partnership was not prevented');
        } catch (\Illuminate\Validation\ValidationException $e) {
            $this->assertArrayHasKey('partner_customer_id', $e->errors());
        }
    }

    /**
     * Test Phase 2: Quotation to Manufacturing Order conversion.
     */
    public function test_quotation_conversion(): void
    {
        $client = Client::create([
            'code' => '3',
            'name' => 'Quotation Client',
            'email' => 'client@example.com',
        ]);

        $product = Product::create([
            'name' => 'Ring',
            'code' => 'R001',
            'Type_barcode' => 'CODE128',
            'price' => 1000,
            'type' => 'is_single',
            'cost' => 800,
            'wholesale_price' => 1000,
            'min_price' => 1000,
            'category_id' => 1,
        ]);

        $quotation = Quotation::create([
            'Ref' => 'QT_0001',
            'warehouse_id' => 1,
            'client_id' => $client->id,
            'statut' => 'sent',
            'date' => '2026-08-24',
            'user_id' => 1,
            'tax_rate' => 0,
            'TaxNet' => 0,
            'discount' => 0,
            'shipping' => 0,
            'GrandTotal' => 2000,
        ]);

        QuotationDetail::create([
            'quotation_id' => $quotation->id,
            'product_id' => $product->id,
            'quantity' => 2,
            'price' => 1000,
            'total' => 2000,
            'sale_unit_id' => 1,
        ]);

        $controller = new ManufacturingConversionController();
        $response = $controller->convert(new Request(), $quotation->id);
        $this->assertEquals(200, $response->status());

        // Verify MFG order created
        $mfgOrder = ManufacturingOrder::where('quotation_id', $quotation->id)->first();
        $this->assertNotNull($mfgOrder);
        $this->assertEquals($product->id, $mfgOrder->product_id);
        $this->assertEquals(2, $mfgOrder->planned_quantity);

        // Verify stages created
        $stagesCount = ManufacturingOrderStage::where('manufacturing_order_id', $mfgOrder->id)->count();
        $this->assertEquals(3, $stagesCount);

        // Verify duplicate conversion prevention
        $duplicateResponse = $controller->convert(new Request(), $quotation->id);
        $this->assertEquals(422, $duplicateResponse->status());
    }

    /**
     * Test Phase 3 & 4: Manufacturing Stage transitions, worker assignment, and time log tracking.
     */
    public function test_stage_routing_and_time_tracking(): void
    {
        $employee = Employee::create([
            'username' => 'worker_john',
            'firstname' => 'Worker',
            'lastname' => 'John',
            'hourly_rate' => 50.00,
            'gender' => 'male',
            'company_id' => 1,
            'department_id' => 1,
            'designation_id' => 1,
            'office_shift_id' => 1,
        ]);

        $mfgOrder = ManufacturingOrder::create([
            'manufacturing_number' => 'MFG_0001',
            'planned_quantity' => 1,
            'completed_quantity' => 0,
            'order_date' => '2026-08-24',
            'status' => 'draft',
        ]);

        $stage1 = ManufacturingOrderStage::create([
            'manufacturing_order_id' => $mfgOrder->id,
            'stage_name' => 'Casting',
            'sequence' => 1,
            'status' => 'pending',
        ]);

        $stage2 = ManufacturingOrderStage::create([
            'manufacturing_order_id' => $mfgOrder->id,
            'stage_name' => 'Stone Setting',
            'sequence' => 2,
            'status' => 'pending',
        ]);

        $stageController = new ManufacturingStageController();

        // 1. Assign worker
        $assignResponse = $stageController->assignWorker(new Request(['employee_id' => $employee->id]), $mfgOrder->id, $stage1->id);
        $this->assertEquals(200, $assignResponse->status());
        $this->assertEquals($employee->id, $stage1->fresh()->assigned_employee_id);

        // 2. Test invalid sequence transition (starting stage 2 before stage 1 completed)
        $invalidTrans = $stageController->updateStatus(new Request(['status' => 'in_progress']), $mfgOrder->id, $stage2->id);
        $this->assertEquals(422, $invalidTrans->status());

        // 3. Start Casting stage (pending -> in_progress)
        $startResponse = $stageController->updateStatus(new Request(['status' => 'in_progress']), $mfgOrder->id, $stage1->id);
        $this->assertEquals(200, $startResponse->status());
        $this->assertEquals('in_progress', $stage1->fresh()->status);

        // 4. Start timer
        $timerStartResponse = $stageController->startTimer(new Request(), $mfgOrder->id, $stage1->id);
        $this->assertEquals(200, $timerStartResponse->status());

        // Verify active log created
        $log = ManufacturingTimeLog::where('manufacturing_order_stage_id', $stage1->id)->whereNull('ended_at')->first();
        $this->assertNotNull($log);

        // Try to start duplicate active timer
        $dupTimerResponse = $stageController->startTimer(new Request(), $mfgOrder->id, $stage1->id);
        $this->assertEquals(422, $dupTimerResponse->status());

        // 5. Stop timer (with simulated duration)
        // Let's modify start time to 2 hours ago to test labor cost calculation
        $log->update(['started_at' => now()->subHours(2)]);

        $timerStopResponse = $stageController->stopTimer(new Request(), $mfgOrder->id, $stage1->id);
        $this->assertEquals(200, $timerStopResponse->status());

        $log = $log->fresh();
        $this->assertNotNull($log->ended_at);
        $this->assertGreaterThanOrEqual(7200, $log->duration_seconds);
        $this->assertEquals(100.00, $log->labor_cost); // 2 hours * $50 hourly rate

        // 6. Complete Casting stage
        $completeResponse = $stageController->updateStatus(new Request(['status' => 'completed']), $mfgOrder->id, $stage1->id);
        $this->assertEquals(200, $completeResponse->status());
        $this->assertEquals('completed', $stage1->fresh()->status);

        // Now stage 2 sequence validation should pass
        $startStage2 = $stageController->updateStatus(new Request(['status' => 'in_progress']), $mfgOrder->id, $stage2->id);
        $this->assertEquals(200, $startStage2->status());
    }
}
