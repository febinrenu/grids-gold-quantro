<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

/**
 * Jewelry Demo Tenant Generator.
 *
 * Populates a jewelry_mode tenant with a realistic, fully-priced (USD)
 * catalog: rings, necklaces, bracelets, bangles, earrings, chains, pendants,
 * bridal sets, gold bullion, loose stones, and two customization/repair
 * service items — each with real metal/karat/weight/making-charge/wastage
 * data, USD pricing computed from an internally-consistent gold-rate table,
 * and a distinct product image (no shared placeholder).
 *
 * Modeled directly on the existing DemoDataSeeder.php: raw DB inserts, no
 * Eloquent events, idempotent (bails out if demo jewelry products already
 * exist), and keeps on-hand stock consistent with purchases minus sales.
 *
 * Also turns jewelry_mode + dark_mode on for the tenant's settings row,
 * since this seeder is specifically for standing up the jewelry demo
 * experience (the base SettingSeeder/DatabaseSeeder used by every tenant
 * type is left untouched, so non-jewelry tenants are unaffected).
 *
 * Run with: php artisan db:seed --class=JewelryDemoDataSeeder
 * (inside the tenant context, e.g. via `tenants:artisan db:seed ...`).
 */
class JewelryDemoDataSeeder extends Seeder
{
    private const WAREHOUSE_ID = 1;
    private const USER_ID = 1;
    private const CURRENCY_ID = 1; // USD, per CurrencySeeder

    /** USD per gram, by metal code + karat/fineness name. Internally consistent
     *  approximation of real bullion pricing (24K gold ~ $75/g spot). */
    private const METAL_RATES = [
        'GOLD' => ['18K' => 56.25, '21K' => 65.63, '22K' => 68.70, '24K' => 75.00],
        'SILVER' => ['800' => 0.72, '900' => 0.81, '925' => 0.83],
        'PLATINUM' => ['950' => 30.40],
    ];

    /** @var array<string,int> metal code => metal_types.id */
    private array $metalIds = [];
    /** @var array<string,int> "METAL:KARAT" => karats.id */
    private array $karatIds = [];
    /** @var array<string,int> stone code => stone_types.id */
    private array $stoneIds = [];

    public function run(): void
    {
        if (DB::table('products')->where('code', 'JWL-RNG-001')->exists()) {
            return;
        }

        $this->loadReferenceData();

        DB::transaction(function () {
            $now = Carbon::now();

            $this->enableJewelryTenantDefaults();

            $unitId = $this->seedUnit();
            $categories = $this->seedCategories();
            $brands = $this->seedBrands();
            $goldRates = $this->seedGoldRates($now);

            $products = $this->seedProducts($unitId, $categories, $brands, $goldRates, $now);
            $providers = $this->seedProviders($now);
            $clients = $this->seedClients($now);

            $onHand = array_fill_keys(array_keys($products), 0.0);

            $this->seedPurchases($products, $providers, $onHand, $now);
            $this->seedSales($products, $clients, $goldRates, $onHand, $now);
            $this->seedStock($products, $onHand, $now);
        });
    }

    /**
     * Turn on jewelry_mode (+ default dark appearance) for this tenant.
     * Additive settings only — never touches non-jewelry tenants, since this
     * seeder is only ever run explicitly against a jewelry tenant.
     */
    private function enableJewelryTenantDefaults(): void
    {
        if (! DB::table('settings')->where('id', 1)->exists()) {
            return;
        }

        DB::table('settings')->where('id', 1)->update([
            'jewelry_mode' => 1,
            'dark_mode' => 1,
            'default_making_charge_type' => 'per_gram',
            'default_making_charge_value' => 15.00,
            'default_wastage_type' => 'percentage_of_weight',
            'default_wastage_value' => 4.000,
        ]);

        if (DB::table('pos_settings')->where('id', 1)->exists()) {
            DB::table('pos_settings')->where('id', 1)->update([
                'show_gold_rate_on_pos' => 1,
            ]);
        }
    }

    private function loadReferenceData(): void
    {
        foreach (DB::table('metal_types')->get() as $metal) {
            $this->metalIds[$metal->code] = $metal->id;
        }

        foreach (DB::table('karats')->get() as $karat) {
            $metalCode = array_search($karat->metal_type_id, $this->metalIds, true);
            if ($metalCode !== false) {
                $this->karatIds[$metalCode . ':' . $karat->name] = $karat->id;
            }
        }

        foreach (DB::table('stone_types')->get() as $stone) {
            $this->stoneIds[$stone->code] = $stone->id;
        }
    }

    private function cashPaymentMethodId(): int
    {
        return DB::table('payment_methods')->where('name', 'Cash')->value('id')
            ?? DB::table('payment_methods')->orderBy('id')->value('id');
    }

