# Grids Gold — Jewelry Retail Core: Per-Person Task Breakdown

No dates, no sprints — just every task, split four ways, in the order each person should do them. Follow the order within your own section (later tasks in your list usually depend on earlier ones). Where you depend on someone else finishing something first, it's called out explicitly.

This document assumes you've read (or will read) the companion **Grids Gold — GitHub Collaboration Guide** for how to actually branch/commit/PR each task below — one task in this document = one GitHub Issue = one branch = one PR, per that guide.

All file paths below are relative to the repository root (the Quantro / Grids Gold codebase folder).

---

## 0. Ground Rules Everyone Must Know Before Starting

**This entire project only ever changes what you see on the Tenant side.** You log in as a tenant (e.g. `gridsappsllc@gmail.com` on `topstock.quantrocore.com`, or your local tenant domain), not the Super Admin panel (`quantrocore.com/super`). Nothing in this project touches the Super Admin app — the jewelry feature is switched on from inside the tenant's own Settings, exactly like the existing "Pharmacy Mode" toggle already works. If you ever find yourself editing a file under `app/Http/Controllers/Central/` or `app/Models/Central/`, stop — that's Super Admin territory and out of scope.

**Everything is gated behind `jewelry_mode`.** Every new database column is additive (nothing existing is renamed or removed), and every new UI section only renders when the tenant's `jewelry_mode` setting is on. This is what makes the feature safe on a platform with other, non-jewelry tenants.

**The exact reference dictionary (agree this once, before anyone writes code):**
- Metal types: `Gold`, `Silver`, `Platinum`
- Karats: Gold → `18K`, `21K`, `22K`, `24K` — Silver → `925`, `900`, `800` — Platinum → `950`
- Stone types: `Diamond`, `Ruby`, `Emerald`, `Sapphire`, `Pearl`, `Topaz`, `Opal`
- Making-charge methods: `fixed`, `per_gram`, `percentage`, `manual`, `formula`
- Wastage methods: `percentage_of_weight`, `percentage_of_value`, `fixed_value`
- Jewelry item types: `serialized`, `weighted`, `style`, `set`, `service`, `non_stock`

Person A seeds these exact values (see §1.6) — if you (any person) need a value that isn't on this list, add it to the list here first and tell the other three, don't just invent a new spelling in your own code.

**Naming convention:** every new column on an existing table is prefixed `jewelry_` (e.g. `jewelry_gross_weight`), so it can never collide with an existing column and is instantly recognizable as "ours" in any file.

---

## 1. Person A — Database, Models, Seed Data, Permissions & Settings (Backend Foundation)

Everyone else's work depends on the tables and models in this section existing first, so do this section first and tell the other three as soon as each numbered task below is merged into `develop`.

### 1.1 New migration: `metal_types` table
**Create:** `database/migrations/tenant/2026_08_01_000001_create_metal_types_table.php`
Columns: `id`, `name` (string), `code` (string, unique), `density` (decimal, nullable), `is_active` (boolean, default true), `timestamps`.
Model this file's structure on any simple existing lookup-table migration, e.g. `database/migrations/tenant/2026_03_24_203803_create_currencies_table.php`.
**Where it's reflected locally:** nowhere yet by itself — it's a plain new table, invisible until Person C builds a screen on it (§3) or Person A seeds it (§1.6).

### 1.2 New migration: `karats` table
**Create:** `database/migrations/tenant/2026_08_01_000002_create_karats_table.php`
Columns: `id`, `metal_type_id` (unsigned FK → `metal_types.id`), `name` (string, e.g. `"22K"`), `purity_percentage` (decimal 5,2), `fineness` (decimal 6,3, nullable), `tolerance` (decimal 5,2, nullable), `is_active` (boolean, default true), `timestamps`.

### 1.3 New migration: `stone_types` table
**Create:** `database/migrations/tenant/2026_08_01_000003_create_stone_types_table.php`
Columns: `id`, `name` (string), `code` (string, unique), `is_active` (boolean, default true), `timestamps`.

### 1.4 New migration: jewelry fields on `products`
**Create:** `database/migrations/tenant/2026_08_01_000004_add_jewelry_fields_to_products_table.php`
Copy the exact style of the existing `database/migrations/tenant/2026_04_22_100000_add_batch_tracking_fields_to_products_table.php` (every column wrapped in `if (! Schema::hasColumn('products', 'xxx')) { ... }`, and a `down()` that drops each column the same way). Add these columns to `products`:

