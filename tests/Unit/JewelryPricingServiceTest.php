<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Category;
use App\Models\Product;
use App\Models\ItemStone;
use App\Models\GoldRate;
use App\Services\Jewelry\GoldRateService;
use App\Services\Jewelry\JewelryPricingService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Carbon\Carbon;

class JewelryPricingServiceTest extends TestCase
{
    use RefreshDatabase;

    private GoldRateService $goldRateService;
    private JewelryPricingService $pricingService;
    private Category $category;

    protected function migrateFreshUsing(): array
    {
        return [
            '--path' => 'database/migrations/tenant',
        ];
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->goldRateService = new GoldRateService();
        $this->pricingService = new JewelryPricingService($this->goldRateService);

        // Pre-create a parent category required by products table foreign key
        $this->category = Category::create([
            'code' => 'CAT_JWL',
            'name' => 'Jewelry',
        ]);
    }

    /**
     * Helper to create a basic jewelry product.
     */
    private function createProduct(array $customAttributes = []): Product
    {
        $defaultAttributes = [
            'type'                 => 'is_single',
            'code'                 => 'JWL_RING_001',
            'Type_barcode'         => 'BARCODE_JWL',
            'name'                 => 'Test Jewelry Ring',
            'cost'                 => 100.00,
            'price'                => 200.00,
            'wholesale_price'      => 150.00,
            'min_price'            => 120.00,
            'category_id'          => $this->category->id,
            'is_jewelry_item'      => true,
            'metal_type_id'        => 1,
            'karat_id'             => 1,
            'jewelry_gross_weight' => 10.0,
            'jewelry_net_weight'   => 8.0,
            'jewelry_metal_weight' => 8.0,
            'making_charge_type'   => 'fixed',
            'making_charge_value'  => 50.00,
            'wastage_type'         => 'fixed_value',
            'wastage_value'        => 20.00,
        ];

        return Product::create(array_merge($defaultAttributes, $customAttributes));
    }

