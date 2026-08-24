<?php

namespace App\Http\Controllers\Api\Store;

use App\Http\Controllers\BaseController;
use App\Models\CustomOrderRequest;
use App\Models\Karat;
use App\Models\MetalType;
use App\Models\ProductTemplate;
use App\Models\Quotation;
use App\Models\User;
use App\Models\Warehouse;
use App\Services\Jewelry\JewelryPricingService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * PI-7 gap: customer portal custom-order builder. A logged-in storefront
 * customer (auth:store — same guard as checkout, see routes/tenant_web.php)
 * configures a piece, gets a live estimate, and submits it as a Quotation
 * for staff to review — reusing JewelryPricingService::previewDraft(), the
 * same pricing engine the admin product form uses, so a custom-order quote
 * and a catalog product's price are computed identically.
 */
class CustomOrderController extends BaseController
{
    public function __construct(protected JewelryPricingService $pricingService)
    {
    }

    /**
     * GET /online_store/api/custom-order/options
     * Everything the builder form needs to populate its selects.
     */
    public function options()
    {
        return $this->sendResponse([
            'metal_types' => MetalType::where('is_active', true)->orderBy('name')->get(['id', 'name', 'code']),
            'karats' => Karat::where('is_active', true)->orderBy('name')->get(['id', 'metal_type_id', 'name', 'purity_percentage']),
            'product_templates' => ProductTemplate::where('is_active', true)
                ->orderBy('template_name')
                ->get(['id', 'template_name', 'default_karat_id', 'default_metal_type_id', 'default_making_charge']),
        ], 'Custom order options retrieved successfully.');
    }

    /**
     * POST /online_store/api/custom-order/quote
     * Stateless estimate — no DB write. Same request shape as submit().
     */
    public function quote(Request $request)
    {
        $data = $this->validatePayload($request);
        $breakdown = $this->pricingService->previewDraft($this->toDraftPayload($data), null);

        return $this->sendResponse($breakdown, 'Estimate calculated.');
    }

    /**
     * POST /online_store/api/custom-order/submit
     * Persists the request and creates a Quotation for staff to review,
     * following the exact same Ref-generation / system-user-fallback pattern
     * PortalQuotationsController::store() uses for portal-originated quotes.
     */
    public function submit(Request $request)
    {
        $data = $this->validatePayload($request);
        $user = Auth::guard('store')->user();
        $clientId = $user->client_id ?? null;

        if (! $clientId) {
            return $this->sendError('You must be logged in to submit a custom order.');
        }

        $breakdown = $this->pricingService->previewDraft($this->toDraftPayload($data), null);
        $estimatedPrice = (float) ($breakdown['selling_price'] ?? 0);

        $designPath = null;
        if ($request->hasFile('design_file')) {
            $file = $request->file('design_file');
            $filename = uniqid('custom_order_') . '.' . $file->getClientOriginalExtension();
            $file->move(upload_public_path('custom_orders'), $filename);
            $designPath = upload_path('custom_orders') . '/' . $filename;
        }

        $systemUserId = User::whereNull('deleted_at')->orderBy('id')->value('id');
        if (! $systemUserId) {
            return $this->sendError('No staff user available to receive the custom order.');
        }

        $result = DB::transaction(function () use ($data, $clientId, $estimatedPrice, $designPath, $systemUserId, $breakdown) {
            $defaultWarehouseId = optional(Warehouse::whereNull('deleted_at')->orderBy('id')->first())->id;

            $year = date('Y');
            $prefix = "CO_REQ_{$year}_";
            $lastRef = Quotation::where('Ref', 'LIKE', $prefix . '%')->orderByDesc('id')->value('Ref');
            $next = $lastRef ? ((int) substr($lastRef, strlen($prefix))) + 1 : 1;
            $ref = sprintf('CO_REQ_%s_%05d', $year, $next);

            $quotation = Quotation::create([
                'date' => now()->toDateString(),
                'Ref' => $ref,
                'client_id' => $clientId,
                'warehouse_id' => $defaultWarehouseId,
                'user_id' => $systemUserId,
                'GrandTotal' => $estimatedPrice,
                'discount' => 0,
                'shipping' => 0,
                'TaxNet' => 0,
                'tax_rate' => 0,
                'statut' => 'pending',
                'notes' => 'Custom order request submitted via storefront builder. Estimate: ' . $estimatedPrice,
            ]);

            $customOrder = CustomOrderRequest::create([
                'client_id' => $clientId,
                'quotation_id' => $quotation->id,
                'product_template_id' => $data['product_template_id'] ?? null,
                'metal_type_id' => $data['metal_type_id'],
                'karat_id' => $data['karat_id'],
                'target_weight' => $data['target_weight'] ?? null,
                'stone_config' => $data['stones'] ?? [],
                'design_file_path' => null, // set below outside the closure, then re-saved
                'estimated_price' => $estimatedPrice,
                'status' => 'quoted',
                'notes' => $data['notes'] ?? null,
            ]);

            return [$quotation, $customOrder];
        });

        [$quotation, $customOrder] = $result;

        if ($designPath) {
            $customOrder->update(['design_file_path' => $designPath]);
        }

        return $this->sendResponse([
            'custom_order_request' => $customOrder,
            'quotation_ref' => $quotation->Ref,
            'estimate' => $breakdown,
        ], 'Custom order submitted successfully. Our team will follow up with a final quote.');
    }

    protected function validatePayload(Request $request): array
    {
        return $request->validate([
            'product_template_id' => 'nullable|integer|exists:product_templates,id',
            'metal_type_id' => 'required|integer|exists:metal_types,id',
            'karat_id' => 'required|integer|exists:karats,id',
            'target_weight' => 'nullable|numeric|min:0.01',
            'making_charge_type' => 'nullable|string',
            'making_charge_value' => 'nullable|numeric',
            'stones' => 'nullable|array',
            'stones.*.type' => 'nullable|string',
            'stones.*.quantity' => 'nullable|numeric|min:0',
            'stones.*.unit_cost_amount' => 'nullable|numeric|min:0',
            'notes' => 'nullable|string|max:2000',
        ]);
    }

    protected function toDraftPayload(array $data): array
    {
        return [
            'is_jewelry_item' => true,
            'metal_type_id' => $data['metal_type_id'],
            'karat_id' => $data['karat_id'],
            'jewelry_gross_weight' => $data['target_weight'] ?? null,
            'jewelry_net_weight' => $data['target_weight'] ?? null,
            'jewelry_metal_weight' => $data['target_weight'] ?? null,
            'making_charge_type' => $data['making_charge_type'] ?? 'fixed',
            'making_charge_value' => $data['making_charge_value'] ?? 0,
            'item_stones' => $data['stones'] ?? [],
        ];
    }
}