| Column | Type |
|---|---|
| `is_jewelry_item` | boolean, default false |
| `jewelry_item_type` | string/enum: serialized, weighted, style, set, service, non_stock |
| `metal_type_id` | unsigned FK → `metal_types.id`, nullable |
| `karat_id` | unsigned FK → `karats.id`, nullable |
| `jewelry_gross_weight` | decimal(12,3), nullable |
| `jewelry_net_weight` | decimal(12,3), nullable |
| `jewelry_metal_weight` | decimal(12,3), nullable |
| `jewelry_weight_uom` | string, default `'g'` |
| `hallmark_reference` | string, nullable |
| `certificate_number` | string, nullable |
| `making_charge_type` | string/enum: fixed, per_gram, percentage, manual, formula |
| `making_charge_value` | decimal(12,2), nullable |
| `wastage_type` | string/enum: percentage_of_weight, percentage_of_value, fixed_value |
| `wastage_value` | decimal(12,3), nullable |

**Do not touch** the existing `weight`, `length`, `width`, `height` columns on `products` — those are generic shipping dimensions used elsewhere and must be left exactly as they are.

### 1.5 New migration + model: `item_stones` table
**Create migration:** `database/migrations/tenant/2026_08_01_000005_create_item_stones_table.php`
Columns: `id`, `product_id` (unsigned FK → `products.id`, cascade on delete), `stone_type_id` (unsigned FK → `stone_types.id`), `stone_name` (string, nullable), `quantity` (integer, default 1), `carat_value` (decimal 8,3, nullable), `color` (string, nullable), `clarity` (string, nullable), `cut` (string, nullable), `shape` (string, nullable), `certificate_number` (string, nullable), `unit_cost_amount` (decimal 12,2, nullable), `total_cost_amount` (decimal 12,2, nullable), `notes` (text, nullable), `timestamps`.

**Create model:** `app/Models/ItemStone.php`
```php
class ItemStone extends Model
{
    protected $fillable = ['product_id','stone_type_id','stone_name','quantity','carat_value','color','clarity','cut','shape','certificate_number','unit_cost_amount','total_cost_amount','notes'];
    public function product() { return $this->belongsTo(Product::class); }
    public function stoneType() { return $this->belongsTo(StoneType::class); }
}
```

### 1.6 New models + seeders for the three lookup tables
**Create models:**
- `app/Models/MetalType.php` — `hasMany(Karat::class)`, `$fillable = ['name','code','density','is_active']`
- `app/Models/Karat.php` — `belongsTo(MetalType::class)`, `$fillable = ['metal_type_id','name','purity_percentage','fineness','tolerance','is_active']`
- `app/Models/StoneType.php` — `$fillable = ['name','code','is_active']`