    /**
     * Test 1: GoldRateService integration.
     */
    public function test_gold_rate_service_integration(): void
    {
        $product = $this->createProduct([
            'metal_type_id'        => 2,
            'karat_id'             => 3,
            'jewelry_metal_weight' => 5.0,
        ]);

        // Create an active GoldRate
        $rate = GoldRate::create([
            'metal_type_id'        => 2,
            'karat_id'             => 3,
            'rate_per_weight_unit' => 120.00,
            'currency_id'          => 1,
            'warehouse_id'         => null,
            'created_by'           => 1,
            'effective_at'         => Carbon::now()->subMinute(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $result = $this->pricingService->preview($product->id, null);

        $this->assertEquals(120.00, $result['gold_rate']);
        $this->assertEquals($rate->id, $result['gold_rate_id']);
        // Metal Value = 5.0 * 120.00 = 600.00
        $this->assertEquals(600.00, $result['metal_value']);
    }

    /**
     * Test 2: Fixed making charge.
     */
    public function test_fixed_making_charge(): void
    {
        $product = $this->createProduct([
            'making_charge_type'  => 'fixed',
            'making_charge_value' => 75.00,
        ]);

        $result = $this->pricingService->preview($product->id, null, ['gold_rate' => 100.00]);

        $this->assertEquals(75.00, $result['making_charge']);
    }

    /**
     * Test 3: Per gram making charge.
     */
    public function test_per_gram_making_charge(): void
    {
        $product = $this->createProduct([
            'jewelry_gross_weight' => 12.5,
            'making_charge_type'   => 'per_gram',
            'making_charge_value'  => 6.00,
        ]);

        $result = $this->pricingService->preview($product->id, null, ['gold_rate' => 100.00]);

        // Making charge = 6.00 * 12.5 = 75.00
        $this->assertEquals(75.00, $result['making_charge']);
    }

    /**
     * Test 4: Percentage making charge.
     */
    public function test_percentage_making_charge(): void
    {
        $product = $this->createProduct([
            'jewelry_metal_weight' => 10.0,
            'making_charge_type'   => 'percentage',
            'making_charge_value'  => 8.00, // 8% of metal value
        ]);

        $result = $this->pricingService->preview($product->id, null, ['gold_rate' => 100.00]);

        // Metal Value = 10.0 * 100.00 = 1000.00
        // Making charge = 1000.00 * 0.08 = 80.00
        $this->assertEquals(80.00, $result['making_charge']);
    }

    /**
     * Test 5: Manual making charge override.
     */
    public function test_manual_making_charge(): void
    {
        $product = $this->createProduct([
            'making_charge_type'  => 'manual',
            'making_charge_value' => 50.00,
        ]);

        // Override the manual making charge to 95.00
        $result = $this->pricingService->preview($product->id, null, [
            'gold_rate'            => 100.00,
            'making_charge_amount' => 95.00,
        ]);

        $this->assertEquals(95.00, $result['making_charge']);
    }

    /**
     * Test 6: Formula making charge.
     */
    public function test_formula_making_charge(): void
    {
        $product = $this->createProduct([
            'jewelry_gross_weight' => 15.0,
            'making_charge_type'   => 'formula',
        ]);

        // Pass formula string in overrides: gross_weight * 4.0 + 10
        // Expected: 15.0 * 4.0 + 10 = 70.00
        $result = $this->pricingService->preview($product->id, null, [
            'gold_rate'             => 100.00,
            'making_charge_formula' => 'gross_weight * 4.0 + 10',
        ]);

        $this->assertEquals(70.00, $result['making_charge']);
    }

    /**
     * Test 7: Fixed wastage.
     */
    public function test_fixed_wastage(): void
    {
        $product = $this->createProduct([
            'wastage_type'  => 'fixed_value',
            'wastage_value' => 35.00,
        ]);

        $result = $this->pricingService->preview($product->id, null, ['gold_rate' => 100.00]);

        $this->assertEquals(35.00, $result['wastage']);
    }

    /**
     * Test 8: Percentage wastage.
     */
    public function test_percentage_wastage(): void
    {
        $product = $this->createProduct([
            'jewelry_metal_weight' => 10.0,
            'wastage_type'         => 'percentage_of_value',
            'wastage_value'        => 6.00, // 6% of metal value
        ]);

        $result = $this->pricingService->preview($product->id, null, ['gold_rate' => 100.00]);

        // Metal Value = 1000.00
        // Wastage = 1000.00 * 0.06 = 60.00
        $this->assertEquals(60.00, $result['wastage']);
    }

    /**
     * Test 9: Weight wastage.
     */
    public function test_weight_wastage(): void
    {
        $product = $this->createProduct([
            'jewelry_metal_weight' => 8.0,
            'wastage_type'         => 'percentage_of_weight',
            'wastage_value'        => 5.00, // 5% added to weight before pricing
        ]);

        $result = $this->pricingService->preview($product->id, null, ['gold_rate' => 150.00]);

        // Metal Value = 8.0 * 150.0 = 1200.00
        // Wastage = (8.0 * 0.05) * 150.0 = 0.4 * 150.0 = 60.00
        $this->assertEquals(60.00, $result['wastage']);
    }

    /**
     * Test 10: Stone value calculation.
     */
    public function test_stone_value_calculation(): void
    {
        $product = $this->createProduct();

        // Create stone records for the product
        ItemStone::create([
            'product_id'        => $product->id,
            'stone_type_id'     => 1,
            'stone_name'        => 'Diamond',
            'quantity'          => 2,
            'carat_value'       => 0.5,
            'total_cost_amount' => 150.00,
        ]);

        ItemStone::create([
            'product_id'        => $product->id,
            'stone_type_id'     => 2,
            'stone_name'        => 'Ruby',
            'quantity'          => 1,
            'carat_value'       => 1.0,
            'total_cost_amount' => 250.00,
        ]);

        $result = $this->pricingService->preview($product->id, null, ['gold_rate' => 100.00]);

        // Total stone cost = 150 + 250 = 400.00
        $this->assertEquals(400.00, $result['stone_value']);
    }

    /**
     * Test 11: Final selling price calculation.
     */
    public function test_final_selling_price_calculation(): void
    {
        $product = $this->createProduct([
            'jewelry_metal_weight' => 10.0,
            'making_charge_type'   => 'fixed',
            'making_charge_value'  => 50.00,
            'wastage_type'         => 'fixed_value',
            'wastage_value'        => 20.00,
        ]);

        // Input context/overrides:
        // Metal weight = 10.0, gold rate = 100.0 => Metal Value = 1000.00
        // Wastage = 20.00
        // Making Charge = 50.00
        // Stone Value = 400.00 (from overrides)
        // Labor = 30.00
        // Additional Components = 15.00
        // Base Jewelry Value = 1000 + 20 + 50 + 400 + 30 + 15 = 1515.00
        // Markup = 100.00
        // Discount = 50.00
        // Subtotal = 1515 + 100 - 50 = 1565.00
        // Tax Rate = 10% => Tax = 156.50
        // Selling Price = 1565.00 + 156.50 = 1721.50
        $result = $this->pricingService->preview($product->id, null, [
            'gold_rate'             => 100.00,
            'stone_value'           => 400.00,
            'labor'                 => 30.00,
            'additional_components' => 15.00,
            'markup'                => 100.00,
            'discount'              => 50.00,
            'tax_rate'              => 10.00,
        ]);

        $this->assertEquals(1515.00, $result['base_value']);
        $this->assertEquals(156.50, $result['tax']);
        $this->assertEquals(1721.50, $result['selling_price']);
    }

    /**
     * Test 12: preview() and priceForSale() return identical values.
     */
    public function test_preview_and_price_for_sale_return_identical_values(): void
    {
        $product = $this->createProduct([
            'jewelry_metal_weight' => 10.0,
            'making_charge_type'   => 'fixed',
            'making_charge_value'  => 50.00,
            'wastage_type'         => 'fixed_value',
            'wastage_value'        => 20.00,
        ]);

        $params = [
            'gold_rate'             => 100.00,
            'stone_value'           => 300.00,
            'labor'                 => 40.00,
            'additional_components' => 10.00,
            'markup'                => 80.00,
            'discount'              => 30.00,
            'tax_rate'              => 5.00,
        ];

        $previewResult = $this->pricingService->preview($product->id, null, $params);
        $saleResult = $this->pricingService->priceForSale($product->id, null, $params);

        $this->assertSame($previewResult, $saleResult);
    }
}
