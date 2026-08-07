<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;

class JewelryBusinessExtendedSeeder extends Seeder
{
    private const USER_ID = 1;
    private const PRIMARY_WAREHOUSE_ID = 1;
    private const DEMO_PASSWORD_HASH = '$2y$10$H9cpjLMNlUv5ewJKv4ihiOUiMqvEf.MwAlGndSGtcVMgS9MH14y0a';

    public function run(): void
    {
        if (! DB::table('products')->where('code', 'JWL-RNG-001')->exists()) {
            $this->call(JewelryDemoDataSeeder::class);
        }

        if (! DB::table('quotations')->where('Ref', 'QT-JWL-0001')->exists()) {
            $this->call(JewelryBusinessOperationalSeeder::class);
        }

        $now = Carbon::now();

        DB::transaction(function () use ($now) {
            $context = $this->buildContext($now);

            $this->enrichCoreRecords($context, $now);
            $warehouse = $this->seedSecondaryWarehouse($context, $now);
            $this->seedUserWarehouseAssignments($warehouse, $now);
            $this->seedCatalogCompleteness($context, $now);
            $batchMap = $this->seedBatchAndTransferData($context, $warehouse, $now);
            $this->seedAssetAndHrData($context, $now);
            $commission = $this->seedCommissionData($context, $now);
            $project = $this->seedProjectAndContractData($context, $now);
            $this->seedBookings($context, $now);
            $this->seedServiceDeskData($context, $now);
            $this->seedCommerceAndPortalData($context, $warehouse, $now);
            $this->seedKnowledgeMeetingAndMarketingData($context, $project, $now);
            $this->seedPropertyAndRecruitmentData($context, $now);
            $this->seedCommunicationAndIntegrationData($context, $commission, $now);
            $this->seedTaxAndAuditData($context, $batchMap, $now);
            $this->seedKitchenAndShipmentSupport($context, $now);
        });
    }

    private function buildContext(Carbon $now): array
    {
        $products = DB::table('products')
            ->select('id', 'code', 'name', 'price', 'cost', 'image', 'category_id', 'unit_id', 'unit_sale_id', 'unit_purchase_id', 'jewelry_item_type')
            ->whereNull('deleted_at')
            ->get()
            ->keyBy('code');

        $clients = DB::table('clients')
            ->select('id', 'name', 'email', 'phone', 'country', 'city', 'state', 'zip', 'adresse', 'opening_balance')
            ->whereNull('deleted_at')
            ->get()
            ->keyBy('name');

        $providers = DB::table('providers')
            ->select('id', 'name', 'email', 'phone', 'country', 'city', 'adresse', 'opening_balance')
            ->whereNull('deleted_at')
            ->get()
            ->keyBy('name');

        $employees = DB::table('employees')
            ->select('id', 'username', 'firstname', 'lastname', 'company_id', 'department_id', 'designation_id')
            ->whereNull('deleted_at')
            ->get()
            ->keyBy('username');

        $categories = DB::table('categories')->select('id', 'code', 'name')->whereNull('deleted_at')->get()->keyBy('code');
        $propertyCategories = DB::table('property_categories')->select('id', 'slug', 'name')->whereNull('deleted_at')->get()->keyBy('slug');
        $warehouseLocations = Schema::hasTable('warehouse_locations')
            ? DB::table('warehouse_locations')->select('id', 'warehouse_id', 'code', 'name')->whereNull('deleted_at')->get()->groupBy('warehouse_id')
            : collect();

        $purchaseDetails = DB::table('purchase_details as pd')
            ->join('products as pr', 'pr.id', '=', 'pd.product_id')
            ->join('purchases as pu', 'pu.id', '=', 'pd.purchase_id')
            ->select(
                'pd.id',
                'pd.purchase_id',
                'pd.product_id',
                'pd.quantity',
                'pd.cost',
                'pu.Ref as purchase_ref',
                'pu.provider_id',
                'pu.date as purchase_date',
                'pr.code as sku'
            )
            ->orderBy('pd.id')
            ->get()
            ->groupBy('sku');

        $saleDetails = DB::table('sale_details as sd')
            ->join('products as pr', 'pr.id', '=', 'sd.product_id')
            ->join('sales as sa', 'sa.id', '=', 'sd.sale_id')
            ->select(
                'sd.id',
                'sd.sale_id',
                'sd.product_id',
                'sd.quantity',
                'sd.price',
                'sa.Ref as sale_ref',
                'sa.client_id',
                'sa.date as sale_date',
                'pr.code as sku'
            )
            ->orderBy('sd.id')
            ->get()
            ->groupBy('sku');

        $quotationDetails = DB::table('quotation_details as qd')
            ->join('products as pr', 'pr.id', '=', 'qd.product_id')
            ->join('quotations as q', 'q.id', '=', 'qd.quotation_id')
            ->select('qd.id', 'qd.quotation_id', 'qd.product_id', 'qd.quantity', 'qd.price', 'q.Ref as quotation_ref', 'pr.code as sku')
            ->orderBy('qd.id')
            ->get()
            ->groupBy('sku');

        $adjustmentDetails = DB::table('adjustment_details as ad')
            ->join('adjustments as a', 'a.id', '=', 'ad.adjustment_id')
            ->join('products as pr', 'pr.id', '=', 'ad.product_id')
            ->select('ad.id', 'ad.adjustment_id', 'ad.product_id', 'ad.quantity', 'ad.type', 'a.Ref as adjustment_ref', 'pr.code as sku')
            ->orderBy('ad.id')
            ->get()
            ->groupBy('sku');

        $damageDetails = DB::table('damage_details as dd')
            ->join('damages as d', 'd.id', '=', 'dd.damage_id')
            ->join('products as pr', 'pr.id', '=', 'dd.product_id')
            ->select('dd.id', 'dd.damage_id', 'dd.product_id', 'dd.quantity', 'd.Ref as damage_ref', 'pr.code as sku')
            ->orderBy('dd.id')
            ->get()
            ->groupBy('sku');

        $purchaseReturnDetails = DB::table('purchase_return_details as prd')
            ->join('purchase_returns as pr', 'pr.id', '=', 'prd.purchase_return_id')
            ->join('products as p', 'p.id', '=', 'prd.product_id')
            ->select('prd.id', 'prd.purchase_return_id', 'prd.product_id', 'prd.quantity', 'prd.cost', 'pr.Ref as purchase_return_ref', 'p.code as sku')
            ->orderBy('prd.id')
            ->get()
            ->groupBy('sku');

        $saleReturnDetails = DB::table('sale_return_details as srd')
            ->join('sale_returns as sr', 'sr.id', '=', 'srd.sale_return_id')
            ->join('products as p', 'p.id', '=', 'srd.product_id')
            ->select('srd.id', 'srd.sale_return_id', 'srd.product_id', 'srd.quantity', 'srd.price', 'sr.Ref as sale_return_ref', 'p.code as sku')
            ->orderBy('srd.id')
            ->get()
            ->groupBy('sku');

        $paymentSales = DB::table('payment_sales as ps')
            ->join('sales as s', 's.id', '=', 'ps.sale_id')
            ->select('ps.id', 'ps.Ref as payment_ref', 'ps.sale_id', 'ps.payment_method_id', 'ps.montant', 's.Ref as sale_ref', 's.client_id')
            ->get()
            ->keyBy('sale_ref');

        return [
            'now' => $now,
            'company_id' => (int) (Schema::hasTable('companies') ? DB::table('companies')->orderBy('id')->value('id') : 0),
            'payment_method_cash' => (int) (DB::table('payment_methods')->where('name', 'Cash')->value('id') ?? 2),
            'payment_method_card' => (int) (DB::table('payment_methods')->where('name', 'Credit Card')->value('id') ?? 1),
            'payment_method_bank' => (int) (DB::table('payment_methods')->where('name', 'bank transfer')->value('id') ?? 6),
            'products' => $products,
            'clients' => $clients,
            'providers' => $providers,
            'employees' => $employees,
            'categories' => $categories,
            'property_categories' => $propertyCategories,
            'warehouse_locations' => $warehouseLocations,
            'purchase_details_by_sku' => $purchaseDetails,
            'sale_details_by_sku' => $saleDetails,
            'quotation_details_by_sku' => $quotationDetails,
            'adjustment_details_by_sku' => $adjustmentDetails,
            'damage_details_by_sku' => $damageDetails,
            'purchase_return_details_by_sku' => $purchaseReturnDetails,
            'sale_return_details_by_sku' => $saleReturnDetails,
            'payment_sales' => $paymentSales,
            'primary_image' => optional($products->firstWhere('image', '!=', 'no-image.png'))->image,
            'primary_account_id' => (int) (DB::table('accounts')->where('account_num', 'ACC-CASH-001')->value('id') ?? 1),
            'bank_account_id' => (int) (DB::table('accounts')->where('account_num', 'ACC-BANK-001')->value('id') ?? 2),
        ];
    }

