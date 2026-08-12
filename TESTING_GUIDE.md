# Grids Gold — Testing & Verification Guide

This is the practical companion to `README.md` (which documents *what* was
built, feature by feature, against `Grids Gold Docs/Grids Gold
Customization.pdf`). This document is for *running* the application from
this zip and *verifying* every feature end to end — setup steps, every
login you'll need, exactly how the databases are organized, a full
checklist of what to test, and an explicit end-to-end acceptance script.

If anything below doesn't match what you see, stop and re-read §6 (Database
Architecture) first — most confusion during setup traces back to one of the
two points explained there.

---

## 1. What this is

Grids Gold is a jewelry-retail customization of an existing multi-tenant
POS/inventory/e-commerce platform (Quantro). The base platform (tenants,
users, permissions, POS, inventory, invoicing, online store, reports) was
extended — not replaced — with jewelry-specific item fields, gold/metal
attributes, karat management, weight-based inventory, a daily gold-rate
module, stones and certificates, making charges and wastage, a shared
pricing engine, and a gold-aware POS and invoice. See `README.md`'s top
section for the full, section-by-section changelog of what was built and
by whom.

## 2. Prerequisites

- **PHP 8.2 or newer** (built and tested on 8.4)
- **Composer 2.x**
- **Node.js 18+ and npm** (built and tested on Node 22 / npm 10)
- **MySQL 5.7+/8.0, or MariaDB 10.3+**
- Windows, macOS, or Linux — the setup steps below are shown for Windows
  (`start.bat`) since that's this project's primary dev environment; the
  equivalent shell commands work identically on macOS/Linux (just run each
  line manually instead of double-clicking a `.bat`).

## 3. One-time setup

Do these once, in this exact order. After this, starting the app for every
subsequent session is just step 3.7 (`start.bat`, or `php artisan serve`).

**3.1 — Extract the zip** and open a terminal in the project folder.

**3.2 — Configure the database connection.**
```
copy .env.example .env
php artisan key:generate
```
Open `.env` and set `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD` to
match your local MySQL/MariaDB instance. Everything else in `.env.example`
already has a working default (mail, cache, session, and queue all run
without any external service) — you don't need to touch anything else to
get the app running. Third-party integrations (Stripe, WooCommerce, SMS
gateways, a live gold-price API) are all optional and blank by default;
leave them blank unless you're specifically testing that integration.

**3.3 — Install dependencies.**
```
composer install
npm install
npm run dev
```
(`start.bat`, below, will also do this automatically if you skip straight
to it and these folders don't exist yet — but running them yourself first
means you'll see any error immediately instead of buried in the script's
output.)

**3.4 — Run the central database migrations.**
```
php artisan migrate --force
```
This creates the platform's own tables (tenants, plans, billing, etc.) in
whatever database you named in `.env`.

**3.5 — Complete the `/setup` wizard once.** Start a temporary server:
```
php artisan serve --host=127.0.0.1 --port=8000
```
Visit **`http://localhost:8000/setup`** in a browser and complete the
wizard. This is the step that creates:
- the Super Admin account (**you choose the email and password on this
  screen** — write down what you enter, it is not fixed by the app)
- the subscription plans (Starter / Professional / Enterprise)
- Passport authentication keys for the central app

When it finishes, the success screen shows your Super Admin login and a
direct link to `/super/login`. Stop the server (`Ctrl+C`) once this is
done — you only need to visit `/setup` this one time.

**3.6 — Create the jewelry tenant.**
```
php artisan tenant:ensure-jewelry --migrate
```
This one command:
- creates a tenant on the `jewelry` subdomain, pinned to a fixed database
  name (`quantrocousr_tenant_jewelry`) so it's identical for every person
  who runs this
- imports the full jewelry demo dataset (`database/jewelrydatabase.sql`) —
  products, gold rates, settings, demo users — automatically, since this is
  a brand-new database
- runs that tenant's own migrations
- creates the Passport authentication client the tenant needs (without
  this, login would silently succeed but every next request would bounce
  back to the login page)
