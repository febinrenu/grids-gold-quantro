# Grids Gold — Jewelry Customization of Quantro

This section documents everything the team has built, in full, against the
project brief in **`Grids Gold Docs/Grids Gold Customization.pdf`** (the
kickoff brief) and **`Grids Gold Docs/Grids Gold - Per-Person Task
Breakdown.md`** (the task split across the four teammates). It follows the
brief's own section numbers so every requirement can be checked off directly
against what was actually shipped. Nothing below is planned or in-progress —
it is all merged into `develop`.

**Contributors:** Edlinnnn (Person A — backend foundation), rishusinghal15
(Person B — gold rate & pricing engine, POS/sales integration), Nandana1102
(Person C — item/settings frontend, luxury UI polish, demo data/assets), and
febinrenu (Person C follow-through, full customization audit, tenant
infrastructure, live metal price sync, storefront, and stabilization work).

---

## 1. Objective — Jewelry Retail Core (brief §1)

Quantro's existing tenant/company/branch/user/permission/item/inventory/
POS/invoicing/customer/payment/report architecture was extended, not
replaced. The delivered Retail Core covers every bullet in the brief's
objective list: jewelry item management, gold and metal attributes, karat
and purity management, weight-based inventory, daily gold rates, stones and
certificates, making charges and wastage, jewelry price calculation,
gold-aware POS and invoicing, and tenant/company/branch/location isolation.

## 2. Tenant Isolation & Architecture (brief §2)

- Every jewelry table is a new, additive table or additive column — nothing
  existing was renamed, removed, or repurposed.
- Everything is gated behind a single `jewelry_mode` toggle on `settings`,
  exactly like the pre-existing "Pharmacy Mode" pattern. A second,
  non-jewelry tenant sees zero UI/API/DB change.
- All jewelry tables/columns are tenant-scoped by Quantro's existing
  per-tenant database model (each tenant has its own physical database, so
  there is no `company_id` leakage risk by construction).
- Gold rates can be company-wide (`warehouse_id = null`) or branch/warehouse
  specific, with a per-tenant toggle to enable branch-specific overrides
  (`PR #12`).
- Restricted (safe/vault) warehouse locations are gated behind a new
  `view_restricted_locations` permission, enforced in location pickers, item
  filters, and item detail (`PR #12`).
- Price changes, gold-rate creation, and stock adjustments are recorded in a
  general `audit_logs` table (`database/migrations/tenant/2026_08_02_000007_create_audit_logs_table.php`).
- Item codes, certificate numbers, and hallmark references are all
  duplicate-checked within the tenant (`PR #12`).

## 3. Jewelry Item Master (brief §3)

`app/Models/Product.php` was extended (never replaced) with:

- `is_jewelry_item`, `jewelry_item_type` (serialized, weighted, style, set,
  service, non_stock — all six types from the brief's §3.1 list)
- `metal_type_id`, `karat_id` (FKs to the new `metal_types`/`karats` tables)
- `jewelry_gross_weight`, `jewelry_net_weight`, `jewelry_metal_weight`,
  `jewelry_weight_uom`
- `hallmark_reference`, `certificate_number`
- `making_charge_type`, `making_charge_value`, and — added during the audit
  pass — `making_charge_formula` for the formula-based method
- `wastage_type`, `wastage_value`

All existing generic fields (item ID, code/SKU, name, category, subcategory,
brand, description, barcode, images, active/archived status) and the
existing `weight`/`length`/`width`/`height` shipping-dimension columns were
left completely untouched, per the brief's explicit instruction.

Validation implemented: weight values can't be negative, a weighted item
must have a weight, karat is required when the metal needs purity
identification (`MetalType.requires_purity`, added in the audit pass to
replace a fragile "has any karats" proxy), metal weight can't exceed gross
weight, and item code / certificate number / hallmark reference are all
duplicate-checked per tenant.

## 4. Stones and Gemstones (brief §4)

New `item_stones` table + `app/Models/ItemStone.php`, exactly matching the
brief's suggested schema: stone type, stone name, quantity, carat value,
color, clarity, cut, shape, certificate number, unit/total cost, notes. A
product can have any number of stone rows, and the stone total feeds
directly into the pricing engine (§7 below).

## 5. Making Charges & Jewelry Cost Components (brief §5)

All five making-charge methods from the brief are supported end to end:
**fixed amount, amount per gram, percentage of metal value, manually
entered, and formula-based** (the formula path — evaluated through a safe
expression parser, not `eval()` — was completed during the audit pass in
`PR #12` after the initial cut only implemented the pricing-engine side of
it). Wastage supports all three methods from the brief: percentage of
weight, percentage of value, and fixed value.

## 6. Daily Gold Rate Module (brief §6)

New `gold_rates` table + `app/Models/GoldRate.php` + `app/Services/Jewelry/GoldRateService.php`.

- **Insert-only by design** — there is no "edit a gold rate" anywhere in the
  project. Entering a new rate always creates a new row, which is what keeps
  old invoices safe from today's rate changes and gives free rate history.
- `getCurrentRate()` prefers a warehouse-specific rate over a company-wide
  one for the same metal/karat; `setRate()` always inserts; `history()`
  backs the rate-history screen and reports.
- Rates are separated by karat, support multiple currencies, and the
  gold-rate lookup is scoped to the tenant's own currency (a gap found and
  closed in the audit — previously `currency_id` was captured but never
  actually checked, so a rate entered in the wrong currency could silently
  apply).
