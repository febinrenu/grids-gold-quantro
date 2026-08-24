<?php
namespace App\Http\Controllers\Jewelry;
use App\Http\Controllers\BaseController;
use App\Models\RfidTag;
use App\Models\Product;
use App\Models\ProductSerial;
use App\Models\ProductSerialMovement;
use App\Models\product_warehouse;
use App\Models\Warehouse;
use App\Models\ProductVariant;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
/**
 * Generic CRUD and MVP custom actions for `rfid_tags`.
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RfidTagController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RfidTag::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RfidTag::query();
        if ($request->has('product_serial_id')) {
            $query->where('product_serial_id', $request->input('product_serial_id'));
        }
        if ($request->has('status')) {
            $query->where('status', $request->input('status'));
        }
        $total = $query->count();
        if ($perPage === -1) {
            $perPage = max($total, 1);
        }
        $page = (int) $request->input('page', 1);
        $items = $query->orderByDesc('id')
            ->offset(max($page - 1, 0) * $perPage)
            ->limit($perPage)
            ->get();
        return response()->json([
            'data' => $items,
            'totalRows' => $total,
        ]);
    }
    public function store(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'create', RfidTag::class);
        $item = RfidTag::create($request->only((new RfidTag)->getFillable()));
        return $this->sendResponse($item, 'RfidTag created successfully.');
    }
    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RfidTag::class);
        $item = RfidTag::findOrFail($id);
        return $this->sendResponse($item, 'RfidTag retrieved successfully.');
    }
    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RfidTag::class);
        $item = RfidTag::findOrFail($id);
        $item->update($request->only($item->getFillable()));
        return $this->sendResponse($item, 'RfidTag updated successfully.');
    }
    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RfidTag::class);
        $item = RfidTag::findOrFail($id);
        $item->delete();
        return $this->sendResponse([], 'RfidTag deleted successfully.');
    }
    /**
     * MVP Action: Assign an RFID EPC to a physical jewelry serial number.
     */
    public function assign(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', RfidTag::class);
        $request->validate([
            'product_serial_id' => 'required|integer',
            'epc_number' => 'required|string|max:64',
            'tag_number' => 'nullable|string|max:64',
            'tag_type' => 'nullable|string|max:30',
        ]);
        $serialId = $request->input('product_serial_id');
        $epc = $request->input('epc_number');
        // 1. Verify ProductSerial exists
        $serial = ProductSerial::findOrFail($serialId);
        // 2. Prevent duplicate EPC assignment to a different active serial
        $duplicateTag = RfidTag::where('epc_number', $epc)
            ->where('status', 'active')
            ->where('product_serial_id', '!=', $serialId)
            ->first();
        if ($duplicateTag) {
            return response()->json([
                'success' => false,
                'message' => "RFID EPC '{$epc}' is already active and assigned to another item."
            ], 422);
        }
        // 3. Handle existing active tags for this serial (RFID Replacement)
        $oldTag = RfidTag::where('product_serial_id', $serialId)
            ->where('status', 'active')
            ->first();
        DB::transaction(function () use ($serial, $serialId, $epc, $oldTag, $request) {
            if ($oldTag) {
                // If it is the exact same EPC, nothing to change.
                if ($oldTag->epc_number === $epc) {
                    return;
                }
                // Deactivate the old tag
                $oldTag->status = 'inactive';
                $oldTag->save();
                // Log audit movement for replacement
                ProductSerialMovement::create([
                    'product_serial_id' => $serialId,
                    'serial_number' => $serial->serial_number,
                    'action' => ProductSerialMovement::ACTION_STATUS_CHANGED,
                    'from_status' => $serial->status,
                    'to_status' => $serial->status,
                    'warehouse_id' => $serial->warehouse_id,
                    'reference_type' => 'RFID',
                    'reference_id' => $oldTag->id,
                    'user_id' => $request->user('api')->id,
                    'notes' => "RFID tag replaced from {$oldTag->epc_number} to {$epc}.",
                    'created_at' => now(),
                ]);
            }
            // 4. Create/Activate the new tag
            $tag = RfidTag::withTrashed()->where('epc_number', $epc)->first();
            if ($tag) {
                $tag->restore();
                $tag->update([
                    'product_serial_id' => $serialId,
                    'product_id' => $serial->product_id,
                    'status' => 'active',
                    'activation_date' => now(),
                    'tag_number' => $request->input('tag_number', $epc),
                    'tag_type' => $request->input('tag_type'),
                ]);
            } else {
                $tag = RfidTag::create([
                    'epc_number' => $epc,
                    'tag_number' => $request->input('tag_number', $epc),
                    'product_id' => $serial->product_id,
                    'product_serial_id' => $serialId,
                    'tag_type' => $request->input('tag_type'),
                    'status' => 'active',
                    'activation_date' => now(),
                ]);
            }
            // Log assignment audit movement
            if (!$oldTag) {
                ProductSerialMovement::create([
                    'product_serial_id' => $serialId,
                    'serial_number' => $serial->serial_number,
                    'action' => ProductSerialMovement::ACTION_STATUS_CHANGED,
                    'from_status' => $serial->status,
                    'to_status' => $serial->status,
                    'warehouse_id' => $serial->warehouse_id,
                    'reference_type' => 'RFID',
                    'reference_id' => $tag->id,
                    'user_id' => $request->user('api')->id,
                    'notes' => "RFID tag {$epc} registered and assigned.",
                    'created_at' => now(),
                ]);
            }
        });
        return response()->json([
            'success' => true,
            'message' => 'RFID Tag assigned successfully.'
        ]);
    }
    /**
     * MVP Action: Unassign the active RFID tag from a physical jewelry serial.
     */
    public function unassign(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'update', RfidTag::class);
        $request->validate([
            'product_serial_id' => 'required|integer',
        ]);
        $serialId = $request->input('product_serial_id');
        $serial = ProductSerial::findOrFail($serialId);
        $tag = RfidTag::where('product_serial_id', $serialId)
            ->where('status', 'active')
            ->first();
        if ($tag) {
            DB::transaction(function () use ($serial, $serialId, $tag, $request) {
                $tag->status = 'inactive';
                $tag->save();
                ProductSerialMovement::create([
                    'product_serial_id' => $serialId,
                    'serial_number' => $serial->serial_number,
                    'action' => ProductSerialMovement::ACTION_STATUS_CHANGED,
                    'from_status' => $serial->status,
                    'to_status' => $serial->status,
                    'warehouse_id' => $serial->warehouse_id,
                    'reference_type' => 'RFID',
                    'reference_id' => $tag->id,
                    'user_id' => $request->user('api')->id,
                    'notes' => "RFID tag {$tag->epc_number} unassigned.",
                    'created_at' => now(),
                ]);
            });
        }
        return response()->json([
            'success' => true,
            'message' => 'RFID Tag unassigned successfully.'
        ]);
    }
    /**
     * MVP Action: Resolve EPC code to detailed jewelry product data.
     */
    public function lookup(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', RfidTag::class);
        $epc = $request->query('epc');
        if (!$epc) {
            return response()->json(['success' => false, 'message' => 'EPC parameter is required.'], 400);
        }
        $tag = RfidTag::where('epc_number', $epc)->where('status', 'active')->first();
        if (!$tag) {
            return response()->json(['success' => false, 'message' => 'Unknown or inactive RFID tag.'], 404);
        }
        $serial = ProductSerial::with('product')->find($tag->product_serial_id);
        if (!$serial) {
            return response()->json(['success' => false, 'message' => 'RFID tag is not assigned to a physical item.'], 404);
        }
        $product = $serial->product;
        $price = $product->price;
        if ((bool)($product->is_jewelry_item ?? false)) {
            $pricingService = app(\App\Services\Jewelry\JewelryPricingService::class);
            $breakdown = $pricingService->preview($product->id, $serial->warehouse_id);
            if ($breakdown) {
                if ($product->tax_method == '1') {
                    $price = (float)($breakdown['base_value'] ?? 0.0) + (float)($breakdown['markup'] ?? 0.0);
                } else {
                    $price = (float)($breakdown['base_value'] ?? 0.0) + (float)($breakdown['markup'] ?? 0.0) + (float)($breakdown['tax'] ?? 0.0);
                }
            }
        }
        return response()->json([
            'success' => true,
            'tag' => [
                'id' => $tag->id,
                'epc_number' => $tag->epc_number,
                'tag_number' => $tag->tag_number,
                'status' => $tag->status,
            ],
            'serial' => [
                'id' => $serial->id,
                'serial_number' => $serial->serial_number,
                'status' => $serial->status,
                'warehouse_id' => $serial->warehouse_id,
            ],
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'code' => $product->code,
                'price' => $price,
                'is_jewelry_item' => (bool)$product->is_jewelry_item,
                'karat' => optional($product->karat)->name ?? '',
                'metal_type' => optional($product->metalType)->name ?? '',
                'gross_weight' => $product->jewelry_gross_weight !== null ? (float)$product->jewelry_gross_weight : null,
                'net_weight' => $product->jewelry_net_weight !== null ? (float)$product->jewelry_net_weight : null,
                'metal_weight' => $product->jewelry_metal_weight !== null ? (float)$product->jewelry_metal_weight : null,
            ]
        ]);
    }
    /**
     * MVP Action: Validate scanned EPC code and return POS cart payload.
     */
    public function posRfidAdd(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Sales_pos', \App\Models\Sale::class);
        $epc = $request->query('epc');
        $warehouseId = (int)$request->query('warehouse_id');
        if (!$epc) {
            return response()->json(['success' => false, 'message' => 'EPC parameter is required.'], 400);
        }
        $tag = RfidTag::where('epc_number', $epc)->where('status', 'active')->first();
        if (!$tag) {
            return response()->json(['success' => false, 'message' => 'Unknown or inactive RFID tag.'], 422);
        }
        $serial = ProductSerial::with('product')->find($tag->product_serial_id);
        if (!$serial) {
            return response()->json(['success' => false, 'message' => 'RFID tag is not assigned to a physical item.'], 422);
        }
        // Validate serial status
        if ($serial->status === ProductSerial::STATUS_SOLD) {
            return response()->json(['success' => false, 'message' => "Item '{$serial->serial_number}' has already been sold."], 422);
        }
        if ($serial->status !== ProductSerial::STATUS_AVAILABLE) {
            return response()->json(['success' => false, 'message' => "Item '{$serial->serial_number}' is not available (Status: {$serial->status})."], 422);
        }
        // Validate warehouse match
        if ($warehouseId && (int)$serial->warehouse_id !== $warehouseId) {
            $expectedWarehouse = Warehouse::find($serial->warehouse_id);
            $whName = $expectedWarehouse ? $expectedWarehouse->name : "ID {$serial->warehouse_id}";
            return response()->json([
                'success' => false,
                'message' => "Item '{$serial->serial_number}' is located at '{$whName}' and cannot be sold from this branch."
            ], 422);
        }
        // Get the product_warehouse record
        $product_warehouse = product_warehouse::where('warehouse_id', $serial->warehouse_id)
            ->where('product_id', $serial->product_id)
            ->where('product_variant_id', $serial->product_variant_id)
            ->first();
        if (!$product_warehouse) {
            return response()->json(['success' => false, 'message' => 'Stock record not found for this item.'], 422);
        }
        $product = $serial->product;
        $item = [];
        $item['id'] = $product->id;
        $item['product_id'] = $product->id;
        $item['product_variant_id'] = $serial->product_variant_id;
        $item['is_imei'] = $product->is_imei;
        $item['is_batch_tracked'] = (bool)$product->is_batch_tracked;
        $item['not_selling'] = $product->not_selling;
        if ($serial->product_variant_id) {
            $variant = ProductVariant::find($serial->product_variant_id);
            $item['Variant'] = '['.($variant->name ?? '').']'.$product->name;
            $item['name'] = '['.($variant->name ?? '').']'.$product->name;
            $item['code'] = $variant->code ?? $product->code;
            $item['barcode'] = $variant->code ?? $product->code;
            $product_price = $variant->price;
        } else {
            $item['Variant'] = null;
            $item['name'] = $product->name;
            $item['code'] = $product->code;
            $item['barcode'] = $product->code;
            $product_price = $product->price;
        }
        $pricingBreakdown = null;
        $isJewelryMode = (bool)(Setting::whereNull('deleted_at')->first()->jewelry_mode ?? false);
        if ($isJewelryMode && (bool)($product->is_jewelry_item ?? false)) {
            $pricingService = app(\App\Services\Jewelry\JewelryPricingService::class);
            $pricingBreakdown = $pricingService->preview($product->id, (int)$serial->warehouse_id);
            if ($pricingBreakdown) {
                if ($product->tax_method == '1') {
                    $product_price = (float)($pricingBreakdown['base_value'] ?? 0.0) + (float)($pricingBreakdown['markup'] ?? 0.0);
                } else {
                    $product_price = (float)($pricingBreakdown['base_value'] ?? 0.0) + (float)($pricingBreakdown['markup'] ?? 0.0) + (float)($pricingBreakdown['tax'] ?? 0.0);
                }
            }
        }
        $item['image'] = $product->primaryProductImageFilename();
        $item['product_type'] = $product->type;
        $item['tax_method'] = $product->tax_method;
        $item['tax_percent'] = $product->TaxNet;
        $item['discount_method'] = $product->discount_method;
        $item['discount_Method'] = $product->discount_method;
        $item['discount'] = $product->discount;
        if ($product->unitSale) {
            if ($product->unitSale->operator == '/') {
                $item['qte_sale'] = $product_warehouse->qte * $product->unitSale->operator_value;
                $price = $product_price / $product->unitSale->operator_value;
            } else {
                $item['qte_sale'] = $product_warehouse->qte / $product->unitSale->operator_value;
                $price = $product_price * $product->unitSale->operator_value;
            }
        } else {
            $item['qte_sale'] = $product->type != 'is_service' ? $product_warehouse->qte : '---';
            $price = $product_price;
        }
        $item['unitSale'] = $product->unitSale ? $product->unitSale->ShortName : '';
        $item['sale_unit_id'] = $product->unitSale ? $product->unitSale->id : null;
        $item['qte'] = $product->type != 'is_service' ? $product_warehouse->qte : '---';
        $item['Unit_price'] = $price;
        $item['fix_price'] = $product_price;
        $item['is_jewelry_item'] = (bool)($product->is_jewelry_item ?? false);
        $item['jewelry_pricing_breakdown'] = $pricingBreakdown;
        if ($item['is_jewelry_item']) {
            $item['metal_type'] = optional($product->metalType)->name ?? '';
            $item['karat'] = optional($product->karat)->name ?? '';
            $item['jewelry_gross_weight'] = $product->jewelry_gross_weight !== null ? (float)$product->jewelry_gross_weight : null;
            $item['jewelry_weight_uom'] = $product->jewelry_weight_uom ?: 'g';
        }
        // Return matched serial number so POS can select it automatically
        $item['scanned_serial_number'] = $serial->serial_number;
        return response()->json([
            'success' => true,
            'product' => $item
        ]);
    }
    /**
     * MVP Action: Perform physical cycle count reconciliation scan for a warehouse.
     */
    public function reconcile(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', RfidTag::class);
        $request->validate([
            'warehouse_id' => 'required|integer',
            'epcs' => 'required|array',
        ]);
        $warehouseId = $request->input('warehouse_id');
        $scannedEpcs = array_unique(array_filter(array_map('trim', $request->input('epcs'))));
        // 1. Get all expected available serials at this warehouse
        $expectedSerials = ProductSerial::where('warehouse_id', $warehouseId)
            ->where('status', ProductSerial::STATUS_AVAILABLE)
            ->get();
        $expectedSerialIds = $expectedSerials->pluck('id')->all();
        // 2. Fetch all active RFID tags linked to expected serials
        $expectedTags = RfidTag::whereIn('product_serial_id', $expectedSerialIds)
            ->where('status', 'active')
            ->get();
        $expectedEpcs = $expectedTags->pluck('epc_number')->all();
        $expectedTagMap = $expectedTags->keyBy('epc_number');
        // Scanned EPCs lookup
        $scannedTags = RfidTag::whereIn('epc_number', $scannedEpcs)
            ->where('status', 'active')
            ->get();
        $scannedTagMap = $scannedTags->keyBy('epc_number');
        $found = [];
        $missing = [];
        $unexpected = [];
        $unknown = [];
        // Determine Found and Unexpected / Unknown
        foreach ($scannedEpcs as $epc) {
            if (in_array($epc, $expectedEpcs, true)) {
                $tag = $expectedTagMap[$epc];
                $serial = $expectedSerials->firstWhere('id', $tag->product_serial_id);
                $found[] = $this->formatReconcileItem($serial, $tag, $epc);
            } else {
                // Not expected at this warehouse/status
                $tag = $scannedTagMap->get($epc);
                if ($tag) {
                    $serial = ProductSerial::find($tag->product_serial_id);
                    if ($serial) {
                        $unexpected[] = $this->formatReconcileItem($serial, $tag, $epc, "Located in warehouse ID {$serial->warehouse_id} (Status: {$serial->status})");
                    } else {
                        $unexpected[] = [
                            'epc' => $epc,
                            'status' => 'unassigned',
                            'error' => 'Tag exists but serial not found.'
                        ];
                    }
                } else {
                    $unknown[] = [
                        'epc' => $epc,
                        'status' => 'unknown',
                        'error' => 'Unknown EPC code'
                    ];
                }
            }
        }
        // Determine Missing (Expected but not scanned)
        foreach ($expectedTags as $tag) {
            if (!in_array($tag->epc_number, $scannedEpcs, true)) {
                $serial = $expectedSerials->firstWhere('id', $tag->product_serial_id);
                $missing[] = $this->formatReconcileItem($serial, $tag, $tag->epc_number);
            }
        }
        return response()->json([
            'success' => true,
            'summary' => [
                'total_expected' => count($expectedEpcs),
                'total_scanned' => count($scannedEpcs),
                'found_count' => count($found),
                'missing_count' => count($missing),
                'unexpected_count' => count($unexpected),
                'unknown_count' => count($unknown),
            ],
            'found' => $found,
            'missing' => $missing,
            'unexpected' => $unexpected,
            'unknown' => $unknown,
        ]);
    }
    private function formatReconcileItem($serial, $tag, $epc, $error = null)
    {
        $product = $serial ? $serial->product : null;
        return [
            'epc' => $epc,
            'serial_number' => $serial ? $serial->serial_number : 'N/A',
            'product_name' => $product ? $product->name : 'N/A',
            'karat' => $product ? (optional($product->karat)->name ?? '') : '',
            'gross_weight' => $product ? (float)$product->jewelry_gross_weight : 0.0,
            'error' => $error
        ];
    }
}