- activates a Professional-tier subscription for the tenant, which is what
  makes the online store reachable (a lower-tier plan doesn't include it)

This command is safe to re-run any time — it will not overwrite or import
into a database that already exists, and every step above is a no-op if
already done.

**3.7 — Make `jewelry.localhost` resolve.** This app uses one subdomain per
tenant, not one URL path per tenant. Add this line to your hosts file:
- **Windows:** `C:\Windows\System32\drivers\etc\hosts` (edit as
  Administrator)
- **macOS/Linux:** `/etc/hosts` (edit with `sudo`)
```
127.0.0.1  jewelry.localhost
```

**3.8 — Start the app for real.**
```
start.bat
```
(or, on macOS/Linux / if you'd rather run it manually:
`php artisan serve --host=127.0.0.1 --port=8000`)

You're done. Every subsequent time you want to run the app, this is the
only step you need.

## 4. URLs

| Surface | URL |
|---|---|
| Super Admin login | http://localhost:8000/super/login |
| Setup wizard (one-time only, §3.5) | http://localhost:8000/setup |
| Jewelry tenant — dashboard/login | http://jewelry.localhost:8000/login |
| Jewelry tenant — POS | http://jewelry.localhost:8000/pos |
| Jewelry tenant — Online Store | http://jewelry.localhost:8000/online_store |
| Jewelry tenant — Client Portal | http://jewelry.localhost:8000/portal/login |

## 5. Login credentials

| Account | Email | Password | Notes |
|---|---|---|---|
| Super Admin | *whatever you entered in §3.5* | *whatever you entered in §3.5* | Not fixed by the app — you choose it during setup. |
| Jewelry tenant Owner | `laravelcamp@gmail.com` | `Jewelry@123` | Full access — dashboard, POS, settings, all permissions. This is the account for testing everything in §7/§8 below. |
| Online store demo customer | `shop.julian@jewelrycenter.test` | `Jewelry@123` | Pre-approved, active account. Self-registration also works if you'd rather create a new one (no invite code required). |
| Client Portal demo customer | `portal.isabella@jewelrycenter.test` | `Jewelry@123` | Separate login system from the online store — for viewing invoices/payments as a client. |

**Note:** only one tenant-side staff account (Owner) is seeded. If you need
to verify role-based permission restrictions (e.g. what a Cashier can/can't
see), log in as Owner and create a second user under **Settings → Users**,
assigning them a more limited role — this takes under a minute and is the
intended way to test that.

## 6. Database architecture, clarified

This project uses **one database per tenant**, plus one shared **central**
database for platform-level data (tenant registry, plans, billing). This
is standard for this kind of multi-tenant app, but it produces two things
that can look confusing at first glance:

- **The central database's name is whatever you put in `.env`.** It is not
  hardcoded anywhere — `.env.example` suggests `quantrocousr_dbx7`, but
  that's just an example value, not a requirement. It holds `tenants`,
  `plans`, `tenant_subscriptions`, and other platform-wide tables.
- **The jewelry tenant's database name is always exactly
  `quantrocousr_tenant_jewelry`.** This one *is* fixed on purpose — it's
  set by the `tenant:ensure-jewelry` command specifically so that everyone
  running this project ends up with the identical database name, instead
  of each machine generating a different random one. It holds all the
  actual jewelry business data: products, gold rates, sales, stones, etc.

**You will see two extra `.sql` files at the repository root:
`quantrocousr_dbx7.sql` and `quantrocousr_db3.sql`. Ignore both of them.**
They are database snapshots from the original developer's own personal
local environment (their own central database, and an unrelated,
non-jewelry test tenant they were using for something else) that happened
to be tracked in git. **Nothing in the setup process imports or requires
either of them** — the only seed data file that matters is
`database/jewelrydatabase.sql`, and it is imported automatically by
`tenant:ensure-jewelry` in §3.6. If you see either of these two root-level
files and wonder whether you're supposed to do something with them: no.

## 7. Full feature verification checklist

Log in as the jewelry tenant Owner (§5) for all of the following, unless
noted otherwise. Each line is an action and the result you should see.

### Tenant isolation
- [ ] The jewelry tenant's dashboard, POS, and data are only reachable at
  `jewelry.localhost:8000` — the central `localhost:8000/super` panel has
  no visibility into jewelry products, sales, or customers.
- [ ] Under **Settings → Permissions**, five jewelry-specific permissions
  exist (`jewelry_items_manage`, `gold_rates_view`, `gold_rates_manage`,
  `gold_rates_approve`, `jewelry_pricing_override`) and can be assigned per
  role.
- [ ] A user without the `view_restricted_locations` permission cannot see
  safe/vault inventory locations in location pickers or item filters.

### Jewelry item master
- [ ] **Products → Create Product**, with "This is a jewelry item" enabled,
  shows six extra sections: Metal & Karat, Weight Information, Stones and
  Certificates, Cost and Making Charges, Pricing Preview, and (on edit)
  Audit & History — alongside the normal General Info/Images/Inventory
  Location sections.
- [ ] Metal type dropdown offers Gold/Silver/Platinum; selecting a metal
  filters the karat dropdown to that metal's karats (18K/21K/22K/24K for
  Gold, 925/900/800 for Silver, 950 for Platinum).