- Branch-specific overrides are supported behind a tenant-level toggle.
- Managed at `/app/settings/gold_rates` — an "Add a new rate" form plus a
  read-only history table (there is deliberately no edit/delete, per the
  insert-only rule above).
- **Beyond the brief:** a live metal-price sync (`PR #19`) was added on top
  of manual entry — gold/silver/platinum spot prices pulled from a
  configurable external provider (`goldapi.io` by default, pluggable via a
  `MetalPriceProviderInterface`), purity-adjusted per karat, stored
  canonically in USD with instant per-tenant currency conversion on read.
  Provider, API key, and enable/disable are configured per tenant from
  Settings → Jewelry — no `.env` editing — with the key encrypted at rest
  and never sent back to the browser in plaintext. An hourly scheduled job
  (`jewelry:refresh-metal-rates`) keeps rates current automatically while
  manual entry remains fully available alongside it.

## 7. Jewelry Pricing Engine (brief §7)

`app/Services/Jewelry/JewelryPricingService.php` is the single, shared
pricing engine — the brief's core requirement that "pricing logic must not
be written separately inside every screen." Both its public methods
(`preview()` for live previews, `priceForSale()` for an actual sale) share
one internal calculation function, so a cashier's preview is guaranteed
identical to what lands on the invoice.

Calculation sequence, exactly as specified in the brief:
`Metal Value → Wastage Value → Making Charge → Stone Value → Base Jewelry
Value (+ Labor/additional components) → Selling Price (+ Markup + Tax −
Discount)`.

This one engine is wired into every consumer the brief lists as required:
the item form's live preview, the standalone `PricingPreview.vue` component,
the POS grid and cart, `SalesController`'s dashboard/API sale creation path,
and the online store (checkout price validation + quick-view breakdown,
`PR #22`). Quotations/sales-orders and a customer portal are explicitly
future-phase per the brief's §14 exclusions and were not built.

