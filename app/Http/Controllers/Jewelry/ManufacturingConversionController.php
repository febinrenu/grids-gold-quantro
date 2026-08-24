<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Quotation;
use App\Models\ManufacturingOrder;
use App\Models\ManufacturingOrderStage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ManufacturingConversionController extends BaseController
{
    /**
     * Convert a Quotation into one or more Manufacturing Orders.
     */
    public function convert(Request $request, $id)
    {
        $quotation = Quotation::with('details')->findOrFail($id);

        // Check if already converted
        $existing = ManufacturingOrder::where('quotation_id', $id)->exists();
        if ($existing) {
            return response()->json([
                'success' => false,
                'message' => 'This quotation has already been converted to a manufacturing order.'
            ], 422);
        }

        // Check eligibility (status must be 'sent')
        if ($quotation->statut !== 'sent') {
            return response()->json([
                'success' => false,
                'message' => 'Only quotations with status "Sent" can be converted to manufacturing orders.'
            ], 422);
        }

        if ($quotation->details->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'This quotation has no items to manufacture.'
            ], 422);
        }

        $createdOrders = [];

        DB::transaction(function () use ($quotation, &$createdOrders) {
            foreach ($quotation->details as $detail) {
                // Generate a unique manufacturing number
                $mfgNumber = $this->generateManufacturingNumber();

                // Create the manufacturing order
                $mfgOrder = ManufacturingOrder::create([
                    'manufacturing_number' => $mfgNumber,
                    'warehouse_id' => $quotation->warehouse_id,
                    'planned_quantity' => (int) $detail->quantity,
                    'completed_quantity' => 0,
                    'order_date' => now()->toDateString(),
                    'status' => 'draft',
                    'quotation_id' => $quotation->id,
                    'product_id' => $detail->product_id,
                ]);

                // Create initial stages: Casting, Stone Setting, Polishing
                $stages = [
                    ['name' => 'Casting', 'seq' => 1, 'status' => 'pending'],
                    ['name' => 'Stone Setting', 'seq' => 2, 'status' => 'pending'],
                    ['name' => 'Polishing', 'seq' => 3, 'status' => 'pending']
                ];

                foreach ($stages as $stageData) {
                    ManufacturingOrderStage::create([
                        'manufacturing_order_id' => $mfgOrder->id,
                        'stage_name' => $stageData['name'],
                        'sequence' => $stageData['seq'],
                        'status' => $stageData['status'],
                    ]);
                }

                $createdOrders[] = $mfgOrder;
            }
        });

        return response()->json([
            'success' => true,
            'message' => 'Quotation successfully converted to ' . count($createdOrders) . ' manufacturing orders.',
            'orders' => $createdOrders
        ]);
    }

    /**
     * Generate a unique manufacturing number.
     */
    protected function generateManufacturingNumber()
    {
        $prefix = 'MFG';
        $last = DB::table('manufacturing_orders')
            ->where('manufacturing_number', 'like', $prefix.'_%')
            ->latest('id')
            ->first();

        if ($last) {
            $parts = explode('_', $last->manufacturing_number);
            if (isset($parts[1]) && is_numeric($parts[1])) {
                $next = intval($parts[1]) + 1;
                return $prefix . '_' . str_pad($next, 4, '0', STR_PAD_LEFT);
            }
        }
        return $prefix . '_0001';
    }
}