**Create seeders** (model their structure on `database/seeders/CurrencySeeder.php`):
- `database/seeders/MetalTypeSeeder.php` — inserts Gold, Silver, Platinum (per §0's reference dictionary)
- `database/seeders/KaratSeeder.php` — inserts 18K/21K/22K/24K under Gold, 925/900/800 under Silver, 950 under Platinum
- `database/seeders/StoneTypeSeeder.php` — inserts Diamond, Ruby, Emerald, Sapphire, Pearl, Topaz, Opal

**Edit:** `database/seeders/DatabaseSeeder.php` — add the three new seeder classes to the `$this->call([...])` array (it currently lists `CurrencySeeder::class`, `SettingSeeder::class`, etc. around lines 18–39 — add yours in that same list).

**Where it's reflected locally:** running `php artisan tenants:seed` (or your local tenant seeding command) on a tenant database now populates these three tables — still not visible in the UI until Person C's screens (§3) exist, but confirm it worked with `php artisan tinker` → `MetalType::all()`.

### 1.7 Extend the `Product` model
**Edit:** `app/Models/Product.php`
- Add all the new columns from §1.4 to the `$fillable` array (find the existing `$fillable` array — the pharmacy fields like `is_batch_tracked`, `generic_name` are already in there as your template).
- Add relationships:
```php
public function metalType() { return $this->belongsTo(MetalType::class); }
public function karat() { return $this->belongsTo(Karat::class); }
public function stones() { return $this->hasMany(ItemStone::class); }
```
- Add appropriate `$casts` entries for the new decimal columns (`jewelry_gross_weight` etc. as `'decimal:3'`, `is_jewelry_item` as `'boolean'`), following how existing decimal columns are cast in the same array.

### 1.8 Extend `settings` and `pos_settings`
**Create migration:** `database/migrations/tenant/2026_08_01_000006_add_jewelry_mode_to_settings_table.php`
Copy `database/migrations/tenant/2026_04_22_100300_add_pharmacy_mode_to_settings_table.php` exactly, but add these columns to `settings` instead:
- `jewelry_mode` (boolean, default false)
- `default_making_charge_type` (string, nullable)
- `default_making_charge_value` (decimal 12,2, nullable)
- `default_wastage_type` (string, nullable)
- `default_wastage_value` (decimal 12,3, nullable)
- `gold_rate_requires_approval` (boolean, default false)

**Create migration:** `database/migrations/tenant/2026_08_01_000007_add_jewelry_fields_to_pos_settings_table.php`
Copy `database/migrations/tenant/2026_05_12_120000_add_show_product_discount_to_pos_settings_table.php` exactly, but add to `pos_settings`:
- `show_gold_rate_on_pos` (boolean, default true)
- `allow_jewelry_price_override` (boolean, default false)
- `jewelry_override_approval_threshold` (decimal 12,2, nullable)

**Edit:** `app/Models/Setting.php` — add the six new columns from this task to `$fillable` and `$casts` (find where `pharmacy_mode`, `expiry_warning_days` etc. were added and add yours the same way).
**Edit:** `app/Models/PosSetting.php` — same, add the three new pos columns to `$fillable`/`$casts`.

**Where it's reflected locally:** once Person C builds the Settings UI in §3.5–3.6, this becomes visible at `/app/settings/System_settings` (Jewelry tab) and `/app/settings/pos_settings`. Until then, you can confirm the columns exist by checking `Setting::first()->jewelry_mode` in tinker.

### 1.9 New permissions
**Edit:** `database/seeders/PermissionsSeeder.php` — add five new permission rows (follow the exact array/row shape already used for existing permissions like `products_view`, `products_add` in that file):
- `jewelry_items_manage` — "Create/edit jewelry-specific fields on a product"
- `gold_rates_view` — "View current and historical gold rates"
- `gold_rates_manage` — "Enter a new gold rate"
- `gold_rates_approve` — "Approve a gold rate change"
- `jewelry_pricing_override` — "Manually override a calculated jewelry price above the configured threshold"

**Edit:** `database/seeders/PermissionRoleSeeder.php` — wire these five permissions to the appropriate default roles (e.g. Administrator/Manager get all five; Cashier gets none; Inventory Manager gets `jewelry_items_manage`), following the existing pattern in that file for how other permissions are assigned to roles.

**Create:** `app/Policies/GoldRatePolicy.php` — copy the structure of `app/Policies/CurrencyPolicy.php`, but check against `gold_rates_view` / `gold_rates_manage` / `gold_rates_approve` instead.
**Create:** `app/Policies/JewelryPricingPolicy.php` — same pattern, checking `jewelry_pricing_override`.

**Edit:** `app/Providers/AuthServiceProvider.php` — add two lines to the `$policies` array (which currently maps things like `'App\Models\Currency' => 'App\Policies\CurrencyPolicy'`):
```php
'App\Models\GoldRate' => 'App\Policies\GoldRatePolicy',
```
(the second policy, `JewelryPricingPolicy`, isn't tied to an Eloquent model — it will be checked directly by Person B's controller via `Gate`/`authorizeForUser`, no model-mapping line needed for it; note this for Person B).

**Where it's reflected locally:** at `/app/settings/permissions/list` (the existing Permissions screen, `resources/src/views/app/pages/settings/permissions/Permissions.vue`) — the five new permissions should appear in the list automatically once seeded, with no Vue changes needed (Person C should just double-check this renders correctly as part of §3.7).

### 1.10 Done-check for Person A
By the end of this section: a fresh tenant database, when seeded, has `metal_types`, `karats`, `stone_types` populated; `products`, `settings`, and `pos_settings` have all their new columns; the five new permissions exist and are assigned to roles. Tell Person B, C, and D as soon as this is all merged — they are all blocked on it.

---

## 2. Person B — Gold Rate Service, Pricing Engine, POS/Sales Backend Integration

**Depends on:** Person A's §1.1–§1.9 being merged (you need the `products` columns, `metal_types`/`karats`, and the permissions to exist).

### 2.1 New migration: `gold_rates` table
**Create:** `database/migrations/tenant/2026_08_01_000008_create_gold_rates_table.php`
Columns: `id`, `warehouse_id` (unsigned FK → `warehouses.id`, nullable — null means "company-wide"), `metal_type_id` (FK → `metal_types.id`), `karat_id` (FK → `karats.id`), `currency_id` (FK → existing `currencies.id`), `rate_per_weight_unit` (decimal 12,2), `weight_uom` (string, default `'g'`), `rate_source` (string/enum: manual, api — default `manual`), `effective_at` (datetime), `expires_at` (datetime, nullable), `status` (string/enum: active, expired — default `active`), `created_by` (unsigned FK → `users.id`, nullable), `timestamps`.
Add an index on `(metal_type_id, karat_id, warehouse_id, effective_at)` for fast "latest rate" lookups.

**Create model:** `app/Models/GoldRate.php`
```php
class GoldRate extends Model
{
    protected $fillable = ['warehouse_id','metal_type_id','karat_id','currency_id','rate_per_weight_unit','weight_uom','rate_source','effective_at','expires_at','status','created_by'];
    protected $casts = ['effective_at' => 'datetime', 'expires_at' => 'datetime', 'rate_per_weight_unit' => 'decimal:2'];
    public function metalType() { return $this->belongsTo(MetalType::class); }
    public function karat() { return $this->belongsTo(Karat::class); }
    public function warehouse() { return $this->belongsTo(Warehouse::class); }
    public function currency() { return $this->belongsTo(Currency::class); }
}
```
**Important rule to build in from day one:** this table is **insert-only**. There is no "edit a gold rate" anywhere in the whole project — entering a new rate always creates a new row. This is what makes old invoices safe from today's rate changes (§2.3) and gives you rate history for free.

### 2.2 New migration: pricing snapshot fields on `sale_details`
**Create:** `database/migrations/tenant/2026_08_01_000009_add_pricing_snapshot_fields_to_sale_details_table.php`
Same additive/guarded style as Person A's migrations. Add to `sale_details`:
- `gold_rate_id` (unsigned FK → `gold_rates.id`, nullable)
- `gold_rate_value` (decimal 12,2, nullable) — the actual number used, copied at sale time
- `karat_id` (unsigned FK → `karats.id`, nullable)
- `metal_weight_used` (decimal 12,3, nullable)
- `making_charge_amount` (decimal 12,2, nullable)
- `wastage_amount` (decimal 12,2, nullable)
- `stone_value_amount` (decimal 12,2, nullable)
- `price_breakdown` (json, nullable) — the full calculation result, for the printed receipt and support/audit
- `override_approved_by` (unsigned FK → `users.id`, nullable)

**Edit:** `app/Models/SaleDetail.php` — add these nine columns to `$fillable`, add `'price_breakdown' => 'array'` to `$casts` (so it automatically encodes/decodes as JSON).

### 2.3 Build `GoldRateService`
**Create:** `app/Services/Jewelry/GoldRateService.php`
Methods:
- `getCurrentRate(int $metalTypeId, int $karatId, ?int $warehouseId = null): ?GoldRate` — finds the most recent `active` row for that metal+karat, preferring a row with a matching `warehouse_id` over a company-wide (`null`) row if both exist.
- `setRate(int $metalTypeId, int $karatId, float $ratePerUnit, int $currencyId, ?int $warehouseId, int $userId): GoldRate` — always `GoldRate::create(...)`, never updates an existing row.
- `history(int $metalTypeId, int $karatId, ?array $dateRange = null): Collection` — for the rate-history screen (§3.4) and reports (§4).

**Write unit tests:** `tests/Unit/GoldRateServiceTest.php` — at minimum: "the newest rate wins", "a warehouse-specific rate beats a company-wide rate for the same warehouse", "a company-wide rate is used when no warehouse-specific rate exists".

### 2.4 Build `JewelryPricingService` (the pricing engine — the most important file in this whole project)
**Create:** `app/Services/Jewelry/JewelryPricingService.php`

Calculation, in this exact order (from the customization brief):
1. **Metal Value** = `product.jewelry_metal_weight` × current gold rate (via `GoldRateService::getCurrentRate()` for the product's `metal_type_id` + `karat_id`, scoped to the sale's `warehouse_id`)
2. **Wastage Value** — computed from `wastage_type`/`wastage_value`: a percentage of Metal Value, a percentage added to weight before pricing, or a fixed value
3. **Making Charge** — computed from `making_charge_type`/`making_charge_value`: fixed amount, amount × grams, percentage of Metal Value, a manually entered value, or a formula string
4. **Stone Value** = sum of `ItemStone::where('product_id', ...)->sum('total_cost_amount')`
5. **Base Jewelry Value** = Metal Value + Wastage Value + Making Charge + Stone Value + Labor (if provided) + additional components
6. **Selling Price** = Base Jewelry Value + Markup − Discount + Tax

Public methods:
- `preview(int $productId, ?int $warehouseId, array $overrides = []): array` — returns the full structured breakdown (every line above, plus the gold rate used and its `effective_at`). Called by the item form (§3.1) and the POS (§2.6) before anything is saved.
- `priceForSale(int $productId, ?int $warehouseId, array $saleContext = []): array` — called exactly once, at the moment a sale line is created (§2.6). Its return value is what gets written into the new `sale_details` columns from §2.2 and is never recalculated afterward.

Both methods must call the same internal calculation function — do not write the math twice. This is what guarantees the price a cashier previews is identical to what ends up on the invoice.

**Write unit tests:** `tests/Unit/JewelryPricingServiceTest.php` — one test per making-charge method, one per wastage method, and one test proving `preview()` and `priceForSale()` return identical numbers for identical inputs.

### 2.5 New controllers and routes for gold rates + pricing preview
**Create:** `app/Http/Controllers/GoldRateController.php` — `index()` (list/history, calls `GoldRateService::history()`), `store()` (calls `GoldRateService::setRate()`, gated by `gold_rates_manage` permission via `$this->authorizeForUser(...)`, matching the pattern already used in `PosController.php`), `current()` (calls `getCurrentRate()`).
**Create:** `app/Http/Controllers/JewelryPricingController.php` — `preview()` (calls `JewelryPricingService::preview()`, gated by `jewelry_items_manage` or no extra permission since it's read-only preview).

**Edit:** `routes/tenant_api.php` — inside the existing authenticated route group (starts at line 44), add:
```php
Route::get('gold-rates', 'GoldRateController@index');
Route::post('gold-rates', 'GoldRateController@store');
Route::get('gold-rates/current', 'GoldRateController@current');
Route::post('pricing/preview', 'JewelryPricingController@preview');
```
Add these near the existing `pos/*` routes (around line 481–491) so anyone reading the file later finds all the jewelry-adjacent routes grouped together.

**Where it's reflected locally:** these are pure API endpoints — nothing to see yet in a browser. Test with Postman/curl against your local tenant API first; Person C's Gold Rate screen (§3.4) and Pricing Preview component (§3.2) are what actually call these.

### 2.6 Wire the pricing engine into the real POS and Sales flow
**Edit:** `app/Http/Controllers/PosController.php`
- In `GetProductsByParametre` (the method that lists/searches products for the POS grid, roughly lines 1649–1900): when a product has `is_jewelry_item = true`, call `JewelryPricingService::preview()` instead of (or alongside) the existing flat `product.price` calculation, and include the full breakdown in the JSON returned to the POS screen.
- In `CreatePOS` (the method that actually creates the `Sale` + `sale_details` rows): when a line item's product is a jewelry item, call `JewelryPricingService::priceForSale()` and write its result into the nine new `sale_details` columns from §2.2 (`gold_rate_id`, `gold_rate_value`, `karat_id`, `metal_weight_used`, `making_charge_amount`, `wastage_amount`, `stone_value_amount`, `price_breakdown`, `override_approved_by`).

**Edit:** `app/Http/Controllers/SalesController.php`
- Wherever a `Sale`/`sale_details` row can be created or edited outside the POS (the same file used for both dashboard and API sales creation), apply the same rule: jewelry line items always go through `JewelryPricingService::priceForSale()`, and once `statut === 'completed'`, none of the nine snapshot columns are ever recalculated or overwritten — check the existing `statut == 'completed'` gates already in this file (there are many, e.g. around lines 220, 291, 329...) and make sure your new logic respects the same gate, not a new one.
- Implement the override/approval logic: if a user manually overrides the calculated price and the override exceeds `pos_settings.jewelry_override_approval_threshold` (from Person A's §1.8), require a second user's approval before the sale can post, and record their user ID in `override_approved_by`.

**Where it's reflected locally:** `/app/pos` (once Person D wires the visual side in §5.4) and on the printed invoice (once Person D updates `resources/views/pdf/sale_pdf.blade.php` in §5.5) — but the underlying data is correct and testable via the API as soon as this task is merged, even before those UI tasks land.

### 2.7 Done-check for Person B
By the end of this section: `POST /pricing/preview` for a seeded jewelry item returns a correct, fully itemized breakdown; completing a real POS sale for that item writes the same numbers into `sale_details`; entering a new gold rate afterward does not change that sale's stored numbers.

---

## 3. Person C — Frontend: Item Screens, Gold Rate Screen, Pricing Preview, Settings UI

**Depends on:** Person A's §1 (for what fields exist) and, for live data, Person B's §2.5 endpoints (you can build the UI against mocked responses first and wire the real endpoints in once B's PRs merge — don't block on B if you're ready to start the template/markup work).

### 3.1 Add jewelry sections to the product form
**Edit:** `resources/src/views/app/pages/products/Add_product.vue`
**Edit:** `resources/src/views/app/pages/products/Edit_product.vue`

Both files already have a "Pharmacy" form section (search for `PHARMACY` in `Add_product.vue`, around line 1481 — `<div class="form-section" id="section-pharmacy">`, with a matching sidebar nav entry around line 1605, and a data block around line 3018). Copy this exact pattern to add six new sections, each shown only when `product.is_jewelry_item` is true (and the tenant's `setting.jewelry_mode` is on):
1. **Metal & Karat** — dropdown for `metal_type_id` (loaded from `GET metal-types` — see note below), dropdown for `karat_id` filtered to the selected metal.
2. **Weight Information** — `jewelry_gross_weight`, `jewelry_net_weight`, `jewelry_metal_weight`, `jewelry_weight_uom`.
3. **Stones and Certificates** — a repeatable row group (add/remove rows) for `item_stones`: stone type dropdown, stone name, quantity, carat value, color, clarity, cut, shape, certificate number, unit cost; plus top-level `hallmark_reference` and `certificate_number` fields.
4. **Cost and Making Charges** — `making_charge_type` dropdown + `making_charge_value`, `wastage_type` dropdown + `wastage_value`.
5. **Pricing Preview** — embed the shared `PricingPreview.vue` component you'll build in §3.2, passing it the current form values so it live-updates as the user types.
6. Leave the existing General Information / Images / Inventory Location / Audit sections untouched.

**Note on loading metal types/karats/stone types into the dropdowns:** there is no dedicated `GET metal-types` endpoint planned in this project — the simplest approach (confirm with Person B) is to have `GoldRateController@index` or a small addition return them alongside rates, or add three trivial `index()` endpoints to `GoldRateController.php`. Flag this to Person B as a two-line addition if it's missing when you get here.

### 3.2 Build the shared Pricing Preview component
**Create:** `resources/src/views/app/components/PricingPreview.vue` (a new file, alongside other shared components in that folder)
Props: `productId`, `warehouseId`, optional `overrides`. On mount and whenever props change, calls `POST /pricing/preview` (Person B's §2.5 endpoint) and renders the full breakdown: Gold Rate (+ effective date), Metal Weight, Metal Value, Making Charge, Wastage, Stone Value, Labor, Markup, Discount, Tax, **Final Price**.
This exact same component gets embedded in three places total: here in the item form, again in the POS screen (Person D wires this in §5.4), and optionally in the item detail view (§3.3) — build it once, generic, so all three just pass different props.

### 3.3 Item list and item detail
**Edit:** `resources/src/views/app/pages/products/index_products.vue` — add filters for: metal type, karat, category, gross-weight range, metal-weight range, stone type, certificate number, warehouse, status, price range. Follow the existing filter-bar pattern already used for category/brand/warehouse filters in this file.
**Edit:** `resources/src/views/app/pages/products/Detail_Product.vue` — show the full gold/stone specification, current calculated price (embed `PricingPreview.vue` read-only), the rate used, and — once Person D's data exists (§5) — movement history and attached certificates.

### 3.4 New Gold Rate management screen
**Create:** `resources/src/views/app/pages/settings/gold_rates.vue`
Model this directly on `resources/src/views/app/pages/settings/currencies.vue` (a `vue-good-table` list with server-side paging/search/sort, an "Add" button opening a modal form, edit/delete row actions) — except there is no edit/delete here, only "Add a new rate" (since rates are insert-only, per §2.1) and a read-only history table. Fields on the "enter today's rate" form: metal type, karat, warehouse (optional — blank means company-wide), currency, rate per unit, weight unit.
**Edit:** `resources/src/router.js` — register the new route, following the exact style of the existing `pos_settings` route (around line 2169–2176):
```js
{
  name: "gold_rates",
  path: "gold_rates",
  component: () =>
    import(/* webpackChunkName: "gold_rates" */ "./views/app/pages/settings/gold_rates")
},
```
placed as a child under the existing `path: "/app/settings"` parent route (around line 2084).

**Where it's reflected locally:** `/app/settings/gold_rates` once this is merged and the tenant is logged in.

### 3.5 Jewelry tab in System Settings
**Edit:** `resources/src/views/app/pages/settings/system_settings.vue`
This file already has a "Pharmacy Settings Tab" you should copy exactly (search for `pharmacy` — the tab content block around line 3284–3350, the tab's entry in the tabs array around line 4232, the `data()` defaults around line 3907–3909, and the form-submission `self.data.append(...)` calls around line 4755–4756). Add a matching "Jewelry" tab with: `jewelry_mode` toggle, `default_making_charge_type`/`default_making_charge_value`, `default_wastage_type`/`default_wastage_value`, `gold_rate_requires_approval` toggle.

### 3.6 Jewelry fields in POS Settings
**Edit:** `resources/src/views/app/pages/settings/pos_settings.vue` — add form fields for `show_gold_rate_on_pos`, `allow_jewelry_price_override`, `jewelry_override_approval_threshold`, following the existing pattern in this file for how `allow_overselling`/`direct_network_printing` toggles were added.

### 3.7 Confirm the new permissions render correctly
**Check (edit only if needed):** `resources/src/views/app/pages/settings/permissions/Permissions.vue`, `Create_permission.vue`, `Edit_permission.vue` — after Person A's §1.9 is merged and seeded, open `/app/settings/permissions/list` and confirm the five new permissions appear and can be assigned to a role through the existing UI with no code changes. If for some reason they don't show up automatically, that's the one place you may need a small edit.

**Where it's reflected locally:** `/app/settings/permissions/list`.

### 3.8 Done-check for Person C
By the end of this section: a jewelry item can be fully created through `/app/products/store` with a live, correct price preview; `/app/settings/gold_rates` lets someone enter and see rate history; `/app/settings/System_settings` has a working Jewelry tab; `/app/products/list` has all the new filters.

---

## 4. Person D — Weight-Based Inventory, POS/Invoice UI, Reports, Full Regression/QA

**Depends on:** Person A's §1 (schema), Person B's §2.4/§2.6 (pricing engine + POS integration) for the POS/invoice tasks, and Person C's §3.2 (`PricingPreview.vue`) for §4.4 below. The inventory (§4.1–§4.2) and reports (§4.3) tasks can start immediately after Person A's §1 merges, independent of B and C.

### 4.1 Serialized jewelry pieces — extend the existing serial-tracking system
**Create migration:** `database/migrations/tenant/2026_08_01_000010_add_jewelry_fields_to_product_serials_table.php`
Add to the existing `product_serials` table: `piece_weight` (decimal 12,3, nullable), `karat_id` (unsigned FK → `karats.id`, nullable).
**Edit:** `app/Models/ProductSerial.php` — add these two columns to `$fillable`/`$casts`.
No changes needed to `app/Models/ProductSerialMovement.php` or its table — the existing append-only movement log (statuses: `available`, `sold`, `returned_customer`, `returned_supplier`, `damaged`, `reserved`) already satisfies "an item cannot be sold twice" and "every movement is logged" for serialized jewelry pieces; you're only adding the two extra descriptive fields above.
Check `app/Http/Controllers/SerialNumberController.php` for wherever serials are created/edited and make sure the create/edit form data path accepts the two new fields when the parent product `is_jewelry_item`.

### 4.2 Weighted/grouped gold items — extend warehouse stock tracking
**Create migration:** `database/migrations/tenant/2026_08_01_000011_add_available_weight_to_product_warehouse_table.php`
Add `available_weight` (decimal 12,3, nullable) to the existing `product_warehouse` table, alongside its existing `qte` column.
**Create migration:** `database/migrations/tenant/2026_08_01_000012_create_product_weight_movements_table.php`
New table `product_weight_movements`, mirroring the shape of `product_serial_movements`: `id`, `product_id` (FK), `warehouse_id` (FK), `warehouse_location_id` (FK → `warehouse_locations.id`, nullable), `movement_type` (string), `weight_delta` (decimal 12,3), `source_document` (string, nullable), `user_id` (FK → `users.id`), `created_at` only (append-only, no `updated_at` needed).
**Create model:** `app/Models/ProductWeightMovement.php` — simple model, `$fillable` matching the columns above, `belongsTo` relationships to `Product`, `Warehouse`, `WarehouseLocation`, `User`.
**Edit:** `app/Models/product_warehouse.php` (note the existing lowercase filename — don't rename it) — add `available_weight` to `$fillable`/`$casts`.

**Check, then extend if needed:** `app/Http/Controllers/TransferController.php` — this already handles moving stock between warehouses (`resources/src/views/app/pages/transfers/*.vue`). Confirm whether it currently supports a location-level move (e.g. safe → showroom, both inside the same warehouse, using `warehouse_location_id`) via the existing `ProductWarehouseLocation` model. If it only supports warehouse-to-warehouse moves today, extend `TransferController.php`'s create/complete logic to also accept a `from_warehouse_location_id`/`to_warehouse_location_id` pair and write a `ProductWeightMovement` row (weighted items) or a `ProductSerialMovement` row (serialized items) when the transferred product is a jewelry item.

**Where it's reflected locally:** `/app/transfers` (create/detail/index screens already exist per `resources/src/views/app/pages/transfers/`) — once your extension lands, a transfer between two `warehouse_locations` under the same warehouse becomes possible there.

### 4.3 New reports
**Edit:** `app/Http/Controllers/ReportController.php` — add two new methods, following the exact style of the existing `inventory_valuation_summary(Request $request)` method (around line 5626, including its `$this->authorizeForUser($request->user('api'), 'permission_name', Product::class)` gate):
- `karat_wise_sales_report(Request $request)` — revenue and grams sold, grouped by karat, date-range and warehouse filterable, exportable to PDF/Excel like other reports in this file.
- `jewelry_stock_valuation(Request $request)` — current inventory value by weight and by karat, using `GoldRateService::getCurrentRate()` for live valuation.

**Create:** `resources/src/views/app/pages/reports/karat_wise_sales_report.vue` — model on `resources/src/views/app/pages/reports/detail_product_report.vue` or `product_sales_report.vue`.
**Create:** `resources/src/views/app/pages/reports/jewelry_stock_valuation.vue` — model on the existing `resources/src/views/app/pages/reports/inventory_valuation_summary.vue` (same idea, karat-aware).
**Edit:** `resources/src/router.js` — register both new report routes as children under the existing `path: "/app/reports"` parent (around line 2361), following the exact style of the existing `inventory_valuation_summary` / `stock_inventory_valuation` route entries (around lines 2606–2621).

**Where it's reflected locally:** `/app/reports/karat_wise_sales_report` and `/app/reports/jewelry_stock_valuation` (or whatever exact path segments you register — keep them consistent with the route `name`s above).

### 4.4 POS screen — show the jewelry breakdown
**Edit:** `resources/src/views/app/pages/pos.vue`
On the product tile and on each cart line item, when the product `is_jewelry_item`: show image, barcode/serial, metal type, karat, gross/metal weight, a short stone summary, the live gold rate, and embed Person C's `PricingPreview.vue` component (§3.2) so the cashier sees the exact same breakdown before completing the sale. Wire this to call `POST /pricing/preview` (Person B's §2.5) as items are added/changed in the cart, and to display Person B's stored breakdown (§2.2's `price_breakdown` column) once a sale is completed, rather than recalculating.

### 4.5 Invoice/receipt template
**Edit:** `resources/views/pdf/sale_pdf.blade.php` — for jewelry line items, print the gold rate used, karat, making charge, wastage, and stone value lines, reading directly from the `sale_details` snapshot columns from Person B's §2.2 (never recalculate at print time).
**Edit (if needed):** `resources/src/views/app/pages/settings/pos_receipt.vue` — if the receipt-layout settings screen needs a new toggle for "show jewelry breakdown lines on printed receipt", add it here following the existing toggle pattern in this file.

**Where it's reflected locally:** the printed/PDF invoice generated from a completed POS sale (`/app/pos` → complete a sale → print/download).

### 4.6 Full regression and multi-tenant isolation testing
This is the task that ties everyone else's work together — do it continuously as each of the other three merge their pieces, not only at the very end.
- **Multi-tenant isolation check:** on a second, non-jewelry tenant, confirm `jewelry_mode` is off by default and that literally nothing about that tenant's UI, API responses, or database changed because of this project.
- **Regression check:** confirm every existing non-jewelry flow (plain product creation, non-jewelry POS sale, existing reports) still works exactly as before on the Grids Gold tenant itself, with `jewelry_mode` on — since it should only ever *add* screens/fields, never change existing ones.
- **The acceptance scenario** (§5 below) — run it start to finish, more than once, on a freshly seeded tenant.
- Keep a running list of bugs found and re-test after each fix.

### 4.7 Done-check for Person D
By the end of this section: a jewelry item can be received into inventory, transferred between locations with a logged movement record, sold through the real POS with a correct live and printed price breakdown, and both new reports produce correct numbers — and a second tenant shows zero side effects from any of it.

---

## 5. The Acceptance Scenario (run this together, as a team, when all four sections above are merged)

This is the exact minimum acceptance scenario from the customization brief. Nothing is "done" until this runs cleanly end to end.

1. Create a new tenant or jewelry company.
2. Create a branch (warehouse), a showroom, a safe, and a warehouse location.
3. Configure gold as a metal type.
4. Configure 18K, 21K, 22K, and 24K.
5. Enter today's gold rate for 21K.
6. Create a 21K gold ring (a jewelry item).
7. Enter gross weight, net weight, and metal weight.
8. Add stone quantity, carat, color, clarity, and stone value.
9. Add making charge and wastage.
10. Preview the complete calculated price.
11. Receive the item into inventory.
12. Transfer it from the safe to the showroom.
13. Scan the item in the POS.
14. Display the jewelry price breakdown.
15. Complete payment and issue an invoice.
16. Store the gold-rate and pricing snapshot on the invoice.
17. Reduce stock automatically.
18. Display the item movement history.
19. Verify that another tenant cannot access any of the previous data.

---

## 6. Cross-Person Dependency Map (quick reference)

| If you're working on... | You need this from someone else first | Shared files to coordinate on |
|---|---|---|
| Person B (§2) | Person A's §1.1–§1.9 merged | none |
| Person C (§3.1–§3.6) | Person A's §1 merged; can start UI shell before Person B's §2.5 is ready | `resources/src/router.js` (also touched by Person D, §4.3 — pull before editing) |
| Person D §4.1–§4.3 | Person A's §1 merged | `resources/src/router.js` (also touched by Person C, §3.4 — pull before editing) |
| Person D §4.4–§4.5 | Person B's §2.6 and Person C's §3.2 merged | none |
| Person D §4.6 (QA) | Everyone's work, continuously | — |

The only file two people are likely to touch independently is `resources/src/router.js` (Person C adds the Gold Rate settings route in §3.4, Person D adds two report routes in §4.3). Per the GitHub guide: pull `develop` immediately before editing it, and if you both need to touch it in the same week, send a one-line heads-up first.

---

## 7. What Is Explicitly Out of Scope (don't build this by accident)

- Manufacturing, casting, bill of materials, factory production, scrap recovery
- Repair management
- Wholesale memo, salesman inventory, advanced appraisal, scrap and trade-in
- A full customer-facing portal, dynamic online repricing
- RFID (barcode/QR remain in scope; RFID is a later add-on)
- A full double-entry Gold Ledger module (this project ships gold-rate history and per-invoice snapshots only, per §2.1–§2.2 — that already satisfies "daily gold rate" and "posted invoice snapshot")
- A parallel multi-company-per-tenant hierarchy (Warehouse already serves as "branch" throughout this project, per the architecture decision in the main implementation plan)