The full breakdown (gold rate + effective date, metal weight, metal value,
making charge, wastage, stone value, labor, markup, discount, tax, final
price) is shown before any price is saved or any sale is posted, via the
shared `PricingPreview.vue` component (used identically in the item form,
POS, and item detail — built once, generic, per the brief's instruction).

## 8. Item Screens (brief §8)

`Add_product.vue` / `Edit_product.vue` gained six new sections, shown only
when the product is a jewelry item and the tenant has `jewelry_mode` on —
**Metal & Karat, Weight Information, Stones and Certificates, Cost and
Making Charges, Pricing Preview, and Audit & History** (the last one, along
with a movement-history table replacing a placeholder, was closed during
the audit pass) — alongside the untouched existing General
Information/Images/Inventory Location sections. That's all nine sections the
brief's §8.1 asked for.

The item list (`index_products.vue`) has filters for every dimension the
brief's §8.2 lists: metal type, karat, category, gross/metal-weight range,
stone type, certificate number, branch, location, status, ownership type
(own/memo/consignment — added in the audit pass), and price range.

Item detail (`Detail_Product.vue`) shows the full gold and stone
specification, a read-only pricing preview, the rate used, real movement
history, purchase/sales history, and certificates/attachments — everything
in the brief's §8.3 list.

## 9. Inventory Customization (brief §9)

- **Serialized pieces:** the existing `product_serials`/
  `product_serial_movements` append-only tracking was extended with
  `piece_weight` and `karat_id` — the existing movement statuses (available,
  sold, returned, damaged, reserved, etc.) already satisfied "an item cannot
  be sold twice" and "every movement is logged."
- **Weighted/grouped items:** new `available_weight` column on
  `product_warehouse` alongside the existing `qte`, plus a new append-only
  `product_weight_movements` table mirroring the serial-movement shape
  (company/branch/location/item/movement type/weight delta/source
  document/user/timestamp — matching the brief's §9 movement-record spec
  exactly).
- A tenant-wide `inventory_movements` ledger unifies POS sales, transfers,
  adjustments, and purchase receiving into one drill-down-able log (audit
  pass, `PR #12`).
- Transfers gained a `from_warehouse_location_id`/`to_warehouse_location_id`
  pair, so a transfer can represent a same-warehouse relocation (e.g. safe →
  showroom) without moving stock between warehouses — directly enabling
  acceptance-scenario step 12.

## 10. POS and Invoice Customization (brief §10)

The POS grid and cart display, for every jewelry item: image, barcode/serial,
metal type, karat, gross/metal weight, a stone summary, the live gold rate,
metal value, making charge, stone value, discount, tax, and final price —
via the same shared `PricingPreview.vue` used everywhere else, so the
cashier previews the exact calculation before completing the sale.

**Posted invoice snapshot** — on `sale_details`: `gold_rate_id`,
`gold_rate_value`, `karat_id`, `metal_weight_used`, `making_charge_amount`,
`wastage_amount`, `stone_value_amount`, `price_breakdown` (full JSON
breakdown), and `override_approved_by`. Every field the brief's §10 asks a
posted invoice to snapshot. Once a sale is completed, none of these columns
are ever recalculated — entering a new daily gold rate afterward does not
change a past invoice. (A real bug was caught and fixed here during the
audit: `SaleDetail::insert()` is a raw bulk insert that bypasses Eloquent's
array→JSON cast, so `price_breakdown` was being written as the literal
string `"Array"` — this would have broken every real jewelry POS sale.
`price_breakdown` is now correctly serialized before the bulk insert.)

Manual price overrides above `pos_settings.jewelry_override_approval_threshold`
require a second user's approval before the sale can post, with the
approver's ID recorded in `override_approved_by`.

The printed/PDF invoice (`resources/views/pdf/sale_pdf.blade.php`) prints
the gold rate, karat, making charge, wastage, and stone value for jewelry
lines, reading directly from the stored snapshot — never recalculating at
print time.

## 11. APIs and Backend Services (brief §11)

`GoldRateController` (`index`/`store`/`current`) and
`JewelryPricingController` (`preview`) expose:

```
GET  /gold-rates
POST /gold-rates
GET  /gold-rates/current
POST /pricing/preview
```

During the audit pass, non-breaking `/api/v1/*` aliases were added
alongside these for every endpoint the brief's §11 lists literally
(`/api/v1/gold-rates`, `/api/v1/gold-rates/current`,
`/api/v1/pricing/preview`, plus the pre-existing items/inventory/invoices/
payments endpoints under the same prefix) — see `routes/tenant_api.php`
around the `/api/v1/*` alias block. All jewelry endpoints go through the
same tenant validation, authorization (`authorizeForUser` + the new
`GoldRatePolicy`/`JewelryPricingPolicy`), and validation conventions already
used everywhere else in the app.

## 12–13. Development Order & Acceptance Scenario (brief §12–§13)

The team followed the brief's recommended order (review → freeze reference
dictionaries → migrations → backend services → frontend → testing). The
reference dictionary was frozen up front, per §0 of the per-person
breakdown: metal types (Gold, Silver, Platinum), karats (18K/21K/22K/24K,
925/900/800, 950), stone types (Diamond, Ruby, Emerald, Sapphire, Pearl,
Topaz, Opal), and the making-charge/wastage method lists.

The brief's §13 minimum acceptance scenario (create a tenant → branch,
showroom, safe, warehouse location → configure gold + 4 karats → enter
today's 21K rate → create a 21K gold ring → enter weights → add stones →
add making charge/wastage → preview price → receive into inventory →
transfer safe→showroom → scan in POS → see breakdown → complete sale + issue
invoice → snapshot stored → stock reduced → movement history visible →
confirm tenant isolation) runs start to finish on the seeded jewelry demo
tenant.

## 14. Explicitly Out of Scope (brief §14 / per-person breakdown §7)

Per the brief's own phase-1 boundary, none of the following were built (and
weren't meant to be): manufacturing/casting/bill-of-materials/factory
production, repair management, wholesale memo, salesman inventory, advanced
appraisal, scrap and trade-in, a full customer-facing portal, dynamic online
repricing, RFID, a full double-entry gold ledger, or a parallel
multi-company-per-tenant hierarchy (Warehouse already serves as "branch"
throughout, per the architecture decision in the implementation plan).

---

