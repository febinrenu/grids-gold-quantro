<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class JewelryBusinessOperationalSeeder extends Seeder
{
    private const USER_ID = 1;
    private const WAREHOUSE_ID = 1;

    public function run(): void
    {
        if (! DB::table('products')->where('code', 'JWL-RNG-001')->exists()) {
            $this->call(JewelryDemoDataSeeder::class);
        }

        $now = Carbon::now();

        DB::transaction(function () use ($now) {
            $context = $this->buildContext($now);

            $accounts = $this->seedAccountingFoundation($context, $now);
            $locations = $this->seedWarehouseLocations($context, $now);
            $subcategories = $this->seedSubcategories($context, $now);

            $this->seedProductWarehouseLocations($context, $locations, $now);
            $this->seedProductImages($context, $now);
            $this->seedProductPacks($context, $now);
            $this->seedProductSerials($context, $now);
            $this->seedCollections($context, $now);
            $this->seedProductSubcategories($context, $subcategories, $now);
            $this->seedCustomFields($context, $now);
            $this->seedTeamStructure($context, $now);
            $this->seedQuotesAndDrafts($context, $now);
            $this->seedInventoryControls($context, $now);
            $this->seedReturns($context, $accounts, $now);
            $this->seedExpensesAndDeposits($context, $accounts, $now);
            $this->seedOpeningBalancePayments($context, $accounts, $now);
            $this->seedDocuments($context, $now);
            $this->seedCashRegister($context, $now);
            $this->syncAccountBalances($accounts);
        });
    }

    private function buildContext(Carbon $now): array
    {
        $products = DB::table('products')
            ->select('id', 'code', 'name', 'price', 'cost', 'image', 'category_id', 'unit_id', 'unit_sale_id', 'unit_purchase_id', 'jewelry_item_type')
            ->whereNull('deleted_at')
            ->get()
            ->keyBy('code');

        $categories = DB::table('categories')
            ->select('id', 'code', 'name')
            ->whereNull('deleted_at')
            ->get();

        $clients = DB::table('clients')
            ->select('id', 'name', 'opening_balance', 'points')
            ->whereNull('deleted_at')
            ->get()
            ->keyBy('name');

        $providers = DB::table('providers')
            ->select('id', 'name', 'opening_balance')
            ->whereNull('deleted_at')
            ->get()
            ->keyBy('name');

        $productWarehouse = DB::table('product_warehouse')
            ->select('product_id', 'qte')
            ->where('warehouse_id', self::WAREHOUSE_ID)
            ->get()
            ->keyBy('product_id');

        $purchaseDetails = DB::table('purchase_details as pd')
            ->join('products as pr', 'pr.id', '=', 'pd.product_id')
            ->join('purchases as pu', 'pu.id', '=', 'pd.purchase_id')
            ->select(
                'pr.code as sku',
                'pd.id',
                'pd.product_id',
                'pd.purchase_id',
                'pd.quantity',
                'pd.cost',
                'pu.Ref as purchase_ref',
                'pu.provider_id',
                'pu.date as purchase_date'
            )
            ->orderBy('pd.id')
            ->get()
            ->groupBy('sku');

        $saleDetails = DB::table('sale_details as sd')
            ->join('products as pr', 'pr.id', '=', 'sd.product_id')
            ->join('sales as sa', 'sa.id', '=', 'sd.sale_id')
            ->select(
                'pr.code as sku',
                'sd.id',
                'sd.product_id',
                'sd.sale_id',
                'sd.quantity',
                'sd.price',
                'sa.Ref as sale_ref',
                'sa.client_id',
                'sa.date as sale_date'
            )
            ->orderBy('sd.id')
            ->get()
            ->groupBy('sku');

        return [
            'now' => $now,
            'company_id' => Schema::hasTable('companies') ? (int) DB::table('companies')->orderBy('id')->value('id') : 0,
            'warehouse_id' => self::WAREHOUSE_ID,
            'payment_method_id' => (int) (DB::table('payment_methods')->where('name', 'Cash')->value('id')
                ?? DB::table('payment_methods')->orderBy('id')->value('id')
                ?? 1),
            'categories' => $categories,
            'category_ids' => $categories->pluck('id', 'code')->all(),
            'products' => $products,
            'product_warehouse' => $productWarehouse,
            'clients' => $clients,
            'providers' => $providers,
            'purchases_by_sku' => $purchaseDetails,
            'sales_by_sku' => $saleDetails,
        ];
    }

    private function seedAccountingFoundation(array $context, Carbon $now): array
    {
        $accounts = [];
        if (Schema::hasTable('accounts')) {
            $accounts['cash'] = $this->firstOrInsert('accounts', ['account_num' => 'ACC-CASH-001'], [
                'account_name' => 'Showroom Cash Drawer',
                'initial_balance' => 5000.00,
                'balance' => 5000.00,
                'note' => 'Primary cash drawer for the jewelry showroom.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $accounts['bank'] = $this->firstOrInsert('accounts', ['account_num' => 'ACC-BANK-001'], [
                'account_name' => 'Operating Bank Account',
                'initial_balance' => 12000.00,
                'balance' => 12000.00,
                'note' => 'Operating bank ledger for jewelry receipts, refunds, and deposits.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $accounts['expense'] = $this->firstOrInsert('accounts', ['account_num' => 'ACC-EXP-001'], [
                'account_name' => 'Showroom Operating Expense',
                'initial_balance' => 0.00,
                'balance' => 0.00,
                'note' => 'Tracking account for packaging, polishing, and light maintenance costs.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('acc_chart_of_accounts')) {
            $coa = [];
            $coa['cash'] = $this->firstOrInsert('acc_chart_of_accounts', ['code' => '1000'], [
                'account_id' => $accounts['cash'] ?? null,
                'name' => 'Cash on Hand',
                'type' => 'asset',
                'parent_id' => null,
                'level' => 0,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $coa['bank'] = $this->firstOrInsert('acc_chart_of_accounts', ['code' => '1010'], [
                'account_id' => $accounts['bank'] ?? null,
                'name' => 'Operating Bank',
                'type' => 'asset',
                'parent_id' => null,
                'level' => 0,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $coa['inventory'] = $this->firstOrInsert('acc_chart_of_accounts', ['code' => '1200'], [
                'account_id' => null,
                'name' => 'Jewelry Inventory',
                'type' => 'asset',
                'parent_id' => null,
                'level' => 0,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $coa['revenue'] = $this->firstOrInsert('acc_chart_of_accounts', ['code' => '4000'], [
                'account_id' => null,
                'name' => 'Jewelry Sales Revenue',
                'type' => 'income',
                'parent_id' => null,
                'level' => 0,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $coa['expense'] = $this->firstOrInsert('acc_chart_of_accounts', ['code' => '5000'], [
                'account_id' => $accounts['expense'] ?? null,
                'name' => 'Store Operating Expense',
                'type' => 'expense',
                'parent_id' => null,
                'level' => 0,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            if (Schema::hasTable('acc_budgets')) {
                $budgetId = $this->firstOrInsert('acc_budgets', ['name' => 'Jewelry Demo Annual Budget'], [
                    'start_date' => $now->copy()->startOfYear()->toDateString(),
                    'end_date' => $now->copy()->endOfYear()->toDateString(),
                    'currency' => 'USD',
                    'notes' => 'Budget baseline for showroom operations, revenue, and inventory holding.',
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                $this->firstOrInsert('acc_budget_lines', ['budget_id' => $budgetId, 'coa_id' => $coa['revenue']], [
                    'amount' => 180000.000000,
                    'period' => 'monthly',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
                $this->firstOrInsert('acc_budget_lines', ['budget_id' => $budgetId, 'coa_id' => $coa['inventory']], [
                    'amount' => 125000.000000,
                    'period' => 'monthly',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
                $this->firstOrInsert('acc_budget_lines', ['budget_id' => $budgetId, 'coa_id' => $coa['expense']], [
                    'amount' => 24000.000000,
                    'period' => 'monthly',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            if (Schema::hasTable('acc_journal_entries') && Schema::hasTable('acc_journal_entry_lines')) {
                $firstSale = DB::table('sales')->where('Ref', 'SL-JWL-0001')->first();
                if ($firstSale) {
                    $saleEntryId = $this->firstOrInsert('acc_journal_entries', [
                        'reference_type' => 'sale',
                        'reference_id' => $firstSale->id,
                    ], [
                        'date' => $firstSale->date,
                        'status' => 'posted',
                        'posted_at' => $now,
                        'description' => 'Recognize revenue for demo jewelry POS sale ' . $firstSale->Ref,
                        'created_by' => self::USER_ID,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);

                    $this->firstOrInsert('acc_journal_entry_lines', ['journal_entry_id' => $saleEntryId, 'coa_id' => $coa['cash'], 'debit' => (float) $firstSale->GrandTotal], [
                        'account_id' => $accounts['cash'] ?? null,
                        'credit' => 0,
                        'memo' => 'Cash received from retail sale',
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                    $this->firstOrInsert('acc_journal_entry_lines', ['journal_entry_id' => $saleEntryId, 'coa_id' => $coa['revenue'], 'credit' => (float) $firstSale->GrandTotal], [
                        'account_id' => null,
                        'debit' => 0,
                        'memo' => 'Retail jewelry revenue',
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }

            $accounts['coa'] = $coa;
        }

        return $accounts;
    }

    private function seedWarehouseLocations(array $context, Carbon $now): array
    {
        $locations = [];
        if (! Schema::hasTable('warehouse_locations')) {
            return $locations;
        }

        $definitions = [
            'showcase' => ['code' => 'SHOW-A1', 'name' => 'Front Showcase A1'],
            'safe' => ['code' => 'SAFE-B1', 'name' => 'Main Vault Shelf B1'],
            'backroom' => ['code' => 'BACK-C1', 'name' => 'Backroom Packing Shelf C1'],
        ];

        foreach ($definitions as $key => $definition) {
            $locations[$key] = $this->firstOrInsert('warehouse_locations', ['code' => $definition['code']], [
                'warehouse_id' => $context['warehouse_id'],
                'name' => $definition['name'],
                'is_active' => true,
                'is_restricted' => $key === 'safe',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        return $locations;
    }

    private function seedSubcategories(array $context, Carbon $now): array
    {
        $subcategories = [];
        if (! Schema::hasTable('subcategories')) {
            return $subcategories;
        }

        $definitions = [
            'CAT-JWL-RNG' => [
                'engagement' => 'Engagement Rings',
                'wedding' => 'Wedding Bands',
            ],
            'CAT-JWL-NCK' => [
                'bridal' => 'Bridal Necklaces',
                'everyday' => 'Everyday Pendants',
            ],
            'CAT-JWL-BUL' => [
                'bars' => 'Gold Bars',
                'coins' => 'Bullion Coins',
            ],
            'CAT-JWL-SVC' => [
                'custom' => 'Custom Design',
                'repair' => 'Repair Services',
            ],
        ];

        foreach ($definitions as $categoryCode => $items) {
            $categoryId = $context['category_ids'][$categoryCode] ?? null;
            if (! $categoryId) {
                continue;
            }

            foreach ($items as $slug => $name) {
                $subcategories[$slug] = $this->firstOrInsert('subcategories', [
                    'category_id' => $categoryId,
                    'name' => $name,
                ], [
                    'description' => $name . ' curated for the jewelry demo tenant.',
                    'status' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        return $subcategories;
    }

    private function seedProductWarehouseLocations(array $context, array $locations, Carbon $now): void
    {
        if (! Schema::hasTable('product_warehouse_locations') || empty($locations)) {
            return;
        }

        $locationMap = [
            'JWL-BUL-001' => $locations['safe'] ?? null,
            'JWL-BUL-002' => $locations['safe'] ?? null,
            'JWL-BUL-003' => $locations['safe'] ?? null,
            'JWL-RNG-001' => $locations['showcase'] ?? null,
            'JWL-RNG-002' => $locations['showcase'] ?? null,
            'JWL-NCK-002' => $locations['showcase'] ?? null,
            'JWL-BRC-002' => $locations['showcase'] ?? null,
            'JWL-PND-003' => $locations['showcase'] ?? null,
            'JWL-LSE-001' => $locations['backroom'] ?? null,
            'JWL-LSE-002' => $locations['backroom'] ?? null,
        ];

        foreach ($locationMap as $sku => $locationId) {
            $product = $context['products'][$sku] ?? null;
            if (! $product || ! $locationId) {
                continue;
            }

            $this->firstOrInsert('product_warehouse_locations', [
                'product_id' => $product->id,
                'warehouse_id' => $context['warehouse_id'],
            ], [
                'warehouse_location_id' => $locationId,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedProductImages(array $context, Carbon $now): void
    {
        if (! Schema::hasTable('product_images')) {
            return;
        }

        foreach ($context['products'] as $product) {
            if (! $product->image || $product->image === 'no-image.png') {
                continue;
            }

            $this->firstOrInsert('product_images', [
                'product_id' => $product->id,
                'image_path' => $product->image,
            ], [
                'is_main' => true,
                'sort_order' => 0,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedProductPacks(array $context, Carbon $now): void
    {
        if (! Schema::hasTable('product_packs')) {
            return;
        }

        $packDefs = [
            'JWL-BUL-001' => [
                ['name' => 'Single Bar', 'multiplier' => 1, 'price_factor' => 1.00, 'is_default' => true],
                ['name' => 'Investor Pair', 'multiplier' => 2, 'price_factor' => 1.96, 'is_default' => false],
            ],
            'JWL-BUL-002' => [
                ['name' => 'Single Bar', 'multiplier' => 1, 'price_factor' => 1.00, 'is_default' => true],
                ['name' => 'Pack of Five', 'multiplier' => 5, 'price_factor' => 4.82, 'is_default' => false],
            ],
            'JWL-CHN-003' => [
                ['name' => 'Single Chain', 'multiplier' => 1, 'price_factor' => 1.00, 'is_default' => true],
                ['name' => 'Gift Pair', 'multiplier' => 2, 'price_factor' => 1.92, 'is_default' => false],
            ],
            'JWL-LSE-001' => [
                ['name' => 'Single Stone', 'multiplier' => 1, 'price_factor' => 1.00, 'is_default' => true],
                ['name' => 'Matched Pair', 'multiplier' => 2, 'price_factor' => 1.95, 'is_default' => false],
            ],
        ];

        foreach ($packDefs as $sku => $packs) {
            $product = $context['products'][$sku] ?? null;
            if (! $product) {
                continue;
            }

            foreach ($packs as $pack) {
                $this->firstOrInsert('product_packs', [
                    'product_id' => $product->id,
                    'name' => $pack['name'],
                ], [
                    'multiplier' => $pack['multiplier'],
                    'price' => round((float) $product->price * $pack['price_factor'], 2),
                    'is_active' => true,
                    'is_default' => $pack['is_default'],
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }

    private function seedProductSerials(array $context, Carbon $now): void
    {
        if (! Schema::hasTable('product_serials') || ! Schema::hasTable('product_serial_movements')) {
            return;
        }

        $serialDefs = [
            ['sku' => 'JWL-RNG-001', 'serial' => 'SN-JWL-RNG-001-0001', 'status' => 'sold'],
            ['sku' => 'JWL-ERR-003', 'serial' => 'SN-JWL-ERR-003-0001', 'status' => 'sold'],
            ['sku' => 'JWL-CHN-002', 'serial' => 'SN-JWL-CHN-002-0001', 'status' => 'sold'],
            ['sku' => 'JWL-BRC-002', 'serial' => 'SN-JWL-BRC-002-0001', 'status' => 'sold'],
            ['sku' => 'JWL-RNG-002', 'serial' => 'SN-JWL-RNG-002-0001', 'status' => 'available'],
            ['sku' => 'JWL-NCK-005', 'serial' => 'SN-JWL-NCK-005-0001', 'status' => 'available'],
            ['sku' => 'JWL-PND-002', 'serial' => 'SN-JWL-PND-002-0001', 'status' => 'available'],
            ['sku' => 'JWL-BNG-003', 'serial' => 'SN-JWL-BNG-003-0001', 'status' => 'available'],
        ];

        foreach ($serialDefs as $def) {
            $product = $context['products'][$def['sku']] ?? null;
            $purchase = optional(collect($context['purchases_by_sku'][$def['sku']] ?? [])->first());
            if (! $product || ! $purchase->id) {
                continue;
            }

            $sale = optional(collect($context['sales_by_sku'][$def['sku']] ?? [])->first());

            $serialId = $this->firstOrInsert('product_serials', ['serial_number' => $def['serial']], [
                'product_id' => $product->id,
                'product_variant_id' => null,
                'warehouse_id' => $context['warehouse_id'],
                'status' => $def['status'],
                'purchase_id' => $purchase->purchase_id,
                'purchase_detail_id' => $purchase->id,
                'provider_id' => $purchase->provider_id,
                'cost' => $purchase->cost,
                'sale_id' => $def['status'] === 'sold' ? $sale->sale_id : null,
                'sale_detail_id' => $def['status'] === 'sold' ? $sale->id : null,
                'client_id' => $def['status'] === 'sold' ? $sale->client_id : null,
                'notes' => $def['status'] === 'sold'
                    ? 'Serialized demo item sold through the jewelry POS flow.'
                    : 'Serialized demo item currently available in stock.',
                'created_at' => Carbon::parse($purchase->purchase_date ?: $now)->startOfDay(),
                'updated_at' => $now,
            ]);

            $receivedAt = Carbon::parse($purchase->purchase_date ?: $now)->startOfDay();
            $this->firstOrInsert('product_serial_movements', [
                'product_serial_id' => $serialId,
                'action' => 'received',
                'reference_type' => 'purchase',
                'reference_id' => $purchase->purchase_id,
            ], [
                'serial_number' => $def['serial'],
                'from_status' => null,
                'to_status' => 'available',
                'warehouse_id' => $context['warehouse_id'],
                'user_id' => self::USER_ID,
                'notes' => 'Received from supplier into showroom inventory.',
                'created_at' => $receivedAt,
            ]);

            if ($def['status'] === 'sold' && $sale->id) {
                $soldAt = Carbon::parse($sale->sale_date ?: $now)->endOfDay();
                $this->firstOrInsert('product_serial_movements', [
                    'product_serial_id' => $serialId,
                    'action' => 'sold',
                    'reference_type' => 'sale',
                    'reference_id' => $sale->sale_id,
                ], [
                    'serial_number' => $def['serial'],
                    'from_status' => 'available',
                    'to_status' => 'sold',
                    'warehouse_id' => $context['warehouse_id'],
                    'user_id' => self::USER_ID,
                    'notes' => 'Released to retail customer from the POS order.',
                    'created_at' => $soldAt,
                ]);
            }
        }
    }

    private function seedCollections(array $context, Carbon $now): void
    {
        if (! Schema::hasTable('collections') || ! Schema::hasTable('collection_product')) {
            return;
        }

        $defs = [
            'bridal-highlights' => [
                'title' => 'Bridal Highlights',
                'description' => 'Top bridal rings, sets, and heirloom-ready wedding pieces.',
                'limit' => 8,
                'sort_order' => 1,
                'products' => ['JWL-RNG-001', 'JWL-RNG-002', 'JWL-SET-001', 'JWL-SET-002', 'JWL-NCK-001'],
            ],
            'investment-bullion' => [
                'title' => 'Investment Bullion',
                'description' => 'Fine gold bars and coins curated for investment buyers.',
                'limit' => 6,
                'sort_order' => 2,
                'products' => ['JWL-BUL-001', 'JWL-BUL-002', 'JWL-BUL-003'],
            ],
            'daily-wear-edits' => [
                'title' => 'Daily Wear Edits',
                'description' => 'Refined everyday jewelry pieces with strong repeat demand.',
                'limit' => 8,
                'sort_order' => 3,
                'products' => ['JWL-CHN-003', 'JWL-ERR-003', 'JWL-PND-003', 'JWL-BRC-003', 'JWL-RNG-006'],
            ],
        ];

        foreach ($defs as $slug => $definition) {
            $collectionId = $this->firstOrInsert('collections', ['slug' => $slug], [
                'title' => $definition['title'],
                'description' => $definition['description'],
                'limit' => $definition['limit'],
                'sort_order' => $definition['sort_order'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            foreach ($definition['products'] as $index => $sku) {
                $product = $context['products'][$sku] ?? null;
                if (! $product) {
                    continue;
                }

                $this->firstOrInsert('collection_product', [
                    'collection_id' => $collectionId,
                    'product_id' => $product->id,
                ], [
                    'sort_order' => $index + 1,
                    'pinned' => $index === 0,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }

    private function seedProductSubcategories(array $context, array $subcategories, Carbon $now): void
    {
        if (! Schema::hasTable('product_subcategory') || empty($subcategories)) {
            return;
        }

        $map = [
            'JWL-RNG-001' => 'engagement',
            'JWL-RNG-002' => 'wedding',
            'JWL-RNG-003' => 'engagement',
            'JWL-NCK-001' => 'bridal',
            'JWL-NCK-005' => 'everyday',
            'JWL-BUL-001' => 'bars',
            'JWL-BUL-002' => 'bars',
            'JWL-BUL-003' => 'coins',
            'JWL-SVC-001' => 'custom',
            'JWL-SVC-002' => 'repair',
        ];

        foreach ($map as $sku => $subKey) {
            $product = $context['products'][$sku] ?? null;
            $subId = $subcategories[$subKey] ?? null;
            if (! $product || ! $subId) {
                continue;
            }

            $this->firstOrInsert('product_subcategory', [
                'product_id' => $product->id,
                'sub_category_id' => $subId,
            ], [
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedCustomFields(array $context, Carbon $now): void
    {
        if (! Schema::hasTable('custom_fields') || ! Schema::hasTable('custom_field_values')) {
            return;
        }

        $clientOccasionField = $this->firstOrInsert('custom_fields', [
            'name' => 'Preferred Occasion',
            'entity_type' => 'client',
        ], [
            'field_type' => 'select',
            'is_required' => false,
            'is_active' => true,
            'default_value' => json_encode(['Wedding', 'Anniversary', 'Investment', 'Gift']),
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $clientReminderField = $this->firstOrInsert('custom_fields', [
            'name' => 'Anniversary Reminder Date',
            'entity_type' => 'client',
        ], [
            'field_type' => 'date',
            'is_required' => false,
            'is_active' => true,
            'default_value' => null,
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $providerLeadTimeField = $this->firstOrInsert('custom_fields', [
            'name' => 'Average Lead Time (days)',
            'entity_type' => 'provider',
        ], [
            'field_type' => 'number',
            'is_required' => false,
            'is_active' => true,
            'default_value' => '14',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $providerSpecialityField = $this->firstOrInsert('custom_fields', [
            'name' => 'Sourcing Specialty',
            'entity_type' => 'provider',
        ], [
            'field_type' => 'text',
            'is_required' => false,
            'is_active' => true,
            'default_value' => 'Gold bullion and certified gemstones',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $clientId = $context['clients']['Isabella Moreau']->id ?? null;
        $providerId = $context['providers']['Continental Bullion & Gems']->id ?? null;

        if ($clientId) {
            $this->firstOrInsert('custom_field_values', [
                'custom_field_id' => $clientOccasionField,
                'entity_type' => 'App\\Models\\Client',
                'entity_id' => $clientId,
            ], [
                'value' => 'Wedding',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $this->firstOrInsert('custom_field_values', [
                'custom_field_id' => $clientReminderField,
                'entity_type' => 'App\\Models\\Client',
                'entity_id' => $clientId,
            ], [
                'value' => $now->copy()->addMonths(4)->toDateString(),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if ($providerId) {
            $this->firstOrInsert('custom_field_values', [
                'custom_field_id' => $providerLeadTimeField,
                'entity_type' => 'App\\Models\\Provider',
                'entity_id' => $providerId,
            ], [
                'value' => '12',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $this->firstOrInsert('custom_field_values', [
                'custom_field_id' => $providerSpecialityField,
                'entity_type' => 'App\\Models\\Provider',
                'entity_id' => $providerId,
            ], [
                'value' => '22K bridal sets, bullion bars, and matched gemstone pairs',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedTeamStructure(array $context, Carbon $now): void
    {
        if (! Schema::hasTable('departments') || ! Schema::hasTable('designations') || ! Schema::hasTable('office_shifts') || ! Schema::hasTable('employees') || ! $context['company_id']) {
            return;
        }

        $departmentId = $this->firstOrInsert('departments', [
            'company_id' => $context['company_id'],
            'department' => 'Retail Operations',
        ], [
            'department_head' => null,
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $salesDesignationId = $this->firstOrInsert('designations', [
            'company_id' => $context['company_id'],
            'department_id' => $departmentId,
            'designation' => 'Showroom Manager',
        ], [
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $inventoryDesignationId = $this->firstOrInsert('designations', [
            'company_id' => $context['company_id'],
            'department_id' => $departmentId,
            'designation' => 'Inventory Specialist',
        ], [
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $shiftId = $this->firstOrInsert('office_shifts', [
            'company_id' => $context['company_id'],
            'name' => 'Showroom Day Shift',
        ], [
            'monday_in' => '09:00',
            'monday_out' => '18:00',
            'tuesday_in' => '09:00',
            'tuesday_out' => '18:00',
            'wednesday_in' => '09:00',
            'wednesday_out' => '18:00',
            'thursday_in' => '09:00',
            'thursday_out' => '18:00',
            'friday_in' => '09:00',
            'friday_out' => '18:00',
            'saturday_in' => '10:00',
            'saturday_out' => '17:00',
            'sunday_in' => null,
            'sunday_out' => null,
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $managerId = $this->firstOrInsert('employees', ['username' => 'chloe.bennett'], [
            'firstname' => 'Chloe',
            'lastname' => 'Bennett',
            'email' => 'chloe.bennett@gridsgold.test',
            'phone' => '+1-212-555-0301',
            'country' => 'United States',
            'city' => 'New York City',
            'province' => 'New York',
            'zipcode' => '10001',
            'address' => '45 Madison Ave, New York, NY',
            'gender' => 'female',
            'avatar' => 'no_avatar.png',
            'birth_date' => '1990-04-14',
            'joining_date' => $now->copy()->subYears(3)->toDateString(),
            'company_id' => $context['company_id'],
            'department_id' => $departmentId,
            'designation_id' => $salesDesignationId,
            'office_shift_id' => $shiftId,
            'remaining_leave' => 8,
            'total_leave' => 18,
            'hourly_rate' => 32.50,
            'basic_salary' => 5200.00,
            'employment_type' => 'full_time',
            'marital_status' => 'married',
            'whatsapp' => '+1-212-555-0301',
            'linkedin' => 'https://linkedin.example/chloe-bennett',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        $this->firstOrInsert('employees', ['username' => 'omar.haddad'], [
            'firstname' => 'Omar',
            'lastname' => 'Haddad',
            'email' => 'omar.haddad@gridsgold.test',
            'phone' => '+1-212-555-0302',
            'country' => 'United States',
            'city' => 'New York City',
            'province' => 'New York',
            'zipcode' => '10001',
            'address' => '45 Madison Ave, New York, NY',
            'gender' => 'male',
            'avatar' => 'no_avatar.png',
            'birth_date' => '1988-11-03',
            'joining_date' => $now->copy()->subYears(2)->toDateString(),
            'company_id' => $context['company_id'],
            'department_id' => $departmentId,
            'designation_id' => $inventoryDesignationId,
            'office_shift_id' => $shiftId,
            'remaining_leave' => 10,
            'total_leave' => 18,
            'hourly_rate' => 28.00,
            'basic_salary' => 4600.00,
            'employment_type' => 'full_time',
            'marital_status' => 'single',
            'whatsapp' => '+1-212-555-0302',
            'linkedin' => 'https://linkedin.example/omar-haddad',
            'created_at' => $now,
            'updated_at' => $now,
        ]);

        DB::table('departments')->where('id', $departmentId)->update([
            'department_head' => $managerId,
            'updated_at' => $now,
        ]);
    }

    private function seedQuotesAndDrafts(array $context, Carbon $now): void
    {
        $customerId = $context['clients']['Isabella Moreau']->id ?? null;
        if (! $customerId) {
            return;
        }

        if (Schema::hasTable('quotations') && Schema::hasTable('quotation_details')) {
            $quoteId = $this->firstOrInsert('quotations', ['Ref' => 'QT-JWL-0001'], [
                'user_id' => self::USER_ID,
                'date' => $now->copy()->subDays(4)->toDateString(),
                'time' => '11:30:00',
                'client_id' => $customerId,
                'warehouse_id' => $context['warehouse_id'],
                'tax_rate' => 0,
                'TaxNet' => 0,
                'discount' => 0,
                'shipping' => 0,
                'GrandTotal' => round(($context['products']['JWL-RNG-004']->price ?? 0) + ($context['products']['JWL-PND-002']->price ?? 0), 2),
                'statut' => 'sent',
                'notes' => 'Custom quote sent for a matching ring and pendant wedding gift set.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            foreach (['JWL-RNG-004', 'JWL-PND-002'] as $sku) {
                $product = $context['products'][$sku] ?? null;
                if (! $product) {
                    continue;
                }

                $this->firstOrInsert('quotation_details', [
                    'quotation_id' => $quoteId,
                    'product_id' => $product->id,
                ], [
                    'price' => $product->price,
                    'sale_unit_id' => $product->unit_sale_id ?: $product->unit_id,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'discount' => 0,
                    'discount_method' => '1',
                    'total' => $product->price,
                    'quantity' => 1,
                    'product_variant_id' => null,
                    'imei_number' => null,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('draft_sales') && Schema::hasTable('draft_sale_details')) {
            $draftId = $this->firstOrInsert('draft_sales', ['Ref' => 'DRF-JWL-0001'], [
                'user_id' => self::USER_ID,
                'date' => $now->copy()->subDay()->toDateString(),
                'client_id' => $customerId,
                'warehouse_id' => $context['warehouse_id'],
                'tax_rate' => 0,
                'TaxNet' => 0,
                'discount' => 25.00,
                'discount_Method' => '2',
                'shipping' => 0,
                'GrandTotal' => round(($context['products']['JWL-BNG-002']->price ?? 0) + ($context['products']['JWL-SVC-002']->price ?? 0) - 25, 2),
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            foreach ([
                ['sku' => 'JWL-BNG-002', 'qty' => 1, 'discount' => 0],
                ['sku' => 'JWL-SVC-002', 'qty' => 1, 'discount' => 25],
            ] as $detail) {
                $product = $context['products'][$detail['sku']] ?? null;
                if (! $product) {
                    continue;
                }

                $lineTotal = round(($product->price - $detail['discount']) * $detail['qty'], 2);
                $this->firstOrInsert('draft_sale_details', [
                    'draft_sale_id' => $draftId,
                    'product_id' => $product->id,
                ], [
                    'date' => $now->copy()->subDay()->toDateString(),
                    'product_variant_id' => null,
                    'imei_number' => null,
                    'price' => $product->price,
                    'sale_unit_id' => $product->unit_sale_id ?: $product->unit_id,
                    'product_pack_id' => null,
                    'pack_multiplier' => null,
                    'pack_name' => null,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'discount' => $detail['discount'],
                    'discount_method' => '1',
                    'price_type' => 'retail',
                    'total' => $lineTotal,
                    'quantity' => $detail['qty'],
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }

    private function seedInventoryControls(array $context, Carbon $now): void
    {
        if (Schema::hasTable('adjustments') && Schema::hasTable('adjustment_details')) {
            $adjustmentId = $this->firstOrInsert('adjustments', ['Ref' => 'ADJ-JWL-0001'], [
                'user_id' => self::USER_ID,
                'date' => $now->copy()->subDays(2)->toDateString(),
                'time' => '16:15:00',
                'warehouse_id' => $context['warehouse_id'],
                'items' => 2,
                'notes' => 'Cycle count correction: one chain found, one bracelet marked short in showcase.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $adjustments = [
                ['sku' => 'JWL-CHN-003', 'quantity' => 2, 'type' => 'add'],
                ['sku' => 'JWL-BRC-003', 'quantity' => 1, 'type' => 'sub'],
            ];

            foreach ($adjustments as $detail) {
                $product = $context['products'][$detail['sku']] ?? null;
                if (! $product) {
                    continue;
                }

                $this->firstOrInsert('adjustment_details', [
                    'adjustment_id' => $adjustmentId,
                    'product_id' => $product->id,
                ], [
                    'product_variant_id' => null,
                    'quantity' => $detail['quantity'],
                    'type' => $detail['type'],
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                $this->applyStockDelta($product->id, $detail['type'] === 'add' ? $detail['quantity'] : -$detail['quantity']);
            }
        }

        if (Schema::hasTable('damages') && Schema::hasTable('damage_details')) {
            $damageId = $this->firstOrInsert('damages', ['Ref' => 'DMG-JWL-0001'], [
                'user_id' => self::USER_ID,
                'date' => $now->copy()->subDay()->toDateString(),
                'time' => '13:20:00',
                'warehouse_id' => $context['warehouse_id'],
                'items' => 1,
                'notes' => 'Pendant chain clasp scratched during display reset; moved out of saleable stock.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $product = $context['products']['JWL-PND-003'] ?? null;
            if ($product) {
                $this->firstOrInsert('damage_details', [
                    'damage_id' => $damageId,
                    'product_id' => $product->id,
                ], [
                    'product_variant_id' => null,
                    'quantity' => 1,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
                $this->applyStockDelta($product->id, -1);
            }
        }

        if (Schema::hasTable('count_stock')) {
            $categoryId = $context['category_ids']['CAT-JWL-RNG'] ?? null;
            $stockFile = $this->ensureDemoFile('stock-count-jewelry-demo.csv', "sku,expected_qty,counted_qty\nJWL-RNG-001,5,5\nJWL-RNG-002,14,14\nJWL-CHN-003,20,22\n");

            $this->firstOrInsert('count_stock', ['file_stock' => $stockFile['path']], [
                'user_id' => self::USER_ID,
                'date' => $now->toDateString(),
                'warehouse_id' => $context['warehouse_id'],
                'category_id' => $categoryId,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedReturns(array $context, array $accounts, Carbon $now): void
    {
        if (Schema::hasTable('purchase_returns') && Schema::hasTable('purchase_return_details')) {
            $purchaseRef = collect($context['purchases_by_sku']['JWL-BUL-002'] ?? [])->first();
            $product = $context['products']['JWL-BUL-002'] ?? null;
            if ($purchaseRef && $product) {
                $grandTotal = round((float) $purchaseRef->cost, 2);
                $returnId = $this->firstOrInsert('purchase_returns', ['Ref' => 'PRT-JWL-0001'], [
                    'user_id' => self::USER_ID,
                    'date' => $now->copy()->subDays(3)->toDateString(),
                    'time' => '15:00:00',
                    'purchase_id' => $purchaseRef->purchase_id,
                    'provider_id' => $purchaseRef->provider_id,
                    'warehouse_id' => $context['warehouse_id'],
                    'tax_rate' => 0,
                    'TaxNet' => 0,
                    'discount' => 0,
                    'shipping' => 0,
                    'GrandTotal' => $grandTotal,
                    'paid_amount' => $grandTotal,
                    'payment_statut' => 'paid',
                    'statut' => 'completed',
                    'notes' => 'Supplier accepted return of one 10g bullion bar with minor packaging dent.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                $this->firstOrInsert('purchase_return_details', [
                    'purchase_return_id' => $returnId,
                    'product_id' => $product->id,
                ], [
                    'cost' => $purchaseRef->cost,
                    'purchase_unit_id' => $product->unit_purchase_id ?: $product->unit_id,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'discount' => 0,
                    'discount_method' => '1',
                    'total' => $grandTotal,
                    'quantity' => 1,
                    'product_variant_id' => null,
                    'imei_number' => null,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                if (Schema::hasTable('payment_purchase_returns')) {
                    $this->firstOrInsert('payment_purchase_returns', ['Ref' => 'PAY-PRT-JWL-0001'], [
                        'user_id' => self::USER_ID,
                        'date' => $now->copy()->subDays(3)->toDateString(),
                        'purchase_return_id' => $returnId,
                        'account_id' => $accounts['bank'] ?? null,
                        'montant' => $grandTotal,
                        'change' => 0,
                        'payment_method_id' => $context['payment_method_id'],
                        'notes' => 'Supplier refund credited back to operating bank account.',
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }

                $this->applyStockDelta($product->id, -1);
            }
        }

        if (Schema::hasTable('sale_returns') && Schema::hasTable('sale_return_details')) {
            $saleRef = collect($context['sales_by_sku']['JWL-ERR-003'] ?? [])->first();
            $product = $context['products']['JWL-ERR-003'] ?? null;
            if ($saleRef && $product) {
                $grandTotal = round((float) $saleRef->price, 2);
                $returnId = $this->firstOrInsert('sale_returns', ['Ref' => 'SRT-JWL-0001'], [
                    'user_id' => self::USER_ID,
                    'date' => $now->copy()->subDay()->toDateString(),
                    'time' => '12:45:00',
                    'sale_id' => $saleRef->sale_id,
                    'client_id' => $saleRef->client_id,
                    'warehouse_id' => $context['warehouse_id'],
                    'tax_rate' => 0,
                    'TaxNet' => 0,
                    'discount' => 0,
                    'shipping' => 0,
                    'GrandTotal' => $grandTotal,
                    'paid_amount' => $grandTotal,
                    'payment_statut' => 'paid',
                    'statut' => 'received',
                    'notes' => 'Customer exchanged the pearl earring set for a pendant after gifting consultation.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                $this->firstOrInsert('sale_return_details', [
                    'sale_return_id' => $returnId,
                    'product_id' => $product->id,
                ], [
                    'price' => $saleRef->price,
                    'sale_unit_id' => $product->unit_sale_id ?: $product->unit_id,
                    'product_pack_id' => null,
                    'pack_multiplier' => null,
                    'pack_name' => null,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'discount' => 0,
                    'discount_method' => '1',
                    'product_variant_id' => null,
                    'imei_number' => null,
                    'quantity' => 1,
                    'total' => $grandTotal,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                if (Schema::hasTable('payment_sale_returns')) {
                    $this->firstOrInsert('payment_sale_returns', ['Ref' => 'PAY-SRT-JWL-0001'], [
                        'user_id' => self::USER_ID,
                        'date' => $now->copy()->subDay()->toDateString(),
                        'sale_return_id' => $returnId,
                        'account_id' => $accounts['cash'] ?? null,
                        'montant' => $grandTotal,
                        'change' => 0,
                        'payment_method_id' => $context['payment_method_id'],
                        'notes' => 'Refund issued from the showroom cash drawer.',
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }

                $this->applyStockDelta($product->id, 1);
            }
        }
    }

    private function seedExpensesAndDeposits(array $context, array $accounts, Carbon $now): void
    {
        $expenseIds = [];

        if (Schema::hasTable('expense_categories')) {
            $expenseIds['packaging'] = $this->firstOrInsert('expense_categories', ['name' => 'Packaging & Presentation'], [
                'user_id' => self::USER_ID,
                'description' => 'Luxury boxes, pouches, ribbons, tags, and bagging supplies.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $expenseIds['maintenance'] = $this->firstOrInsert('expense_categories', ['name' => 'Polishing & Maintenance'], [
                'user_id' => self::USER_ID,
                'description' => 'Ultrasonic cleaning fluid, cloths, polishing wheels, and bench consumables.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        if (Schema::hasTable('expenses') && ! empty($expenseIds)) {
            $expenseOne = $this->firstOrInsert('expenses', ['Ref' => 'EXP-JWL-0001'], [
                'date' => $now->copy()->subDays(5)->toDateString(),
                'user_id' => self::USER_ID,
                'expense_category_id' => $expenseIds['packaging'],
                'warehouse_id' => $context['warehouse_id'],
                'account_id' => $accounts['cash'] ?? null,
                'details' => 'Purchased premium suede ring boxes and branded ribbon for bridal orders.',
                'amount' => 145.00,
                'payment_method_id' => $context['payment_method_id'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $expenseTwo = $this->firstOrInsert('expenses', ['Ref' => 'EXP-JWL-0002'], [
                'date' => $now->copy()->subDays(1)->toDateString(),
                'user_id' => self::USER_ID,
                'expense_category_id' => $expenseIds['maintenance'],
                'warehouse_id' => $context['warehouse_id'],
                'account_id' => $accounts['cash'] ?? null,
                'details' => 'Bench polishing compounds and steam-cleaner maintenance supplies.',
                'amount' => 82.50,
                'payment_method_id' => $context['payment_method_id'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            if (Schema::hasTable('expense_documents')) {
                $expenseDoc = $this->ensureDemoFile('expense-exp-jwl-0001.txt', "Vendor: Luxe Packaging House\nItems: Ring boxes, branded ribbon, velvet pouches\nAmount: 145.00 USD\n");
                $this->firstOrInsert('expense_documents', [
                    'expense_id' => $expenseOne,
                    'name' => 'EXP-JWL-0001 Support Slip.txt',
                ], [
                    'path' => $expenseDoc['path'],
                    'size' => $expenseDoc['size'],
                    'mime_type' => 'text/plain',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('deposit_categories')) {
            $capitalCategory = $this->firstOrInsert('deposit_categories', ['title' => 'Owner Capital Injection'], [
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            if (Schema::hasTable('deposits')) {
                $this->firstOrInsert('deposits', ['deposit_ref' => 'DEP-JWL-0001'], [
                    'user_id' => self::USER_ID,
                    'date' => $now->copy()->subDays(6)->toDateString(),
                    'account_id' => $accounts['bank'] ?? null,
                    'deposit_category_id' => $capitalCategory,
                    'amount' => 2500.00,
                    'description' => 'Owner-funded top-up for peak festive inventory and marketing spend.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }

    private function seedOpeningBalancePayments(array $context, array $accounts, Carbon $now): void
    {
        $client = $context['clients']['Julian Whitfield'] ?? null;
        if ($client && Schema::hasTable('client_opening_balance_payments')) {
            DB::table('clients')->where('id', $client->id)->update([
                'opening_balance' => 180.00,
                'updated_at' => $now,
            ]);

            $this->firstOrInsert('client_opening_balance_payments', ['Ref' => 'COB-JWL-0001'], [
                'client_id' => $client->id,
                'user_id' => self::USER_ID,
                'date' => $now->copy()->subDays(12)->toDateString(),
                'montant' => 75.00,
                'change' => 0,
                'payment_method_id' => $context['payment_method_id'],
                'account_id' => $accounts['cash'] ?? null,
                'notes' => 'Customer settled part of an old bridal customization advance.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $provider = $context['providers']['Precision Casting Works'] ?? null;
        if ($provider && Schema::hasTable('provider_opening_balance_payments')) {
            DB::table('providers')->where('id', $provider->id)->update([
                'opening_balance' => 240.00,
                'updated_at' => $now,
            ]);

            $this->firstOrInsert('provider_opening_balance_payments', ['Ref' => 'POB-JWL-0001'], [
                'provider_id' => $provider->id,
                'user_id' => self::USER_ID,
                'date' => $now->copy()->subDays(9)->toDateString(),
                'montant' => 90.00,
                'change' => 0,
                'payment_method_id' => $context['payment_method_id'],
                'account_id' => $accounts['bank'] ?? null,
                'notes' => 'Part-payment against casting labour brought in before demo opening balance cutoff.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    private function seedDocuments(array $context, Carbon $now): void
    {
        if (Schema::hasTable('purchase_documents')) {
            $purchase = DB::table('purchases')->where('Ref', 'PUR-JWL-0001')->first();
            if ($purchase) {
                $file = $this->ensureDemoFile('purchase-pur-jwl-0001.txt', "Purchase Ref: PUR-JWL-0001\nSupplier: Continental Bullion & Gems\nNotes: Initial stock landing note for jewelry demo inventory.\n");
                $this->firstOrInsert('purchase_documents', [
                    'purchase_id' => $purchase->id,
                    'name' => 'PUR-JWL-0001 Landing Note.txt',
                ], [
                    'path' => $file['path'],
                    'size' => $file['size'],
                    'mime_type' => 'text/plain',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('sale_documents')) {
            $sale = DB::table('sales')->where('Ref', 'SL-JWL-0001')->first();
            if ($sale) {
                $file = $this->ensureDemoFile('sale-sl-jwl-0001.txt', "Sale Ref: SL-JWL-0001\nCustomer: Isabella Moreau\nNotes: Gift wrap confirmation and delivery authorization.\n");
                $this->firstOrInsert('sale_documents', [
                    'sale_id' => $sale->id,
                    'name' => 'SL-JWL-0001 Customer Confirmation.txt',
                ], [
                    'path' => $file['path'],
                    'size' => $file['size'],
                    'mime_type' => 'text/plain',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }

    private function seedCashRegister(array $context, Carbon $now): void
    {
        if (! Schema::hasTable('cash_registers')) {
            return;
        }

        $openedAt = $now->copy()->subDays(1)->setTime(9, 0);
        $closedAt = $now->copy()->subDays(1)->setTime(20, 0);

        $this->firstOrInsert('cash_registers', [
            'user_id' => self::USER_ID,
            'warehouse_id' => $context['warehouse_id'],
            'opened_at' => $openedAt->format('Y-m-d H:i:s'),
        ], [
            'opening_balance' => 2500.00,
            'closing_balance' => 4128.50,
            'total_sales' => 1880.75,
            'cash_in' => 75.00,
            'cash_out' => 327.25,
            'difference' => 0.00,
            'status' => 'closed',
            'closed_at' => $closedAt->format('Y-m-d H:i:s'),
            'notes' => 'Demo register closeout covering jewelry showroom cash activity and returns.',
            'created_at' => $now,
            'updated_at' => $now,
        ]);
    }

    private function syncAccountBalances(array $accounts): void
    {
        if (! Schema::hasTable('accounts')) {
            return;
        }

        if (! empty($accounts['cash'])) {
            DB::table('accounts')->where('id', $accounts['cash'])->update(['balance' => 4707.25]);
        }
        if (! empty($accounts['bank'])) {
            DB::table('accounts')->where('id', $accounts['bank'])->update(['balance' => 14591.50]);
        }
        if (! empty($accounts['expense'])) {
            DB::table('accounts')->where('id', $accounts['expense'])->update(['balance' => 227.50]);
        }
    }

    private function firstOrInsert(string $table, array $where, array $values)
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

    private function applyStockDelta(int $productId, float $delta): void
    {
        if (! Schema::hasTable('product_warehouse')) {
            return;
        }

        $row = DB::table('product_warehouse')
            ->where('product_id', $productId)
            ->where('warehouse_id', self::WAREHOUSE_ID)
            ->first();

        if (! $row) {
            return;
        }

        DB::table('product_warehouse')
            ->where('product_id', $productId)
            ->where('warehouse_id', self::WAREHOUSE_ID)
            ->update([
                'qte' => round(max(0, (float) $row->qte + $delta), 3),
                'updated_at' => now(),
            ]);
    }
}