- [ ] Gross weight, net weight, and metal weight fields accept decimals;
  saving with metal weight greater than gross weight is rejected.
- [ ] Hallmark reference and certificate number fields exist; entering a
  certificate number or hallmark that's already used on another product is
  rejected as a duplicate.
- [ ] **Products → All Products** list has filters for metal type, karat,
  category, gross/metal-weight range, stone type, certificate number,
  branch, location, ownership type (own/memo/consignment), and price range.

### Stones and certificates
- [ ] On a jewelry item's form, "Stones and Certificates" lets you add
  multiple stone rows, each with stone type, name, quantity, carat value,
  color, clarity, cut, shape, certificate number, and unit cost.
- [ ] The sum of all stone costs on the item feeds directly into the
  pricing preview (see next section) — verify the "Stone Value" line in the
  preview matches the sum you entered.

### Making charges, wastage, and the pricing engine
- [ ] "Cost and Making Charges" section offers all five making-charge
  methods: fixed amount, per gram, percentage of metal value, manual entry,
  and formula-based; and all three wastage methods: percentage of weight,
  percentage of value, fixed value.
- [ ] The **Pricing Preview** panel (embedded in the item form) updates
  live as you change weight, karat, making charge, or stone values, showing
  every line: Gold Rate (+ effective date), Metal Weight, Metal Value,
  Making Charge, Wastage, Stone Value, Markup, Discount, Tax, and Final
  Price.
- [ ] The exact same preview component/breakdown appears again on the item
  Detail page (read-only) and again on the POS screen when adding a
  jewelry item to a cart — confirm all three show identical numbers for the
  same item.

### Gold rate module
- [ ] **Settings → Gold Rates** lets you enter a new rate (metal, karat,
  optional warehouse, currency, rate per unit) — there is deliberately no
  edit/delete button, only "add a new rate" and a read-only history table
  (rates are insert-only by design, so old invoices are never retroactively
  affected).
- [ ] After entering a new rate for a metal/karat, the pricing preview for
  a product of that metal/karat immediately reflects the new rate.
- [ ] Entering a rate in a different currency than the tenant's default is
  either converted or rejected consistently (not silently applied as if it
  were the tenant's currency).
- [ ] *(Optional, needs a `GOLDAPI_KEY` in `.env`)* Settings → Jewelry has a
  toggle + provider/API key fields for live metal-price sync; with a valid
  key, rates populate automatically without manual entry.

### Inventory
- [ ] A serialized jewelry piece (e.g. a ring) can be received into
  inventory with an individual serial number; it cannot be sold twice (try
  selling the same serial twice — the second attempt should be blocked).
- [ ] A weighted/grouped item (e.g. loose gold) tracks *available weight*
  in addition to quantity — selling part of the weight reduces the
  remaining available weight correctly.
- [ ] **Transfers** supports moving an item between two locations *within
  the same warehouse* (e.g. safe → showroom), not just warehouse-to-
  warehouse, and records a movement entry either way.
- [ ] An item's Detail page shows real movement history (not a placeholder)
  — receiving, transfers, and sales should all appear.

### POS and invoicing
- [ ] Scanning/selecting a jewelry item in the POS shows: image,
  barcode/serial, metal type, karat, gross/metal weight, a stone summary,
  the current gold rate, and the full price breakdown — before the sale is
  completed.
- [ ] Completing a jewelry sale produces an invoice that shows the gold
  rate used, karat, making charge, wastage, and stone value.
- [ ] After completing a sale, enter a *new* gold rate for that metal/karat
  and confirm the already-completed invoice's price is unchanged (it must
  never recalculate).
- [ ] Manually overriding a calculated price above the configured
  threshold (Settings → POS Settings → jewelry override threshold) requires
  a second user's approval before the sale can post.

### Online store
- [ ] `http://jewelry.localhost:8000/online_store` loads and shows real
  jewelry products with real photos (no placeholder/broken images).
- [ ] A product's Quick View shows the same jewelry specification and price
  breakdown as the dashboard/POS.
- [ ] Add a jewelry item to the cart, check out (as the seeded demo
  customer or a newly registered one), and confirm the order is created
  with a stored price snapshot matching what was shown at checkout.