## 15. Beyond the Original Brief — Stabilization, Infrastructure & Redesign

Work that went beyond the customization brief's literal scope, needed to
make the Retail Core actually usable day to day:

- **Person C's item-form task, redone** — an initial pass at the jewelry
  item form (`PR #9`) was reverted (`PR #10`) and rebuilt from scratch
  (`PR #11`), which is the version described in §8 above.
- **Full customization audit** (`PR #12`) — 17 gaps found by auditing the
  entire app against the brief PDF section by section, closed high → medium
  → low (enumerated across §2–§10 above).
- **SRS-schema single source of truth** (`PR #16`) — rebuilt
  `database/jewelrydatabase.sql` from the SRS's 10 business domains as the
  one canonical seed dataset, fixing HRM table collisions (extended instead
  of duplicated), an AccountingV2 duplicate, and a signed/unsigned foreign
  key bug, with permissions wired through.
- **Standalone jewelry database schema & regression fixes** (`PR #14`,
  `PR #15`) — a dedicated schema file for fresh jewelry tenants; fixed a
  401-based sidebar/access lockout, several previously-deferred broken
  routes, uninitialized-array and string/number crash bugs, a silent CDN
  dependency in the booking calendar, and dark-mode contrast issues on
  billing/plan cards.
- **Tenancy, migration, and mail fixes** (`PR #18`) — fixed a fatal error in
  `TenantApprovedMail` (redeclaring `Mailable`'s inherited `$locale`
  property with a type), a hardcoded central DB driver that broke automated
  testing, duplicate index names colliding under SQLite's database-wide
  index namespace, and MySQL-only raw SQL in tenant migrations that broke
  portability.
- **Shared jewelry tenant setup** (`PR #21`) — an idempotent
  `tenant:ensure-jewelry` artisan command so every teammate gets the exact
  same `jewelry`-domain tenant pinned to `quantrocousr_tenant_jewelry`,
  auto-imports demo data only into a database it just created (never
  touching existing data), auto-creates the Passport personal-access client
  that seed imports don't carry, and a one-command `start.bat` for Windows.
  A later fix (`PR #23`) restored a reliable `mysqli::multi_query()`-based
  import after a regression silently dropped rows on multi-statement SQL
  chunks.
- **Demo data and licensed imagery** (`PR #20`) — synced a populated,
  realistically-priced 48-product jewelry demo dataset with licensed
  (CC BY 2.0 / CC0, attributed) product photography.
- **Online store restoration and modernization** (`PR #22`) — reconnected
  the storefront to the jewelry pricing engine (dynamic pricing, quick-view
  specifications and breakdown, server-side checkout price validation,
  pricing snapshots on order confirmation), fixed collection routing and a
  feature-flag redirect that had made the whole store unreachable, and
  filtered non-jewelry demo clutter out of the customer-facing catalog.
- **Complete storefront visual redesign** (`PR #24`) — replaced the generic
  placeholder look with a warm gold/ivory/espresso design system (Cormorant/
  Montserrat typography, jewel-toned semantics) applied consistently across
  the homepage, product cards, shop, cart, and checkout, all driven by CSS
  custom properties in `resources/css/storefront.css`; removed a
  `picsum.photos` placeholder hero fallback; cropped crude AI-template
  frames baked into the licensed product photography.
  Updated `StoreSetting` defaults so future tenants get the new look
  automatically. Also fixed a genuinely broken cart page (a fully built
  page with no route pointing to it) and a checkout fallback that referenced
  a nonexistent route name.
- **POS, dashboard, and admin UI fixes** (`PR #25`) — made the POS cart
  panel resizable and wider by default (persisted per browser); fixed
  product photos across POS, the online store, and the Product Details page
  rendering with dead white padding instead of filling their frames
  (`object-fit`/`background-size` corrected from `contain` to `cover`);
  unified POS and the online store onto the exact same image source
  (`Product::primaryProductImageFilename()`) so the two surfaces can never
  silently show different photos for the same item; fixed the
  dashboard's warehouse/date-range filter dropdowns being invisible (an
  ancestor's `overflow: hidden` was clipping the popups); flipped the app's
  default theme from dark to light (dark mode remains fully available via
  the toggle); fixed the dark-mode toggle icon itself being invisible in
  light mode (the `moon` icon was never actually registered in the app's
  icon library, so the button silently rendered nothing); recolored the
  Product Details hero banner from a leftover indigo/violet gradient to the
  same gold luxury palette used everywhere else, wired through dark mode;
  and bumped the PWA service worker's cache version so these fixes reach
  users whose browsers had cached a pre-fix build.