    private function enrichCoreRecords(array $context, Carbon $now): void
    {
        if (Schema::hasTable('companies') && $context['company_id']) {
            DB::table('companies')->where('id', $context['company_id'])->update([
                'email' => 'atelier@jewelrycenter.test',
                'phone' => '+1-212-555-0101',
                'country' => 'United States',
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('warehouses')) {
            DB::table('warehouses')->where('id', self::PRIMARY_WAREHOUSE_ID)->update([
                'city' => 'New York City',
                'mobile' => '+1-212-555-0401',
                'zip' => '10001',
                'email' => 'showroom@jewelrycenter.test',
                'country' => 'United States',
                'updated_at' => $now,
            ]);
        }

        $clientUpdates = [
            'Isabella Moreau' => ['country' => 'United States', 'city' => 'New York City', 'state' => 'New York', 'zip' => '10019', 'adresse' => '18 W 57th St, New York, NY 10019'],
            'Julian Whitfield' => ['country' => 'United States', 'city' => 'Brooklyn', 'state' => 'New York', 'zip' => '11217', 'adresse' => '232 Atlantic Ave, Brooklyn, NY 11217'],
            'Amara Osei' => ['country' => 'United States', 'city' => 'Queens', 'state' => 'New York', 'zip' => '11101', 'adresse' => '47 Jackson Ave, Long Island City, NY 11101'],
            'Rohan Malhotra' => ['country' => 'United States', 'city' => 'Jersey City', 'state' => 'New Jersey', 'zip' => '07302', 'adresse' => '90 Hudson St, Jersey City, NJ 07302'],
        ];

        foreach ($clientUpdates as $name => $values) {
            $clientId = $context['clients'][$name]->id ?? null;
            if ($clientId) {
                DB::table('clients')->where('id', $clientId)->update(array_merge($values, ['updated_at' => $now]));
            }
        }

        $providerUpdates = [
            'Continental Bullion & Gems' => ['country' => 'United States', 'city' => 'New York City', 'adresse' => '55 W 47th St, New York, NY 10036', 'tax_number' => 'US-CBG-2211', 'credit_limit' => 50000],
            'Anaya Gemstone Traders' => ['country' => 'India', 'city' => 'Jaipur', 'adresse' => 'MI Road, Jaipur 302001', 'tax_number' => 'IN-AGT-8711', 'credit_limit' => 42000],
            'Precision Casting Works' => ['country' => 'United States', 'city' => 'Newark', 'adresse' => '12 Foundry Ave, Newark, NJ 07102', 'tax_number' => 'US-PCW-5512', 'credit_limit' => 18000],
        ];

        foreach ($providerUpdates as $name => $values) {
            $providerId = $context['providers'][$name]->id ?? null;
            if ($providerId) {
                DB::table('providers')->where('id', $providerId)->update(array_merge($values, ['updated_at' => $now]));
            }
        }
    }

    private function seedSecondaryWarehouse(array $context, Carbon $now): array
    {
        $warehouseId = $this->firstOrInsertId('warehouses', ['name' => 'Private Viewing Vault'], [
            'city' => 'New York City',
            'mobile' => '+1-212-555-0402',
            'zip' => '10002',
            'email' => 'vault@jewelrycenter.test',
            'country' => 'United States',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $receivingLocationId = null;
        $stagingLocationId = null;
        if (Schema::hasTable('warehouse_locations')) {
            $receivingLocationId = $this->firstOrInsertId('warehouse_locations', ['code' => 'PVV-R1'], [
                'warehouse_id' => $warehouseId,
                'name' => 'Private Viewing Receiving Bay',
                'is_active' => true,
                'is_restricted' => false,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $stagingLocationId = $this->firstOrInsertId('warehouse_locations', ['code' => 'PVV-S1'], [
                'warehouse_id' => $warehouseId,
                'name' => 'Appointment Staging Locker',
                'is_active' => true,
                'is_restricted' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        return [
            'id' => $warehouseId,
            'receiving_location_id' => $receivingLocationId,
            'staging_location_id' => $stagingLocationId,
        ];
    }

    private function seedUserWarehouseAssignments(array $warehouse, Carbon $now): void
    {
        if (! Schema::hasTable('user_warehouse')) {
            return;
        }

        $this->ensureExists('user_warehouse', ['user_id' => self::USER_ID, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID]);
        $this->ensureExists('user_warehouse', ['user_id' => self::USER_ID, 'warehouse_id' => $warehouse['id']]);

        DB::table('users')->where('id', self::USER_ID)->update([
            'is_all_warehouses' => 0,
            'updated_at' => $now,
        ]);
    }

    private function seedCatalogCompleteness(array $context, Carbon $now): void
    {
        if (Schema::hasTable('category_product')) {
            foreach ($context['products'] as $product) {
                if ($product->category_id) {
                    $this->firstOrInsertId('category_product', [
                        'product_id' => $product->id,
                        'category_id' => $product->category_id,
                    ], [
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        if (Schema::hasTable('combined_products')) {
            $definitions = [
                'JWL-SET-001' => [
                    ['sku' => 'JWL-RNG-001', 'qty' => 1],
                    ['sku' => 'JWL-NCK-001', 'qty' => 1],
                    ['sku' => 'JWL-ERR-001', 'qty' => 1],
                ],
                'JWL-SET-002' => [
                    ['sku' => 'JWL-RNG-004', 'qty' => 1],
                    ['sku' => 'JWL-NCK-003', 'qty' => 1],
                    ['sku' => 'JWL-BRC-002', 'qty' => 1],
                ],
            ];

            foreach ($definitions as $bundleSku => $items) {
                $bundle = $context['products'][$bundleSku] ?? null;
                if (! $bundle) {
                    continue;
                }

                foreach ($items as $item) {
                    $part = $context['products'][$item['sku']] ?? null;
                    if (! $part) {
                        continue;
                    }

                    $this->firstOrInsertId('combined_products', [
                        'product_id' => $bundle->id,
                        'combined_product_id' => $part->id,
                    ], [
                        'quantity' => $item['qty'],
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        if (Schema::hasTable('product_variants')) {
            $variants = [
                ['sku' => 'JWL-RNG-002', 'name' => 'Ring Size 6', 'code' => 'JWL-RNG-002-S6', 'price' => 539.35, 'cost' => 382.04, 'qty' => 6],
                ['sku' => 'JWL-RNG-002', 'name' => 'Ring Size 7', 'code' => 'JWL-RNG-002-S7', 'price' => 549.35, 'cost' => 388.04, 'qty' => 8],
                ['sku' => 'JWL-CHN-003', 'name' => '16 Inch', 'code' => 'JWL-CHN-003-16', 'price' => 12.49, 'cost' => 8.85, 'qty' => 9],
                ['sku' => 'JWL-CHN-003', 'name' => '18 Inch', 'code' => 'JWL-CHN-003-18', 'price' => 14.99, 'cost' => 9.95, 'qty' => 11],
            ];

            foreach ($variants as $variant) {
                $product = $context['products'][$variant['sku']] ?? null;
                if (! $product) {
                    continue;
                }

                $this->firstOrInsertId('product_variants', ['code' => $variant['code']], [
                    'product_id' => $product->id,
                    'name' => $variant['name'],
                    'cost' => $variant['cost'],
                    'price' => $variant['price'],
                    'wholesale' => $variant['price'] * 0.95,
                    'min_price' => $variant['cost'] * 1.10,
                    'gtin' => null,
                    'image' => $product->image ?: 'no-image.png',
                    'qty' => $variant['qty'],
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }

    private function seedBatchAndTransferData(array $context, array $warehouse, Carbon $now): array
    {
        $batchMap = [];

        if (! Schema::hasTable('product_batches')) {
            return $batchMap;
        }

        $batchDefinitions = [
            'JWL-RNG-001' => ['batch' => 'BAT-RNG-001-A', 'qty' => 5, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-RNG-004' => ['batch' => 'BAT-RNG-004-A', 'qty' => 5, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-BRC-002' => ['batch' => 'BAT-BRC-002-A', 'qty' => 8, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-BRC-003' => ['batch' => 'BAT-BRC-003-A', 'qty' => 14, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-ERR-003' => ['batch' => 'BAT-ERR-003-A', 'qty' => 12, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-CHN-002' => ['batch' => 'BAT-CHN-002-A', 'qty' => 12, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-CHN-003' => ['batch' => 'BAT-CHN-003-A', 'qty' => 20, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-PND-002' => ['batch' => 'BAT-PND-002-A', 'qty' => 6, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-PND-003' => ['batch' => 'BAT-PND-003-A', 'qty' => 7, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-BUL-001' => ['batch' => 'BAT-BUL-001-A', 'qty' => 9, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-BUL-002' => ['batch' => 'BAT-BUL-002-A', 'qty' => 17, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-BUL-003' => ['batch' => 'BAT-BUL-003-A', 'qty' => 15, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-LSE-001' => ['batch' => 'BAT-LSE-001-A', 'qty' => 5, 'warehouse_id' => self::PRIMARY_WAREHOUSE_ID],
            'JWL-CHN-003-TRANSFER' => ['sku' => 'JWL-CHN-003', 'batch' => 'BAT-CHN-003-PVV', 'qty' => 2, 'warehouse_id' => $warehouse['id']],
        ];

        foreach ($batchDefinitions as $key => $definition) {
            $sku = $definition['sku'] ?? $key;
            $product = $context['products'][$sku] ?? null;
            $purchase = optional(collect($context['purchase_details_by_sku'][$sku] ?? [])->first());
            if (! $product || ! $purchase->id) {
                continue;
            }

            $batchId = $this->firstOrInsertId('product_batches', ['batch_no' => $definition['batch']], [
                'product_id' => $product->id,
                'product_variant_id' => null,
                'warehouse_id' => $definition['warehouse_id'],
                'expiry_date' => null,
                'mfg_date' => Carbon::parse($purchase->purchase_date)->subDays(7)->toDateString(),
                'qty' => $definition['qty'],
                'unit_cost' => $purchase->cost,
                'provider_id' => $purchase->provider_id,
                'source_purchase_id' => $purchase->purchase_id,
                'status' => 'active',
                'barcode' => $definition['batch'],
                'notes' => $definition['warehouse_id'] === self::PRIMARY_WAREHOUSE_ID
                    ? 'Primary received lot for jewelry demo inventory.'
                    : 'Transferred reserve stock held for private appointment viewings.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $batchMap[$key] = $batchId;

            if ($definition['warehouse_id'] !== self::PRIMARY_WAREHOUSE_ID) {
                $this->ensureProductWarehouseQuantity($product->id, $definition['warehouse_id'], $definition['qty']);
            }
        }

        if (Schema::hasTable('purchase_detail_batches')) {
            foreach (['JWL-RNG-001','JWL-RNG-004','JWL-BRC-002','JWL-BRC-003','JWL-ERR-003','JWL-CHN-002','JWL-CHN-003','JWL-PND-002','JWL-PND-003','JWL-BUL-001','JWL-BUL-002','JWL-BUL-003','JWL-LSE-001'] as $sku) {
                $detail = optional(collect($context['purchase_details_by_sku'][$sku] ?? [])->first());
                $batchId = $batchMap[$sku] ?? null;
                if (! $detail->id || ! $batchId) {
                    continue;
                }

                $this->firstOrInsertId('purchase_detail_batches', [
                    'purchase_detail_id' => $detail->id,
                    'product_batch_id' => $batchId,
                ], [
                    'qty' => $detail->quantity,
                    'unit_cost' => $detail->cost,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('sale_detail_batches')) {
            foreach (['JWL-RNG-001','JWL-ERR-003','JWL-CHN-002','JWL-BRC-002','JWL-PND-003','JWL-BUL-001','JWL-BUL-002'] as $sku) {
                foreach (collect($context['sale_details_by_sku'][$sku] ?? []) as $detail) {
                    $batchId = $batchMap[$sku] ?? null;
                    if (! $batchId) {
                        continue;
                    }
                    $this->firstOrInsertId('sale_detail_batches', [
                        'sale_detail_id' => $detail->id,
                        'product_batch_id' => $batchId,
                    ], [
                        'qty' => $detail->quantity,
                        'unit_price' => $detail->price,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        if (Schema::hasTable('quotation_detail_batches')) {
            foreach (['JWL-RNG-004','JWL-PND-002'] as $sku) {
                foreach (collect($context['quotation_details_by_sku'][$sku] ?? []) as $detail) {
                    $batchId = $batchMap[$sku] ?? null;
                    if (! $batchId) {
                        continue;
                    }
                    $this->firstOrInsertId('quotation_detail_batches', [
                        'quotation_detail_id' => $detail->id,
                        'product_batch_id' => $batchId,
                    ], [
                        'qty' => $detail->quantity,
                        'unit_cost' => $context['products'][$sku]->cost ?? 0,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        if (Schema::hasTable('purchase_return_detail_batches')) {
            $detail = optional(collect($context['purchase_return_details_by_sku']['JWL-BUL-002'] ?? [])->first());
            if ($detail->id && ! empty($batchMap['JWL-BUL-002'])) {
                $this->firstOrInsertId('purchase_return_detail_batches', [
                    'purchase_return_detail_id' => $detail->id,
                    'product_batch_id' => $batchMap['JWL-BUL-002'],
                ], [
                    'qty' => $detail->quantity,
                    'unit_cost' => $detail->cost,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('sale_return_detail_batches')) {
            $detail = optional(collect($context['sale_return_details_by_sku']['JWL-ERR-003'] ?? [])->first());
            if ($detail->id && ! empty($batchMap['JWL-ERR-003'])) {
                $this->firstOrInsertId('sale_return_detail_batches', [
                    'sale_return_detail_id' => $detail->id,
                    'product_batch_id' => $batchMap['JWL-ERR-003'],
                ], [
                    'qty' => $detail->quantity,
                    'unit_price' => $detail->price,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('adjustment_detail_batches')) {
            $chained = optional(collect($context['adjustment_details_by_sku']['JWL-CHN-003'] ?? [])->first());
            if ($chained->id && ! empty($batchMap['JWL-CHN-003'])) {
                $this->firstOrInsertId('adjustment_detail_batches', [
                    'adjustment_detail_id' => $chained->id,
                    'product_batch_id' => $batchMap['JWL-CHN-003'],
                ], [
                    'direction' => 'in',
                    'qty' => $chained->quantity,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            $bracelet = optional(collect($context['adjustment_details_by_sku']['JWL-BRC-003'] ?? [])->first());
            if ($bracelet->id && ! empty($batchMap['JWL-BRC-003'])) {
                $this->firstOrInsertId('adjustment_detail_batches', [
                    'adjustment_detail_id' => $bracelet->id,
                    'product_batch_id' => $batchMap['JWL-BRC-003'],
                ], [
                    'direction' => 'out',
                    'qty' => $bracelet->quantity,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('damage_detail_batches')) {
            $detail = optional(collect($context['damage_details_by_sku']['JWL-PND-003'] ?? [])->first());
            if ($detail->id && ! empty($batchMap['JWL-PND-003'])) {
                $this->firstOrInsertId('damage_detail_batches', [
                    'damage_detail_id' => $detail->id,
                    'product_batch_id' => $batchMap['JWL-PND-003'],
                ], [
                    'qty' => $detail->quantity,
                    'unit_cost' => $context['products']['JWL-PND-003']->cost ?? 0,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('transfers') && Schema::hasTable('transfer_details')) {
            $sourceProduct = $context['products']['JWL-CHN-003'] ?? null;
            if ($sourceProduct) {
                $transferId = $this->firstOrInsertId('transfers', ['Ref' => 'TRF-JWL-0001'], [
                    'user_id' => self::USER_ID,
                    'date' => $now->copy()->subDays(2)->toDateString(),
                    'time' => '10:30:00',
                    'from_warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                    'from_warehouse_location_id' => Schema::hasTable('warehouse_locations') ? DB::table('warehouse_locations')->where('code', 'BACK-C1')->value('id') : null,
                    'to_warehouse_id' => $warehouse['id'],
                    'to_warehouse_location_id' => $warehouse['staging_location_id'],
                    'items' => 1,
                    'tax_rate' => 0,
                    'TaxNet' => 0,
                    'discount' => 0,
                    'shipping' => 0,
                    'GrandTotal' => round((float) $sourceProduct->cost * 2, 2),
                    'statut' => 'completed',
                    'approval_status' => 'approved',
                    'notes' => 'Move reserve chains to the private viewing vault for client appointment staging.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                $transferDetailId = $this->firstOrInsertId('transfer_details', [
                    'transfer_id' => $transferId,
                    'product_id' => $sourceProduct->id,
                ], [
                    'product_variant_id' => null,
                    'cost' => $sourceProduct->cost,
                    'purchase_unit_id' => $sourceProduct->unit_purchase_id ?: $sourceProduct->unit_id,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'discount' => 0,
                    'discount_method' => '1',
                    'quantity' => 2,
                    'total' => round((float) $sourceProduct->cost * 2, 2),
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                $this->ensureProductWarehouseQuantity($sourceProduct->id, $warehouse['id'], 2);

                if (Schema::hasTable('transfer_detail_batches') && ! empty($batchMap['JWL-CHN-003']) && ! empty($batchMap['JWL-CHN-003-TRANSFER'])) {
                    $this->firstOrInsertId('transfer_detail_batches', [
                        'transfer_detail_id' => $transferDetailId,
                        'source_batch_id' => $batchMap['JWL-CHN-003'],
                    ], [
                        'dest_batch_id' => $batchMap['JWL-CHN-003-TRANSFER'],
                        'qty' => 2,
                        'unit_cost' => $sourceProduct->cost,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        if (Schema::hasTable('transfer_money')) {
            $this->firstOrInsertId('transfer_money', [
                'from_account_id' => $context['bank_account_id'],
                'to_account_id' => $context['primary_account_id'],
                'date' => $now->copy()->subDays(1)->toDateString(),
            ], [
                'amount' => 1200.00,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        return $batchMap;
    }

    private function seedAssetAndHrData(array $context, Carbon $now): void
    {
        $employeeManager = $context['employees']['chloe.bennett']->id ?? null;
        $employeeInventory = $context['employees']['omar.haddad']->id ?? null;

        if (Schema::hasTable('asset_categories')) {
            $equipmentCategory = $this->firstOrInsertId('asset_categories', ['name' => 'Showroom Equipment'], [
                'description' => 'Bench tools, premium display hardware, and customer-facing appointment equipment.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $securityCategory = $this->firstOrInsertId('asset_categories', ['name' => 'Security & Vault'], [
                'description' => 'Safes, CCTV, and access control hardware securing fine jewelry inventory.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            if (Schema::hasTable('assets')) {
                $this->firstOrInsertId('assets', ['tag' => 'AST-JWL-0001'], [
                    'name' => 'Ultrasonic Jewelry Cleaner',
                    'asset_category_id' => $equipmentCategory,
                    'serial_number' => 'UC-2026-00018',
                    'description' => 'Daily polishing and cleaning station used before showroom presentation.',
                    'purchase_date' => $now->copy()->subMonths(8)->toDateString(),
                    'purchase_cost' => 1180.00,
                    'status' => 'in_use',
                    'warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                    'assigned_to_id' => $employeeInventory,
                    'last_verification' => $now->copy()->subDays(14)->toDateString(),
                    'next_validation' => $now->copy()->addMonths(6)->toDateString(),
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                $this->firstOrInsertId('assets', ['tag' => 'AST-JWL-0002'], [
                    'name' => 'Vault Access Controller',
                    'asset_category_id' => $securityCategory,
                    'serial_number' => 'VAC-2026-7781',
                    'description' => 'Restricted-access keypad and audit controller for the private viewing vault.',
                    'purchase_date' => $now->copy()->subMonths(5)->toDateString(),
                    'purchase_cost' => 2490.00,
                    'status' => 'in_use',
                    'warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                    'assigned_to_id' => $employeeManager,
                    'last_verification' => $now->copy()->subDays(10)->toDateString(),
                    'next_validation' => $now->copy()->addMonths(3)->toDateString(),
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('employee_accounts')) {
            if ($employeeManager) {
                $this->firstOrInsertId('employee_accounts', ['employee_id' => $employeeManager, 'account_no' => 'US-CHK-110045-01'], [
                    'bank_name' => 'City Bank Manhattan',
                    'bank_branch' => 'Midtown Luxury Retail',
                    'note' => 'Primary payroll account for showroom manager.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            if ($employeeInventory) {
                $this->firstOrInsertId('employee_accounts', ['employee_id' => $employeeInventory, 'account_no' => 'US-CHK-110046-01'], [
                    'bank_name' => 'City Bank Manhattan',
                    'bank_branch' => 'Midtown Luxury Retail',
                    'note' => 'Primary payroll account for inventory specialist.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('employee_experiences')) {
            if ($employeeManager) {
                $this->firstOrInsertId('employee_experiences', [
                    'employee_id' => $employeeManager,
                    'title' => 'Luxury Sales Lead',
                    'company_name' => 'Maison Aurum',
                ], [
                    'location' => 'New York City',
                    'employment_type' => 'full_time',
                    'start_date' => '2019-02-01',
                    'end_date' => '2023-01-15',
                    'description' => 'Led bridal consultations, VIP clienteling, and seasonal capsule launches.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            if ($employeeInventory) {
                $this->firstOrInsertId('employee_experiences', [
                    'employee_id' => $employeeInventory,
                    'title' => 'Inventory Controller',
                    'company_name' => 'Gem Ledger Works',
                ], [
                    'location' => 'Newark',
                    'employment_type' => 'full_time',
                    'start_date' => '2020-06-01',
                    'end_date' => '2024-02-10',
                    'description' => 'Managed serialized precious goods, vault transfers, and audit cycle counts.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('attendances') && $context['company_id']) {
            if ($employeeManager) {
                $this->firstOrInsertId('attendances', [
                    'employee_id' => $employeeManager,
                    'date' => $now->copy()->subDay()->toDateString(),
                ], [
                    'user_id' => self::USER_ID,
                    'company_id' => $context['company_id'],
                    'clock_in' => '09:02',
                    'clock_in_ip' => '127.0.0.1',
                    'clock_out' => '18:11',
                    'clock_out_ip' => '127.0.0.1',
                    'clock_in_out' => 1,
                    'depart_early' => '00:00',
                    'late_time' => '00:02',
                    'overtime' => '00:09',
                    'total_work' => '08:24',
                    'total_rest' => '00:36',
                    'status' => 'present',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            if ($employeeInventory) {
                $this->firstOrInsertId('attendances', [
                    'employee_id' => $employeeInventory,
                    'date' => $now->copy()->subDay()->toDateString(),
                ], [
                    'user_id' => self::USER_ID,
                    'company_id' => $context['company_id'],
                    'clock_in' => '08:56',
                    'clock_in_ip' => '127.0.0.1',
                    'clock_out' => '18:04',
                    'clock_out_ip' => '127.0.0.1',
                    'clock_in_out' => 1,
                    'depart_early' => '00:00',
                    'late_time' => '00:00',
                    'overtime' => '00:08',
                    'total_work' => '08:28',
                    'total_rest' => '00:40',
                    'status' => 'present',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('holidays') && $context['company_id']) {
            $this->firstOrInsertId('holidays', ['title' => 'Jewelry Expo Preparation Day'], [
                'company_id' => $context['company_id'],
                'start_date' => $now->copy()->addMonths(2)->startOfMonth()->toDateString(),
                'end_date' => $now->copy()->addMonths(2)->startOfMonth()->toDateString(),
                'description' => 'Internal preparation day reserved for inventory reset and event merchandising.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $leaveTypeId = null;
        if (Schema::hasTable('leave_types')) {
            $leaveTypeId = $this->firstOrInsertId('leave_types', ['title' => 'Personal Leave'], [
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($leaveTypeId && Schema::hasTable('leaves') && $employeeInventory && $context['company_id']) {
            $departmentId = $context['employees']['omar.haddad']->department_id ?? null;
            $this->firstOrInsertId('leaves', [
                'employee_id' => $employeeInventory,
                'start_date' => $now->copy()->addDays(5)->toDateString(),
                'end_date' => $now->copy()->addDays(6)->toDateString(),
            ], [
                'company_id' => $context['company_id'],
                'department_id' => $departmentId,
                'leave_type_id' => $leaveTypeId,
                'days' => '2',
                'reason' => 'Family travel after the bridal fair weekend.',
                'attachment' => null,
                'half_day' => 0,
                'status' => 'approved',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('payrolls')) {
            if ($employeeManager) {
                $this->firstOrInsertId('payrolls', ['Ref' => 'PAYROLL-JWL-0001'], [
                    'user_id' => self::USER_ID,
                    'date' => $now->copy()->startOfMonth()->toDateString(),
                    'employee_id' => $employeeManager,
                    'account_id' => $context['bank_account_id'],
                    'amount' => 5200.00,
                    'payment_method_id' => $context['payment_method_bank'],
                    'payment_status' => 'paid',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            if ($employeeInventory) {
                $this->firstOrInsertId('payrolls', ['Ref' => 'PAYROLL-JWL-0002'], [
                    'user_id' => self::USER_ID,
                    'date' => $now->copy()->startOfMonth()->toDateString(),
                    'employee_id' => $employeeInventory,
                    'account_id' => $context['bank_account_id'],
                    'amount' => 4600.00,
                    'payment_method_id' => $context['payment_method_bank'],
                    'payment_status' => 'paid',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }

    private function seedCommissionData(array $context, Carbon $now): array
    {
        $receiptId = null;
        $programId = null;
        $ruleId = null;
        $agentId = null;

        if (Schema::hasTable('sales_agents')) {
            $agentId = $this->firstOrInsertId('sales_agents', ['code' => 'AG-JWL-001'], [
                'user_id' => self::USER_ID,
                'name' => 'William Castillo',
                'email' => 'laravelcamp@gmail.com',
                'phone' => '+1-212-555-0100',
                'is_active' => true,
                'notes' => 'Lead sales agent and owner overseeing bridal and investment sales.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($agentId && Schema::hasTable('commission_programs')) {
            $programId = $this->firstOrInsertId('commission_programs', ['name' => 'Bridal Excellence Incentive'], [
                'description' => 'Rewards premium bridal conversions and high-touch consultation sales.',
                'is_active' => true,
                'valid_from' => $now->copy()->startOfYear()->toDateString(),
                'valid_to' => $now->copy()->endOfYear()->toDateString(),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($programId && Schema::hasTable('commission_rules')) {
            $ruleId = $this->firstOrInsertId('commission_rules', [
                'commission_program_id' => $programId,
                'name' => '3.5% on premium jewelry sales',
            ], [
                'type' => 'percentage',
                'source' => 'sale_total',
                'value' => 3.5000,
                'min_threshold' => 500.0000,
                'max_cap' => 250.0000,
                'applies_to' => 'all_agents',
                'sales_agent_id' => null,
                'priority' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($agentId && Schema::hasTable('commission_receipts')) {
            $receiptId = $this->firstOrInsertId('commission_receipts', ['Ref' => 'COM-JWL-0001'], [
                'sales_agent_id' => $agentId,
                'amount' => 45.0600,
                'paid_at' => $now->copy()->subDay()->toDateString(),
                'payment_method_id' => $context['payment_method_bank'],
                'notes' => 'Commission payout for converted bridal appointment from July retail sales.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($agentId && $programId && $ruleId && $receiptId && Schema::hasTable('sale_commissions')) {
            $saleId = DB::table('sales')->where('Ref', 'SL-JWL-0005')->value('id');
            if ($saleId) {
                $this->firstOrInsertId('sale_commissions', [
                    'sale_id' => $saleId,
                    'sales_agent_id' => $agentId,
                ], [
                    'commission_program_id' => $programId,
                    'commission_rule_id' => $ruleId,
                    'base_amount' => 1287.4300,
                    'commission_amount' => 45.0600,
                    'status' => 'paid',
                    'commission_receipt_id' => $receiptId,
                    'calculated_at' => $now,
                    'notes' => 'Consultative bridal sale converted during a private appointment.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        return [
            'sales_agent_id' => $agentId,
            'program_id' => $programId,
            'rule_id' => $ruleId,
            'receipt_id' => $receiptId,
        ];
    }

    private function seedProjectAndContractData(array $context, Carbon $now): array
    {
        $projectId = null;
        $taskOneId = null;
        $taskTwoId = null;
        $contractId = null;
        $previousContractId = null;

        $clientId = $context['clients']['Isabella Moreau']->id ?? null;
        $managerId = $context['employees']['chloe.bennett']->id ?? null;
        $inventoryId = $context['employees']['omar.haddad']->id ?? null;

        if ($clientId && Schema::hasTable('projects') && $context['company_id']) {
            $projectId = $this->firstOrInsertId('projects', ['title' => 'Autumn Bridal Capsule Launch'], [
                'client_id' => $clientId,
                'start_date' => $now->copy()->subDays(14)->toDateString(),
                'end_date' => $now->copy()->addDays(30)->toDateString(),
                'description' => 'Coordinate bespoke bridal set sourcing, appointment prep, and final presentation for VIP launch orders.',
                'company_id' => $context['company_id'],
                'status' => 'in_progress',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($projectId && Schema::hasTable('tasks') && $context['company_id']) {
            $taskOneId = $this->firstOrInsertId('tasks', ['title' => 'Source matching sapphire accent pieces'], [
                'project_id' => $projectId,
                'company_id' => $context['company_id'],
                'start_date' => $now->copy()->subDays(10)->toDateString(),
                'end_date' => $now->copy()->addDays(4)->toDateString(),
                'estimated_hour' => '12',
                'task_progress' => '70',
                'summary' => 'Finalize matching sapphire components for the bridal suite.',
                'description' => 'Verify gemstone size consistency and confirm casting readiness for the final appointment.',
                'status' => 'in_progress',
                'priority' => 'High',
                'note' => 'Awaiting final gem certificate scan from supplier.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $taskTwoId = $this->firstOrInsertId('tasks', ['title' => 'Prepare private viewing experience'], [
                'project_id' => $projectId,
                'company_id' => $context['company_id'],
                'start_date' => $now->copy()->subDays(5)->toDateString(),
                'end_date' => $now->copy()->addDays(7)->toDateString(),
                'estimated_hour' => '8',
                'task_progress' => '55',
                'summary' => 'Set up vault viewing pieces, gift wrap, and personalized care documents.',
                'description' => 'Reserve viewing tray, polish hero pieces, and print care guides for the final consultation.',
                'status' => 'in_progress',
                'priority' => 'Medium',
                'note' => 'Coordinate with vault transfer schedule.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($managerId && $projectId && Schema::hasTable('employee_project')) {
            $this->ensureExists('employee_project', ['employee_id' => $managerId, 'project_id' => $projectId]);
        }
        if ($inventoryId && $projectId && Schema::hasTable('employee_project')) {
            $this->ensureExists('employee_project', ['employee_id' => $inventoryId, 'project_id' => $projectId]);
        }
        if ($managerId && $taskOneId && Schema::hasTable('employee_task')) {
            $this->ensureExists('employee_task', ['employee_id' => $managerId, 'task_id' => $taskOneId]);
        }
        if ($inventoryId && $taskTwoId && Schema::hasTable('employee_task')) {
            $this->ensureExists('employee_task', ['employee_id' => $inventoryId, 'task_id' => $taskTwoId]);
        }

        if (Schema::hasTable('contract_templates')) {
            $this->firstOrInsertId('contract_templates', ['name' => 'Bespoke Jewelry Order Agreement'], [
                'content' => "This bespoke jewelry order agreement confirms design approval, staged payment terms, hallmarking, and final delivery expectations for VIP custom bridal orders.",
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($clientId && Schema::hasTable('contracts')) {
            $previousContractId = $this->firstOrInsertId('contracts', ['contract_number' => 'CTR-JWL-2025-019'], [
                'party_type' => 'customer',
                'client_id' => $clientId,
                'employee_id' => $managerId,
                'project_id' => $projectId,
                'subject' => 'Initial custom bridal concept engagement',
                'value' => 3200.00,
                'type' => 'design_consultation',
                'start_date' => $now->copy()->subYear()->toDateString(),
                'end_date' => $now->copy()->subMonths(8)->toDateString(),
                'description' => 'First-stage design exploration and material sourcing authorization.',
                'hide_from_customer' => false,
                'status' => 'completed',
                'signer_name' => 'Isabella Moreau',
                'signed_at' => $now->copy()->subYear()->addDays(2),
                'signed_ip' => '127.0.0.1',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $contractId = $this->firstOrInsertId('contracts', ['contract_number' => 'CTR-JWL-2026-041'], [
                'party_type' => 'customer',
                'client_id' => $clientId,
                'employee_id' => $managerId,
                'project_id' => $projectId,
                'subject' => 'Bespoke bridal suite production agreement',
                'value' => 7800.00,
                'type' => 'custom_bridal',
                'start_date' => $now->copy()->subDays(7)->toDateString(),
                'end_date' => $now->copy()->addMonths(2)->toDateString(),
                'description' => 'Covers final design lock, production milestones, hallmarking, and delivery of the bridal suite.',
                'hide_from_customer' => false,
                'status' => 'active',
                'signer_name' => 'Isabella Moreau',
                'signed_at' => $now->copy()->subDays(6),
                'signed_ip' => '127.0.0.1',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($contractId && Schema::hasTable('contract_attachments')) {
            $file = $this->ensureDemoFile('contract-ctr-jwl-2026-041.txt', "Contract: CTR-JWL-2026-041\nSubject: Bespoke bridal suite production agreement\n");
            $this->firstOrInsertId('contract_attachments', ['contract_id' => $contractId, 'file_name' => 'CTR-JWL-2026-041 Summary.txt'], [
                'file_path' => $file['path'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($contractId && Schema::hasTable('contract_comments')) {
            $this->firstOrInsertId('contract_comments', ['contract_id' => $contractId, 'user_id' => self::USER_ID], [
                'body' => 'Client approved the final sapphire accent direction and requested discreet engraving on the inner band.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($contractId && Schema::hasTable('contract_notes')) {
            $this->firstOrInsertId('contract_notes', ['contract_id' => $contractId, 'user_id' => self::USER_ID], [
                'content' => 'Coordinate gemstone certificate printouts before final delivery and ensure private viewing vault reservation remains locked.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($contractId && $previousContractId && Schema::hasTable('contract_renewals')) {
            $this->firstOrInsertId('contract_renewals', ['contract_id' => $contractId, 'renewed_from_contract_id' => $previousContractId], [
                'renewal_date' => $now->copy()->subDays(7)->toDateString(),
                'new_end_date' => $now->copy()->addMonths(2)->toDateString(),
                'notes' => 'Upgraded from concept agreement into full production contract after client sign-off.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($contractId && Schema::hasTable('contract_tasks')) {
            $this->firstOrInsertId('contract_tasks', ['contract_id' => $contractId, 'title' => 'Deliver engraved bridal suite'], [
                'due_date' => $now->copy()->addDays(21)->toDateString(),
                'status' => 'pending',
                'description' => 'Package finished suite, certificates, and care documents for in-store VIP handover.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        return [
            'project_id' => $projectId,
            'task_ids' => array_values(array_filter([$taskOneId, $taskTwoId])),
            'contract_id' => $contractId,
        ];
    }

    private function seedBookings(array $context, Carbon $now): void
    {
        if (! Schema::hasTable('bookings')) {
            return;
        }

        $clientId = $context['clients']['Isabella Moreau']->id ?? null;
        $productId = $context['products']['JWL-SET-001']->id ?? null;
        if (! $clientId || ! $productId) {
            return;
        }

        $this->firstOrInsertId('bookings', ['Ref' => 'BKG-JWL-0001'], [
            'customer_id' => $clientId,
            'product_id' => $productId,
            'price' => 4312.42,
            'booking_date' => $now->copy()->addDays(3)->toDateString(),
            'booking_time' => '15:30:00',
            'booking_end_time' => '16:30:00',
            'status' => 'confirmed',
            'notes' => 'Private bridal suite viewing with gift-wrap and engraving options preview.',
            'google_calendar_event_id' => 'evt-jwl-private-viewing-0001',
            'created_at' => $now,
            'updated_at' => $now,
        ]);
    }

    private function seedServiceDeskData(array $context, Carbon $now): void
    {
        $clientId = $context['clients']['Julian Whitfield']->id ?? null;
        if (! $clientId) {
            return;
        }

        $technicianId = null;
        if (Schema::hasTable('service_technicians')) {
            $technicianId = $this->firstOrInsertId('service_technicians', ['name' => 'Maya Fernandez'], [
                'phone' => '+1-212-555-0701',
                'email' => 'maya.fernandez@jewelrycenter.test',
                'notes' => 'Bench specialist for ring resizing, polishing, and stone resetting.',
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $checklistCategories = [];
        if (Schema::hasTable('service_checklist_categories')) {
            $checklistCategories['intake'] = $this->firstOrInsertId('service_checklist_categories', ['name' => 'Repair Intake'], [
                'description' => 'Front-desk intake checks for jewelry service items.',
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $checklistCategories['quality'] = $this->firstOrInsertId('service_checklist_categories', ['name' => 'Final Quality Check'], [
                'description' => 'Pre-delivery inspection steps before returning serviced jewelry to the client.',
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $checklistItems = [];
        if (Schema::hasTable('service_checklist_items') && ! empty($checklistCategories)) {
            $checklistItems['photos'] = $this->firstOrInsertId('service_checklist_items', ['name' => 'Capture intake photos'], [
                'category_id' => $checklistCategories['intake'],
                'description' => 'Photograph item condition, hallmark, and stone setting before work starts.',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $checklistItems['measure'] = $this->firstOrInsertId('service_checklist_items', ['name' => 'Verify requested resize'], [
                'category_id' => $checklistCategories['intake'],
                'description' => 'Confirm current size and target size before bench work starts.',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $checklistItems['polish'] = $this->firstOrInsertId('service_checklist_items', ['name' => 'Inspect polish and stone security'], [
                'category_id' => $checklistCategories['quality'],
                'description' => 'Final QC pass to ensure high polish and secure settings.',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $serviceJobId = null;
        if (Schema::hasTable('service_jobs')) {
            $serviceJobId = $this->firstOrInsertId('service_jobs', ['Ref' => 'SRV-JWL-0001'], [
                'client_id' => $clientId,
                'technician_id' => $technicianId,
                'service_item' => 'Wedding band resizing and polish',
                'device_brand' => 'Grids Gold',
                'device_model' => 'Classic Wedding Band',
                'device_serial' => 'RZ-CLWB-2026-001',
                'device_imei' => null,
                'device_color' => 'Yellow Gold',
                'device_password' => null,
                'accessories' => 'Original ring box and appraisal card',
                'condition_on_arrival' => 'Minor surface scratches, requires half-size increase.',
                'reported_issue' => 'Ring feels tight after recent resize elsewhere.',
                'diagnosis' => 'Half-size increase and full polish required. Stones stable.',
                'diagnostic_fee' => 15.00,
                'quote_amount' => 54.00,
                'quote_valid_until' => $now->copy()->addDays(7)->toDateString(),
                'quote_approved_at' => $now->copy()->subDay(),
                'quote_approved_by' => 'Julian Whitfield',
                'total_amount' => 54.00,
                'paid_amount' => 20.00,
                'payment_status' => 'partial',
                'warranty_days' => 30,
                'warranty_expires_at' => $now->copy()->addDays(30)->toDateString(),
                'parent_job_id' => null,
                'quotation_id' => DB::table('quotations')->where('Ref', 'QT-JWL-0001')->value('id'),
                'delivered_at' => null,
                'pickup_signature' => null,
                'job_type' => 'repair',
                'status' => 'in_progress',
                'scheduled_date' => $now->copy()->subDay()->format('Y-m-d 10:00:00'),
                'scheduled_end_date' => $now->copy()->addDay()->format('Y-m-d 17:00:00'),
                'started_at' => $now->copy()->subDay(),
                'completed_at' => null,
                'notes' => 'Requested discreet comfort-fit check before final handover.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($serviceJobId && Schema::hasTable('service_job_items')) {
            $stone = $context['products']['JWL-LSE-001'] ?? null;
            if ($stone) {
                $this->firstOrInsertId('service_job_items', [
                    'service_job_id' => $serviceJobId,
                    'description' => 'Side stone security inspection',
                ], [
                    'type' => 'part',
                    'product_id' => $stone->id,
                    'product_variant_id' => null,
                    'warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                    'quantity' => 1,
                    'unit_price' => 0,
                    'discount' => 0,
                    'discount_method' => '1',
                    'tax_rate' => 0,
                    'tax_method' => '1',
                    'total' => 0,
                    'stock_deducted' => 0,
                    'notes' => 'Inspected spare stone sizing against setting; no replacement needed.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            $this->firstOrInsertId('service_job_items', [
                'service_job_id' => $serviceJobId,
                'description' => 'Resize and polish labor',
            ], [
                'type' => 'labor',
                'product_id' => null,
                'product_variant_id' => null,
                'warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                'quantity' => 1,
                'unit_price' => 54.00,
                'discount' => 0,
                'discount_method' => '1',
                'tax_rate' => 0,
                'tax_method' => '1',
                'total' => 54.00,
                'stock_deducted' => 0,
                'notes' => 'Bench work, polish, fit verification, and final quality inspection.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($serviceJobId && Schema::hasTable('service_job_checklist_items') && ! empty($checklistItems)) {
            $this->firstOrInsertId('service_job_checklist_items', [
                'service_job_id' => $serviceJobId,
                'item_name' => 'Capture intake photos',
            ], [
                'category_id' => $checklistCategories['intake'] ?? null,
                'item_id' => $checklistItems['photos'],
                'category_name' => 'Repair Intake',
                'is_completed' => 1,
                'completed_at' => $now->copy()->subDay(),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->firstOrInsertId('service_job_checklist_items', [
                'service_job_id' => $serviceJobId,
                'item_name' => 'Verify requested resize',
            ], [
                'category_id' => $checklistCategories['intake'] ?? null,
                'item_id' => $checklistItems['measure'],
                'category_name' => 'Repair Intake',
                'is_completed' => 1,
                'completed_at' => $now->copy()->subDay(),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->firstOrInsertId('service_job_checklist_items', [
                'service_job_id' => $serviceJobId,
                'item_name' => 'Inspect polish and stone security',
            ], [
                'category_id' => $checklistCategories['quality'] ?? null,
                'item_id' => $checklistItems['polish'],
                'category_name' => 'Final Quality Check',
                'is_completed' => 0,
                'completed_at' => null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($serviceJobId && Schema::hasTable('service_job_payments')) {
            $this->firstOrInsertId('service_job_payments', ['Ref' => 'PAY-SRV-JWL-0001'], [
                'service_job_id' => $serviceJobId,
                'user_id' => self::USER_ID,
                'payment_method_id' => $context['payment_method_cash'],
                'account_id' => $context['primary_account_id'],
                'date' => $now->copy()->subDay()->toDateString(),
                'montant' => 20.00,
                'change' => 0,
                'payment_kind' => 'deposit',
                'notes' => 'Deposit collected at service intake.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($serviceJobId && Schema::hasTable('service_job_photos')) {
            $before = $this->ensureDemoFile('service-job-before.txt', "Before photo placeholder for SRV-JWL-0001\n");
            $after = $this->ensureDemoFile('service-job-after.txt', "After photo placeholder for SRV-JWL-0001\n");
            $this->firstOrInsertId('service_job_photos', ['service_job_id' => $serviceJobId, 'stage' => 'intake'], [
                'user_id' => self::USER_ID,
                'path' => $before['path'],
                'original_name' => 'service-job-before.txt',
                'mime_type' => 'text/plain',
                'size' => $before['size'],
                'caption' => 'Condition captured at intake before resizing.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->firstOrInsertId('service_job_photos', ['service_job_id' => $serviceJobId, 'stage' => 'final'], [
                'user_id' => self::USER_ID,
                'path' => $after['path'],
                'original_name' => 'service-job-after.txt',
                'mime_type' => 'text/plain',
                'size' => $after['size'],
                'caption' => 'Final polish and fit verification notes ready for pickup.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedCommerceAndPortalData(array $context, array $warehouse, Carbon $now): void
    {
        $inviteCodeId = null;
        if (Schema::hasTable('invite_codes')) {
            $inviteCodeId = $this->firstOrInsertId('invite_codes', ['code' => 'JWL-VIP-2026'], [
                'created_by' => self::USER_ID,
                'max_uses' => 50,
                'times_used' => 1,
                'expires_at' => $now->copy()->addMonths(6),
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $portalClient = $context['clients']['Isabella Moreau']->id ?? null;
        $ecommerceClient = $context['clients']['Julian Whitfield']->id ?? null;

        if ($portalClient && Schema::hasTable('portal_clients')) {
            $this->firstOrInsertId('portal_clients', ['email' => 'portal.isabella@jewelrycenter.test'], [
                'client_id' => $portalClient,
                'password' => self::DEMO_PASSWORD_HASH,
                'status' => 1,
                'invitation_token' => 'portal-invite-isabella-2026',
                'invitation_sent_at' => $now->copy()->subDays(3),
                'remember_token' => null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($ecommerceClient && Schema::hasTable('ecommerce_clients')) {
            $this->firstOrInsertId('ecommerce_clients', ['email' => 'shop.julian@jewelrycenter.test'], [
                'client_id' => $ecommerceClient,
                'username' => 'julianwhitfield',
                'email_verified_at' => $now->copy()->subDays(2),
                'password' => self::DEMO_PASSWORD_HASH,
                'remember_token' => null,
                'status' => 1,
                'invite_code_id' => $inviteCodeId,
                'referred_by' => null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $orderId = null;
        if (Schema::hasTable('online_orders')) {
            $orderId = $this->firstOrInsertId('online_orders', ['ref' => 'ONL-JWL-0001'], [
                'date' => $now->copy()->subDay()->toDateString(),
                'time' => '20:10:00',
                'status' => 'confirmed',
                'has_preorder_items' => 0,
                'client_id' => $portalClient,
                'warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                'total' => 603.35,
                'payment_method' => 'stripe',
                'payment_status' => 'paid',
                'stripe_payment_intent_id' => 'pi_jwl_demo_0001',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($orderId && Schema::hasTable('online_order_items')) {
            $ring = $context['products']['JWL-RNG-002'] ?? null;
            $service = $context['products']['JWL-SVC-002'] ?? null;
            $ringVariant = Schema::hasTable('product_variants') ? DB::table('product_variants')->where('code', 'JWL-RNG-002-S7')->value('id') : null;

            if ($ring) {
                $this->firstOrInsertId('online_order_items', [
                    'order_id' => $orderId,
                    'product_id' => $ring->id,
                ], [
                    'product_variant_id' => $ringVariant,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'is_preorder' => 0,
                    'discount' => 0,
                    'discount_method' => '1',
                    'qty' => 1,
                    'price' => 549.35,
                    'line_total' => 549.35,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            if ($service) {
                $this->firstOrInsertId('online_order_items', [
                    'order_id' => $orderId,
                    'product_id' => $service->id,
                ], [
                    'product_variant_id' => null,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'is_preorder' => 0,
                    'discount' => 0,
                    'discount_method' => '1',
                    'qty' => 1,
                    'price' => 54.00,
                    'line_total' => 54.00,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('payment_with_credit_card')) {
            $payment = $context['payment_sales']['SL-JWL-0005'] ?? null;
            if ($payment) {
                DB::table('payment_sales')->where('id', $payment->id)->update([
                    'payment_method_id' => $context['payment_method_card'],
                    'updated_at' => $now,
                ]);

                $this->firstOrInsertId('payment_with_credit_card', [
                    'payment_id' => $payment->id,
                    'customer_id' => $payment->client_id,
                ], [
                    'customer_stripe_id' => 'cus_jwl_demo_0001',
                    'charge_id' => 'ch_jwl_demo_0001',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('subscribers')) {
            foreach (['vip@jewelrycenter.test', 'bridalcircle@jewelrycenter.test', 'bullion-watch@example.test'] as $email) {
                $this->firstOrInsertId('subscribers', ['email' => $email], [
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('store_banners')) {
            $this->firstOrInsertId('store_banners', ['title' => 'Bridal Signature Collection'], [
                'position' => 'home_hero',
                'link' => '/collections/bridal-highlights',
                'image' => $context['primary_image'],
                'active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->firstOrInsertId('store_banners', ['title' => 'Private Viewing Vault'], [
                'position' => 'home_secondary',
                'link' => '/book/private-viewing',
                'image' => null,
                'active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('subscriptions') && $portalClient) {
            $product = $context['products']['JWL-SVC-002'] ?? null;
            if ($product) {
                $this->firstOrInsertId('subscriptions', [
                    'client_id' => $portalClient,
                    'product_id' => $product->id,
                    'date' => $now->copy()->subDays(15)->toDateString(),
                ], [
                    'user_id' => self::USER_ID,
                    'warehouse_id' => $warehouse['id'],
                    'cycle_type' => 'recurring',
                    'total_cycles' => 12,
                    'billing_cycle' => 'monthly',
                    'remaining_cycles' => 9,
                    'price_per_cycle' => 54.00,
                    'price_per_unit' => 54.00,
                    'quantity' => 1,
                    'next_billing_date' => $now->copy()->addDays(15)->toDateString(),
                    'status' => 'active',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }

    private function seedKnowledgeMeetingAndMarketingData(array $context, array $project, Carbon $now): void
    {
        $groupId = null;
        if (Schema::hasTable('knowledge_base_article_groups')) {
            $groupId = $this->firstOrInsertId('knowledge_base_article_groups', ['slug' => 'jewelry-care'], [
                'name' => 'Jewelry Care',
                'description' => 'Internal and client-facing care guidance for fine jewelry and precious metals.',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $articleId = null;
        if ($groupId && Schema::hasTable('knowledge_base_articles')) {
            $articleId = $this->firstOrInsertId('knowledge_base_articles', ['slug' => 'how-to-care-for-22k-gold'], [
                'knowledge_base_article_group_id' => $groupId,
                'title' => 'How to care for 22K gold jewelry',
                'content' => 'Store 22K gold pieces separately, avoid harsh chemicals, and schedule periodic professional polishing for heirloom-grade brilliance.',
                'is_internal' => false,
                'sort_order' => 1,
                'published_at' => $now->toDateString(),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($articleId && Schema::hasTable('knowledge_base_article_feedbacks')) {
            $this->firstOrInsertId('knowledge_base_article_feedbacks', [
                'knowledge_base_article_id' => $articleId,
                'user_id' => self::USER_ID,
            ], [
                'helpful' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $meetingId = null;
        if (Schema::hasTable('meetings')) {
            $meetingId = $this->firstOrInsertId('meetings', ['title' => 'Holiday Bridal Campaign Review'], [
                'description' => 'Review premium bridal pipeline, vault inventory readiness, and launch content.',
                'agenda' => 'VIP client list, private viewing stock, seasonal campaign creative, staffing readiness.',
                'meeting_date' => $now->copy()->addDays(2)->toDateString(),
                'start_time' => '09:30:00',
                'end_time' => '10:30:00',
                'location' => 'Showroom Private Lounge',
                'type' => 'physical',
                'status' => 'scheduled',
                'platform' => null,
                'meeting_link' => null,
                'reminder_minutes' => 60,
                'reminder_sent' => 0,
                'organizer_id' => self::USER_ID,
                'created_by' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($meetingId && Schema::hasTable('meeting_participants')) {
            $this->firstOrInsertId('meeting_participants', [
                'meeting_id' => $meetingId,
                'user_id' => self::USER_ID,
            ], [
                'invitation_status' => 'accepted',
                'attendance_status' => 'pending',
                'is_notified' => 1,
                'notified_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($meetingId && Schema::hasTable('meeting_activity_logs')) {
            $this->firstOrInsertId('meeting_activity_logs', [
                'meeting_id' => $meetingId,
                'action' => 'created',
            ], [
                'user_id' => self::USER_ID,
                'description' => 'Meeting scheduled for holiday bridal campaign readiness review.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($meetingId && Schema::hasTable('meeting_attachments')) {
            $file = $this->ensureDemoFile('meeting-holiday-bridal-review.txt', "Agenda packet for holiday bridal campaign review\n");
            $this->firstOrInsertId('meeting_attachments', [
                'meeting_id' => $meetingId,
                'file_name' => 'holiday-bridal-review.txt',
            ], [
                'file_path' => $file['path'],
                'file_type' => 'text/plain',
                'file_size' => $file['size'],
                'uploaded_by' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($meetingId && Schema::hasTable('meeting_notes')) {
            $this->firstOrInsertId('meeting_notes', [
                'meeting_id' => $meetingId,
                'type' => 'action_item',
                'content' => 'Finalize private viewing vault assortment for the bridal launch weekend.',
            ], [
                'assigned_to' => self::USER_ID,
                'due_date' => $now->copy()->addDays(1)->toDateString(),
                'status' => 'open',
                'created_by' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('marketing_settings') && ! DB::table('marketing_settings')->exists()) {
            DB::table('marketing_settings')->insert([
                'sms_enabled' => 0,
                'sms_provider' => null,
                'sms_api_url' => null,
                'sms_api_key' => null,
                'sms_api_secret' => null,
                'sms_sender_id' => null,
                'sms_http_method' => 'POST',
                'sms_extra_params' => null,
                'sms_to_field' => 'to',
                'sms_message_field' => 'message',
                'whatsapp_enabled' => 1,
                'whatsapp_provider' => 'meta_cloud',
                'whatsapp_api_url' => 'https://graph.facebook.com/v19.0/messages',
                'whatsapp_api_key' => 'demo-token',
                'whatsapp_phone_id' => 'demo-phone-id',
                'whatsapp_http_method' => 'POST',
                'whatsapp_extra_params' => json_encode(['preview_url' => false]),
                'whatsapp_to_field' => 'to',
                'whatsapp_message_field' => 'message',
                'email_enabled' => 1,
                'email_from_name' => 'Jewelry Center',
                'email_from_address' => 'atelier@jewelrycenter.test',
                'default_sender_name' => 'Jewelry Center CRM',
                'scheduling_enabled' => 1,
                'batch_size' => 100,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $templateId = null;
        if (Schema::hasTable('marketing_templates')) {
            $templateId = $this->firstOrInsertId('marketing_templates', ['name' => 'VIP Bridal Preview Email'], [
                'type' => 'email',
                'category' => 'campaign',
                'subject' => 'Your invitation to our private bridal preview',
                'content' => 'Join us for an intimate bridal showcase featuring curated sets, vault appointments, and styling guidance.',
                'created_by' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $segmentId = null;
        if (Schema::hasTable('marketing_segments')) {
            $segmentId = $this->firstOrInsertId('marketing_segments', ['name' => 'VIP Bridal Clients'], [
                'description' => 'Top bridal and ceremony-oriented clients who responded to high-value consultations.',
                'all_customers' => 0,
                'filters' => json_encode(['tags' => ['bridal', 'vip']]),
                'customers_count' => 4,
                'created_by' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $campaignId = null;
        if (Schema::hasTable('marketing_campaigns')) {
            $campaignId = $this->firstOrInsertId('marketing_campaigns', ['title' => 'Holiday Bridal Preview Invite'], [
                'description' => 'Invite selected clients to book premium bridal preview sessions.',
                'type' => 'email',
                'subject' => 'Private holiday bridal preview invitation',
                'message_content' => 'Reserve your appointment to explore our bridal highlights and private viewing vault.',
                'attachment' => null,
                'template_id' => $templateId,
                'segment_id' => $segmentId,
                'all_customers' => 0,
                'status' => 'sent',
                'send_immediately' => 0,
                'scheduled_at' => $now->copy()->subDays(2),
                'sent_at' => $now->copy()->subDays(2),
                'total_recipients' => 4,
                'sent_count' => 4,
                'delivered_count' => 4,
                'failed_count' => 0,
                'pending_count' => 0,
                'created_by' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($campaignId && Schema::hasTable('marketing_campaign_recipients')) {
            foreach (['Isabella Moreau', 'Julian Whitfield', 'Amara Osei', 'Rohan Malhotra'] as $name) {
                $client = $context['clients'][$name] ?? null;
                if (! $client) {
                    continue;
                }

                $this->firstOrInsertId('marketing_campaign_recipients', [
                    'campaign_id' => $campaignId,
                    'client_id' => $client->id,
                ], [
                    'name' => $name,
                    'phone' => $client->phone,
                    'email' => $client->email,
                    'status' => 'delivered',
                    'error_message' => null,
                    'sent_at' => $now->copy()->subDays(2),
                    'delivered_at' => $now->copy()->subDays(2),
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('marketing_activity_logs') && $campaignId) {
            $this->firstOrInsertId('marketing_activity_logs', ['module' => 'campaign', 'reference_id' => $campaignId], [
                'user_id' => self::USER_ID,
                'action' => 'sent',
                'description' => 'Holiday bridal preview campaign sent to the VIP bridal segment.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedPropertyAndRecruitmentData(array $context, Carbon $now): void
    {
        $propertyId = null;
        if (Schema::hasTable('properties')) {
            $categoryId = $context['property_categories']['commercial-property']->id ?? null;
            $propertyId = $this->firstOrInsertId('properties', ['slug' => 'madison-avenue-flagship-showroom'], [
                'title' => 'Madison Avenue Flagship Showroom',
                'property_category_id' => $categoryId,
                'description' => 'Premium retail frontage suitable for private viewings, bridal events, and bullion consultations.',
                'purpose' => 'rent',
                'status' => 'available',
                'featured' => 1,
                'price' => 18500.00,
                'area' => 2200,
                'area_unit' => 'sqft',
                'bedrooms' => null,
                'bathrooms' => 2,
                'garage' => 0,
                'address' => '45 Madison Ave, New York, NY 10022',
                'city' => 'New York City',
                'region' => 'New York',
                'latitude' => 40.7632000,
                'longitude' => -73.9723000,
                'featured_image' => $context['primary_image'],
                'gallery' => json_encode([$context['primary_image']]),
                'amenities' => json_encode(['Street frontage', 'Private vault room', 'Consultation lounge']),
                'agent_name' => 'William Castillo',
                'agent_phone' => '+1-212-555-0100',
                'agent_email' => 'laravelcamp@gmail.com',
                'agent_whatsapp' => '+1-212-555-0100',
                'seo_title' => 'Madison Avenue luxury jewelry showroom lease',
                'seo_description' => 'Prime Manhattan retail location designed for luxury jewelry appointments and private client events.',
                'seo_keywords' => 'luxury showroom, jewelry retail, madison avenue',
                'views' => 37,
                'created_by' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($propertyId && Schema::hasTable('property_inquiries')) {
            $this->firstOrInsertId('property_inquiries', ['property_id' => $propertyId, 'email' => 'leasing@aurumventures.test'], [
                'name' => 'Aurum Ventures',
                'phone' => '+1-646-555-0901',
                'message' => 'Interested in a multi-year lease for a boutique retail concept with appointment-based access.',
                'status' => 'responded',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $jobCategoryId = null;
        if (Schema::hasTable('recruit_job_categories')) {
            $jobCategoryId = $this->firstOrInsertId('recruit_job_categories', ['name' => 'Retail Operations'], [
                'description' => 'Showroom staffing, consultation, and inventory-facing customer service roles.',
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $jobId = null;
        if (Schema::hasTable('recruit_jobs')) {
            $departmentId = $context['employees']['chloe.bennett']->department_id ?? null;
            $jobId = $this->firstOrInsertId('recruit_jobs', ['slug' => 'senior-jewelry-sales-consultant'], [
                'title' => 'Senior Jewelry Sales Consultant',
                'category_id' => $jobCategoryId,
                'department_id' => $departmentId,
                'job_type' => 'full_time',
                'location' => 'New York City',
                'description' => 'Lead bridal consultations, private viewings, and high-trust fine jewelry sales conversations.',
                'requirements' => 'Luxury retail experience, diamond education, strong clienteling, and polished presentation skills.',
                'benefits' => 'Commission program, private appointment incentives, and seasonal collection launch exposure.',
                'salary_min' => 65000.00,
                'salary_max' => 85000.00,
                'currency' => 'USD',
                'vacancies' => 1,
                'status' => 'open',
                'experience_level' => 'senior',
                'deadline' => $now->copy()->addMonths(1)->toDateString(),
                'created_by' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $candidateId = null;
        if (Schema::hasTable('recruit_candidates')) {
            $resume = $this->ensureDemoFile('candidate-resume-elena-ross.txt', "Elena Ross\nLuxury retail, diamonds, and bridal sales background\n");
            $candidateId = $this->firstOrInsertId('recruit_candidates', ['email' => 'elena.ross@example.test'], [
                'first_name' => 'Elena',
                'last_name' => 'Ross',
                'phone' => '+1-917-555-0951',
                'date_of_birth' => '1992-03-09',
                'gender' => 'female',
                'address' => '21 Lex Ave, New York, NY 10016',
                'city' => 'New York City',
                'state' => 'New York',
                'country' => 'United States',
                'zip_code' => '10016',
                'current_company' => 'Maison Aurum',
                'current_position' => 'Bridal Sales Advisor',
                'current_salary' => 72000.00,
                'expected_salary' => 79000.00,
                'experience_years' => 7,
                'skills' => 'diamond education, bridal consults, CRM follow-up, high-value closing',
                'education' => 'BA in Fashion Business; GIA Diamond Essentials',
                'resume_path' => $resume['path'],
                'photo' => null,
                'linkedin_url' => 'https://linkedin.example/elena-ross',
                'portfolio_url' => null,
                'notes' => 'Strong bridal portfolio and appointment conversion history.',
                'source' => 'linkedin',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $applicationId = null;
        if ($jobId && $candidateId && Schema::hasTable('recruit_applications')) {
            $applicationId = $this->firstOrInsertId('recruit_applications', [
                'job_id' => $jobId,
                'candidate_id' => $candidateId,
            ], [
                'stage' => 'interview',
                'applied_date' => $now->copy()->subDays(4)->toDateString(),
                'cover_letter' => 'I specialize in luxury bridal consultations and building long-term client trust.',
                'rating' => 5,
                'notes' => 'Shortlisted for in-person panel with store owner.',
                'reviewed_by' => self::USER_ID,
                'reviewed_at' => $now->copy()->subDays(3),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($applicationId && Schema::hasTable('recruit_interviews')) {
            $this->firstOrInsertId('recruit_interviews', ['application_id' => $applicationId], [
                'type' => 'in_person',
                'scheduled_at' => $now->copy()->addDays(4)->setTime(11, 0),
                'duration_minutes' => 60,
                'location' => 'Showroom private lounge',
                'meeting_link' => null,
                'interviewer_id' => self::USER_ID,
                'status' => 'scheduled',
                'rating' => null,
                'feedback' => null,
                'notes' => 'Focus on appointment conversion and handling serialized inventory consultations.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedCommunicationAndIntegrationData(array $context, array $commission, Carbon $now): void
    {
        if (Schema::hasTable('messages')) {
            $this->firstOrInsertId('messages', ['email' => 'vip.client@jewelrycenter.test', 'subject' => 'Private appointment request'], [
                'name' => 'Helen Crawford',
                'phone' => '+1-646-555-0801',
                'message' => 'I would like to schedule a private viewing for investment gold bars and bridal gift options.',
                'is_read' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('notifications')) {
            $this->ensureExists('notifications', ['id' => 'f0c0a6e3-6f6c-4c62-91c8-000000000001'], [
                'type' => 'App\\Notifications\\DemoOrderNotification',
                'notifiable_type' => 'App\\Models\\User',
                'notifiable_id' => self::USER_ID,
                'data' => json_encode(['title' => 'Online order paid', 'ref' => 'ONL-JWL-0001', 'client' => 'Isabella Moreau']),
                'read_at' => null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->ensureExists('notifications', ['id' => 'f0c0a6e3-6f6c-4c62-91c8-000000000002'], [
                'type' => 'App\\Notifications\\ServiceJobNotification',
                'notifiable_type' => 'App\\Models\\User',
                'notifiable_id' => self::USER_ID,
                'data' => json_encode(['title' => 'Service job in progress', 'ref' => 'SRV-JWL-0001']),
                'read_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('whatsapp_logs')) {
            $this->firstOrInsertId('whatsapp_logs', ['provider_message_id' => 'wamid.demo.0001'], [
                'recipient' => '+12125550210',
                'template_key' => 'order_created',
                'message_type' => 'text',
                'body' => 'Your private bridal preview invitation is ready. Reply YES to confirm your slot.',
                'status' => 'sent',
                'error' => null,
                'meta' => json_encode(['campaign' => 'Holiday Bridal Preview Invite']),
                'sent_at' => $now->copy()->subDays(2),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $this->firstOrInsertId('whatsapp_logs', ['provider_message_id' => 'wamid.demo.0002'], [
                'recipient' => '+12125550211',
                'template_key' => 'payment_received',
                'message_type' => 'text',
                'body' => 'Deposit received for service job SRV-JWL-0001. We will notify you once resizing is complete.',
                'status' => 'delivered',
                'error' => null,
                'meta' => json_encode(['service_job' => 'SRV-JWL-0001']),
                'sent_at' => $now->copy()->subDay(),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('whatsapp_usages')) {
            $period = $now->format('Y-m');
            $this->firstOrInsertId('whatsapp_usages', ['period' => $period], [
                'sent_count' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('woocommerce_settings') && ! DB::table('woocommerce_settings')->exists()) {
            DB::table('woocommerce_settings')->insert([
                'store_url' => 'https://jewelry-demo.store',
                'consumer_key' => 'ck_demo_jwl_key',
                'consumer_secret' => 'cs_demo_jwl_secret',
                'wp_username' => 'jewelry-demo',
                'wp_app_password' => 'demo-app-password',
                'enable_auto_sync' => 1,
                'sync_interval' => 'hourly',
                'last_sync_at' => $now->copy()->subHours(3),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('woocommerce_logs')) {
            $this->firstOrInsertId('woocommerce_logs', ['action' => 'inventory_sync'], [
                'level' => 'info',
                'message' => 'Jewelry inventory sync completed successfully for highlighted SKUs.',
                'context' => json_encode(['warehouse_id' => self::PRIMARY_WAREHOUSE_ID, 'items' => 12]),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $webhookId = null;
        if (Schema::hasTable('webhooks')) {
            $webhookId = $this->firstOrInsertId('webhooks', ['name' => 'Jewelry storefront sync'], [
                'url' => 'https://hooks.example.test/jewelry/storefront-sync',
                'secret' => 'whsec_jwl_demo_0001',
                'events' => json_encode(['sale.created', 'inventory.updated', 'service_job.updated']),
                'headers' => json_encode(['X-Source' => 'jewelry-demo']),
                'is_active' => 1,
                'timeout_seconds' => 15,
                'last_fired_at' => $now->copy()->subHours(6),
                'user_id' => self::USER_ID,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($webhookId && Schema::hasTable('webhook_deliveries')) {
            $this->firstOrInsertId('webhook_deliveries', ['webhook_id' => $webhookId, 'event' => 'sale.created', 'attempt' => 1], [
                'status' => 'success',
                'response_code' => 200,
                'payload' => json_encode(['ref' => 'SL-JWL-0005', 'total' => 1287.43]),
                'response_body' => json_encode(['ok' => true]),
                'error_message' => null,
                'duration_ms' => 328,
                'delivered_at' => $now->copy()->subHours(6),
                'next_attempt_at' => null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('webhook_incoming_logs')) {
            $this->firstOrInsertId('webhook_incoming_logs', ['source' => 'stripe', 'event' => 'payment_intent.succeeded'], [
                'ip' => '127.0.0.1',
                'headers' => json_encode(['Stripe-Signature' => 'demo-signature']),
                'payload' => json_encode(['id' => 'pi_jwl_demo_0001', 'amount' => 60335]),
                'signature_valid' => 1,
                'status' => 'processed',
                'error_message' => null,
                'processed_at' => $now->copy()->subHours(5),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('sync_jobs')) {
            $productId = $context['products']['JWL-RNG-002']->id ?? null;
            $this->firstOrInsertId('sync_jobs', ['current_sku' => 'JWL-RNG-002'], [
                'user_id' => self::USER_ID,
                'warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                'status' => 'completed',
                'total_items' => 12,
                'processed_items' => 12,
                'success_items' => 12,
                'failed_items' => 0,
                'percentage' => 100,
                'stage' => 'finalized',
                'current_product_id' => $productId,
                'last_error' => null,
                'started_at' => $now->copy()->subHours(3),
                'finished_at' => $now->copy()->subHours(3)->addMinutes(4),
                'cancel_requested' => 0,
                'worker_heartbeat_at' => $now->copy()->subHours(3)->addMinutes(4),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedTaxAndAuditData(array $context, array $batchMap, Carbon $now): void
    {
        if (Schema::hasTable('acc_tax_reports')) {
            $this->firstOrInsertId('acc_tax_reports', [
                'period_start' => '2026-07-01',
                'period_end' => '2026-07-31',
                'type' => 'vat',
            ], [
                'taxable_sales' => 8392.020000,
                'output_tax' => 0.000000,
                'taxable_purchases' => 198872.910000,
                'input_tax' => 0.000000,
                'net_tax' => 0.000000,
                'source' => 'auto',
                'generated_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('audit_logs')) {
            $productId = $context['products']['JWL-RNG-002']->id ?? 0;
            $this->firstOrInsertId('audit_logs', [
                'auditable_type' => 'App\\Product',
                'auditable_id' => $productId,
                'action' => 'updated',
            ], [
                'old_values' => json_encode(['price' => 539.35, 'city' => null]),
                'new_values' => json_encode(['price' => 549.35, 'note' => 'Sized variant pricing updated for online ordering.']),
                'user_id' => self::USER_ID,
                'created_at' => $now,
            ]);

            $serviceJobId = DB::table('service_jobs')->where('Ref', 'SRV-JWL-0001')->value('id') ?: 0;
            $this->firstOrInsertId('audit_logs', [
                'auditable_type' => 'App\\Models\\ServiceJob',
                'auditable_id' => $serviceJobId,
                'action' => 'created',
            ], [
                'old_values' => null,
                'new_values' => json_encode(['ref' => 'SRV-JWL-0001', 'status' => 'in_progress']),
                'user_id' => self::USER_ID,
                'created_at' => $now,
            ]);
        }
    }

    private function seedKitchenAndShipmentSupport(array $context, Carbon $now): void
    {
        $sale = DB::table('sales')->where('Ref', 'SL-JWL-0005')->first();
        if (! $sale) {
            return;
        }

        if (Schema::hasTable('shipments')) {
            $this->firstOrInsertId('shipments', ['Ref' => 'SHP-JWL-0001'], [
                'user_id' => self::USER_ID,
                'date' => $now->copy()->subDay(),
                'sale_id' => $sale->id,
                'delivered_to' => 'Isabella Moreau',
                'shipping_address' => '18 W 57th St, New York, NY 10019',
                'status' => 'delivered',
                'shipping_details' => 'White-glove same-day courier with appraisal copy and bridal gift packaging.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('kitchen_orders')) {
            $this->firstOrInsertId('kitchen_orders', ['ref' => 'KIT-JWL-0001'], [
                'sale_id' => $sale->id,
                'client_id' => $sale->client_id,
                'warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                'dispatched_warehouse_id' => self::PRIMARY_WAREHOUSE_ID,
                'user_id' => self::USER_ID,
                'assigned_to' => self::USER_ID,
                'status' => 'completed',
                'instructions' => 'Prepare gift wrap, certificate pack, and polished presentation tray for VIP handover.',
                'sent_at' => $now->copy()->subDay(),
                'started_at' => $now->copy()->subDay()->addMinutes(10),
                'completed_at' => $now->copy()->subDay()->addMinutes(45),
                'dispatched_at' => $now->copy()->subDay()->addMinutes(50),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function firstOrInsertId(string $table, array $where, array $values)
    {
        $query = DB::table($table);
        foreach ($where as $column => $value) {
            $query->where($column, $value);
        }

        $existing = $query->first();
        if ($existing) {
            return $existing->id ?? true;
        }

        return DB::table($table)->insertGetId(array_merge($where, $values));
    }

    private function ensureExists(string $table, array $where, array $values = []): void
    {
        $query = DB::table($table);
        foreach ($where as $column => $value) {
            $query->where($column, $value);
        }

        if (! $query->exists()) {
            DB::table($table)->insert(array_merge($where, $values));
        }
    }

    private function ensureDemoFile(string $fileName, string $content): array
    {
        $dir = storage_path('app/public/demo-docs');
        File::ensureDirectoryExists($dir);

        $path = $dir . DIRECTORY_SEPARATOR . $fileName;
        if (! File::exists($path)) {
            File::put($path, $content);
        }

        return [
            'path' => 'demo-docs/' . $fileName,
            'size' => File::size($path),
        ];
    }

    private function ensureProductWarehouseQuantity(int $productId, int $warehouseId, float $quantity): void
    {
        if (! Schema::hasTable('product_warehouse')) {
            return;
        }

        $existing = DB::table('product_warehouse')
            ->where('product_id', $productId)
            ->where('warehouse_id', $warehouseId)
            ->whereNull('product_variant_id')
            ->first();

        if ($existing) {
            DB::table('product_warehouse')
                ->where('id', $existing->id)
                ->update([
                    'qte' => $quantity,
                    'updated_at' => now(),
                ]);
            return;
        }

        DB::table('product_warehouse')->insert([
            'product_id' => $productId,
            'warehouse_id' => $warehouseId,
            'product_variant_id' => null,
            'qte' => $quantity,
            'manage_stock' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