- [ ] The cart page, checkout, and thank-you page are all reachable from
  the site's navigation — nothing should 404 or dead-end.

### Reports
- [ ] **Reports → Karat-wise Sales Report** shows revenue and grams sold,
  grouped by karat, filterable by date range and warehouse.
- [ ] **Reports → Jewelry Stock Valuation** shows current inventory value
  by weight and karat, using the current gold rate.

## 8. End-to-end acceptance scenario

This is the project's official minimum acceptance test — run it start to
finish, once, using these concrete sample values:

1. Use the already-created jewelry tenant (§3.6) — or, to test tenant
   creation itself, create a second one via the Super Admin panel.
2. Under **Settings → Warehouses**, confirm (or create) a branch/warehouse,
   plus a "Showroom" and "Safe" location under it (Inventory Locations).
3. Confirm Gold exists as a metal type (**Settings → Metal Types**) — it's
   pre-seeded.
4. Confirm 18K, 21K, 22K, and 24K exist under Gold (**Settings → Karats**)
   — pre-seeded.
5. **Settings → Gold Rates**: enter today's rate for Gold/21K (e.g. `65.00`
   per gram in your tenant's currency).
6. **Products → Create Product**: name it "Test Acceptance Ring", mark it
   as a jewelry item, type = serialized, metal = Gold, karat = 21K.
7. Enter gross weight `8.500`, net weight `8.200`, metal weight `7.900`
   (grams).
8. Add one stone: type Diamond, quantity 1, carat value `0.250`, color
   "VS1", and a stone value of `50.00`.
9. Set making charge = per gram, value `15.00`; wastage = percentage of
   weight, value `4.000`.
10. Confirm the Pricing Preview shows a complete, non-zero breakdown
    (Metal Value + Wastage + Making Charge + Stone Value = a sensible Base
    Value, plus Markup/Tax/Discount to a Final Price).
11. Save the product, then receive it into inventory at the Safe location
    with a serial number.
12. Create a Transfer moving that serial from Safe to Showroom.
13. In the POS, scan or search for "Test Acceptance Ring".
14. Confirm the jewelry price breakdown displays before completing the
    sale.
15. Complete payment (any method) and issue the invoice.
16. Open the invoice and confirm the gold rate and full pricing snapshot
    are printed on it.
17. Confirm the item's stock/serial status is now "sold" and no longer
    available in inventory.
18. Open the item's Detail page and confirm the movement history shows
    receive → transfer → sale, in order.
19. Log into a *different* tenant (or the Super Admin panel) and confirm
    none of the above — the product, the rate, the invoice — is visible
    there.

## 9. Explicitly out of scope — not bugs if missing

The project brief deliberately excluded these from this phase. If you
don't find them, that's expected, not a defect:

- Manufacturing, casting, bill of materials, factory production, scrap
  recovery
- Repair management
- Wholesale memo, salesman inventory, advanced appraisal, scrap/trade-in
- A full customer-facing portal or dynamic online repricing
- RFID (barcode/QR are in scope; RFID is a later add-on)
- A full double-entry Gold Ledger (this ships gold-rate history and
  per-invoice snapshots only, which satisfies the brief's actual
  requirement)
- Multiple companies inside one tenant (Warehouse serves as "branch"
  throughout, per the architecture decision in the implementation plan)

## 10. Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Dashboard/POS/online store show a "Platform not ready" error | The `/setup` wizard (§3.5) was never completed | Visit `http://localhost:8000/setup` and complete it, then re-run `php artisan tenant:ensure-jewelry --migrate` |
| Redirected to a "subscription inactive or expired" / billing page | Should no longer happen — `tenant:ensure-jewelry` now auto-activates a subscription. If it does: re-run `php artisan tenant:ensure-jewelry --migrate` after confirming §3.5 is done (plans must exist first) |
| `jewelry.localhost:8000` doesn't load / DNS error | Hosts file entry (§3.7) missing or the browser/OS DNS cache needs a refresh | Re-check the hosts file entry; try `http://127.0.0.1:8000` with a `Host: jewelry.localhost` header via curl to confirm the server itself is fine |
| `composer install` or `npm install` fails | PHP/Node version too old, or no internet access for the first install | Confirm versions against §2 |
| "SQLSTATE... Access denied" on any artisan command | `.env` `DB_USERNAME`/`DB_PASSWORD` don't match your local MySQL | Re-check §3.2 |
| Port 8000 already in use | Another process is using it | `php artisan serve --port=8001` (adjust all URLs above accordingly) |