---

# Stocky Base Platform — Version History

*(The sections below predate the Grids Gold jewelry customization and
describe the underlying Stocky/Quantro platform this project extends.)*

# Version 1.0 - 15-04-2026


# Version 1.1  - 23-04-2026

+ Added Custom Domain feature allowing tenants to connect and use their own domains with full DNS verification, SSL support

+ Added secure Central Database Backup tab in Super Settings for creating, listing, downloading, and deleting SQL backups with protected storage and secure access controls.

+ Added Logs & System Health section for centralized monitoring of system errors and tenant infrastructure status.

+ Added Default Language setting for visitors in General Settings, allowing administrators to define the default display language shown to guests before login.

+ Added Pending Payments page for tracking, reviewing, and managing all unpaid or awaiting-confirmation transactions in one centralized view.

+ Fixed various minor issues and improved overall system stability and performance.

🧰 Bug Fixes & Enhancements

+ Updated documentation for better clarity and setup guidance.

+ Resolved multiple minor bugs to improve performance and reliability.


# Version 1.2  - 30-06-2026


## 🚀 Super Admin

### ✨ New Features

* Added **Default Branding** for newly created tenants.
* Added **Reserved Subdomains** management.
* Added **Automatic Subscription & Trial Expiry Reminders** for tenants.
* Added **Demo Tenant Generator**.
* Added a **Support System** between tenants and the Super Admin.
* Added **Mollie Payment Gateway** integration.
* Added an option to **Enable/Disable Languages** from the dashboard for the language selector.
* Added support for **Multilingual Hero Images**.
* Added support for **Custom Fonts** on frontend layouts.
* Added a dedicated **Terms & Conditions** page.


## 🚀 Tenant

### ✨ New Features

* Enhanced the application to be pharmacy-ready by adding batch management and expiry date tracking for products.

* Added Progressive Web App (PWA)

* Added the ability to manage Email and SMS templates per language.

* Added Cash Drawer Auto-Open Integration using QZ Tray.

* Add a new feature called "Direct Network Printing (ESC/POS)" to the POS system.

* Add a new feature in SMS Settings called "Custom SMS Gateway" that allows users to integrate any SMS provider using their own API details

* Improved POS performance for faster loading and smoother transactions

* Added System Health Dashboard

* Added drag & drop widget ordering on Dashboard .

* Added dashboard customization options for font size and font family.

* Added Real-time Sales Counter page with live auto-refresh

* Added Internal Location (Rack/Shelf/Location) feature and reporting support.

* Added a new toggle option in Online Store Settings to show or hide product prices, allowing prices to be visible only for logged-in users in the online store.

* Added Client Portal: clients can login to view invoices, payments, download PDFs

* Assets: added verification dates, due-assets list/page, daily notifications (email + in-app), configurable templates, and cron setup.

* Sales Commission: added commission programs, agents/brokers management, automatic invoice-linked calculations, receipts, and detailed reports.

* Added Knowledge Base module

* Added multi-image support for products with gallery and main image selection

* Added Stripe payment method integration ( Online Store)

* Added Cash on Delivery (COD) payment option in the online store

* Added multi-category and multi-subcategory support for products

* Implemented private account registration with referral code option and admin approval before account activation

* Added ability to change the theme color by selecting a color from the customization panel.

* Added Keyboard Shortcuts to POS

* Added new feature called Overselling Control .

* Added Auto Journal Entries (Accounting Integration).

* Implement a complete Webhooks system

* Added Opening Balance for Suppliers

* Sync Booking Calendar with Google Calendar

* Added 3D Sales Dashboard (Visual Charts)

* 3 Decimal Pricing Support — Enable product pricing with up to 3 decimal places for greater accuracy.

* Kitchen Order Management — Send and manage orders directly from POS to the kitchen workflow.

* POS Return Option — Process product returns directly from the POS interface.

* Advanced Barcode Support — Added support for GTIN, EAN, and other barcode formats, including synchronization with WooCommerce.

* Recruitment Module — Manage job openings, applicants, and hiring processes.

* Meeting Module — Schedule and manage meetings within the system.

* Built-in POS Calculator — Quick calculations directly inside the POS screen.

* Marketing Tools Module — Create and manage customer marketing campaigns.

* Real Estate Theme for Online Store — Launch a property-focused storefront with a dedicated real estate theme.

* Complete Serial Number / IMEI Tracking System

* Multiple Selling Units with Different Prices.


🧰 Bug Fixes & Enhancements

+ Updated documentation for better clarity and setup guidance.

+ Resolved multiple minor bugs to improve performance and reliability.