    private function seedUnit(): int
    {
        $existing = DB::table('units')->where('ShortName', 'pc')->value('id');
        if ($existing) {
            return $existing;
        }

        return DB::table('units')->insertGetId([
            'name' => 'Piece',
            'ShortName' => 'pc',
            'operator' => '*',
            'operator_value' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }

    /** @return array<string,int> category key => id */
    private function seedCategories(): array
    {
        $now = Carbon::now();
        $rows = [
            'rings' => ['code' => 'CAT-JWL-RNG', 'name' => 'Rings'],
            'necklaces' => ['code' => 'CAT-JWL-NCK', 'name' => 'Necklaces'],
            'bracelets' => ['code' => 'CAT-JWL-BRC', 'name' => 'Bracelets'],
            'bangles' => ['code' => 'CAT-JWL-BNG', 'name' => 'Bangles'],
            'earrings' => ['code' => 'CAT-JWL-ERR', 'name' => 'Earrings'],
            'chains' => ['code' => 'CAT-JWL-CHN', 'name' => 'Chains'],
            'pendants' => ['code' => 'CAT-JWL-PND', 'name' => 'Pendants'],
            'sets' => ['code' => 'CAT-JWL-SET', 'name' => 'Bridal Sets'],
            'bullion' => ['code' => 'CAT-JWL-BUL', 'name' => 'Gold Bars & Coins'],
            'loose_stones' => ['code' => 'CAT-JWL-LSE', 'name' => 'Loose Stones'],
            'services' => ['code' => 'CAT-JWL-SVC', 'name' => 'Jewelry Services'],
        ];

        $ids = [];
        foreach ($rows as $key => $row) {
            $existing = DB::table('categories')->where('code', $row['code'])->value('id');
            $ids[$key] = $existing ?: DB::table('categories')->insertGetId($row + [
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        return $ids;
    }

    /** @return array<string,int> brand key => id */
    private function seedBrands(): array
    {
        $now = Carbon::now();
        $names = [
            'aurelia' => 'Aurelia Fine Jewelry',
            'gg_atelier' => 'Grids Gold Atelier',
            'heritage' => 'Heritage Gold Co.',
            'lumiere' => 'Lumière Diamonds',
        ];

        $ids = [];
        foreach ($names as $key => $name) {
            $existing = DB::table('brands')->where('name', $name)->value('id');
            $ids[$key] = $existing ?: DB::table('brands')->insertGetId([
                'name' => $name,
                'image' => 'no-image.png',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        return $ids;
    }

    /**
     * Insert today's + a 30-day-old rate per metal/karat so the Gold Rates
     * screen has real history and every product references a live, current
     * rate (insert-only, per GoldRateService's design).
     *
     * @return array<string,int> "METAL:KARAT" => current gold_rates.id
     */
    private function seedGoldRates(Carbon $now): array
    {
        $currentIds = [];

        foreach (self::METAL_RATES as $metalCode => $karats) {
            foreach ($karats as $karatName => $rate) {
                $karatId = $this->karatIds[$metalCode . ':' . $karatName] ?? null;
                $metalId = $this->metalIds[$metalCode] ?? null;
                if (! $karatId || ! $metalId) {
                    continue;
                }

                // Historical rate from 30 days ago, ~1.5% lower — shows a
                // realistic recent uptrend on the rate-history screen.
                DB::table('gold_rates')->insert([
                    'warehouse_id' => null,
                    'metal_type_id' => $metalId,
                    'karat_id' => $karatId,
                    'currency_id' => self::CURRENCY_ID,
                    'rate_per_weight_unit' => round($rate * 0.985, 2),
                    'weight_uom' => 'g',
                    'rate_source' => 'manual',
                    'effective_at' => $now->copy()->subDays(30),
                    'status' => 'expired',
                    'created_by' => self::USER_ID,
                    'created_at' => $now->copy()->subDays(30),
                    'updated_at' => $now->copy()->subDays(30),
                ]);

                $currentIds[$metalCode . ':' . $karatName] = DB::table('gold_rates')->insertGetId([
                    'warehouse_id' => null,
                    'metal_type_id' => $metalId,
                    'karat_id' => $karatId,
                    'currency_id' => self::CURRENCY_ID,
                    'rate_per_weight_unit' => $rate,
                    'weight_uom' => 'g',
                    'rate_source' => 'manual',
                    'effective_at' => $now->copy()->subHours(6),
                    'status' => 'active',
                    'created_by' => self::USER_ID,
                    'created_at' => $now->copy()->subHours(6),
                    'updated_at' => $now->copy()->subHours(6),
                ]);
            }
        }

        return $currentIds;
    }

    /**
     * Full jewelry product catalog. Each row's price is computed (not
     * hand-typed) from metal weight × current gold rate + wastage + making
     * charge + stone value, then a 20% retail markup — the same components
     * JewelryPricingService applies at sale time, so the seeded catalog
     * price and a live pricing-preview recalculation agree.
     *
     * @return array<string,array> catalog key => product definition
     */
    private function catalogDefs(): array
    {
        return [
            'JWL-RNG-001' => ['name' => 'Aurelia Diamond Solitaire Engagement Ring', 'desc' => 'A timeless solitaire engagement ring in 18K gold, set with a round brilliant-cut diamond in a classic four-prong setting.', 'cat' => 'rings', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 4.200, 'net' => 4.100, 'metalw' => 3.800, 'mk_type' => 'per_gram', 'mk_val' => 18.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 5.000, 'hallmark' => 'BIS 916 HM', 'cert' => 'GIA-2185603671', 'stones' => [['DIAMOND', 'Round Brilliant Diamond', 1, 0.750, 'F', 'VS1', 'Excellent', 'Round', 420.00]], 'stock' => 6],
            'JWL-RNG-002' => ['name' => 'Grids Gold Classic Wedding Band', 'desc' => 'A comfort-fit 22K gold wedding band with a smooth high-polish finish, sized for everyday wear.', 'cat' => 'rings', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '22K', 'gross' => 5.600, 'net' => 5.600, 'metalw' => 5.600, 'mk_type' => 'per_gram', 'mk_val' => 9.50, 'wst_type' => 'percentage_of_weight', 'wst_val' => 3.000, 'hallmark' => 'BIS 916 HM', 'cert' => null, 'stones' => [], 'stock' => 14],
            'JWL-RNG-003' => ['name' => 'Ruby Halo Statement Ring', 'desc' => 'An 18K gold statement ring featuring a vivid oval-cut ruby encircled by a halo of pavé diamonds.', 'cat' => 'rings', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 4.900, 'net' => 4.700, 'metalw' => 4.100, 'mk_type' => 'per_gram', 'mk_val' => 22.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 5.000, 'hallmark' => 'BIS 916 HM', 'cert' => 'GRS-2024-88213', 'stones' => [['RUBY', 'Oval-Cut Burmese Ruby', 1, 1.100, 'Pigeon Blood Red', 'VS', 'Oval', 'Oval', 260.00], ['DIAMOND', 'Pavé Diamond Melee', 16, 0.320, 'G', 'VS2', 'Very Good', 'Round', 45.00]], 'stock' => 4],
            'JWL-RNG-004' => ['name' => 'Emerald Radiance Ring', 'desc' => 'A 21K gold ring centered on a rich green emerald-cut emerald, flanked by tapered baguette diamonds.', 'cat' => 'rings', 'brand' => 'lumiere', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '21K', 'gross' => 5.100, 'net' => 4.900, 'metalw' => 4.300, 'mk_type' => 'percentage', 'mk_val' => 14.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.500, 'hallmark' => 'BIS 875 HM', 'cert' => 'GUBELIN-EM55021', 'stones' => [['EMERALD', 'Emerald-Cut Colombian Emerald', 1, 0.950, 'Vivid Green', 'VS', 'Excellent', 'Emerald', 300.00], ['DIAMOND', 'Tapered Baguette Diamond', 2, 0.200, 'F', 'VS1', 'Excellent', 'Baguette', 95.00]], 'stock' => 5],
            'JWL-RNG-005' => ['name' => 'Sapphire Twist Ring', 'desc' => 'An 18K gold twist-shank ring set with a deep blue round sapphire, finished with a soft satin band texture.', 'cat' => 'rings', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 4.400, 'net' => 4.250, 'metalw' => 3.850, 'mk_type' => 'per_gram', 'mk_val' => 17.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.500, 'hallmark' => 'BIS 916 HM', 'cert' => 'AIGS-SP33012', 'stones' => [['SAPPHIRE', 'Round Ceylon Sapphire', 1, 0.850, 'Royal Blue', 'VS', 'Excellent', 'Round', 210.00]], 'stock' => 7],
            'JWL-RNG-006' => ['name' => 'Sterling Infinity Ring', 'desc' => 'A 925 sterling silver infinity-motif ring with a single bezel-set diamond accent, ideal for everyday elegance.', 'cat' => 'rings', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'SILVER', 'karat' => '925', 'gross' => 3.200, 'net' => 3.200, 'metalw' => 3.200, 'mk_type' => 'fixed', 'mk_val' => 12.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 2.500, 'hallmark' => null, 'cert' => null, 'stones' => [['DIAMOND', 'Bezel-Set Diamond Accent', 1, 0.100, 'H', 'SI1', 'Good', 'Round', 65.00]], 'stock' => 18],

            'JWL-NCK-001' => ['name' => 'Aurelia Diamond Tennis Necklace', 'desc' => 'A graduated 18K gold necklace set with a continuous line of round brilliant diamonds, secured by a box clasp.', 'cat' => 'necklaces', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 12.500, 'net' => 12.000, 'metalw' => 10.800, 'mk_type' => 'per_gram', 'mk_val' => 20.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 5.000, 'hallmark' => 'BIS 916 HM', 'cert' => 'GIA-2199873341', 'stones' => [['DIAMOND', 'Round Brilliant Diamond Line', 24, 2.400, 'G', 'VS2', 'Very Good', 'Round', 55.00]], 'stock' => 3],
            'JWL-NCK-002' => ['name' => 'Ruby Drop Necklace', 'desc' => 'A 22K gold necklace with a single pear-shaped ruby drop pendant on a delicate cable chain.', 'cat' => 'necklaces', 'brand' => 'heritage', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '22K', 'gross' => 9.800, 'net' => 9.500, 'metalw' => 9.000, 'mk_type' => 'per_gram', 'mk_val' => 12.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.000, 'hallmark' => 'BIS 916 HM', 'cert' => 'GRS-2024-91045', 'stones' => [['RUBY', 'Pear-Cut Ruby Drop', 1, 1.450, 'Vivid Red', 'VS', 'Excellent', 'Pear', 310.00]], 'stock' => 5],
            'JWL-NCK-003' => ['name' => 'Pearl Strand Necklace', 'desc' => 'A classic strand of 21 lustrous Akoya cultured pearls, finished with an 18K gold ball clasp.', 'cat' => 'necklaces', 'brand' => 'heritage', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 6.200, 'net' => 6.200, 'metalw' => 2.100, 'mk_type' => 'fixed', 'mk_val' => 45.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 2.000, 'hallmark' => null, 'cert' => 'SSEF-PRL7723', 'stones' => [['PEARL', 'Akoya Cultured Pearl', 21, 42.000, 'White Rosé', 'AAA', 'Round', 'Round', 8.50]], 'stock' => 6],
            'JWL-NCK-004' => ['name' => 'Emerald Cascade Necklace', 'desc' => 'A 21K gold cascade necklace featuring five graduated emeralds along a fine curb chain.', 'cat' => 'necklaces', 'brand' => 'lumiere', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '21K', 'gross' => 8.700, 'net' => 8.400, 'metalw' => 7.600, 'mk_type' => 'percentage', 'mk_val' => 13.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.000, 'hallmark' => 'BIS 875 HM', 'cert' => 'GUBELIN-EM55190', 'stones' => [['EMERALD', 'Graduated Emerald', 5, 1.600, 'Vivid Green', 'VS', 'Very Good', 'Oval', 145.00]], 'stock' => 3],
            'JWL-NCK-005' => ['name' => 'Opal Sunset Necklace', 'desc' => 'An 18K gold necklace showcasing a shimmering Australian opal pendant with rainbow play-of-colour.', 'cat' => 'necklaces', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 7.400, 'net' => 7.200, 'metalw' => 6.600, 'mk_type' => 'per_gram', 'mk_val' => 15.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.000, 'hallmark' => 'BIS 916 HM', 'cert' => 'GIA-OPL30044', 'stones' => [['OPAL', 'Australian Boulder Opal', 1, 2.200, 'Multicolor Play-of-Colour', 'N1', 'Excellent', 'Freeform', 180.00]], 'stock' => 4],

            'JWL-BRC-001' => ['name' => 'Aurelia Diamond Tennis Bracelet', 'desc' => 'A classic 18K gold tennis bracelet featuring a continuous line of matched round diamonds in a four-prong setting.', 'cat' => 'bracelets', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 9.800, 'net' => 9.400, 'metalw' => 8.100, 'mk_type' => 'per_gram', 'mk_val' => 19.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 5.000, 'hallmark' => 'BIS 916 HM', 'cert' => 'GIA-2176652209', 'stones' => [['DIAMOND', 'Round Brilliant Diamond Line', 18, 1.800, 'G', 'VS1', 'Excellent', 'Round', 60.00]], 'stock' => 4],
            'JWL-BRC-002' => ['name' => 'Gold Curb Bracelet', 'desc' => 'A substantial 22K gold curb-link bracelet with a secure box clasp and safety catch.', 'cat' => 'bracelets', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '22K', 'gross' => 11.200, 'net' => 11.200, 'metalw' => 11.200, 'mk_type' => 'per_gram', 'mk_val' => 8.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 3.000, 'hallmark' => 'BIS 916 HM', 'cert' => null, 'stones' => [], 'stock' => 9],
            'JWL-BRC-003' => ['name' => 'Silver Charm Bracelet', 'desc' => 'A versatile 925 sterling silver charm bracelet with an oval-link chain, ready for custom charms.', 'cat' => 'bracelets', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'SILVER', 'karat' => '925', 'gross' => 8.500, 'net' => 8.500, 'metalw' => 8.500, 'mk_type' => 'fixed', 'mk_val' => 10.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 2.500, 'hallmark' => null, 'cert' => null, 'stones' => [], 'stock' => 15],
            'JWL-BRC-004' => ['name' => 'Sapphire Line Bracelet', 'desc' => 'An 18K gold line bracelet set with alternating round sapphires and diamonds.', 'cat' => 'bracelets', 'brand' => 'lumiere', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 8.900, 'net' => 8.600, 'metalw' => 7.500, 'mk_type' => 'per_gram', 'mk_val' => 18.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.500, 'hallmark' => 'BIS 916 HM', 'cert' => 'AIGS-SPB2201', 'stones' => [['SAPPHIRE', 'Round Ceylon Sapphire', 9, 1.350, 'Royal Blue', 'VS', 'Very Good', 'Round', 95.00], ['DIAMOND', 'Round Brilliant Diamond', 9, 0.450, 'G', 'VS2', 'Very Good', 'Round', 50.00]], 'stock' => 5],

            'JWL-BNG-001' => ['name' => 'Classic 22K Gold Bangle', 'desc' => 'A traditional solid 22K gold bangle with a high-polish finish, cast in a single continuous piece.', 'cat' => 'bangles', 'brand' => 'heritage', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '22K', 'gross' => 14.500, 'net' => 14.500, 'metalw' => 14.500, 'mk_type' => 'per_gram', 'mk_val' => 7.50, 'wst_type' => 'percentage_of_weight', 'wst_val' => 3.000, 'hallmark' => 'BIS 916 HM', 'cert' => null, 'stones' => [], 'stock' => 10],
            'JWL-BNG-002' => ['name' => 'Platinum Textured Bangle', 'desc' => 'A modern 950 platinum bangle with a hand-hammered matte texture and polished edges.', 'cat' => 'bangles', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'PLATINUM', 'karat' => '950', 'gross' => 16.800, 'net' => 16.800, 'metalw' => 16.800, 'mk_type' => 'per_gram', 'mk_val' => 22.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 3.500, 'hallmark' => 'PT 950', 'cert' => null, 'stones' => [], 'stock' => 4],
            'JWL-BNG-003' => ['name' => 'Ruby Accent Bangle', 'desc' => 'A 21K gold bangle set with five evenly spaced round rubies around its circumference.', 'cat' => 'bangles', 'brand' => 'heritage', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '21K', 'gross' => 13.200, 'net' => 12.900, 'metalw' => 12.100, 'mk_type' => 'per_gram', 'mk_val' => 11.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.000, 'hallmark' => 'BIS 875 HM', 'cert' => 'GRS-2024-77410', 'stones' => [['RUBY', 'Round Ruby Accent', 5, 0.900, 'Vivid Red', 'VS', 'Very Good', 'Round', 150.00]], 'stock' => 6],

            'JWL-ERR-001' => ['name' => 'Diamond Stud Earrings', 'desc' => 'A pair of classic 18K gold stud earrings, each set with a round brilliant diamond in a four-prong setting.', 'cat' => 'earrings', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 1.800, 'net' => 1.700, 'metalw' => 1.500, 'mk_type' => 'per_gram', 'mk_val' => 20.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 5.000, 'hallmark' => 'BIS 916 HM', 'cert' => 'GIA-2154002187', 'stones' => [['DIAMOND', 'Round Brilliant Diamond', 2, 0.600, 'F', 'VS1', 'Excellent', 'Round', 380.00]], 'stock' => 8],
            'JWL-ERR-002' => ['name' => 'Ruby Drop Earrings', 'desc' => 'A pair of 22K gold drop earrings, each featuring a pear-shaped ruby suspended from a delicate gold hook.', 'cat' => 'earrings', 'brand' => 'heritage', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '22K', 'gross' => 3.400, 'net' => 3.250, 'metalw' => 2.900, 'mk_type' => 'per_gram', 'mk_val' => 13.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.000, 'hallmark' => 'BIS 916 HM', 'cert' => 'GRS-2024-63321', 'stones' => [['RUBY', 'Pear-Cut Ruby', 2, 0.900, 'Pigeon Blood Red', 'VS', 'Very Good', 'Pear', 240.00]], 'stock' => 6],
            'JWL-ERR-003' => ['name' => 'Pearl Button Earrings', 'desc' => 'A pair of 18K gold button earrings, each set with a lustrous white cultured pearl — a versatile everyday classic.', 'cat' => 'earrings', 'brand' => 'heritage', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 2.100, 'net' => 2.100, 'metalw' => 1.600, 'mk_type' => 'fixed', 'mk_val' => 16.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 3.000, 'hallmark' => 'BIS 916 HM', 'cert' => null, 'stones' => [['PEARL', 'White Cultured Pearl', 2, 3.200, 'White', 'AA', 'Round', 'Round', 12.00]], 'stock' => 12],
            'JWL-ERR-004' => ['name' => 'Emerald Chandelier Earrings', 'desc' => 'A pair of 21K gold chandelier earrings cascading with emerald and diamond accents.', 'cat' => 'earrings', 'brand' => 'lumiere', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '21K', 'gross' => 5.600, 'net' => 5.300, 'metalw' => 4.600, 'mk_type' => 'percentage', 'mk_val' => 15.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.500, 'hallmark' => 'BIS 875 HM', 'cert' => 'GUBELIN-EM55240', 'stones' => [['EMERALD', 'Marquise Emerald', 2, 0.700, 'Vivid Green', 'VS', 'Very Good', 'Marquise', 165.00], ['DIAMOND', 'Round Diamond Accent', 10, 0.350, 'G', 'VS2', 'Very Good', 'Round', 48.00]], 'stock' => 3],
            'JWL-ERR-005' => ['name' => 'Sapphire Halo Earrings', 'desc' => 'A pair of 18K gold halo earrings, each centered on a round sapphire encircled by pavé diamonds.', 'cat' => 'earrings', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 3.900, 'net' => 3.700, 'metalw' => 3.200, 'mk_type' => 'per_gram', 'mk_val' => 19.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.500, 'hallmark' => 'BIS 916 HM', 'cert' => 'AIGS-SPE2290', 'stones' => [['SAPPHIRE', 'Round Sapphire', 2, 0.700, 'Cornflower Blue', 'VS', 'Excellent', 'Round', 190.00], ['DIAMOND', 'Pavé Diamond', 24, 0.240, 'G', 'VS2', 'Very Good', 'Round', 42.00]], 'stock' => 4],

            'JWL-CHN-001' => ['name' => '22K Gold Rope Chain', 'desc' => 'A densely woven 22K gold rope chain with a lobster clasp — a bold, versatile everyday piece.', 'cat' => 'chains', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '22K', 'gross' => 10.500, 'net' => 10.500, 'metalw' => 10.500, 'mk_type' => 'per_gram', 'mk_val' => 6.50, 'wst_type' => 'percentage_of_weight', 'wst_val' => 3.000, 'hallmark' => 'BIS 916 HM', 'cert' => null, 'stones' => [], 'stock' => 11],
            'JWL-CHN-002' => ['name' => '18K Gold Figaro Chain', 'desc' => 'A refined 18K gold Figaro-link chain, alternating long and round links for a subtle textured look.', 'cat' => 'chains', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 7.800, 'net' => 7.800, 'metalw' => 7.800, 'mk_type' => 'per_gram', 'mk_val' => 8.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 3.500, 'hallmark' => 'BIS 916 HM', 'cert' => null, 'stones' => [], 'stock' => 13],
            'JWL-CHN-003' => ['name' => 'Sterling Silver Box Chain', 'desc' => 'A fine 925 sterling silver box chain, ideal for pairing with pendants or wearing alone.', 'cat' => 'chains', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'SILVER', 'karat' => '925', 'gross' => 5.200, 'net' => 5.200, 'metalw' => 5.200, 'mk_type' => 'fixed', 'mk_val' => 6.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 2.000, 'hallmark' => null, 'cert' => null, 'stones' => [], 'stock' => 20],

            'JWL-PND-001' => ['name' => 'Diamond Teardrop Pendant', 'desc' => 'An 18K gold teardrop pendant set with a single pear-shaped diamond on a fine cable chain loop.', 'cat' => 'pendants', 'brand' => 'aurelia', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 2.400, 'net' => 2.300, 'metalw' => 2.000, 'mk_type' => 'per_gram', 'mk_val' => 18.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.500, 'hallmark' => 'BIS 916 HM', 'cert' => 'GIA-2168827731', 'stones' => [['DIAMOND', 'Pear-Cut Diamond', 1, 0.450, 'F', 'VS2', 'Excellent', 'Pear', 340.00]], 'stock' => 7],
            'JWL-PND-002' => ['name' => 'Emerald Drop Pendant', 'desc' => 'A 21K gold pendant featuring a single emerald-cut emerald in a sleek bezel setting.', 'cat' => 'pendants', 'brand' => 'lumiere', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '21K', 'gross' => 2.900, 'net' => 2.750, 'metalw' => 2.400, 'mk_type' => 'percentage', 'mk_val' => 12.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.000, 'hallmark' => 'BIS 875 HM', 'cert' => 'GUBELIN-EM55301', 'stones' => [['EMERALD', 'Emerald-Cut Emerald', 1, 0.550, 'Vivid Green', 'VS', 'Very Good', 'Emerald', 175.00]], 'stock' => 6],
            'JWL-PND-003' => ['name' => 'Topaz Sun Pendant', 'desc' => 'An 18K gold sunburst-style pendant centered on a warm champagne topaz.', 'cat' => 'pendants', 'brand' => 'gg_atelier', 'type' => 'serialized', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 2.600, 'net' => 2.500, 'metalw' => 2.100, 'mk_type' => 'per_gram', 'mk_val' => 14.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.000, 'hallmark' => 'BIS 916 HM', 'cert' => null, 'stones' => [['TOPAZ', 'Round Champagne Topaz', 1, 1.800, 'Champagne', 'VVS', 'Very Good', 'Round', 42.00]], 'stock' => 9],

            'JWL-SET-001' => ['name' => 'Ruby Bridal Jewelry Set', 'desc' => 'A matching 22K gold bridal set — necklace and earrings — set with rubies, designed for wedding and festive wear.', 'cat' => 'sets', 'brand' => 'heritage', 'type' => 'set', 'metal' => 'GOLD', 'karat' => '22K', 'gross' => 22.500, 'net' => 21.800, 'metalw' => 19.500, 'mk_type' => 'per_gram', 'mk_val' => 12.50, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.500, 'hallmark' => 'BIS 916 HM', 'cert' => 'GRS-2024-99120', 'stones' => [['RUBY', 'Mixed-Cut Ruby Set', 15, 4.500, 'Vivid Red', 'VS', 'Very Good', 'Mixed', 130.00]], 'stock' => 2],
            'JWL-SET-002' => ['name' => 'Sapphire Elegance Set', 'desc' => 'An 18K gold necklace-and-earrings set featuring matched round sapphires in a delicate floral motif.', 'cat' => 'sets', 'brand' => 'lumiere', 'type' => 'set', 'metal' => 'GOLD', 'karat' => '18K', 'gross' => 18.200, 'net' => 17.600, 'metalw' => 15.400, 'mk_type' => 'per_gram', 'mk_val' => 16.00, 'wst_type' => 'percentage_of_weight', 'wst_val' => 4.500, 'hallmark' => 'BIS 916 HM', 'cert' => 'AIGS-SPS3301', 'stones' => [['SAPPHIRE', 'Round Sapphire Set', 12, 3.100, 'Royal Blue', 'VS', 'Very Good', 'Round', 105.00]], 'stock' => 2],

            'JWL-BUL-001' => ['name' => '1 oz Fine Gold Bar 999.9', 'desc' => 'A 1 troy ounce (31.1g) investment-grade gold bar, 999.9 fine, cast and stamped with assay markings.', 'cat' => 'bullion', 'brand' => 'gg_atelier', 'type' => 'weighted', 'metal' => 'GOLD', 'karat' => '24K', 'gross' => 31.100, 'net' => 31.100, 'metalw' => 31.100, 'mk_type' => 'fixed', 'mk_val' => 35.00, 'wst_type' => 'fixed_value', 'wst_val' => 0.000, 'hallmark' => 'Assay Certified 999.9', 'cert' => 'ASSAY-BAR-10031', 'stones' => [], 'stock' => 10],
            'JWL-BUL-002' => ['name' => '10g Gold Bar 999.9', 'desc' => 'A compact 10 gram investment gold bar, 999.9 fine, individually assay-certified and sealed.', 'cat' => 'bullion', 'brand' => 'gg_atelier', 'type' => 'weighted', 'metal' => 'GOLD', 'karat' => '24K', 'gross' => 10.000, 'net' => 10.000, 'metalw' => 10.000, 'mk_type' => 'fixed', 'mk_val' => 18.00, 'wst_type' => 'fixed_value', 'wst_val' => 0.000, 'hallmark' => 'Assay Certified 999.9', 'cert' => 'ASSAY-BAR-10010', 'stones' => [], 'stock' => 20],
            'JWL-BUL-003' => ['name' => 'Grids Gold 1 oz Gold Coin', 'desc' => 'A 1 troy ounce (31.1g) 999.9 fine gold bullion coin with the Grids Gold house emblem.', 'cat' => 'bullion', 'brand' => 'gg_atelier', 'type' => 'weighted', 'metal' => 'GOLD', 'karat' => '24K', 'gross' => 31.100, 'net' => 31.100, 'metalw' => 31.100, 'mk_type' => 'fixed', 'mk_val' => 40.00, 'wst_type' => 'fixed_value', 'wst_val' => 0.000, 'hallmark' => 'Assay Certified 999.9', 'cert' => 'ASSAY-COIN-20077', 'stones' => [], 'stock' => 15],

            'JWL-LSE-001' => ['name' => 'Loose Round Brilliant Diamond 0.50ct', 'desc' => 'A certified 0.50 carat round brilliant-cut diamond, loose and unmounted, ready for custom setting.', 'cat' => 'loose_stones', 'brand' => 'lumiere', 'type' => 'non_stock', 'metal' => null, 'karat' => null, 'gross' => 0.100, 'net' => 0.100, 'metalw' => 0.000, 'mk_type' => 'fixed', 'mk_val' => 25.00, 'wst_type' => 'fixed_value', 'wst_val' => 0.000, 'hallmark' => null, 'cert' => 'GIA-6193004471', 'stones' => [['DIAMOND', 'Loose Round Brilliant Diamond', 1, 0.500, 'F', 'VS1', 'Excellent', 'Round', 480.00]], 'stock' => 5],
            'JWL-LSE-002' => ['name' => 'Loose Oval Ruby 1.20ct', 'desc' => 'A certified 1.20 carat oval-cut natural ruby, loose and unmounted, with vivid red saturation.', 'cat' => 'loose_stones', 'brand' => 'lumiere', 'type' => 'non_stock', 'metal' => null, 'karat' => null, 'gross' => 0.240, 'net' => 0.240, 'metalw' => 0.000, 'mk_type' => 'fixed', 'mk_val' => 20.00, 'wst_type' => 'fixed_value', 'wst_val' => 0.000, 'hallmark' => null, 'cert' => 'GRS-2024-40021', 'stones' => [['RUBY', 'Loose Oval Ruby', 1, 1.200, 'Vivid Red', 'VS', 'Excellent', 'Oval', 265.00]], 'stock' => 4],
            'JWL-LSE-003' => ['name' => 'Loose Emerald Cushion Cut 0.85ct', 'desc' => 'A certified 0.85 carat cushion-cut Colombian emerald, loose and unmounted.', 'cat' => 'loose_stones', 'brand' => 'lumiere', 'type' => 'non_stock', 'metal' => null, 'karat' => null, 'gross' => 0.170, 'net' => 0.170, 'metalw' => 0.000, 'mk_type' => 'fixed', 'mk_val' => 18.00, 'wst_type' => 'fixed_value', 'wst_val' => 0.000, 'hallmark' => null, 'cert' => 'GUBELIN-EM60012', 'stones' => [['EMERALD', 'Loose Cushion-Cut Emerald', 1, 0.850, 'Vivid Green', 'VS', 'Very Good', 'Cushion', 310.00]], 'stock' => 3],
            'JWL-LSE-004' => ['name' => 'Loose Ceylon Sapphire 1.05ct', 'desc' => 'A certified 1.05 carat round Ceylon sapphire, loose and unmounted, with a rich cornflower-blue hue.', 'cat' => 'loose_stones', 'brand' => 'lumiere', 'type' => 'non_stock', 'metal' => null, 'karat' => null, 'gross' => 0.210, 'net' => 0.210, 'metalw' => 0.000, 'mk_type' => 'fixed', 'mk_val' => 20.00, 'wst_type' => 'fixed_value', 'wst_val' => 0.000, 'hallmark' => null, 'cert' => 'AIGS-SP70091', 'stones' => [['SAPPHIRE', 'Loose Round Sapphire', 1, 1.050, 'Cornflower Blue', 'VS', 'Excellent', 'Round', 225.00]], 'stock' => 4],

            'JWL-SVC-001' => ['name' => 'Custom Jewelry Design & Making Service', 'desc' => 'A bespoke design-and-making service: our workshop crafts a one-of-a-kind piece to your specification, metal and gemstones quoted separately.', 'cat' => 'services', 'brand' => 'gg_atelier', 'type' => 'service', 'metal' => null, 'karat' => null, 'gross' => null, 'net' => null, 'metalw' => null, 'mk_type' => 'fixed', 'mk_val' => 150.00, 'wst_type' => null, 'wst_val' => null, 'hallmark' => null, 'cert' => null, 'stones' => [], 'stock' => null],
            'JWL-SVC-002' => ['name' => 'Jewelry Repair & Resizing Service', 'desc' => 'Professional repair, polishing, and ring resizing service performed by our in-house goldsmiths.', 'cat' => 'services', 'brand' => 'gg_atelier', 'type' => 'service', 'metal' => null, 'karat' => null, 'gross' => null, 'net' => null, 'metalw' => null, 'mk_type' => 'fixed', 'mk_val' => 45.00, 'wst_type' => null, 'wst_val' => null, 'hallmark' => null, 'cert' => null, 'stones' => [], 'stock' => null],
        ];
    }

    /**
     * Compute metal/wastage/making/stone values and the final USD price for
     * one catalog row, using the same components JewelryPricingService uses
     * at sale time (metal value -> wastage -> making charge -> stone value
     * -> markup), so seeded prices and a live recalculation agree.
     */
    private function priceBreakdown(array $def, array $goldRates): array
    {
        $rate = 0.0;
        $goldRateId = null;
        if ($def['metal'] && $def['karat']) {
            $rate = self::METAL_RATES[$def['metal']][$def['karat']] ?? 0.0;
            $goldRateId = $goldRates[$def['metal'] . ':' . $def['karat']] ?? null;
        }

        $metalWeight = $def['metalw'] ?? 0.0;
        $metalValue = round(($metalWeight ?? 0) * $rate, 2);

        $wastageValue = 0.0;
        if (($def['wst_type'] ?? null) === 'percentage_of_weight') {
            $wastageValue = round($metalWeight * ($def['wst_val'] / 100) * $rate, 2);
        } elseif (($def['wst_type'] ?? null) === 'fixed_value') {
            $wastageValue = round($def['wst_val'] ?? 0, 2);
        }

        $makingValue = 0.0;
        if ($def['mk_type'] === 'per_gram') {
            $makingValue = round($metalWeight * $def['mk_val'], 2);
        } elseif ($def['mk_type'] === 'percentage') {
            $makingValue = round($metalValue * ($def['mk_val'] / 100), 2);
        } elseif ($def['mk_type'] === 'fixed') {
            $makingValue = round($def['mk_val'], 2);
        }

        $stoneValue = 0.0;
        foreach ($def['stones'] as [$stoneCode, , $qty, $carat, , , , , $unitCost]) {
            $stoneValue += $qty * $unitCost;
        }
        $stoneValue = round($stoneValue, 2);

        $baseValue = round($metalValue + $wastageValue + $makingValue + $stoneValue, 2);
        $price = round($baseValue * 1.20, 2);
        $cost = round($baseValue * 0.85, 2);

        return compact('rate', 'goldRateId', 'metalValue', 'wastageValue', 'makingValue', 'stoneValue', 'baseValue', 'price', 'cost');
    }

    /**
     * @return array<string,array{id:int,cost:float,price:float,def:array,breakdown:array}>
     */
    private function seedProducts(int $unitId, array $categories, array $brands, array $goldRates, Carbon $now): array
    {
        $assetsDir = __DIR__ . '/assets/jewelry_products';
        $targetDir = function_exists('upload_public_path')
            ? upload_public_path('products')
            : public_path('images/tenant-default/products');

        if (! File::exists($targetDir)) {
            File::makeDirectory($targetDir, 0755, true);
        }

        $products = [];

        foreach ($this->catalogDefs() as $sku => $def) {
            $breakdown = $this->priceBreakdown($def, $goldRates);

            $metalTypeId = $def['metal'] ? ($this->metalIds[$def['metal']] ?? null) : null;
            $karatId = ($def['metal'] && $def['karat']) ? ($this->karatIds[$def['metal'] . ':' . $def['karat']] ?? null) : null;

            $imageFile = $sku . '.png';
            $srcImage = $assetsDir . '/' . $imageFile;
            if (File::exists($srcImage)) {
                File::copy($srcImage, $targetDir . '/' . $imageFile);
            }

            $id = DB::table('products')->insertGetId([
                'type' => 'is_single',
                'code' => $sku,
                'Type_barcode' => 'CODE128',
                'name' => $def['name'],
                'note' => $def['desc'],
                'image' => $imageFile,
                'cost' => $breakdown['cost'],
                'price' => $breakdown['price'],
                'wholesale_price' => round($breakdown['price'] * 0.90, 2),
                'min_price' => round($breakdown['price'] * 0.80, 2),
                'points' => 0,
                'category_id' => $categories[$def['cat']],
                'brand_id' => $brands[$def['brand']],
                'unit_id' => $unitId,
                'unit_sale_id' => $unitId,
                'unit_purchase_id' => $unitId,
                'TaxNet' => 0,
                'tax_method' => '1',
                'stock_alert' => $def['stock'] !== null ? max(2, (int) round($def['stock'] * 0.25)) : 0,
                'weight' => $def['gross'],
                'is_active' => true,
                'is_jewelry_item' => true,
                'ownership_type' => 'own',
                'jewelry_item_type' => $def['type'],
                'metal_type_id' => $metalTypeId,
                'karat_id' => $karatId,
                'jewelry_gross_weight' => $def['gross'],
                'jewelry_net_weight' => $def['net'],
                'jewelry_metal_weight' => $def['metalw'],
                'jewelry_weight_uom' => 'g',
                'hallmark_reference' => $def['hallmark'],
                'certificate_number' => $def['cert'],
                'making_charge_type' => $def['mk_type'],
                'making_charge_value' => $def['mk_val'],
                'wastage_type' => $def['wst_type'],
                'wastage_value' => $def['wst_val'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            foreach ($def['stones'] as [$stoneCode, $stoneName, $qty, $carat, $color, $clarity, $cut, $shape, $unitCost]) {
                $stoneTypeId = $this->stoneIds[$stoneCode] ?? null;
                if (! $stoneTypeId) {
                    continue;
                }

                DB::table('item_stones')->insert([
                    'product_id' => $id,
                    'stone_type_id' => $stoneTypeId,
                    'stone_name' => $stoneName,
                    'quantity' => $qty,
                    'carat_value' => $carat,
                    'color' => $color,
                    'clarity' => $clarity,
                    'cut' => $cut,
                    'shape' => $shape,
                    'certificate_number' => $def['cert'],
                    'unit_cost_amount' => $unitCost,
                    'total_cost_amount' => round($qty * $unitCost, 2),
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            $products[$sku] = [
                'id' => $id,
                'cost' => $breakdown['cost'],
                'price' => $breakdown['price'],
                'def' => $def,
                'breakdown' => $breakdown,
                'stock' => $def['stock'],
            ];
        }

        return $products;
    }

    /** @return array<int,int> list of provider ids */
    private function seedProviders(Carbon $now): array
    {
        $defs = [
            ['Continental Bullion & Gems', 'sales@continentalbullion.test', '+1-212-555-0161'],
            ['Anaya Gemstone Traders', 'orders@anayagems.test', '+1-212-555-0172'],
            ['Precision Casting Works', 'hello@precisioncasting.test', '+1-212-555-0183'],
        ];

        $ids = [];
        foreach ($defs as $i => [$name, $email, $phone]) {
            $ids[] = DB::table('providers')->insertGetId([
                'name' => $name,
                'code' => 100 + $i + 1,
                'email' => $email,
                'phone' => $phone,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        return $ids;
    }

    /** @return array<int,int> list of client ids */
    private function seedClients(Carbon $now): array
    {
        $defs = [
            ['Walk-in Customer', null, null],
            ['Isabella Moreau', 'isabella.moreau@example.test', '+1-212-555-0210'],
            ['Julian Whitfield', 'julian.whitfield@example.test', '+1-212-555-0211'],
            ['Amara Osei', 'amara.osei@example.test', '+1-212-555-0212'],
            ['Rohan Malhotra', 'rohan.malhotra@example.test', '+1-212-555-0213'],
        ];

        $ids = [];
        foreach ($defs as $i => [$name, $email, $phone]) {
            $ids[] = DB::table('clients')->insertGetId([
                'name' => $name,
                'code' => 100 + $i + 1,
                'email' => $email,
                'phone' => $phone,
                'is_royalty_eligible' => true,
                'points' => 0,
                'opening_balance' => 0,
                'credit_limit' => 0,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        return $ids;
    }

    /** @param array<string,array> $products */
    private function seedPurchases(array $products, array $providers, array &$onHand, Carbon $now): void
    {
        $stockableSkus = array_keys(array_filter($products, fn ($p) => $p['stock'] !== null));
        $paymentMethodId = $this->cashPaymentMethodId();

        // Split stockable SKUs across 3 receiving purchases from 3 suppliers.
        $chunks = array_chunk($stockableSkus, (int) ceil(count($stockableSkus) / 3));

        foreach ($chunks as $i => $skus) {
            $date = $now->copy()->subDays(45 - $i * 10);
            $providerId = $providers[$i % count($providers)];

            $grandTotal = 0.0;
            foreach ($skus as $sku) {
                $qty = $products[$sku]['stock'];
                $grandTotal += $qty * $products[$sku]['cost'];
            }
            $grandTotal = round($grandTotal, 2);

            $ref = sprintf('PUR-JWL-%04d', $i + 1);

            $purchaseId = DB::table('purchases')->insertGetId([
                'user_id' => self::USER_ID,
                'Ref' => $ref,
                'date' => $date->toDateString(),
                'time' => $date->toTimeString(),
                'provider_id' => $providerId,
                'warehouse_id' => self::WAREHOUSE_ID,
                'tax_rate' => 0,
                'TaxNet' => 0,
                'discount' => 0,
                'shipping' => 0,
                'GrandTotal' => $grandTotal,
                'paid_amount' => $grandTotal,
                'statut' => 'received',
                'payment_statut' => 'paid',
                'created_at' => $date,
                'updated_at' => $date,
            ]);

            foreach ($skus as $sku) {
                $qty = $products[$sku]['stock'];
                $cost = $products[$sku]['cost'];

                DB::table('purchase_details')->insert([
                    'cost' => $cost,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'discount' => 0,
                    'discount_method' => '1',
                    'purchase_id' => $purchaseId,
                    'product_id' => $products[$sku]['id'],
                    'total' => round($qty * $cost, 2),
                    'quantity' => $qty,
                    'created_at' => $date,
                    'updated_at' => $date,
                ]);

                $onHand[$sku] += $qty;
            }

            DB::table('payment_purchases')->insert([
                'user_id' => self::USER_ID,
                'date' => $date->toDateString(),
                'Ref' => 'INV/' . $ref,
                'purchase_id' => $purchaseId,
                'payment_method_id' => $paymentMethodId,
                'montant' => $grandTotal,
                'change' => 0,
                'created_at' => $date,
                'updated_at' => $date,
            ]);
        }
    }

    /** @param array<string,array> $products */
    private function seedSales(array $products, array $clients, array $goldRates, array &$onHand, Carbon $now): void
    {
        $paymentMethodId = $this->cashPaymentMethodId();
        // clientIndex, daysAgo, paidFraction, items => [sku => qty]
        $defs = [
            [1, 18, 1.0, ['JWL-RNG-001' => 1, 'JWL-ERR-003' => 1]],
            [2, 14, 1.0, ['JWL-CHN-002' => 1, 'JWL-BUL-002' => 2]],
            [3, 10, 0.5, ['JWL-NCK-002' => 1]],
            [4, 6, 1.0, ['JWL-BRC-002' => 1, 'JWL-BNG-001' => 1]],
            [1, 3, 1.0, ['JWL-ERR-001' => 1, 'JWL-PND-003' => 1]],
            [0, 1, 1.0, ['JWL-BUL-001' => 1]],
        ];

        foreach ($defs as $i => [$clientIdx, $daysAgo, $paidFraction, $items]) {
            $date = $now->copy()->subDays($daysAgo);

            $grandTotal = 0.0;
            foreach ($items as $sku => $qty) {
                $grandTotal += $qty * $products[$sku]['price'];
            }
            $grandTotal = round($grandTotal, 2);
            $paid = round($grandTotal * $paidFraction, 2);

            $ref = sprintf('SL-JWL-%04d', $i + 1);

            $saleId = DB::table('sales')->insertGetId([
                'user_id' => self::USER_ID,
                'date' => $date->toDateString(),
                'time' => $date->toTimeString(),
                'Ref' => $ref,
                'is_pos' => true,
                'client_id' => $clients[$clientIdx],
                'warehouse_id' => self::WAREHOUSE_ID,
                'tax_rate' => 0,
                'TaxNet' => 0,
                'discount' => 0,
                'discount_Method' => '2',
                'shipping' => 0,
                'GrandTotal' => $grandTotal,
                'paid_amount' => $paid,
                'payment_statut' => $paid >= $grandTotal ? 'paid' : ($paid > 0 ? 'partial' : 'unpaid'),
                'statut' => 'completed',
                'created_at' => $date,
                'updated_at' => $date,
            ]);

            foreach ($items as $sku => $qty) {
                $price = $products[$sku]['price'];
                $bd = $products[$sku]['breakdown'];
                $def = $products[$sku]['def'];

                DB::table('sale_details')->insert([
                    'date' => $date->toDateString(),
                    'sale_id' => $saleId,
                    'product_id' => $products[$sku]['id'],
                    'price' => $price,
                    'TaxNet' => 0,
                    'tax_method' => '1',
                    'discount' => 0,
                    'discount_method' => '1',
                    'price_type' => 'retail',
                    'total' => round($qty * $price, 2),
                    'quantity' => $qty,
                    'gold_rate_id' => $bd['goldRateId'],
                    'gold_rate_value' => $bd['rate'] ?: null,
                    'gold_rate_effective_at' => $bd['goldRateId'] ? $now->copy()->subHours(6) : null,
                    'karat_id' => $def['metal'] && $def['karat'] ? ($this->karatIds[$def['metal'] . ':' . $def['karat']] ?? null) : null,
                    'metal_weight_used' => $def['metalw'],
                    'making_charge_amount' => $bd['makingValue'],
                    'wastage_amount' => $bd['wastageValue'],
                    'stone_value_amount' => $bd['stoneValue'],
                    'price_breakdown' => json_encode([
                        'metal_value' => $bd['metalValue'],
                        'wastage_value' => $bd['wastageValue'],
                        'making_charge' => $bd['makingValue'],
                        'stone_value' => $bd['stoneValue'],
                        'base_value' => $bd['baseValue'],
                        'markup' => round($price - $bd['baseValue'], 2),
                        'final_price' => $price,
                        'currency' => 'USD',
                    ]),
                    'created_at' => $date,
                    'updated_at' => $date,
                ]);

                $onHand[$sku] -= $qty;
            }

            if ($paid > 0) {
                DB::table('payment_sales')->insert([
                    'user_id' => self::USER_ID,
                    'date' => $date->toDateString(),
                    'Ref' => 'INV/' . $ref,
                    'sale_id' => $saleId,
                    'payment_method_id' => $paymentMethodId,
                    'montant' => $paid,
                    'change' => 0,
                    'created_at' => $date,
                    'updated_at' => $date,
                ]);
            }
        }
    }

    /** @param array<string,array> $products */
    private function seedStock(array $products, array $onHand, Carbon $now): void
    {
        foreach ($products as $sku => $meta) {
            if ($meta['stock'] === null) {
                continue; // service items are never stocked
            }

            DB::table('product_warehouse')->insert([
                'product_id' => $meta['id'],
                'warehouse_id' => self::WAREHOUSE_ID,
                'qte' => max(0, $onHand[$sku]),
                'manage_stock' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }
}
