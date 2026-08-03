-- =============================================================================
-- Grids Gold — Standalone Jewelry Tenant Database
-- File: database/jewelrydatabase.sql
--
-- Purpose
--   A single, self-contained MySQL 8+ schema for provisioning a brand-new
--   database dedicated to jewelry/gold-business tenants, as opposed to the
--   additive `jewelry_mode` columns previously layered onto the shared
--   Quantro tenant schema via database/migrations/tenant/*.
--
-- How this file is organized
--   PART 1 — Existing Quantro core tables that a jewelry tenant still needs
--            (users, roles, products, sales, warehouses, ...), reproduced
--            here exactly as they exist today (base table + every column
--            added by later migrations), so this file stands on its own.
--   PART 2 — The jewelry-specific tables already built for this project
--            (metal_types, karats, stone_types, item_stones, gold_rates,
--            inventory_movements, audit_logs) plus the jewelry_* columns
--            already merged onto the Part 1 tables above.
--   PART 3 — The remaining enterprise domains from the Grids Gold SRS
--            (Volume 2 — Database Architecture & Backend Design): full
--            organization hierarchy, product/jewelry master data, purchase,
--            sales/customer, manufacturing & repair, accounting & gold
--            ledger, and audit/workflow/integration domains. Where the SRS
--            names an entity that already exists under a different name in
--            Quantro (e.g. SRS "customers" == `clients`, SRS "suppliers" ==
--            `providers`, SRS "sales_invoices" == `sales`/`sale_details`,
--            SRS "purchase_orders" == `purchases`/`purchase_details`), that
--            mapping is called out in a comment instead of duplicating the
--            table under a second name.
--
-- Conventions
--   * InnoDB, utf8mb4 / utf8mb4_unicode_ci throughout.
--   * Part 1 tables keep their real primary-key style (`INT UNSIGNED
--     AUTO_INCREMENT`) and their real FOREIGN KEY constraints, matching the
--     live Quantro schema.
--   * Part 2 tables match the already-merged migrations exactly (no FK
--     constraints — that codebase convention was deliberate; see the
--     migration comments in database/migrations/tenant/2026_08_01_*).
--   * Part 3 (new SRS tables) use `BIGINT UNSIGNED AUTO_INCREMENT` primary
--     keys per the SRS's own convention (Volume 2, Table 1). Direct
--     parent -> child relationships within the same domain (e.g. a
--     purchase order and its lines) get real FOREIGN KEY constraints.
--     Cross-domain references and references into Part 1/2 tables (users,
--     products, warehouses, gold_rates, ...) are plain indexed columns
--     without a hard constraint, so historical/snapshot rows are never
--     blocked by a later delete — the same "immutable history" principle
--     the SRS itself specifies for gold prices and posted invoices.
--
-- Reference dictionaries (must match app-level seed data)
--   Metal types: Gold, Silver, Platinum
--   Karats: Gold -> 18K/21K/22K/24K, Silver -> 925/900/800, Platinum -> 950
--   Stone types: Diamond, Ruby, Emerald, Sapphire, Pearl, Topaz, Opal
--   Making-charge methods: fixed, per_gram, percentage, manual, formula
--   Wastage methods: percentage_of_weight, percentage_of_value, fixed_value
--   Jewelry item types: serialized, weighted, style, set, service, non_stock
-- =============================================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';

-- ==============================================================================
-- PART 1 — EXISTING QUANTRO CORE TABLES (reproduced as-is)
-- ==============================================================================
CREATE TABLE `currencies` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(192) NOT NULL,
  `name` VARCHAR(192) NOT NULL,
  `symbol` VARCHAR(192) NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(192) NOT NULL,
  `label` VARCHAR(192) NULL DEFAULT NULL,
  `description` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `status` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `permissions` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(192) NOT NULL,
  `label` VARCHAR(192) NULL DEFAULT NULL,
  `description` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `permission_role` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `permission_id` INT UNSIGNED NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `permission_role_permission_id` (`permission_id`),
  KEY `permission_role_role_id` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `username` VARCHAR(192) NOT NULL,
  `email` VARCHAR(192) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `remember_token` VARCHAR(100) NULL DEFAULT NULL,
  `avatar` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(192) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  `statut` TINYINT(1) NOT NULL DEFAULT 1,
  `is_all_warehouses` TINYINT(1) NOT NULL DEFAULT 0,
  `record_view` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_role_id_index` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `units` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(192) NOT NULL,
  `ShortName` VARCHAR(192) NOT NULL,
  `base_unit` INT NULL DEFAULT NULL,
  `operator` CHAR(192) NULL DEFAULT '*',
  `operator_value` FLOAT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `base_unit` (`base_unit`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `woocommerce_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `code` VARCHAR(192) NOT NULL,
  `name` VARCHAR(192) NOT NULL,
  `icon` VARCHAR(64) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `subcategories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `status` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subcategories_cat_name_unique` (`category_id`, `name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `brands` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `woocommerce_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `name` VARCHAR(192) NOT NULL,
  `description` VARCHAR(192) NULL DEFAULT NULL,
  `image` VARCHAR(192) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `sales_agents` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `code` VARCHAR(64) NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(192) NULL DEFAULT NULL,
  `phone` VARCHAR(64) NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `notes` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sales_agents_user_id_index` (`user_id`),
  KEY `sales_agents_code_index` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `clients` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `woocommerce_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `sync_issue_type` VARCHAR(64) NULL DEFAULT NULL,
  `sync_issue_message` TEXT NULL,
  `sync_issue_source` VARCHAR(32) NULL DEFAULT NULL,
  `sync_issue_at` DATETIME NULL DEFAULT NULL,
  `is_royalty_eligible` TINYINT(1) NOT NULL DEFAULT 1,
  `points` FLOAT NOT NULL DEFAULT 0,
  `opening_balance` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `credit_limit` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `name` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(255) NULL DEFAULT NULL,
  `lastname` VARCHAR(255) NULL DEFAULT NULL,
  `code` INT NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `state` VARCHAR(100) NULL DEFAULT NULL,
  `zip` VARCHAR(20) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `tax_number` VARCHAR(192) NULL DEFAULT NULL,
  `adresse` VARCHAR(255) NULL DEFAULT NULL,
  `quickbooks_id` VARCHAR(64) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clients_quickbooks_id_index` (`quickbooks_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS domain mapping: fulfills SRS Table 84 ''customers''.';
CREATE TABLE `providers` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `code` INT NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `tax_number` VARCHAR(192) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `adresse` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS domain mapping: fulfills SRS Table 66 ''suppliers''.';
CREATE TABLE `warehouses` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(192) NOT NULL,
  `city` VARCHAR(192) NULL DEFAULT NULL,
  `mobile` VARCHAR(192) NULL DEFAULT NULL,
  `zip` VARCHAR(192) NULL DEFAULT NULL,
  `email` VARCHAR(192) NULL DEFAULT NULL,
  `country` VARCHAR(192) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Serves as SRS''s ''branch'' throughout this project (architecture decision — see per-person task breakdown, item 7).';
CREATE TABLE `warehouse_locations` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `code` VARCHAR(64) NOT NULL,
  `name` VARCHAR(192) NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `is_restricted` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `warehouse_locations_wh_code_unique` (`warehouse_id`, `code`),
  CONSTRAINT `warehouse_locations_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Represents showroom/safe/vault/workshop/transit locations inside a warehouse (branch). is_restricted gates safe/vault visibility per the customization brief.';
CREATE TABLE `product_variants` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `name` VARCHAR(192) NULL DEFAULT NULL,
  `cost` DECIMAL(15,3) NOT NULL,
  `price` DECIMAL(15,3) NOT NULL,
  `wholesale` DECIMAL(15,3) NULL DEFAULT 0,
  `min_price` DECIMAL(15,3) NULL DEFAULT 0,
  `code` VARCHAR(192) NOT NULL,
  `image` VARCHAR(255) NOT NULL DEFAULT 'no-image.png',
  `qty` DECIMAL(10,0) NULL DEFAULT 0,
  `woocommerce_variation_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id_variant` (`product_id`),
  KEY `pv_woocommerce_variation_id_idx` (`woocommerce_variation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `woocommerce_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `woocommerce_missing_sku` TINYINT(1) NOT NULL DEFAULT 0,
  `type` VARCHAR(255) NOT NULL,
  `warranty_period` INT NULL DEFAULT NULL,
  `warranty_unit` VARCHAR(255) NULL DEFAULT NULL,
  `warranty_terms` TEXT NULL,
  `has_guarantee` TINYINT(1) NOT NULL DEFAULT 0,
  `guarantee_period` INT NULL DEFAULT NULL,
  `guarantee_unit` VARCHAR(255) NULL DEFAULT NULL,
  `code` VARCHAR(192) NOT NULL,
  `gtin` VARCHAR(64) NULL DEFAULT NULL,
  `points` DECIMAL(15,0) NOT NULL DEFAULT 0,
  `Type_barcode` VARCHAR(192) NOT NULL,
  `name` VARCHAR(192) NOT NULL,
  `cost` DECIMAL(15,3) NOT NULL,
  `price` DECIMAL(15,3) NOT NULL,
  `wholesale_price` DECIMAL(15,3) NOT NULL,
  `min_price` DECIMAL(15,3) NOT NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `sub_category_id` INT UNSIGNED NULL DEFAULT NULL,
  `brand_id` INT UNSIGNED NULL DEFAULT NULL,
  `unit_id` INT UNSIGNED NULL DEFAULT NULL,
  `unit_sale_id` INT UNSIGNED NULL DEFAULT NULL,
  `unit_purchase_id` INT UNSIGNED NULL DEFAULT NULL,
  `TaxNet` DECIMAL(15,3) NULL DEFAULT 0,
  `tax_method` VARCHAR(192) NULL DEFAULT '1',
  `discount` DECIMAL(15,3) NULL DEFAULT NULL,
  `discount_method` VARCHAR(192) NULL DEFAULT '1',
  `image` TEXT NULL,
  `note` TEXT NULL,
  `stock_alert` DECIMAL(15,0) NULL DEFAULT 0,
  `weight` DECIMAL(15,0) NULL DEFAULT NULL,
  `length` DOUBLE NULL DEFAULT NULL,
  `width` DOUBLE NULL DEFAULT NULL,
  `height` DOUBLE NULL DEFAULT NULL,
  `is_variant` TINYINT(1) NOT NULL DEFAULT 0,
  `is_imei` TINYINT(1) NOT NULL DEFAULT 0,
  `not_selling` TINYINT(1) NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NULL DEFAULT 1,
  `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
  `hide_from_online_store` TINYINT(1) NOT NULL DEFAULT 0,
  `is_preorder` TINYINT(1) NOT NULL DEFAULT 0,
  `preorder_available_date` DATE NULL DEFAULT NULL,
  `preorder_limit` INT UNSIGNED NULL DEFAULT NULL,
  `preorder_note` VARCHAR(500) NULL DEFAULT NULL,
  `quickbooks_id` VARCHAR(64) NULL DEFAULT NULL,
  -- ---- jewelry fields (added 2026-08-01 / 2026-08-02, PART 2 of this file) ----
  `is_jewelry_item` TINYINT(1) NOT NULL DEFAULT 0,
  `ownership_type` VARCHAR(20) NOT NULL DEFAULT 'own' COMMENT 'own, memo, consignment',
  `jewelry_item_type` VARCHAR(20) NULL DEFAULT NULL COMMENT 'serialized, weighted, style, set, service, non_stock',
  `metal_type_id` INT UNSIGNED NULL DEFAULT NULL,
  `karat_id` INT UNSIGNED NULL DEFAULT NULL,
  `jewelry_gross_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `jewelry_net_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `jewelry_metal_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `jewelry_weight_uom` VARCHAR(10) NOT NULL DEFAULT 'g',
  `hallmark_reference` VARCHAR(191) NULL DEFAULT NULL,
  `certificate_number` VARCHAR(191) NULL DEFAULT NULL,
  `making_charge_type` VARCHAR(20) NULL DEFAULT NULL COMMENT 'fixed, per_gram, percentage, manual, formula',
  `making_charge_value` DECIMAL(12,2) NULL DEFAULT NULL,
  `making_charge_formula` TEXT NULL,
  `wastage_type` VARCHAR(25) NULL DEFAULT NULL COMMENT 'percentage_of_weight, percentage_of_value, fixed_value',
  `wastage_value` DECIMAL(12,3) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `sub_category_id` (`sub_category_id`),
  KEY `brand_id_products` (`brand_id`),
  KEY `unit_id_products` (`unit_id`),
  KEY `unit_id_sales` (`unit_sale_id`),
  KEY `unit_purchase_products` (`unit_purchase_id`),
  KEY `products_quickbooks_id_index` (`quickbooks_id`),
  KEY `products_gtin_index` (`gtin`),
  KEY `products_is_jewelry_item_index` (`is_jewelry_item`),
  KEY `products_metal_type_id_index` (`metal_type_id`),
  KEY `products_karat_id_index` (`karat_id`),
  CONSTRAINT `products_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `products_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `subcategories` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `products_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `products_unit_sale_id_foreign` FOREIGN KEY (`unit_sale_id`) REFERENCES `units` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `products_unit_purchase_id_foreign` FOREIGN KEY (`unit_purchase_id`) REFERENCES `units` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='The Jewelry Item Master. Non-jewelry columns (pharmacy/batch-tracking fields etc.) that exist on the live table but are unrelated to jewelry are intentionally omitted here — see the full migration history in database/migrations/tenant/ for those.';
CREATE TABLE `product_warehouse` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `product_variant_id` INT UNSIGNED NULL DEFAULT NULL,
  `qte` DECIMAL(12,3) NOT NULL,
  `manage_stock` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_warehouse_id` (`product_id`),
  KEY `warehouse_id` (`warehouse_id`),
  KEY `product_variant_id` (`product_variant_id`),
  CONSTRAINT `product_warehouse_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `product_warehouse_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `product_warehouse_product_variant_id_foreign` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Perpetual quantity balance per product/warehouse. Weight-based balances are derived from inventory_movements (PART 2).';
CREATE TABLE `product_serials` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `serial_number` VARCHAR(191) NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `product_variant_id` INT UNSIGNED NULL DEFAULT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'available' COMMENT 'available, sold, returned_customer, returned_supplier, damaged, reserved',
  `purchase_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `purchase_detail_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `provider_id` INT UNSIGNED NULL DEFAULT NULL,
  `cost` DOUBLE NULL DEFAULT NULL,
  `sale_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `sale_detail_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `client_id` INT UNSIGNED NULL DEFAULT NULL,
  `notes` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ps_serial_number_uq` (`serial_number`),
  KEY `ps_product_warehouse_status_idx` (`product_id`, `warehouse_id`, `status`),
  KEY `ps_pvws_idx` (`product_id`, `product_variant_id`, `warehouse_id`, `status`),
  KEY `ps_status_idx` (`status`),
  KEY `ps_purchase_idx` (`purchase_id`),
  KEY `ps_sale_idx` (`sale_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='One row per physical serialized piece (globally unique serial number) — satisfies SRS Business Rule 2 and Rule 3.';
CREATE TABLE `product_serial_movements` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_serial_id` BIGINT UNSIGNED NOT NULL,
  `serial_number` VARCHAR(191) NOT NULL,
  `action` VARCHAR(30) NOT NULL COMMENT 'purchased, sold, sale_returned, purchase_returned, status_changed, adjusted',
  `from_status` VARCHAR(20) NULL DEFAULT NULL,
  `to_status` VARCHAR(20) NULL DEFAULT NULL,
  `warehouse_id` INT UNSIGNED NULL DEFAULT NULL,
  `reference_type` VARCHAR(40) NULL DEFAULT NULL COMMENT 'Sale, Purchase, SaleReturn, PurchaseReturn',
  `reference_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `notes` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `psm_serial_idx` (`product_serial_id`),
  KEY `psm_serial_number_idx` (`serial_number`),
  KEY `psm_reference_idx` (`reference_type`, `reference_id`),
  KEY `psm_action_idx` (`action`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Append-only lifecycle log for a serialized piece — this is the SRS Table 43 item_location_history equivalent for serialized jewelry.';
CREATE TABLE `purchases` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `Ref` VARCHAR(192) NOT NULL,
  `date` DATE NOT NULL,
  `time` TIME NULL DEFAULT NULL,
  `provider_id` INT UNSIGNED NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `tax_rate` DECIMAL(15,3) NULL DEFAULT 0,
  `TaxNet` DECIMAL(15,3) NULL DEFAULT 0,
  `discount` DECIMAL(15,3) NULL DEFAULT 0,
  `shipping` DECIMAL(15,3) NULL DEFAULT 0,
  `GrandTotal` DECIMAL(15,3) NOT NULL,
  `paid_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `statut` VARCHAR(255) NOT NULL,
  `payment_statut` VARCHAR(192) NOT NULL,
  `notes` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_purchases` (`user_id`),
  KEY `provider_id` (`provider_id`),
  KEY `warehouse_id_purchase` (`warehouse_id`),
  CONSTRAINT `purchases_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `purchases_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `purchases_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS domain mapping: fulfills SRS Table 71 ''purchase_orders'' (combined order + receipt for the retail-core scope).';
CREATE TABLE `purchase_details` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cost` DECIMAL(15,3) NOT NULL,
  `purchase_unit_id` INT UNSIGNED NULL DEFAULT NULL,
  `TaxNet` DECIMAL(15,3) NULL DEFAULT 0,
  `tax_method` VARCHAR(192) NULL DEFAULT '1',
  `discount` DECIMAL(15,3) NULL DEFAULT 0,
  `discount_method` VARCHAR(192) NULL DEFAULT '1',
  `purchase_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `product_variant_id` INT UNSIGNED NULL DEFAULT NULL,
  `imei_number` TEXT NULL,
  `total` DECIMAL(15,3) NOT NULL,
  `quantity` DECIMAL(12,3) NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_unit_id_purchase` (`purchase_unit_id`),
  KEY `purchase_id` (`purchase_id`),
  KEY `product_id` (`product_id`),
  KEY `purchase_product_variant_id` (`product_variant_id`),
  CONSTRAINT `purchase_details_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `purchase_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS domain mapping: fulfills SRS Table 72 ''purchase_order_items'' / Table 74 ''goods_receipt_items''.';
CREATE TABLE `subscriptions` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `cycle_type` VARCHAR(192) NOT NULL,
  `total_cycles` INT NOT NULL,
  `billing_cycle` VARCHAR(50) NOT NULL,
  `remaining_cycles` INT NOT NULL,
  `price_per_cycle` DOUBLE NOT NULL,
  `price_per_unit` DOUBLE NOT NULL,
  `quantity` DOUBLE NOT NULL,
  `next_billing_date` DATE NOT NULL,
  `status` VARCHAR(192) NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `client_id` (`client_id`),
  KEY `product_id` (`product_id`),
  KEY `warehouse_id` (`warehouse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `sales` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sale_uuid` CHAR(36) NULL DEFAULT NULL,
  `woocommerce_order_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `woocommerce_order_number` VARCHAR(64) NULL DEFAULT NULL,
  `woocommerce_order_status` VARCHAR(32) NULL DEFAULT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `sales_agent_id` INT UNSIGNED NULL DEFAULT NULL,
  `date` DATE NOT NULL,
  `time` TIME NULL DEFAULT NULL,
  `Ref` VARCHAR(192) NOT NULL,
  `is_pos` TINYINT(1) NULL DEFAULT 0,
  `client_id` INT UNSIGNED NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `subscription_id` INT UNSIGNED NULL DEFAULT NULL,
  `tax_rate` DECIMAL(15,3) NULL DEFAULT 0,
  `TaxNet` DECIMAL(15,3) NULL DEFAULT 0,
  `discount` DECIMAL(15,3) NULL DEFAULT 0,
  `discount_Method` VARCHAR(10) NOT NULL DEFAULT '2',
  `shipping` DECIMAL(15,3) NULL DEFAULT 0,
  `GrandTotal` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `paid_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `payment_statut` VARCHAR(192) NOT NULL,
  `statut` VARCHAR(255) NOT NULL,
  `shipping_status` VARCHAR(255) NULL DEFAULT NULL,
  `notes` TEXT NULL,
  `used_points` DECIMAL(15,0) NOT NULL DEFAULT 0,
  `earned_points` DECIMAL(15,0) NOT NULL DEFAULT 0,
  `discount_from_points` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `quickbooks_invoice_id` VARCHAR(255) NULL DEFAULT NULL,
  `quickbooks_realm_id` VARCHAR(255) NULL DEFAULT NULL,
  `quickbooks_synced_at` TIMESTAMP NULL DEFAULT NULL,
  `quickbooks_sync_error` VARCHAR(2048) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sales_sale_uuid_unique` (`sale_uuid`),
  UNIQUE KEY `sales_woo_order_id_deleted_at_unique` (`woocommerce_order_id`, `deleted_at`),
  KEY `user_id_sales` (`user_id`),
  KEY `sales_agent_id_index` (`sales_agent_id`),
  KEY `sale_client_id` (`client_id`),
  KEY `warehouse_id_sale` (`warehouse_id`),
  KEY `subscription_id` (`subscription_id`),
  CONSTRAINT `sales_sales_agent_id_foreign` FOREIGN KEY (`sales_agent_id`) REFERENCES `sales_agents` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL,
  CONSTRAINT `sales_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `subscriptions` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `sales_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `sales_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `sales_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS domain mapping: fulfills SRS Table 91 ''sales_invoices''. Gold price/pricing snapshot lives on sale_details, per SRS Business Rule 8 (historical transactions never change).';
CREATE TABLE `sale_details` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `sale_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `product_variant_id` INT UNSIGNED NULL DEFAULT NULL,
  `imei_number` TEXT NULL,
  `price` DECIMAL(15,3) NOT NULL,
  `sale_unit_id` INT UNSIGNED NULL DEFAULT NULL,
  `product_pack_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `pack_multiplier` DOUBLE NULL DEFAULT NULL,
  `pack_name` VARCHAR(191) NULL DEFAULT NULL,
  -- ---- jewelry pricing snapshot fields (added 2026-08-01 / 2026-08-02, PART 2) ----
  `gold_rate_id` INT UNSIGNED NULL DEFAULT NULL,
  `gold_rate_value` DECIMAL(12,2) NULL DEFAULT NULL,
  `gold_rate_effective_at` TIMESTAMP NULL DEFAULT NULL,
  `karat_id` INT UNSIGNED NULL DEFAULT NULL,
  `metal_weight_used` DECIMAL(12,3) NULL DEFAULT NULL,
  `making_charge_amount` DECIMAL(12,2) NULL DEFAULT NULL,
  `wastage_amount` DECIMAL(12,2) NULL DEFAULT NULL,
  `stone_value_amount` DECIMAL(12,2) NULL DEFAULT NULL,
  `price_breakdown` JSON NULL,
  `override_approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `TaxNet` DECIMAL(15,3) NULL DEFAULT NULL,
  `tax_method` VARCHAR(192) NULL DEFAULT '1',
  `discount` DECIMAL(15,3) NULL DEFAULT NULL,
  `discount_method` VARCHAR(192) NULL DEFAULT '1',
  `price_type` VARCHAR(32) NOT NULL DEFAULT 'retail',
  `warranty_date` DATE NULL DEFAULT NULL,
  `guarantee_date` DATE NULL DEFAULT NULL,
  `total` DECIMAL(15,3) NOT NULL,
  `quantity` DECIMAL(12,3) NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `details_sale_id` (`sale_id`),
  KEY `sale_product_id` (`product_id`),
  KEY `sale_product_variant_id` (`product_variant_id`),
  KEY `sales_sale_unit_id` (`sale_unit_id`),
  KEY `sale_details_gold_rate_id_index` (`gold_rate_id`),
  KEY `sale_details_karat_id_index` (`karat_id`),
  KEY `sale_details_override_approved_by_index` (`override_approved_by`),
  CONSTRAINT `sale_details_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `sale_details_sale_unit_id_foreign` FOREIGN KEY (`sale_unit_id`) REFERENCES `units` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `sale_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `sale_details_product_variant_id_foreign` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS domain mapping: fulfills SRS Table 92 ''sales_invoice_items'', extended with the posted invoice snapshot (gold rate, karat, making charge, wastage, stone value, full price_breakdown) per the customization brief section 10.';
CREATE TABLE `transfers` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `Ref` VARCHAR(192) NOT NULL,
  `date` DATE NOT NULL,
  `time` TIME NULL DEFAULT NULL,
  `from_warehouse_id` INT UNSIGNED NOT NULL,
  `from_warehouse_location_id` INT UNSIGNED NULL DEFAULT NULL,
  `to_warehouse_id` INT UNSIGNED NOT NULL,
  `to_warehouse_location_id` INT UNSIGNED NULL DEFAULT NULL,
  `items` DECIMAL(15,0) NOT NULL,
  `tax_rate` DECIMAL(15,0) NULL DEFAULT 0,
  `TaxNet` DECIMAL(15,0) NULL DEFAULT 0,
  `discount` DECIMAL(15,0) NULL DEFAULT 0,
  `shipping` DECIMAL(15,0) NULL DEFAULT 0,
  `GrandTotal` DECIMAL(15,0) NOT NULL DEFAULT 0,
  `statut` VARCHAR(192) NOT NULL,
  `approval_status` VARCHAR(50) NOT NULL DEFAULT 'pending',
  `notes` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_transfers` (`user_id`),
  KEY `from_warehouse_id` (`from_warehouse_id`),
  KEY `to_warehouse_id` (`to_warehouse_id`),
  CONSTRAINT `transfers_from_warehouse_id_foreign` FOREIGN KEY (`from_warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `transfers_to_warehouse_id_foreign` FOREIGN KEY (`to_warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `transfers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='from/to_warehouse_location_id (added 2026-08-02) let a transfer represent a safe -> showroom move inside one warehouse, per the acceptance scenario.';
CREATE TABLE `settings` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `currency_id` INT UNSIGNED NULL DEFAULT NULL,
  `CompanyName` VARCHAR(255) NOT NULL,
  `company_name_ar` VARCHAR(255) NULL DEFAULT NULL,
  `CompanyPhone` VARCHAR(255) NOT NULL,
  `CompanyAdress` VARCHAR(255) NOT NULL,
  `vat_number` VARCHAR(255) NULL DEFAULT NULL,
  `logo` VARCHAR(255) NULL DEFAULT NULL,
  `favicon` VARCHAR(255) NULL DEFAULT 'favicon.ico',
  `is_invoice_footer` TINYINT(1) NOT NULL DEFAULT 0,
  `invoice_footer` VARCHAR(192) NULL DEFAULT NULL,
  `invoice_format` VARCHAR(20) NOT NULL DEFAULT 'thermal',
  `invoice_logo_width` SMALLINT UNSIGNED NULL DEFAULT NULL,
  `invoice_logo_height` SMALLINT UNSIGNED NULL DEFAULT NULL,
  `footer` VARCHAR(192) NOT NULL DEFAULT 'Stocky - Ultimate Inventory With POS',
  `developed_by` VARCHAR(192) NOT NULL DEFAULT 'Stocky',
  `client_id` INT UNSIGNED NULL DEFAULT NULL,
  `warehouse_id` INT UNSIGNED NULL DEFAULT NULL,
  `default_account_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `default_payment_method_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `default_language` VARCHAR(192) NOT NULL DEFAULT 'en',
  `point_to_amount_rate` FLOAT NOT NULL DEFAULT 1,
  `default_tax` DECIMAL(10,0) NOT NULL DEFAULT 0,
  `default_dashboard_date_range` VARCHAR(20) NULL DEFAULT 'week',
  `dashboard_section_order` TEXT NULL,
  `dashboard_grid_layout` TEXT NULL,
  `dashboard_font_size` VARCHAR(20) NULL DEFAULT NULL,
  `dashboard_font_family` VARCHAR(255) NULL DEFAULT NULL,
  `sale_prefix` VARCHAR(10) NULL DEFAULT 'SL',
  `purchase_prefix` VARCHAR(10) NULL DEFAULT 'PR',
  `quotation_prefix` VARCHAR(10) NULL DEFAULT 'QT',
  `adjustment_prefix` VARCHAR(10) NULL DEFAULT 'AD',
  `transfer_prefix` VARCHAR(10) NULL DEFAULT 'TR',
  `sale_return_prefix` VARCHAR(10) NULL DEFAULT 'RT',
  `purchase_return_prefix` VARCHAR(10) NULL DEFAULT 'RT',
  `backup_cloud_enabled` TINYINT(1) NOT NULL DEFAULT 0,
  `backup_cloud_provider` VARCHAR(50) NULL DEFAULT NULL,
  `backup_cloud_path` VARCHAR(255) NULL DEFAULT NULL,
  `customize_button_visible` TINYINT(1) NOT NULL DEFAULT 1,
  `hide_site_name` TINYINT(1) NOT NULL DEFAULT 0,
  `offline_sync_enabled` TINYINT(1) NOT NULL DEFAULT 1,
  `enable_3_decimal_pricing` TINYINT(1) NOT NULL DEFAULT 0,
  `show_product_gtin` TINYINT(1) NOT NULL DEFAULT 0,
  `show_serial_tracking` TINYINT(1) NOT NULL DEFAULT 0,
  `enable_multi_pack_selling` TINYINT(1) NOT NULL DEFAULT 0,
  `enable_kitchen_display` TINYINT(1) NOT NULL DEFAULT 0,
  `sms_gateway` INT NULL DEFAULT 1,
  `show_language` TINYINT(1) NOT NULL DEFAULT 1,
  `date_format` VARCHAR(20) NULL DEFAULT 'YYYY-MM-DD',
  `price_format` VARCHAR(50) NULL DEFAULT NULL,
  `dark_mode` TINYINT(1) NOT NULL DEFAULT 0,
  `rtl` TINYINT(1) NOT NULL DEFAULT 0,
  `zatca_enabled` TINYINT(1) NOT NULL DEFAULT 0,
  `quotation_with_stock` TINYINT(1) NOT NULL DEFAULT 1,
  `app_name` VARCHAR(255) NULL DEFAULT 'Stocky | Ultimate Inventory With POS',
  `page_title_suffix` VARCHAR(255) NULL DEFAULT 'Ultimate Inventory With POS',
  `login_hero_title` VARCHAR(255) NULL DEFAULT 'Welcome back!',
  `login_hero_subtitle` VARCHAR(255) NULL DEFAULT NULL,
  `login_panel_title` VARCHAR(255) NULL DEFAULT 'Sign In',
  `login_panel_subtitle` VARCHAR(255) NULL DEFAULT NULL,
  -- ---- jewelry settings (added 2026-08-01 / 2026-08-02, PART 2) ----
  `jewelry_mode` TINYINT(1) NOT NULL DEFAULT 0,
  `default_making_charge_type` VARCHAR(20) NULL DEFAULT NULL,
  `default_making_charge_value` DECIMAL(12,2) NULL DEFAULT NULL,
  `default_wastage_type` VARCHAR(25) NULL DEFAULT NULL,
  `default_wastage_value` DECIMAL(12,3) NULL DEFAULT NULL,
  `gold_rate_requires_approval` TINYINT(1) NOT NULL DEFAULT 0,
  `gold_rate_branch_override_enabled` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `currency_id` (`currency_id`),
  KEY `client_id` (`client_id`),
  KEY `warehouse_id` (`warehouse_id`),
  CONSTRAINT `settings_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `settings_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `settings_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Backup-provider columns (S3/Drive/Dropbox/Google Calendar secrets) that exist on the live table are omitted here as unrelated to jewelry.';
CREATE TABLE `pos_settings` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `note_customer` VARCHAR(192) NOT NULL DEFAULT 'Thank You For Shopping With Us . Please Come Again',
  `show_logo` TINYINT(1) NOT NULL DEFAULT 1,
  `logo_size` INT NOT NULL DEFAULT 60,
  `show_store_name` TINYINT(1) NOT NULL DEFAULT 1,
  `show_reference` TINYINT(1) NOT NULL DEFAULT 1,
  `show_date` TINYINT(1) NOT NULL DEFAULT 1,
  `show_seller` TINYINT(1) NOT NULL DEFAULT 1,
  `show_note` TINYINT(1) NOT NULL DEFAULT 1,
  `show_barcode` TINYINT(1) NOT NULL DEFAULT 1,
  `show_discount` TINYINT(1) NOT NULL DEFAULT 1,
  `show_product_discount` TINYINT(1) NOT NULL DEFAULT 0,
  `show_tax` TINYINT(1) NOT NULL DEFAULT 1,
  `show_shipping` TINYINT(1) NOT NULL DEFAULT 1,
  `show_paid` TINYINT(1) NOT NULL DEFAULT 1,
  `show_due` TINYINT(1) NOT NULL DEFAULT 1,
  `show_payments` TINYINT(1) NOT NULL DEFAULT 1,
  `show_zatca_qr` TINYINT(1) NOT NULL DEFAULT 1,
  `cash_drawer_auto_open` TINYINT(1) NOT NULL DEFAULT 0,
  `cash_drawer_printer_name` VARCHAR(192) NULL DEFAULT NULL,
  `show_customer` TINYINT(1) NOT NULL DEFAULT 1,
  `show_email` TINYINT(1) NOT NULL DEFAULT 1,
  `show_phone` TINYINT(1) NOT NULL DEFAULT 1,
  `show_address` TINYINT(1) NOT NULL DEFAULT 1,
  `products_per_page` INT NOT NULL DEFAULT 10,
  `quick_add_customer` TINYINT(1) NOT NULL DEFAULT 1,
  `barcode_scanning_sound` TINYINT(1) NOT NULL DEFAULT 1,
  `show_product_images` TINYINT(1) NOT NULL DEFAULT 1,
  `show_stock_quantity` TINYINT(1) NOT NULL DEFAULT 1,
  `enable_hold_sales` TINYINT(1) NOT NULL DEFAULT 1,
  `enable_customer_points` TINYINT(1) NOT NULL DEFAULT 1,
  `show_categories` TINYINT(1) NOT NULL DEFAULT 1,
  `show_brands` TINYINT(1) NOT NULL DEFAULT 1,
  `receipt_layout` TINYINT UNSIGNED NOT NULL DEFAULT 1,
  `receipt_paper_size` SMALLINT UNSIGNED NOT NULL DEFAULT 80,
  `is_printable` TINYINT(1) NOT NULL DEFAULT 1,
  `show_Warehouse` TINYINT(1) NOT NULL DEFAULT 1,
  `allow_overselling` TINYINT(1) NOT NULL DEFAULT 0,
  `direct_network_printing` TINYINT(1) NOT NULL DEFAULT 0,
  `network_printer_ip` VARCHAR(64) NULL DEFAULT NULL,
  `network_printer_port` SMALLINT UNSIGNED NULL DEFAULT NULL,
  -- ---- jewelry POS settings (added 2026-08-01, PART 2) ----
  `show_gold_rate_on_pos` TINYINT(1) NOT NULL DEFAULT 1,
  `allow_jewelry_price_override` TINYINT(1) NOT NULL DEFAULT 0,
  `jewelry_override_approval_threshold` DECIMAL(12,2) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==============================================================================
-- PART 2 — JEWELRY-SPECIFIC TABLES (already built for this project)
-- ==============================================================================
CREATE TABLE `metal_types` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(192) NOT NULL,
  `code` VARCHAR(191) NOT NULL,
  `density` DECIMAL(8,3) NULL DEFAULT NULL,
  `requires_purity` TINYINT(1) NOT NULL DEFAULT 1,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `metal_types_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Reference dictionary: Gold, Silver, Platinum. SRS domain mapping: fulfills SRS Table 28 ''metals''.';
CREATE TABLE `karats` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `metal_type_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(20) NOT NULL COMMENT 'e.g. 22K',
  `purity_percentage` DECIMAL(5,2) NOT NULL,
  `fineness` DECIMAL(6,3) NULL DEFAULT NULL,
  `tolerance` DECIMAL(5,2) NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `karats_metal_type_id_idx` (`metal_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Reference dictionary: Gold 18K/21K/22K/24K, Silver 925/900/800, Platinum 950. SRS domain mapping: fulfills SRS Table 29 ''karats''.';
CREATE TABLE `stone_types` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(192) NOT NULL,
  `code` VARCHAR(191) NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stone_types_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Reference dictionary: Diamond, Ruby, Emerald, Sapphire, Pearl, Topaz, Opal. SRS domain mapping: fulfills SRS Table 30 ''gemstones''.';
CREATE TABLE `item_stones` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `stone_type_id` INT UNSIGNED NOT NULL,
  `stone_name` VARCHAR(191) NULL DEFAULT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `carat_value` DECIMAL(8,3) NULL DEFAULT NULL,
  `color` VARCHAR(100) NULL DEFAULT NULL,
  `clarity` VARCHAR(100) NULL DEFAULT NULL,
  `cut` VARCHAR(100) NULL DEFAULT NULL,
  `shape` VARCHAR(100) NULL DEFAULT NULL,
  `certificate_number` VARCHAR(191) NULL DEFAULT NULL,
  `unit_cost_amount` DECIMAL(12,2) NULL DEFAULT NULL,
  `total_cost_amount` DECIMAL(12,2) NULL DEFAULT NULL,
  `notes` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_stones_product_idx` (`product_id`),
  KEY `item_stones_stone_type_idx` (`stone_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='One or more stones per jewelry item. SRS domain mapping: fulfills SRS Table 33 ''item_gemstones''. total_cost_amount feeds the pricing engine''s Stone Value component.';
CREATE TABLE `gold_rates` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `warehouse_id` INT UNSIGNED NULL DEFAULT NULL COMMENT 'NULL = company-wide rate',
  `metal_type_id` INT UNSIGNED NOT NULL,
  `karat_id` INT UNSIGNED NOT NULL,
  `currency_id` INT UNSIGNED NOT NULL,
  `rate_per_weight_unit` DECIMAL(12,2) NOT NULL,
  `weight_uom` VARCHAR(20) NOT NULL DEFAULT 'g',
  `rate_source` VARCHAR(20) NOT NULL DEFAULT 'manual' COMMENT 'manual, api',
  `effective_at` DATETIME NOT NULL,
  `expires_at` DATETIME NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active' COMMENT 'active, expired',
  `created_by` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gold_rates_lookup_idx` (`metal_type_id`, `karat_id`, `warehouse_id`, `effective_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Insert-only: entering a new rate always creates a new row, never an update — this is what keeps posted invoices immune to later rate changes (SRS Business Rule 8).';
CREATE TABLE `inventory_movements` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `warehouse_location_id` INT UNSIGNED NULL DEFAULT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `product_variant_id` INT UNSIGNED NULL DEFAULT NULL,
  `movement_type` VARCHAR(30) NOT NULL COMMENT 'receiving, sale, return, exchange, repair, transfer, adjustment, production, memo',
  `quantity_delta` DECIMAL(14,4) NOT NULL DEFAULT 0,
  `weight_delta` DECIMAL(14,4) NULL DEFAULT NULL,
  `source_type` VARCHAR(40) NULL DEFAULT NULL COMMENT 'e.g. Sale, Transfer, PurchaseOrder, Adjustment',
  `source_id` INT UNSIGNED NULL DEFAULT NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `inv_mov_product_warehouse_idx` (`product_id`, `warehouse_id`),
  KEY `inv_mov_source_idx` (`source_type`, `source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Unified, append-only inventory ledger covering both quantity and weight movements. SRS domain mapping: fulfills SRS Table 47 ''inventory_movements''.';
CREATE TABLE `audit_logs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `auditable_type` VARCHAR(60) NOT NULL,
  `auditable_id` INT UNSIGNED NOT NULL,
  `action` VARCHAR(40) NOT NULL COMMENT 'e.g. price_change, rate_created, adjustment, override, void',
  `old_values` JSON NULL,
  `new_values` JSON NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `audit_logs_auditable_idx` (`auditable_type`, `auditable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Append-only, general-purpose audit trail. SRS domain mapping: fulfills SRS Table 150 ''audit_logs''.';

-- ==============================================================================
-- PART 3 — REMAINING SRS ENTERPRISE DOMAINS (Grids Gold SRS, Volume 2)
-- ==============================================================================
-- New tables in this part use BIGINT UNSIGNED AUTO_INCREMENT primary keys
-- (SRS Volume 2, Table 1 convention). Parent/child pairs within one domain
-- carry real FOREIGN KEY constraints; references into Part 1/2 tables and
-- across domains are plain indexed columns (see header note on why).

-- ---------------------------------------------------------------------------
-- 3.1 Organization Hierarchy — Company / Branch / Vault / Cabinet / Shelf / Tray (SRS Part 2, Tables 1-7)
-- ---------------------------------------------------------------------------
CREATE TABLE `companies` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `company_code` VARCHAR(20) NOT NULL,
  `legal_name` VARCHAR(200) NOT NULL,
  `trade_name` VARCHAR(200) NULL DEFAULT NULL,
  `registration_number` VARCHAR(100) NULL DEFAULT NULL,
  `tax_number` VARCHAR(100) NULL DEFAULT NULL,
  `email` VARCHAR(150) NULL DEFAULT NULL,
  `phone` VARCHAR(30) NULL DEFAULT NULL,
  `website` VARCHAR(255) NULL DEFAULT NULL,
  `logo` VARCHAR(255) NULL DEFAULT NULL,
  `currency_id` INT UNSIGNED NULL DEFAULT NULL,
  `timezone` VARCHAR(50) NULL DEFAULT NULL,
  `fiscal_year_start` DATE NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active' COMMENT 'active, inactive',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `companies_company_code_unique` (`company_code`),
  KEY `companies_currency_id_index` (`currency_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 1. The legal business entity that owns one or more branches (warehouses in this codebase). A single-tenant deployment has exactly one row here.';
CREATE TABLE `branches` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `company_id` BIGINT UNSIGNED NOT NULL,
  `branch_code` VARCHAR(30) NOT NULL,
  `branch_name` VARCHAR(150) NOT NULL,
  `manager_id` INT UNSIGNED NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `address` TEXT NULL,
  `city` VARCHAR(150) NULL DEFAULT NULL,
  `latitude` DECIMAL(10,6) NULL DEFAULT NULL,
  `longitude` DECIMAL(10,6) NULL DEFAULT NULL,
  `gold_price_override` TINYINT(1) NOT NULL DEFAULT 0,
  `default_currency_id` INT UNSIGNED NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `branches_company_branch_code_unique` (`company_id`, `branch_code`),
  KEY `branches_manager_id_index` (`manager_id`),
  CONSTRAINT `branches_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 2. One or more ''warehouses'' (see warehouses.branch_id below) belong to a branch, matching the SRS storage hierarchy Company -> Branch -> Warehouse.';
-- Link the existing `warehouses` table into the new Company -> Branch layer.
-- Nullable so a tenant that never adopts the multi-branch model is unaffected.
ALTER TABLE `warehouses`
  ADD COLUMN `branch_id` BIGINT UNSIGNED NULL DEFAULT NULL AFTER `id`,
  ADD KEY `warehouses_branch_id_index` (`branch_id`),
  ADD CONSTRAINT `warehouses_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL;
CREATE TABLE `vaults` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `vault_code` VARCHAR(30) NOT NULL,
  `vault_name` VARCHAR(150) NOT NULL,
  `maximum_capacity` DECIMAL(12,3) NULL DEFAULT NULL,
  `security_level` VARCHAR(30) NULL DEFAULT NULL,
  `access_policy` TEXT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `vaults_warehouse_code_unique` (`warehouse_id`, `vault_code`),
  CONSTRAINT `vaults_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 4. A highly-secure sub-location of a warehouse. Also represented operationally as a restricted warehouse_locations row (is_restricted = 1); this table adds vault-specific attributes (capacity, access policy).';
CREATE TABLE `display_cabinets` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `cabinet_number` VARCHAR(30) NOT NULL,
  `floor` VARCHAR(30) NULL DEFAULT NULL,
  `section` VARCHAR(60) NULL DEFAULT NULL,
  `lighting_type` VARCHAR(50) NULL DEFAULT NULL,
  `capacity` DECIMAL(12,3) NULL DEFAULT NULL,
  `rfid_reader_id` VARCHAR(60) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `display_cabinets_wh_number_unique` (`warehouse_id`, `cabinet_number`),
  CONSTRAINT `display_cabinets_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 5. Showroom display cabinet.';
CREATE TABLE `shelves` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `display_cabinet_id` BIGINT UNSIGNED NOT NULL,
  `shelf_number` VARCHAR(30) NOT NULL,
  `capacity` DECIMAL(12,3) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `shelves_cabinet_number_unique` (`display_cabinet_id`, `shelf_number`),
  CONSTRAINT `shelves_display_cabinet_id_foreign` FOREIGN KEY (`display_cabinet_id`) REFERENCES `display_cabinets` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 6.';
CREATE TABLE `trays` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `shelf_id` BIGINT UNSIGNED NOT NULL,
  `tray_code` VARCHAR(30) NOT NULL,
  `capacity` DECIMAL(12,3) NULL DEFAULT NULL,
  `weight_limit` DECIMAL(12,3) NULL DEFAULT NULL,
  `current_weight` DECIMAL(12,3) NOT NULL DEFAULT 0,
  `rfid_zone` VARCHAR(60) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `trays_shelf_code_unique` (`shelf_id`, `tray_code`),
  CONSTRAINT `trays_shelf_id_foreign` FOREIGN KEY (`shelf_id`) REFERENCES `shelves` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 7. The finest-grained physical location — every inventory item can ultimately be traced down to one tray. warehouse_locations (Part 1) remains the operational location used by transfers/movements; trays add SRS''s full display-hierarchy granularity beneath a display_cabinet.';

-- ---------------------------------------------------------------------------
-- 3.2 Geography (SRS Database Layer 3, Tables 13-15)
-- ---------------------------------------------------------------------------
CREATE TABLE `countries` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `iso_code` VARCHAR(3) NOT NULL,
  `currency_id` INT UNSIGNED NULL DEFAULT NULL,
  `phone_code` VARCHAR(10) NULL DEFAULT NULL,
  `timezone` VARCHAR(50) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `countries_iso_code_unique` (`iso_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `states` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `country_id` BIGINT UNSIGNED NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `code` VARCHAR(10) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `states_country_id_index` (`country_id`),
  CONSTRAINT `states_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `cities` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `state_id` BIGINT UNSIGNED NOT NULL,
  `country_id` BIGINT UNSIGNED NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cities_state_id_index` (`state_id`),
  KEY `cities_country_id_index` (`country_id`),
  CONSTRAINT `cities_state_id_foreign` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `cities_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Normalized geography master. ''clients''/''providers'' keep their existing free-text country/city/state columns for backward compatibility; new code may optionally join through city_id where added.';

-- ---------------------------------------------------------------------------
-- 3.3 Product & Jewelry Master extensions (SRS Part 3, Tables 22-46)
-- ---------------------------------------------------------------------------
-- categories/subcategories/brands/products/product_variants/item_stones already
-- exist (Part 1/2). This section adds the SRS entities Quantro does not yet
-- have: design/template/collection/manufacturer master data, hallmarks,
-- certificates, RFID/barcode/QR registries, and the append-only item history
-- tables (location, weight, cost) plus a generic attachment/image store.
CREATE TABLE `manufacturers` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `contact_details` VARCHAR(255) NULL DEFAULT NULL,
  `address` TEXT NULL,
  `rating` DECIMAL(3,2) NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 27.';
CREATE TABLE `collections` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `description` TEXT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 25. Examples: Wedding, Luxury, Festival, Kids, Premium.';
CREATE TABLE `product_designs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `design_code` VARCHAR(60) NOT NULL,
  `cad_reference` VARCHAR(255) NULL DEFAULT NULL,
  `designer` VARCHAR(150) NULL DEFAULT NULL,
  `design_version` VARCHAR(20) NULL DEFAULT NULL,
  `release_date` DATE NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_designs_design_code_unique` (`design_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 24. Supports design version control.';
CREATE TABLE `product_templates` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` INT UNSIGNED NOT NULL,
  `template_code` VARCHAR(40) NOT NULL,
  `template_name` VARCHAR(200) NOT NULL,
  `design_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `brand_id` INT UNSIGNED NULL DEFAULT NULL,
  `manufacturer_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `collection_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `default_karat_id` INT UNSIGNED NULL DEFAULT NULL,
  `default_metal_type_id` INT UNSIGNED NULL DEFAULT NULL,
  `default_making_charge` DECIMAL(12,2) NULL DEFAULT NULL,
  `warranty_months` INT NULL DEFAULT NULL,
  `description` TEXT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_templates_template_code_unique` (`template_code`),
  KEY `product_templates_design_id_index` (`design_id`),
  KEY `product_templates_collection_id_index` (`collection_id`),
  CONSTRAINT `product_templates_design_id_foreign` FOREIGN KEY (`design_id`) REFERENCES `product_designs` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL,
  CONSTRAINT `product_templates_collection_id_foreign` FOREIGN KEY (`collection_id`) REFERENCES `collections` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL,
  CONSTRAINT `product_templates_manufacturer_id_foreign` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturers` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 23 — the design a product represents. NOT inventory and cannot be sold; ''products'' (Part 1) rows are the actual sellable/inventory items and may optionally reference a template via products.product_template_id (added below).';
-- Optional link from a jewelry item back to the template it was made from.
ALTER TABLE `products`
  ADD COLUMN `product_template_id` BIGINT UNSIGNED NULL DEFAULT NULL AFTER `wastage_value`,
  ADD KEY `products_product_template_id_index` (`product_template_id`),
  ADD CONSTRAINT `products_product_template_id_foreign` FOREIGN KEY (`product_template_id`) REFERENCES `product_templates` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL;
CREATE TABLE `hallmarks` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `hallmark_authority` VARCHAR(150) NOT NULL,
  `country` VARCHAR(100) NULL DEFAULT NULL,
  `hallmark_code` VARCHAR(60) NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `verification_status` VARCHAR(20) NOT NULL DEFAULT 'unverified',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hallmarks_code_unique` (`hallmark_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 34.';
CREATE TABLE `item_hallmarks` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `hallmark_id` BIGINT UNSIGNED NOT NULL,
  `applied_date` DATE NULL DEFAULT NULL,
  `verified_by` INT UNSIGNED NULL DEFAULT NULL,
  `verification_result` VARCHAR(20) NULL DEFAULT NULL,
  `notes` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_hallmarks_product_id_index` (`product_id`),
  KEY `item_hallmarks_hallmark_id_index` (`hallmark_id`),
  CONSTRAINT `item_hallmarks_hallmark_id_foreign` FOREIGN KEY (`hallmark_id`) REFERENCES `hallmarks` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 35.';
CREATE TABLE `certificates` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `authority_name` VARCHAR(150) NOT NULL,
  `website` VARCHAR(255) NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 36. Master list of certificate authorities (GIA, IGI, BIS, HRD, SGL).';
CREATE TABLE `item_certificates` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `certificate_id` BIGINT UNSIGNED NOT NULL,
  `certificate_number` VARCHAR(191) NOT NULL,
  `issue_date` DATE NULL DEFAULT NULL,
  `expiry_date` DATE NULL DEFAULT NULL,
  `digital_copy` VARCHAR(255) NULL DEFAULT NULL,
  `verification_url` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_certificates_product_id_index` (`product_id`),
  KEY `item_certificates_certificate_id_index` (`certificate_id`),
  CONSTRAINT `item_certificates_certificate_id_foreign` FOREIGN KEY (`certificate_id`) REFERENCES `certificates` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 37.';
CREATE TABLE `item_images` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `image_type` VARCHAR(30) NOT NULL DEFAULT 'front' COMMENT 'front, back, side, certificate_scan, hallmark_photo, damage_photo',
  `path` VARCHAR(255) NOT NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_images_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 32.';
CREATE TABLE `rfid_tags` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `epc_number` VARCHAR(64) NOT NULL,
  `tag_number` VARCHAR(64) NOT NULL,
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `product_serial_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `tag_type` VARCHAR(30) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active' COMMENT 'active, replaced, retired',
  `activation_date` DATE NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rfid_tags_epc_number_unique` (`epc_number`),
  KEY `rfid_tags_product_id_index` (`product_id`),
  KEY `rfid_tags_status_index` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 38. Business rule: only one active tag per item at a time (enforced at the application layer via status transitions, not a DB constraint, since replacement history must be kept).';
CREATE TABLE `barcode_registry` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `barcode_value` VARCHAR(64) NOT NULL,
  `barcode_type` VARCHAR(20) NOT NULL DEFAULT 'code128',
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `product_serial_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `print_count` INT NOT NULL DEFAULT 0,
  `last_printed_at` DATETIME NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `barcode_registry_value_unique` (`barcode_value`),
  KEY `barcode_registry_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 39.';
CREATE TABLE `qr_registry` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `qr_value` VARCHAR(191) NOT NULL,
  `qr_type` VARCHAR(30) NOT NULL DEFAULT 'item' COMMENT 'item, certificate, warranty',
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `target_url` VARCHAR(255) NULL DEFAULT NULL,
  `generated_at` DATETIME NULL DEFAULT NULL,
  `last_scanned_at` DATETIME NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `qr_registry_value_unique` (`qr_value`),
  KEY `qr_registry_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 40.';
CREATE TABLE `ownership_types` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(30) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ownership_types_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 41. Governance lookup for products.ownership_type (own, memo, consignment, customer_owned, supplier_consignment).';
CREATE TABLE `inventory_statuses` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(30) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inventory_statuses_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 42. Examples: available, reserved, sold, in_repair, in_manufacturing, on_display, in_transit, scrapped, melted, lost, returned. Governance lookup for product_serials.status.';
CREATE TABLE `item_location_history` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `product_serial_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `previous_warehouse_location_id` INT UNSIGNED NULL DEFAULT NULL,
  `new_warehouse_location_id` INT UNSIGNED NULL DEFAULT NULL,
  `movement_type` VARCHAR(30) NULL DEFAULT NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `item_location_history_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 43. Append-only.';
CREATE TABLE `item_weight_history` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `old_gross_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `new_gross_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `old_net_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `new_net_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `old_metal_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `new_metal_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `reason` VARCHAR(255) NULL DEFAULT NULL,
  `approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `item_weight_history_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 44. Append-only; satisfies SRS Business Rule 6 (fine gold weight overrides fully audited).';
CREATE TABLE `item_cost_history` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `old_cost` DECIMAL(15,3) NULL DEFAULT NULL,
  `new_cost` DECIMAL(15,3) NULL DEFAULT NULL,
  `old_making_charge_value` DECIMAL(12,2) NULL DEFAULT NULL,
  `new_making_charge_value` DECIMAL(12,2) NULL DEFAULT NULL,
  `old_selling_price` DECIMAL(15,3) NULL DEFAULT NULL,
  `new_selling_price` DECIMAL(15,3) NULL DEFAULT NULL,
  `reason` VARCHAR(255) NULL DEFAULT NULL,
  `changed_by` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `item_cost_history_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 45. Append-only.';
CREATE TABLE `item_attachments` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `file_type` VARCHAR(20) NOT NULL COMMENT 'pdf, cad, certificate, image, video, inspection_report',
  `path` VARCHAR(255) NOT NULL,
  `original_name` VARCHAR(255) NULL DEFAULT NULL,
  `uploaded_by` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_attachments_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 46.';

-- ---------------------------------------------------------------------------
-- 3.4 Inventory Operations domain remainder (SRS Part 4, Tables 47-65)
-- ---------------------------------------------------------------------------
-- inventory_movements (Part 2) already covers SRS Table 47. transfers /
-- warehouse_locations (Part 1) already cover most of SRS Tables 54-55.
-- This section adds the remaining reference tables, adjustment/reservation
-- workflow, counting, freezes/holds, RFID sessions, and label printing.
CREATE TABLE `movement_types` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(40) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `movement_types_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 48. Purchase Receipt, Purchase Return, Sales Issue, Sales Return, Repair Out/In, Manufacturing Issue/Receipt, Branch/Warehouse Transfer, Adjustment, Gold Exchange, Scrap, Melting, Refining, Reservation, Reservation Release.';
CREATE TABLE `movement_reasons` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(40) NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `movement_reasons_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 49. Configurable by administrators.';
CREATE TABLE `stock_adjustments` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `adjustment_number` VARCHAR(40) NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `adjustment_type` VARCHAR(30) NOT NULL COMMENT 'weight, quantity, location, status, rfid',
  `old_value` VARCHAR(191) NULL DEFAULT NULL,
  `new_value` VARCHAR(191) NULL DEFAULT NULL,
  `reason` VARCHAR(255) NULL DEFAULT NULL,
  `approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `adjustment_date` DATE NOT NULL,
  `remarks` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stock_adjustments_number_unique` (`adjustment_number`),
  KEY `stock_adjustments_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 50. Manager approval required; automatically generates an inventory_movements row and an audit_logs row.';
CREATE TABLE `stock_reservations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `reservation_number` VARCHAR(40) NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `client_id` INT UNSIGNED NULL DEFAULT NULL,
  `reserved_by` INT UNSIGNED NULL DEFAULT NULL,
  `reservation_date` DATE NOT NULL,
  `expiry_date` DATE NULL DEFAULT NULL,
  `reservation_status` VARCHAR(20) NOT NULL DEFAULT 'active' COMMENT 'active, expired, cancelled, converted_to_sale',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stock_reservations_number_unique` (`reservation_number`),
  KEY `stock_reservations_product_id_index` (`product_id`),
  KEY `stock_reservations_client_id_index` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 51.';
CREATE TABLE `inventory_counts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `count_number` VARCHAR(40) NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `count_date` DATE NOT NULL,
  `count_type` VARCHAR(30) NOT NULL DEFAULT 'periodic' COMMENT 'monthly, quarterly, annual, random',
  `started_by` INT UNSIGNED NULL DEFAULT NULL,
  `completed_by` INT UNSIGNED NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'in_progress',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inventory_counts_number_unique` (`count_number`),
  KEY `inventory_counts_warehouse_id_index` (`warehouse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 52.';
CREATE TABLE `inventory_count_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `inventory_count_id` BIGINT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `expected_warehouse_location_id` INT UNSIGNED NULL DEFAULT NULL,
  `counted_warehouse_location_id` INT UNSIGNED NULL DEFAULT NULL,
  `expected_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `counted_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `variance` DECIMAL(12,3) NULL DEFAULT NULL,
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inventory_count_items_count_id_index` (`inventory_count_id`),
  CONSTRAINT `inventory_count_items_count_id_foreign` FOREIGN KEY (`inventory_count_id`) REFERENCES `inventory_counts` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 53.';
CREATE TABLE `transfer_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `transfer_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `product_serial_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `dispatch_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `receive_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `dispatch_rfid` VARCHAR(64) NULL DEFAULT NULL,
  `receive_rfid` VARCHAR(64) NULL DEFAULT NULL,
  `quantity` DECIMAL(12,3) NOT NULL DEFAULT 1,
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transfer_items_transfer_id_index` (`transfer_id`),
  KEY `transfer_items_product_id_index` (`product_id`),
  CONSTRAINT `transfer_items_transfer_id_foreign` FOREIGN KEY (`transfer_id`) REFERENCES `transfers` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 55. Per-item detail for a ''transfers'' (Part 1) header row; business rule: receive_weight must match dispatch_weight unless an approved variance exists.';
CREATE TABLE `inventory_freezes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `freeze_number` VARCHAR(40) NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `reason` VARCHAR(50) NOT NULL COMMENT 'audit, investigation, police_case, insurance, court_order, management_hold',
  `frozen_by` INT UNSIGNED NULL DEFAULT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inventory_freezes_number_unique` (`freeze_number`),
  KEY `inventory_freezes_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 56. Long-term legal/management lock, distinct from stock_holds below.';
CREATE TABLE `inventory_variances` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `variance_number` VARCHAR(40) NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `expected_value` VARCHAR(191) NULL DEFAULT NULL,
  `actual_value` VARCHAR(191) NULL DEFAULT NULL,
  `difference` VARCHAR(191) NULL DEFAULT NULL,
  `severity` VARCHAR(20) NOT NULL DEFAULT 'low',
  `resolution_status` VARCHAR(20) NOT NULL DEFAULT 'open',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inventory_variances_number_unique` (`variance_number`),
  KEY `inventory_variances_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 57. Missing item, weight difference, wrong location, wrong RFID/barcode/status — discovered during audits/counts.';
CREATE TABLE `warehouse_receipts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `receipt_number` VARCHAR(40) NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `source_type` VARCHAR(30) NOT NULL COMMENT 'purchase, manufacturing, transfer, customer_return',
  `source_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `received_by` INT UNSIGNED NULL DEFAULT NULL,
  `received_at` DATETIME NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `warehouse_receipts_number_unique` (`receipt_number`),
  KEY `warehouse_receipts_source_index` (`source_type`, `source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 58.';
CREATE TABLE `warehouse_dispatches` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `dispatch_number` VARCHAR(40) NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `source_type` VARCHAR(30) NOT NULL COMMENT 'sale, supplier_return, manufacturing_issue, transfer, repair',
  `source_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `dispatched_by` INT UNSIGNED NULL DEFAULT NULL,
  `dispatched_at` DATETIME NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `warehouse_dispatches_number_unique` (`dispatch_number`),
  KEY `warehouse_dispatches_source_index` (`source_type`, `source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 59.';
CREATE TABLE `inventory_batches` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `batch_number` VARCHAR(40) NOT NULL,
  `material` VARCHAR(100) NOT NULL COMMENT 'loose_diamonds, raw_gold, gold_grain, silver_granules, chemicals',
  `supplier_id` INT UNSIGNED NULL DEFAULT NULL,
  `manufacture_date` DATE NULL DEFAULT NULL,
  `expiry_date` DATE NULL DEFAULT NULL,
  `quantity` DECIMAL(14,3) NOT NULL DEFAULT 0,
  `remaining_quantity` DECIMAL(14,3) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inventory_batches_number_unique` (`batch_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 60. Batch-managed raw materials (as opposed to unique serialized jewelry pieces).';
CREATE TABLE `rfid_inventory_sessions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `session_number` VARCHAR(40) NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `reader_id` VARCHAR(60) NULL DEFAULT NULL,
  `started_at` DATETIME NOT NULL,
  `ended_at` DATETIME NULL DEFAULT NULL,
  `total_tags_found` INT NOT NULL DEFAULT 0,
  `missing_tags` INT NOT NULL DEFAULT 0,
  `unexpected_tags` INT NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rfid_inventory_sessions_number_unique` (`session_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 61.';
CREATE TABLE `rfid_session_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `rfid_inventory_session_id` BIGINT UNSIGNED NOT NULL,
  `rfid_tag_id` BIGINT UNSIGNED NOT NULL,
  `detected_at` DATETIME NOT NULL,
  `reader_id` VARCHAR(60) NULL DEFAULT NULL,
  `signal_strength` DECIMAL(6,2) NULL DEFAULT NULL,
  `detected_warehouse_location_id` INT UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rfid_session_items_session_id_index` (`rfid_inventory_session_id`),
  CONSTRAINT `rfid_session_items_session_id_foreign` FOREIGN KEY (`rfid_inventory_session_id`) REFERENCES `rfid_inventory_sessions` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE,
  CONSTRAINT `rfid_session_items_tag_id_foreign` FOREIGN KEY (`rfid_tag_id`) REFERENCES `rfid_tags` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 62.';
CREATE TABLE `inventory_reconciliations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `reconciliation_number` VARCHAR(40) NOT NULL,
  `inventory_count_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `adjustment_generated` TINYINT(1) NOT NULL DEFAULT 0,
  `completion_date` DATE NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inventory_reconciliations_number_unique` (`reconciliation_number`),
  CONSTRAINT `inventory_reconciliations_count_id_foreign` FOREIGN KEY (`inventory_count_id`) REFERENCES `inventory_counts` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 63. Reconciliation never edits stock directly — it generates the required stock_adjustments rows.';
CREATE TABLE `stock_holds` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `hold_reason` VARCHAR(50) NOT NULL COMMENT 'customer_inspection, quality_control, photography, hallmark_testing, cleaning, pricing_review',
  `held_by` INT UNSIGNED NULL DEFAULT NULL,
  `held_at` DATETIME NOT NULL,
  `released_at` DATETIME NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stock_holds_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 64. Short-term operational restriction, distinct from the longer-term inventory_freezes above.';
CREATE TABLE `inventory_labels` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `label_type` VARCHAR(30) NOT NULL COMMENT 'barcode, qr, price_tag',
  `printed_at` DATETIME NOT NULL,
  `printed_by` INT UNSIGNED NULL DEFAULT NULL,
  `print_count` INT NOT NULL DEFAULT 1,
  `printer` VARCHAR(100) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inventory_labels_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 65.';

-- ---------------------------------------------------------------------------
-- 3.5 Purchase & Supplier domain remainder (SRS Part 5, Tables 66-83)
-- ---------------------------------------------------------------------------
-- `providers` (Part 1) already fulfills SRS Table 66 `suppliers`, and
-- `purchases`/`purchase_details` (Part 1) already fulfill SRS Tables 71-74
-- (purchase order + goods receipt combined, matching the Retail-Core scope).
-- This section adds the supplier sub-tables, the pre-order request stage,
-- formal goods-receipt/inspection/invoice/return documents, and landed-cost
-- allocation for businesses that need the fuller enterprise flow.
CREATE TABLE `supplier_contacts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `provider_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `designation` VARCHAR(100) NULL DEFAULT NULL,
  `phone` VARCHAR(64) NULL DEFAULT NULL,
  `email` VARCHAR(150) NULL DEFAULT NULL,
  `is_primary_contact` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `supplier_contacts_provider_id_index` (`provider_id`),
  CONSTRAINT `supplier_contacts_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 67.';
CREATE TABLE `supplier_payment_terms` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `due_days` INT NOT NULL DEFAULT 0,
  `discount_percentage` DECIMAL(5,2) NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 68. Cash, 15/30/45/60 Days, Advance Payment.';
-- Link providers to their default payment terms (additive, nullable).
ALTER TABLE `providers`
  ADD COLUMN `payment_terms_id` BIGINT UNSIGNED NULL DEFAULT NULL AFTER `tax_number`,
  ADD COLUMN `preferred_supplier` TINYINT(1) NOT NULL DEFAULT 0 AFTER `payment_terms_id`,
  ADD COLUMN `blocked` TINYINT(1) NOT NULL DEFAULT 0 AFTER `preferred_supplier`,
  ADD KEY `providers_payment_terms_id_index` (`payment_terms_id`),
  ADD CONSTRAINT `providers_payment_terms_id_foreign` FOREIGN KEY (`payment_terms_id`) REFERENCES `supplier_payment_terms` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL;
CREATE TABLE `purchase_requests` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `request_number` VARCHAR(40) NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `requested_by` INT UNSIGNED NULL DEFAULT NULL,
  `department_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `priority` VARCHAR(20) NOT NULL DEFAULT 'normal',
  `status` VARCHAR(20) NOT NULL DEFAULT 'draft' COMMENT 'draft, submitted, approved, purchase_order',
  `expected_date` DATE NULL DEFAULT NULL,
  `remarks` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `purchase_requests_number_unique` (`request_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 69.';
CREATE TABLE `purchase_request_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `purchase_request_id` BIGINT UNSIGNED NOT NULL,
  `product_template_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `quantity` DECIMAL(12,3) NOT NULL DEFAULT 1,
  `estimated_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `estimated_cost` DECIMAL(15,3) NULL DEFAULT NULL,
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_request_items_request_id_index` (`purchase_request_id`),
  CONSTRAINT `purchase_request_items_request_id_foreign` FOREIGN KEY (`purchase_request_id`) REFERENCES `purchase_requests` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 70.';
CREATE TABLE `goods_receipts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `grn_number` VARCHAR(40) NOT NULL,
  `purchase_id` INT UNSIGNED NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `received_by` INT UNSIGNED NULL DEFAULT NULL,
  `receipt_date` DATE NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'receiving' COMMENT 'receiving, inspection, approved',
  `inspection_status` VARCHAR(20) NOT NULL DEFAULT 'pending',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `goods_receipts_number_unique` (`grn_number`),
  KEY `goods_receipts_purchase_id_index` (`purchase_id`),
  CONSTRAINT `goods_receipts_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 73. Formal GRN document for tenants using the fuller PO -> GRN -> inspection flow; ''purchases'' alone already suffices for the Retail-Core minimum.';
CREATE TABLE `goods_receipt_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `goods_receipt_id` BIGINT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `received_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `karat_id` INT UNSIGNED NULL DEFAULT NULL,
  `purity_percentage` DECIMAL(5,2) NULL DEFAULT NULL,
  `certificate_number` VARCHAR(191) NULL DEFAULT NULL,
  `hallmark_reference` VARCHAR(191) NULL DEFAULT NULL,
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `goods_receipt_items_grn_id_index` (`goods_receipt_id`),
  CONSTRAINT `goods_receipt_items_grn_id_foreign` FOREIGN KEY (`goods_receipt_id`) REFERENCES `goods_receipts` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 74.';
CREATE TABLE `quality_inspections` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `goods_receipt_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `inspector_id` INT UNSIGNED NULL DEFAULT NULL,
  `inspection_date` DATE NOT NULL,
  `checks` JSON NULL COMMENT 'weight, purity, hallmark, stone_quality, finish, damage',
  `result` VARCHAR(20) NOT NULL DEFAULT 'passed' COMMENT 'passed, passed_with_remarks, failed, rejected',
  `comments` TEXT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `quality_inspections_grn_id_index` (`goods_receipt_id`),
  CONSTRAINT `quality_inspections_grn_id_foreign` FOREIGN KEY (`goods_receipt_id`) REFERENCES `goods_receipts` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 75.';
CREATE TABLE `supplier_invoices` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `invoice_number` VARCHAR(60) NOT NULL,
  `provider_id` INT UNSIGNED NOT NULL,
  `invoice_date` DATE NOT NULL,
  `due_date` DATE NULL DEFAULT NULL,
  `currency_id` INT UNSIGNED NULL DEFAULT NULL,
  `exchange_rate` DECIMAL(14,6) NOT NULL DEFAULT 1,
  `total_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `tax_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `discount_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `status` VARCHAR(20) NOT NULL DEFAULT 'unpaid',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `supplier_invoices_number_unique` (`invoice_number`),
  KEY `supplier_invoices_provider_id_index` (`provider_id`),
  CONSTRAINT `supplier_invoices_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 76.';
CREATE TABLE `supplier_invoice_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `supplier_invoice_id` BIGINT UNSIGNED NOT NULL,
  `purchase_detail_id` INT UNSIGNED NULL DEFAULT NULL,
  `goods_receipt_item_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `cost` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `tax` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `discount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `total` DECIMAL(15,3) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `supplier_invoice_items_invoice_id_index` (`supplier_invoice_id`),
  CONSTRAINT `supplier_invoice_items_invoice_id_foreign` FOREIGN KEY (`supplier_invoice_id`) REFERENCES `supplier_invoices` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 77.';
CREATE TABLE `purchase_returns` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `return_number` VARCHAR(40) NOT NULL,
  `provider_id` INT UNSIGNED NOT NULL,
  `purchase_id` INT UNSIGNED NULL DEFAULT NULL,
  `return_reason` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'requested',
  `approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `purchase_returns_number_unique` (`return_number`),
  KEY `purchase_returns_provider_id_index` (`provider_id`),
  CONSTRAINT `purchase_returns_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `purchase_returns_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 78.';
CREATE TABLE `purchase_return_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `purchase_return_id` BIGINT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `return_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `return_cost` DECIMAL(15,3) NULL DEFAULT NULL,
  `reason` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_return_items_return_id_index` (`purchase_return_id`),
  CONSTRAINT `purchase_return_items_return_id_foreign` FOREIGN KEY (`purchase_return_id`) REFERENCES `purchase_returns` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 79.';
CREATE TABLE `supplier_credit_notes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `credit_note_number` VARCHAR(40) NOT NULL,
  `provider_id` INT UNSIGNED NOT NULL,
  `purchase_return_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `gold_weight_adjustment` DECIMAL(12,3) NULL DEFAULT NULL,
  `issue_date` DATE NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'open',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `supplier_credit_notes_number_unique` (`credit_note_number`),
  KEY `supplier_credit_notes_provider_id_index` (`provider_id`),
  CONSTRAINT `supplier_credit_notes_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 80.';
CREATE TABLE `landed_cost_allocations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `allocation_number` VARCHAR(40) NOT NULL,
  `purchase_id` INT UNSIGNED NOT NULL,
  `cost_type` VARCHAR(40) NOT NULL COMMENT 'freight, insurance, customs_duty, courier, handling, assay',
  `total_cost` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `allocation_method` VARCHAR(20) NOT NULL DEFAULT 'by_value' COMMENT 'by_quantity, by_weight, by_value, manual',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `landed_cost_allocations_number_unique` (`allocation_number`),
  KEY `landed_cost_allocations_purchase_id_index` (`purchase_id`),
  CONSTRAINT `landed_cost_allocations_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 81.';
CREATE TABLE `purchase_approvals` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `purchase_id` INT UNSIGNED NOT NULL,
  `approval_level` INT NOT NULL DEFAULT 1,
  `approver_id` INT UNSIGNED NULL DEFAULT NULL,
  `decision` VARCHAR(20) NOT NULL DEFAULT 'pending' COMMENT 'pending, approved, rejected, returned, escalated',
  `decided_at` DATETIME NULL DEFAULT NULL,
  `comments` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_approvals_purchase_id_index` (`purchase_id`),
  CONSTRAINT `purchase_approvals_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 82. Supports multi-level approval (Employee -> Supervisor -> Manager -> Administrator).';
CREATE TABLE `supplier_performance` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `provider_id` INT UNSIGNED NOT NULL,
  `on_time_delivery_pct` DECIMAL(5,2) NULL DEFAULT NULL,
  `quality_rating` DECIMAL(3,2) NULL DEFAULT NULL,
  `price_competitiveness` DECIMAL(5,2) NULL DEFAULT NULL,
  `return_rate_pct` DECIMAL(5,2) NULL DEFAULT NULL,
  `average_lead_time_days` DECIMAL(6,2) NULL DEFAULT NULL,
  `order_fulfillment_pct` DECIMAL(5,2) NULL DEFAULT NULL,
  `total_purchases` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `last_purchase_date` DATE NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `supplier_performance_provider_id_unique` (`provider_id`),
  CONSTRAINT `supplier_performance_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 83. Updated periodically via scheduled_jobs (Part 3.9).';

-- ---------------------------------------------------------------------------
-- 3.6 Sales & Customer domain remainder (SRS Part 6, Tables 84-103)
-- ---------------------------------------------------------------------------
-- `clients` (Part 1) already fulfills SRS Table 84 `customers`, and
-- `sales`/`sale_details` (Part 1, extended in Part 2) already fulfill SRS
-- Tables 91-92 `sales_invoices`/`sales_invoice_items`. This section adds the
-- customer sub-tables, the pre-invoice quotation/order stages, and the
-- post-invoice receipt/return/exchange/installment/deposit/voucher/
-- reservation/approval documents.
CREATE TABLE `customer_addresses` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` INT UNSIGNED NOT NULL,
  `address_type` VARCHAR(20) NOT NULL DEFAULT 'home' COMMENT 'home, office, billing, shipping',
  `address` VARCHAR(255) NOT NULL,
  `city` VARCHAR(150) NULL DEFAULT NULL,
  `state` VARCHAR(100) NULL DEFAULT NULL,
  `country` VARCHAR(100) NULL DEFAULT NULL,
  `postal_code` VARCHAR(20) NULL DEFAULT NULL,
  `is_default` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_addresses_client_id_index` (`client_id`),
  CONSTRAINT `customer_addresses_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 85.';
CREATE TABLE `customer_loyalty_transactions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` INT UNSIGNED NOT NULL,
  `transaction_type` VARCHAR(20) NOT NULL COMMENT 'purchase_earned, redemption, adjustment, expiry, promotional_bonus',
  `points` DECIMAL(12,2) NOT NULL DEFAULT 0,
  `reference_type` VARCHAR(40) NULL DEFAULT NULL,
  `reference_id` INT UNSIGNED NULL DEFAULT NULL,
  `balance_after` DECIMAL(12,2) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_loyalty_transactions_client_id_index` (`client_id`),
  CONSTRAINT `customer_loyalty_transactions_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 86.';
CREATE TABLE `quotations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `quotation_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `sales_agent_id` INT UNSIGNED NULL DEFAULT NULL,
  `warehouse_id` INT UNSIGNED NULL DEFAULT NULL,
  `valid_until` DATE NULL DEFAULT NULL,
  `total_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `gold_rate_id` INT UNSIGNED NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'draft' COMMENT 'draft, sent, accepted, converted_to_sale',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `quotations_number_unique` (`quotation_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 87. Business rule: a quotation does not affect inventory or accounting.';
CREATE TABLE `quotation_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `quotation_id` BIGINT UNSIGNED NOT NULL,
  `product_template_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `estimated_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `selling_price` DECIMAL(15,3) NULL DEFAULT NULL,
  `making_charge` DECIMAL(12,2) NULL DEFAULT NULL,
  `stone_cost` DECIMAL(12,2) NULL DEFAULT NULL,
  `discount` DECIMAL(15,3) NULL DEFAULT 0,
  `tax` DECIMAL(15,3) NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `quotation_items_quotation_id_index` (`quotation_id`),
  CONSTRAINT `quotation_items_quotation_id_foreign` FOREIGN KEY (`quotation_id`) REFERENCES `quotations` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 88.';
CREATE TABLE `sales_orders` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sales_order_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `warehouse_id` INT UNSIGNED NOT NULL,
  `order_date` DATE NOT NULL,
  `expected_delivery` DATE NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'draft' COMMENT 'draft, approved, ready, converted_to_invoice',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sales_orders_number_unique` (`sales_order_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 89. Optional intermediate document for advance orders / custom jewelry / corporate sales. Business rule: may reserve inventory but does not recognize revenue.';
CREATE TABLE `sales_order_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sales_order_id` BIGINT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `quantity` DECIMAL(12,3) NOT NULL DEFAULT 1,
  `estimated_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `reserved_inventory_id` BIGINT UNSIGNED NULL DEFAULT NULL COMMENT 'stock_reservations.id',
  `selling_price` DECIMAL(15,3) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`id`),
  KEY `sales_order_items_order_id_index` (`sales_order_id`),
  CONSTRAINT `sales_order_items_order_id_foreign` FOREIGN KEY (`sales_order_id`) REFERENCES `sales_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 90.';
CREATE TABLE `customer_receipts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `receipt_number` VARCHAR(40) NOT NULL,
  `sale_id` INT UNSIGNED NOT NULL,
  `amount` DECIMAL(15,3) NOT NULL,
  `payment_method` VARCHAR(30) NOT NULL COMMENT 'cash, card, upi, net_banking, wallet, bank_transfer, mixed',
  `transaction_reference` VARCHAR(191) NULL DEFAULT NULL,
  `received_by` INT UNSIGNED NULL DEFAULT NULL,
  `received_at` DATETIME NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customer_receipts_number_unique` (`receipt_number`),
  KEY `customer_receipts_sale_id_index` (`sale_id`),
  CONSTRAINT `customer_receipts_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 93.';
CREATE TABLE `sales_returns` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `return_number` VARCHAR(40) NOT NULL,
  `sale_id` INT UNSIGNED NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `return_reason` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'requested' COMMENT 'requested, inspection, approved, refunded, exchanged',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sales_returns_number_unique` (`return_number`),
  KEY `sales_returns_sale_id_index` (`sale_id`),
  CONSTRAINT `sales_returns_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `sales_returns_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 94. Business rule: returned items require inspection before being marked Available again.';
CREATE TABLE `sales_return_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sales_return_id` BIGINT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `return_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `return_value` DECIMAL(15,3) NULL DEFAULT NULL,
  `condition` VARCHAR(30) NULL DEFAULT NULL,
  `refund_amount` DECIMAL(15,3) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sales_return_items_return_id_index` (`sales_return_id`),
  CONSTRAINT `sales_return_items_return_id_foreign` FOREIGN KEY (`sales_return_id`) REFERENCES `sales_returns` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 95.';
CREATE TABLE `customer_credit_notes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `credit_note_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `sales_return_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `status` VARCHAR(20) NOT NULL DEFAULT 'open',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customer_credit_notes_number_unique` (`credit_note_number`),
  KEY `customer_credit_notes_client_id_index` (`client_id`),
  CONSTRAINT `customer_credit_notes_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 96.';
CREATE TABLE `exchanges` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `exchange_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `used_gold_purchase_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `sale_id` INT UNSIGNED NULL DEFAULT NULL,
  `settlement_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `exchanges_number_unique` (`exchange_number`),
  KEY `exchanges_client_id_index` (`client_id`),
  CONSTRAINT `exchanges_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `exchanges_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 97. Old ring -> new necklace: links a used_gold_purchases row (Part 3.7) to a sales row (Part 1).';
CREATE TABLE `installment_plans` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `plan_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `sale_id` INT UNSIGNED NOT NULL,
  `total_installments` INT NOT NULL,
  `installment_amount` DECIMAL(15,3) NOT NULL,
  `outstanding_balance` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `installment_plans_number_unique` (`plan_number`),
  KEY `installment_plans_sale_id_index` (`sale_id`),
  CONSTRAINT `installment_plans_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `installment_plans_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 98.';
CREATE TABLE `installment_payments` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `installment_plan_id` BIGINT UNSIGNED NOT NULL,
  `due_date` DATE NOT NULL,
  `payment_date` DATE NULL DEFAULT NULL,
  `amount` DECIMAL(15,3) NOT NULL,
  `penalty` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `status` VARCHAR(20) NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`id`),
  KEY `installment_payments_plan_id_index` (`installment_plan_id`),
  CONSTRAINT `installment_payments_plan_id_foreign` FOREIGN KEY (`installment_plan_id`) REFERENCES `installment_plans` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 99.';
CREATE TABLE `customer_deposits` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `deposit_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `amount` DECIMAL(15,3) NOT NULL,
  `balance` DECIMAL(15,3) NOT NULL,
  `reference_type` VARCHAR(30) NULL DEFAULT NULL COMMENT 'custom_jewelry, reservation, wedding_order',
  `reference_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customer_deposits_number_unique` (`deposit_number`),
  KEY `customer_deposits_client_id_index` (`client_id`),
  CONSTRAINT `customer_deposits_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 100. Remains a liability until applied to an invoice (design principle, SRS Part 6).';
CREATE TABLE `gift_vouchers` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `voucher_number` VARCHAR(40) NOT NULL,
  `issue_date` DATE NOT NULL,
  `expiry_date` DATE NULL DEFAULT NULL,
  `value` DECIMAL(15,3) NOT NULL,
  `remaining_balance` DECIMAL(15,3) NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `gift_vouchers_number_unique` (`voucher_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 101. Supports partial redemption.';
CREATE TABLE `reservations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `reservation_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `reservation_date` DATE NOT NULL,
  `expiry_date` DATE NULL DEFAULT NULL,
  `deposit_amount` DECIMAL(15,3) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reservations_number_unique` (`reservation_number`),
  KEY `reservations_client_id_index` (`client_id`),
  KEY `reservations_product_id_index` (`product_id`),
  CONSTRAINT `reservations_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 102. Customer-facing counterpart of stock_reservations (Part 3.4).';
CREATE TABLE `sales_approvals` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sale_id` INT UNSIGNED NOT NULL,
  `approval_type` VARCHAR(30) NOT NULL COMMENT 'high_discount, manual_price_override, invoice_cancellation, gold_price_override',
  `approval_level` INT NOT NULL DEFAULT 1,
  `approver_id` INT UNSIGNED NULL DEFAULT NULL,
  `decision` VARCHAR(20) NOT NULL DEFAULT 'pending',
  `decided_at` DATETIME NULL DEFAULT NULL,
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sales_approvals_sale_id_index` (`sale_id`),
  CONSTRAINT `sales_approvals_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 103.';

-- ---------------------------------------------------------------------------
-- 3.7 Manufacturing, Repair & Gold Exchange domain (SRS Part 7, Tables 104-127)
-- ---------------------------------------------------------------------------
-- Entirely new domain: none of this exists in the current Quantro schema.
-- Explicitly future-phase per the customization brief section 14 and the
-- per-person task breakdown section 7 (out of scope for the Retail Core),
-- but included here so the SRS's ~170-table design is fully represented and
-- the schema needs no redesign when this phase begins.
CREATE TABLE `workshops` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `workshop_code` VARCHAR(30) NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `type` VARCHAR(20) NOT NULL DEFAULT 'internal' COMMENT 'internal, external, contract_manufacturer',
  `address` TEXT NULL,
  `contact` VARCHAR(150) NULL DEFAULT NULL,
  `rating` DECIMAL(3,2) NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `workshops_code_unique` (`workshop_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 112.';
CREATE TABLE `manufacturing_orders` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `manufacturing_number` VARCHAR(40) NOT NULL,
  `branch_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `warehouse_id` INT UNSIGNED NULL DEFAULT NULL,
  `workshop_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `product_template_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `design_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `planned_quantity` INT NOT NULL DEFAULT 1,
  `completed_quantity` INT NOT NULL DEFAULT 0,
  `planned_gold_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `planned_fine_gold` DECIMAL(12,3) NULL DEFAULT NULL,
  `estimated_stone_weight` DECIMAL(10,3) NULL DEFAULT NULL,
  `order_date` DATE NOT NULL,
  `expected_completion` DATE NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'draft' COMMENT 'draft, approved, in_progress, qc, completed, cancelled',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `manufacturing_orders_number_unique` (`manufacturing_number`),
  KEY `manufacturing_orders_workshop_id_index` (`workshop_id`),
  CONSTRAINT `manufacturing_orders_workshop_id_foreign` FOREIGN KEY (`workshop_id`) REFERENCES `workshops` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 104. Business rule: cannot be deleted after approval.';
CREATE TABLE `manufacturing_material_issues` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `manufacturing_order_id` BIGINT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `gold_weight` DECIMAL(12,3) NOT NULL,
  `fine_gold_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `issued_by` INT UNSIGNED NULL DEFAULT NULL,
  `issue_date` DATE NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturing_material_issues_order_id_index` (`manufacturing_order_id`),
  CONSTRAINT `manufacturing_material_issues_order_id_foreign` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 105. Automatically creates an inventory_movements row and a gold_ledger_entries row.';
CREATE TABLE `manufacturing_stone_issues` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `manufacturing_order_id` BIGINT UNSIGNED NOT NULL,
  `stone_type_id` INT UNSIGNED NOT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `weight` DECIMAL(10,3) NULL DEFAULT NULL,
  `cost` DECIMAL(12,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturing_stone_issues_order_id_index` (`manufacturing_order_id`),
  CONSTRAINT `manufacturing_stone_issues_order_id_foreign` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 106.';
CREATE TABLE `manufacturing_receipts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `receipt_number` VARCHAR(40) NOT NULL,
  `manufacturing_order_id` BIGINT UNSIGNED NOT NULL,
  `received_by` INT UNSIGNED NULL DEFAULT NULL,
  `receipt_date` DATE NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `manufacturing_receipts_number_unique` (`receipt_number`),
  KEY `manufacturing_receipts_order_id_index` (`manufacturing_order_id`),
  CONSTRAINT `manufacturing_receipts_order_id_foreign` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_orders` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 107. Automatically creates finished inventory (a new ''products''/product_serials row), inventory_movements, and gold_ledger_entries.';
CREATE TABLE `manufacturing_receipt_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `manufacturing_receipt_id` BIGINT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `gross_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `stone_weight` DECIMAL(10,3) NULL DEFAULT NULL,
  `net_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `fine_gold_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `certificate_number` VARCHAR(191) NULL DEFAULT NULL,
  `hallmark_reference` VARCHAR(191) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturing_receipt_items_receipt_id_index` (`manufacturing_receipt_id`),
  CONSTRAINT `manufacturing_receipt_items_receipt_id_foreign` FOREIGN KEY (`manufacturing_receipt_id`) REFERENCES `manufacturing_receipts` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 108. Business rule: each finished piece receives a new serial number (product_serials row).';
CREATE TABLE `manufacturing_scrap` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `manufacturing_order_id` BIGINT UNSIGNED NOT NULL,
  `metal_type_id` INT UNSIGNED NULL DEFAULT NULL,
  `weight` DECIMAL(12,3) NOT NULL,
  `fine_gold_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `recovery_status` VARCHAR(20) NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`id`),
  KEY `manufacturing_scrap_order_id_index` (`manufacturing_order_id`),
  CONSTRAINT `manufacturing_scrap_order_id_foreign` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 109.';
CREATE TABLE `manufacturing_dust` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `manufacturing_order_id` BIGINT UNSIGNED NOT NULL,
  `dust_weight` DECIMAL(10,4) NOT NULL,
  `estimated_fine_gold` DECIMAL(10,4) NULL DEFAULT NULL,
  `recovery_date` DATE NULL DEFAULT NULL,
  `refinery_reference` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturing_dust_order_id_index` (`manufacturing_order_id`),
  CONSTRAINT `manufacturing_dust_order_id_foreign` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 110. Tracks microscopic gold loss.';
CREATE TABLE `manufacturing_losses` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `manufacturing_order_id` BIGINT UNSIGNED NOT NULL,
  `planned_loss` DECIMAL(10,3) NULL DEFAULT NULL,
  `actual_loss` DECIMAL(10,3) NULL DEFAULT NULL,
  `loss_percentage` DECIMAL(5,2) NULL DEFAULT NULL,
  `approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `reason` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturing_losses_order_id_index` (`manufacturing_order_id`),
  CONSTRAINT `manufacturing_losses_order_id_foreign` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 111. Manager approval required above tolerance.';
CREATE TABLE `manufacturing_qc` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `manufacturing_order_id` BIGINT UNSIGNED NOT NULL,
  `checks` JSON NULL COMMENT 'weight, hallmark, polish, stone_setting, finish, design_accuracy',
  `result` VARCHAR(20) NOT NULL DEFAULT 'pass' COMMENT 'pass, fail, rework',
  `inspected_by` INT UNSIGNED NULL DEFAULT NULL,
  `inspected_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturing_qc_order_id_index` (`manufacturing_order_id`),
  CONSTRAINT `manufacturing_qc_order_id_foreign` FOREIGN KEY (`manufacturing_order_id`) REFERENCES `manufacturing_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 126.';
CREATE TABLE `workshop_settlements` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `workshop_id` BIGINT UNSIGNED NOT NULL,
  `manufacturing_order_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `labour_charges` DECIMAL(12,2) NOT NULL DEFAULT 0,
  `making_charges` DECIMAL(12,2) NOT NULL DEFAULT 0,
  `gold_settlement_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `stone_settlement_amount` DECIMAL(12,2) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'pending',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `workshop_settlements_workshop_id_index` (`workshop_id`),
  CONSTRAINT `workshop_settlements_workshop_id_foreign` FOREIGN KEY (`workshop_id`) REFERENCES `workshops` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 113.';
CREATE TABLE `repair_orders` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `repair_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NULL DEFAULT NULL COMMENT 'set only if this is a company-owned item; NULL for a customer-owned item',
  `is_customer_owned` TINYINT(1) NOT NULL DEFAULT 1,
  `technician_id` INT UNSIGNED NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'received' COMMENT 'received, inspection, repair_started, stone_ordered, qc, ready, delivered',
  `estimated_cost` DECIMAL(12,2) NULL DEFAULT NULL,
  `final_cost` DECIMAL(12,2) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `repair_orders_number_unique` (`repair_number`),
  KEY `repair_orders_client_id_index` (`client_id`),
  CONSTRAINT `repair_orders_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 114. Business rule: a customer-owned repair item never becomes company inventory.';
CREATE TABLE `repair_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `repair_order_id` BIGINT UNSIGNED NOT NULL,
  `gross_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `stone_weight` DECIMAL(10,3) NULL DEFAULT NULL,
  `before_images` JSON NULL,
  `after_images` JSON NULL,
  `damage_notes` TEXT NULL,
  PRIMARY KEY (`id`),
  KEY `repair_items_order_id_index` (`repair_order_id`),
  CONSTRAINT `repair_items_order_id_foreign` FOREIGN KEY (`repair_order_id`) REFERENCES `repair_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 115. Before/after images mandatory per SRS Module 18 business rules.';
CREATE TABLE `repair_tracking` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `repair_order_id` BIGINT UNSIGNED NOT NULL,
  `stage` VARCHAR(30) NOT NULL COMMENT 'received, inspection, repair_started, stone_ordered, qc, ready, delivered',
  `changed_by` INT UNSIGNED NULL DEFAULT NULL,
  `changed_at` DATETIME NOT NULL,
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `repair_tracking_order_id_index` (`repair_order_id`),
  CONSTRAINT `repair_tracking_order_id_foreign` FOREIGN KEY (`repair_order_id`) REFERENCES `repair_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 116. Append-only progress log.';
CREATE TABLE `repair_parts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `repair_order_id` BIGINT UNSIGNED NOT NULL,
  `part_type` VARCHAR(30) NOT NULL COMMENT 'replacement_stone, clasp, lock, chain, hook',
  `description` VARCHAR(191) NULL DEFAULT NULL,
  `cost` DECIMAL(12,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `repair_parts_order_id_index` (`repair_order_id`),
  CONSTRAINT `repair_parts_order_id_foreign` FOREIGN KEY (`repair_order_id`) REFERENCES `repair_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 117.';
CREATE TABLE `repair_payments` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `repair_order_id` BIGINT UNSIGNED NOT NULL,
  `amount` DECIMAL(12,2) NOT NULL,
  `payment_method` VARCHAR(30) NOT NULL,
  `receipt_number` VARCHAR(40) NULL DEFAULT NULL,
  `paid_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  KEY `repair_payments_order_id_index` (`repair_order_id`),
  CONSTRAINT `repair_payments_order_id_foreign` FOREIGN KEY (`repair_order_id`) REFERENCES `repair_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 118.';
CREATE TABLE `repair_qc` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `repair_order_id` BIGINT UNSIGNED NOT NULL,
  `repair_quality` VARCHAR(20) NOT NULL DEFAULT 'pass',
  `weight_difference` DECIMAL(10,3) NULL DEFAULT NULL,
  `stone_count_verified` TINYINT(1) NOT NULL DEFAULT 1,
  `customer_notes` TEXT NULL,
  PRIMARY KEY (`id`),
  KEY `repair_qc_order_id_index` (`repair_order_id`),
  CONSTRAINT `repair_qc_order_id_foreign` FOREIGN KEY (`repair_order_id`) REFERENCES `repair_orders` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 127. Missing stones trigger incident reports (handled via comments/notifications, Part 3.9).';
CREATE TABLE `used_gold_purchases` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `purchase_number` VARCHAR(40) NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `purchase_date` DATE NOT NULL,
  `total_weight` DECIMAL(12,3) NOT NULL,
  `fine_gold_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `purchase_value` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `payment_status` VARCHAR(20) NOT NULL DEFAULT 'unpaid',
  `disposition` VARCHAR(20) NULL DEFAULT NULL COMMENT 'repair, polish, resize, melt, refine, resell, store_as_scrap, send_to_workshop, reject',
  `approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `used_gold_purchases_number_unique` (`purchase_number`),
  KEY `used_gold_purchases_client_id_index` (`client_id`),
  CONSTRAINT `used_gold_purchases_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 119. Business rule: identity verification and before/after images mandatory; approval required beyond a configurable value threshold.';
CREATE TABLE `used_gold_purchase_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `used_gold_purchase_id` BIGINT UNSIGNED NOT NULL,
  `gross_weight` DECIMAL(12,3) NOT NULL,
  `stone_weight` DECIMAL(10,3) NULL DEFAULT NULL,
  `net_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `purity_percentage` DECIMAL(5,2) NULL DEFAULT NULL,
  `fine_gold_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `purchase_rate` DECIMAL(12,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `used_gold_purchase_items_purchase_id_index` (`used_gold_purchase_id`),
  CONSTRAINT `used_gold_purchase_items_purchase_id_foreign` FOREIGN KEY (`used_gold_purchase_id`) REFERENCES `used_gold_purchases` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 120.';
CREATE TABLE `gold_tests` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `used_gold_purchase_item_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `test_method` VARCHAR(30) NOT NULL COMMENT 'acid_test, xrf, fire_assay, electronic_tester',
  `tester_id` INT UNSIGNED NULL DEFAULT NULL,
  `purity_percentage` DECIMAL(5,2) NULL DEFAULT NULL,
  `fineness` DECIMAL(6,3) NULL DEFAULT NULL,
  `result` VARCHAR(20) NOT NULL DEFAULT 'pass',
  `tested_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gold_tests_purchase_item_id_index` (`used_gold_purchase_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 121.';
CREATE TABLE `melting_batches` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `batch_number` VARCHAR(40) NOT NULL,
  `input_weight` DECIMAL(12,3) NOT NULL,
  `output_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `loss` DECIMAL(10,3) NULL DEFAULT NULL,
  `furnace` VARCHAR(60) NULL DEFAULT NULL,
  `operator_id` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `melting_batches_number_unique` (`batch_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 122.';
CREATE TABLE `refining_batches` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `melting_batch_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `input_purity` DECIMAL(5,2) NULL DEFAULT NULL,
  `output_purity` DECIMAL(5,2) NULL DEFAULT NULL,
  `fine_gold_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `refinery` VARCHAR(150) NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `refining_batches_melting_batch_id_index` (`melting_batch_id`),
  CONSTRAINT `refining_batches_melting_batch_id_foreign` FOREIGN KEY (`melting_batch_id`) REFERENCES `melting_batches` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 123.';
CREATE TABLE `karat_conversions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NULL DEFAULT NULL,
  `original_weight` DECIMAL(12,3) NOT NULL,
  `original_karat_id` INT UNSIGNED NULL DEFAULT NULL,
  `new_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `new_karat_id` INT UNSIGNED NULL DEFAULT NULL,
  `converted_by` INT UNSIGNED NULL DEFAULT NULL,
  `converted_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 124. e.g. 18K -> 22K.';
CREATE TABLE `gold_exchange_transactions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` INT UNSIGNED NOT NULL,
  `used_gold_purchase_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `sale_id` INT UNSIGNED NULL DEFAULT NULL,
  `settlement_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gold_exchange_transactions_client_id_index` (`client_id`),
  CONSTRAINT `gold_exchange_transactions_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `gold_exchange_transactions_used_gold_purchase_id_foreign` FOREIGN KEY (`used_gold_purchase_id`) REFERENCES `used_gold_purchases` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL,
  CONSTRAINT `gold_exchange_transactions_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 125. Automatically generates: a used_gold_purchases row, a sales row, accounting entries, and gold ledger entries.';

-- ---------------------------------------------------------------------------
-- 3.8 Accounting & Gold Ledger domain (SRS Part 8, Tables 128-149)
-- ---------------------------------------------------------------------------
-- Entirely new domain. The Gold Ledger (weight/purity accounting,
-- independent of monetary value) is what makes this a jewelry ERP rather
-- than a generic retail system, per SRS Part 8's own framing.
CREATE TABLE `chart_of_accounts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `account_code` VARCHAR(20) NOT NULL,
  `account_name` VARCHAR(150) NOT NULL,
  `parent_account_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `account_type` VARCHAR(20) NOT NULL COMMENT 'asset, liability, equity, income, expense',
  `normal_balance` VARCHAR(10) NOT NULL DEFAULT 'debit' COMMENT 'debit, credit',
  `is_posting_account` TINYINT(1) NOT NULL DEFAULT 1,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `chart_of_accounts_code_unique` (`account_code`),
  KEY `chart_of_accounts_parent_id_index` (`parent_account_id`),
  CONSTRAINT `chart_of_accounts_parent_id_foreign` FOREIGN KEY (`parent_account_id`) REFERENCES `chart_of_accounts` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 128.';
CREATE TABLE `financial_periods` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fiscal_year` VARCHAR(9) NOT NULL COMMENT 'e.g. 2026-2027',
  `period_name` VARCHAR(30) NOT NULL,
  `opening_date` DATE NOT NULL,
  `closing_date` DATE NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'open' COMMENT 'open, closed',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 138. Business rule: closed periods cannot be modified.';
CREATE TABLE `journal_entries` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `journal_number` VARCHAR(40) NOT NULL,
  `transaction_date` DATE NOT NULL,
  `financial_period_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `reference_module` VARCHAR(40) NULL DEFAULT NULL COMMENT 'purchase, sale, sales_return, purchase_return, gold_exchange, manufacturing, repair, adjustment, supplier_payment, customer_receipt',
  `reference_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `narration` VARCHAR(255) NULL DEFAULT NULL,
  `posted_by` INT UNSIGNED NULL DEFAULT NULL,
  `approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'posted',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `journal_entries_number_unique` (`journal_number`),
  KEY `journal_entries_reference_index` (`reference_module`, `reference_id`),
  KEY `journal_entries_period_id_index` (`financial_period_id`),
  CONSTRAINT `journal_entries_period_id_foreign` FOREIGN KEY (`financial_period_id`) REFERENCES `financial_periods` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 129. One journal entry per business transaction.';
CREATE TABLE `journal_entry_lines` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `journal_entry_id` BIGINT UNSIGNED NOT NULL,
  `account_id` BIGINT UNSIGNED NOT NULL,
  `debit_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `credit_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `currency_id` INT UNSIGNED NULL DEFAULT NULL,
  `exchange_rate` DECIMAL(14,6) NOT NULL DEFAULT 1,
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `journal_entry_lines_entry_id_index` (`journal_entry_id`),
  KEY `journal_entry_lines_account_id_index` (`account_id`),
  CONSTRAINT `journal_entry_lines_entry_id_foreign` FOREIGN KEY (`journal_entry_id`) REFERENCES `journal_entries` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE,
  CONSTRAINT `journal_entry_lines_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `chart_of_accounts` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 130. Business rule: total debits = total credits, always (enforced at the application layer when posting a journal entry).';
CREATE TABLE `general_ledger` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `account_id` BIGINT UNSIGNED NOT NULL,
  `journal_entry_line_id` BIGINT UNSIGNED NOT NULL,
  `posting_date` DATE NOT NULL,
  `debit` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `credit` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `running_balance` DECIMAL(18,3) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `general_ledger_account_id_index` (`account_id`),
  CONSTRAINT `general_ledger_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `chart_of_accounts` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `general_ledger_journal_line_id_foreign` FOREIGN KEY (`journal_entry_line_id`) REFERENCES `journal_entry_lines` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 131. Denormalized posting stream used for ledger/trial-balance reports.';
CREATE TABLE `accounts_receivable` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` INT UNSIGNED NOT NULL,
  `sale_id` INT UNSIGNED NULL DEFAULT NULL,
  `due_date` DATE NULL DEFAULT NULL,
  `outstanding_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `aging_bucket` VARCHAR(20) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'open',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_receivable_client_id_index` (`client_id`),
  CONSTRAINT `accounts_receivable_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `accounts_receivable_sale_id_foreign` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 132.';
CREATE TABLE `accounts_payable` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `provider_id` INT UNSIGNED NOT NULL,
  `supplier_invoice_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `due_date` DATE NULL DEFAULT NULL,
  `outstanding_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `aging_bucket` VARCHAR(20) NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'open',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_payable_provider_id_index` (`provider_id`),
  CONSTRAINT `accounts_payable_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT `accounts_payable_supplier_invoice_id_foreign` FOREIGN KEY (`supplier_invoice_id`) REFERENCES `supplier_invoices` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 133.';
CREATE TABLE `cash_accounts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `type` VARCHAR(20) NOT NULL DEFAULT 'branch_cash' COMMENT 'branch_cash, petty_cash, main_cash',
  `warehouse_id` INT UNSIGNED NULL DEFAULT NULL,
  `current_balance` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 134.';
CREATE TABLE `bank_accounts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `bank_name` VARCHAR(150) NOT NULL,
  `branch_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `account_number` VARCHAR(60) NOT NULL,
  `ifsc_swift` VARCHAR(30) NULL DEFAULT NULL,
  `currency_id` INT UNSIGNED NULL DEFAULT NULL,
  `current_balance` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 135.';
CREATE TABLE `bank_transactions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `bank_account_id` BIGINT UNSIGNED NOT NULL,
  `transaction_type` VARCHAR(20) NOT NULL COMMENT 'deposit, withdrawal, transfer, charge, interest',
  `amount` DECIMAL(15,3) NOT NULL,
  `transaction_date` DATE NOT NULL,
  `reference` VARCHAR(191) NULL DEFAULT NULL,
  `is_reconciled` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bank_transactions_account_id_index` (`bank_account_id`),
  CONSTRAINT `bank_transactions_account_id_foreign` FOREIGN KEY (`bank_account_id`) REFERENCES `bank_accounts` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 136.';
CREATE TABLE `payment_allocations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `payment_type` VARCHAR(20) NOT NULL COMMENT 'customer_receipt, supplier_payment',
  `payment_id` BIGINT UNSIGNED NOT NULL,
  `invoice_type` VARCHAR(20) NOT NULL COMMENT 'sale, supplier_invoice',
  `invoice_id` BIGINT UNSIGNED NOT NULL,
  `amount_allocated` DECIMAL(15,3) NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_allocations_payment_index` (`payment_type`, `payment_id`),
  KEY `payment_allocations_invoice_index` (`invoice_type`, `invoice_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 137. Supports partial/advance/split payments across multiple invoices.';
CREATE TABLE `tax_codes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(30) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `rate` DECIMAL(5,2) NOT NULL DEFAULT 0,
  `type` VARCHAR(20) NOT NULL DEFAULT 'gst' COMMENT 'gst, vat, sales_tax, import_duty',
  `effective_date` DATE NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tax_codes_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 139. tax_rates (Part 1''s ''settings.default_tax'' is the simple single-rate equivalent already in use) is superseded by this richer table for tenants needing multiple tax codes.';
CREATE TABLE `tax_transactions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tax_code_id` BIGINT UNSIGNED NOT NULL,
  `reference_type` VARCHAR(30) NOT NULL COMMENT 'purchase_tax, sales_tax, input_tax, output_tax',
  `reference_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `taxable_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `tax_amount` DECIMAL(15,3) NOT NULL DEFAULT 0,
  `transaction_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tax_transactions_tax_code_id_index` (`tax_code_id`),
  CONSTRAINT `tax_transactions_tax_code_id_foreign` FOREIGN KEY (`tax_code_id`) REFERENCES `tax_codes` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 140.';
CREATE TABLE `exchange_rates` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `base_currency_id` INT UNSIGNED NOT NULL,
  `target_currency_id` INT UNSIGNED NOT NULL,
  `rate` DECIMAL(14,6) NOT NULL,
  `effective_date` DATE NOT NULL,
  `source` VARCHAR(20) NOT NULL DEFAULT 'manual',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `exchange_rates_pair_date_idx` (`base_currency_id`, `target_currency_id`, `effective_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 146.';

-- ---------------------------------------------------------------------------
-- 3.8b Gold Ledger (SRS Part 8, Tables 141-145)
-- ---------------------------------------------------------------------------
CREATE TABLE `gold_ledger_accounts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `account_type` VARCHAR(20) NOT NULL COMMENT 'company_gold, branch_gold, supplier_gold, customer_gold, workshop_gold',
  `owner_type` VARCHAR(30) NULL DEFAULT NULL COMMENT 'branch, provider (supplier), client (customer), workshop',
  `owner_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 141.';
CREATE TABLE `gold_ledger_entries` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `gold_ledger_account_id` BIGINT UNSIGNED NOT NULL,
  `transaction_type` VARCHAR(30) NOT NULL COMMENT 'purchase, sale, return, manufacturing, repair, gold_exchange, used_gold_purchase, refining, melting',
  `gross_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `net_weight` DECIMAL(12,3) NULL DEFAULT NULL,
  `fine_gold_weight` DECIMAL(12,3) NOT NULL,
  `purity_percentage` DECIMAL(5,2) NULL DEFAULT NULL,
  `direction` VARCHAR(10) NOT NULL COMMENT 'in, out',
  `reference_module` VARCHAR(40) NULL DEFAULT NULL,
  `reference_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `transaction_date` DATE NOT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gold_ledger_entries_account_id_index` (`gold_ledger_account_id`),
  KEY `gold_ledger_entries_reference_index` (`reference_module`, `reference_id`),
  CONSTRAINT `gold_ledger_entries_account_id_foreign` FOREIGN KEY (`gold_ledger_account_id`) REFERENCES `gold_ledger_accounts` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 142. Equivalent of a journal entry, measured in grams instead of currency — append-only.';
CREATE TABLE `gold_balances` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `gold_ledger_account_id` BIGINT UNSIGNED NOT NULL,
  `gross_weight` DECIMAL(14,3) NOT NULL DEFAULT 0,
  `fine_gold_weight` DECIMAL(14,3) NOT NULL DEFAULT 0,
  `last_updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `gold_balances_account_id_unique` (`gold_ledger_account_id`),
  CONSTRAINT `gold_balances_account_id_foreign` FOREIGN KEY (`gold_ledger_account_id`) REFERENCES `gold_ledger_accounts` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 143. Current balance, maintained by applying gold_ledger_entries.';
CREATE TABLE `gold_balance_history` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `gold_ledger_account_id` BIGINT UNSIGNED NOT NULL,
  `snapshot_date` DATE NOT NULL,
  `gross_weight` DECIMAL(14,3) NOT NULL DEFAULT 0,
  `fine_gold_weight` DECIMAL(14,3) NOT NULL DEFAULT 0,
  `snapshot_type` VARCHAR(20) NOT NULL DEFAULT 'daily_closing' COMMENT 'daily_closing, monthly_closing, audit',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `gold_balance_history_account_date_idx` (`gold_ledger_account_id`, `snapshot_date`),
  CONSTRAINT `gold_balance_history_account_id_foreign` FOREIGN KEY (`gold_ledger_account_id`) REFERENCES `gold_ledger_accounts` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 144. Immutable historical snapshots for trend analysis and audit.';
CREATE TABLE `gold_price_history` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `metal_type_id` INT UNSIGNED NOT NULL,
  `karat_id` INT UNSIGNED NULL DEFAULT NULL,
  `currency_id` INT UNSIGNED NOT NULL,
  `effective_date` DATE NOT NULL,
  `buy_price` DECIMAL(12,2) NULL DEFAULT NULL,
  `sell_price` DECIMAL(12,2) NULL DEFAULT NULL,
  `source` VARCHAR(20) NOT NULL DEFAULT 'manual',
  `approved_by` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `gold_price_history_lookup_idx` (`metal_type_id`, `karat_id`, `effective_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 145. Daily buy/sell reference snapshot — distinct from ''gold_rates'' (Part 2), which is the operational insert-only rate the pricing engine actually reads; this table is the historical archive used for trend reports. Immutable.';

-- ---------------------------------------------------------------------------
-- 3.8c Financial period-close & reconciliation
-- ---------------------------------------------------------------------------
CREATE TABLE `financial_closings` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `financial_period_id` BIGINT UNSIGNED NOT NULL,
  `closing_type` VARCHAR(20) NOT NULL DEFAULT 'month_end' COMMENT 'month_end, quarter_end, year_end',
  `closed_by` INT UNSIGNED NULL DEFAULT NULL,
  `closing_date` DATE NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'closed',
  PRIMARY KEY (`id`),
  KEY `financial_closings_period_id_index` (`financial_period_id`),
  CONSTRAINT `financial_closings_period_id_foreign` FOREIGN KEY (`financial_period_id`) REFERENCES `financial_periods` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 147.';
CREATE TABLE `reconciliation_sessions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `session_number` VARCHAR(40) NOT NULL,
  `reconciliation_type` VARCHAR(20) NOT NULL COMMENT 'bank, cash, gold, inventory',
  `reference_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `performed_by` INT UNSIGNED NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'in_progress',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reconciliation_sessions_number_unique` (`session_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 148.';
CREATE TABLE `reconciliation_items` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `reconciliation_session_id` BIGINT UNSIGNED NOT NULL,
  `expected_value` VARCHAR(191) NULL DEFAULT NULL,
  `actual_value` VARCHAR(191) NULL DEFAULT NULL,
  `difference` VARCHAR(191) NULL DEFAULT NULL,
  `resolution` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reconciliation_items_session_id_index` (`reconciliation_session_id`),
  CONSTRAINT `reconciliation_items_session_id_foreign` FOREIGN KEY (`reconciliation_session_id`) REFERENCES `reconciliation_sessions` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 149.';

-- ---------------------------------------------------------------------------
-- 3.9 Audit, Workflow, Notification & Infrastructure domain remainder (SRS Part 9, Tables 151-170)
-- ---------------------------------------------------------------------------
-- audit_logs (Part 2) already fulfills SRS Table 150. This section adds
-- general activity logging, the configurable approval-workflow engine,
-- notifications, generic attachments/comments, integration/queue/scheduling
-- infrastructure, and reporting/dashboard support tables.
CREATE TABLE `activity_logs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `action` VARCHAR(60) NOT NULL COMMENT 'e.g. viewed_invoice, printed_invoice, exported_report, downloaded_certificate',
  `subject_type` VARCHAR(60) NULL DEFAULT NULL,
  `subject_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `ip_address` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `activity_logs_user_id_index` (`user_id`),
  KEY `activity_logs_subject_index` (`subject_type`, `subject_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 151. General user-behavior analytics, distinct from audit_logs (Part 2), which is the compliance/business-rule trail.';
CREATE TABLE `approval_workflows` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `workflow_name` VARCHAR(150) NOT NULL,
  `module` VARCHAR(40) NOT NULL COMMENT 'sales, purchase, inventory, manufacturing, repair, gold_rates',
  `trigger_condition` VARCHAR(255) NOT NULL COMMENT 'e.g. discount > 10%, amount > 500000, weight_adjustment',
  `approval_levels` INT NOT NULL DEFAULT 1,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 152.';
CREATE TABLE `approval_requests` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `request_number` VARCHAR(40) NOT NULL,
  `approval_workflow_id` BIGINT UNSIGNED NOT NULL,
  `module` VARCHAR(40) NOT NULL,
  `reference_type` VARCHAR(60) NULL DEFAULT NULL,
  `reference_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `current_level` INT NOT NULL DEFAULT 1,
  `status` VARCHAR(20) NOT NULL DEFAULT 'pending' COMMENT 'pending, approved, rejected, returned, escalated',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `approval_requests_number_unique` (`request_number`),
  KEY `approval_requests_workflow_id_index` (`approval_workflow_id`),
  KEY `approval_requests_reference_index` (`reference_type`, `reference_id`),
  CONSTRAINT `approval_requests_workflow_id_foreign` FOREIGN KEY (`approval_workflow_id`) REFERENCES `approval_workflows` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 153. Generic approval envelope reused by every module (sales discounts, gold price changes, weight adjustments, purchase approvals, ...).';
CREATE TABLE `approval_actions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `approval_request_id` BIGINT UNSIGNED NOT NULL,
  `level` INT NOT NULL DEFAULT 1,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `decision` VARCHAR(20) NOT NULL COMMENT 'approved, rejected, returned, escalated',
  `remarks` VARCHAR(255) NULL DEFAULT NULL,
  `decided_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  KEY `approval_actions_request_id_index` (`approval_request_id`),
  CONSTRAINT `approval_actions_request_id_foreign` FOREIGN KEY (`approval_request_id`) REFERENCES `approval_requests` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 154.';
CREATE TABLE `notification_templates` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(60) NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `channel` VARCHAR(20) NOT NULL DEFAULT 'email' COMMENT 'in_app, email, sms, whatsapp',
  `subject` VARCHAR(255) NULL DEFAULT NULL,
  `body` TEXT NOT NULL COMMENT 'supports {{placeholders}}',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `notification_templates_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 156. Examples: sales invoice, OTP, repair ready, payment reminder, purchase approval.';
CREATE TABLE `notifications` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `notification_template_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `type` VARCHAR(20) NOT NULL DEFAULT 'information' COMMENT 'information, warning, critical, success',
  `channel` VARCHAR(20) NOT NULL DEFAULT 'in_app' COMMENT 'in_app, email, sms, whatsapp',
  `title` VARCHAR(191) NULL DEFAULT NULL,
  `body` TEXT NULL,
  `data` JSON NULL,
  `read_at` DATETIME NULL DEFAULT NULL,
  `sent_at` DATETIME NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_user_id_index` (`user_id`),
  CONSTRAINT `notifications_template_id_foreign` FOREIGN KEY (`notification_template_id`) REFERENCES `notification_templates` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 155.';
CREATE TABLE `attachments` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `attachable_type` VARCHAR(60) NOT NULL COMMENT 'e.g. Purchase, RepairOrder, Product, Client',
  `attachable_id` BIGINT UNSIGNED NOT NULL,
  `file_type` VARCHAR(20) NOT NULL COMMENT 'image, pdf, cad, video',
  `path` VARCHAR(255) NOT NULL,
  `original_name` VARCHAR(255) NULL DEFAULT NULL,
  `uploaded_by` INT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `attachments_attachable_index` (`attachable_type`, `attachable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 157. Generic polymorphic file repository for non-jewelry-item entities (repairs, customers, purchases, ...); item_attachments (Part 3.3) covers products specifically.';
CREATE TABLE `comments` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `commentable_type` VARCHAR(60) NOT NULL COMMENT 'e.g. Purchase, Sale, RepairOrder, ManufacturingOrder',
  `commentable_id` BIGINT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `comment` TEXT NOT NULL,
  `mentioned_user_ids` JSON NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_commentable_index` (`commentable_type`, `commentable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 158. Universal comment system.';
CREATE TABLE `integration_endpoints` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL COMMENT 'e.g. Gold Price API, SMS Gateway, Email Provider, Payment Gateway, WhatsApp, RFID Middleware',
  `base_url` VARCHAR(255) NULL DEFAULT NULL,
  `authentication_type` VARCHAR(30) NULL DEFAULT NULL,
  `timeout_seconds` INT NOT NULL DEFAULT 30,
  `retry_count` INT NOT NULL DEFAULT 3,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 159.';
CREATE TABLE `integration_logs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `integration_endpoint_id` BIGINT UNSIGNED NOT NULL,
  `request_payload` JSON NULL,
  `response_payload` JSON NULL,
  `status_code` INT NULL DEFAULT NULL,
  `duration_ms` INT NULL DEFAULT NULL,
  `retry_count` INT NOT NULL DEFAULT 0,
  `error_message` TEXT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `integration_logs_endpoint_id_index` (`integration_endpoint_id`),
  CONSTRAINT `integration_logs_endpoint_id_foreign` FOREIGN KEY (`integration_endpoint_id`) REFERENCES `integration_endpoints` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 160.';
CREATE TABLE `scheduled_jobs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `job_name` VARCHAR(100) NOT NULL COMMENT 'e.g. Gold Price Update, Daily Backup, Daily Closing, Loyalty Expiry, Report Generation',
  `frequency` VARCHAR(50) NOT NULL COMMENT 'cron expression or named frequency',
  `last_run_at` DATETIME NULL DEFAULT NULL,
  `next_run_at` DATETIME NULL DEFAULT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `scheduled_jobs_job_name_unique` (`job_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 161.';
CREATE TABLE `queue_jobs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` VARCHAR(60) NOT NULL DEFAULT 'default',
  `job_type` VARCHAR(100) NOT NULL COMMENT 'e.g. EmailSending, InvoicePdf, BarcodeGeneration, QrGeneration, RfidSync',
  `payload` JSON NULL,
  `attempts` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `reserved_at` TIMESTAMP NULL DEFAULT NULL,
  `available_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 162. Laravel-style queue worker table (mirrors the framework''s own ''jobs'' table if the tenant prefers a domain-specific one).';
CREATE TABLE `queue_failures` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue_job_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `job_type` VARCHAR(100) NULL DEFAULT NULL,
  `payload` JSON NULL,
  `exception` TEXT NULL,
  `failed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 163. Supports retry.';
CREATE TABLE `report_definitions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `report_name` VARCHAR(150) NOT NULL,
  `module` VARCHAR(40) NOT NULL,
  `source_reference` VARCHAR(191) NULL DEFAULT NULL COMMENT 'SQL/view reference',
  `export_formats` VARCHAR(60) NOT NULL DEFAULT 'pdf,excel',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 164.';
CREATE TABLE `saved_report_filters` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `report_definition_id` BIGINT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `name` VARCHAR(150) NOT NULL,
  `filters` JSON NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `saved_report_filters_report_id_index` (`report_definition_id`),
  CONSTRAINT `saved_report_filters_report_id_foreign` FOREIGN KEY (`report_definition_id`) REFERENCES `report_definitions` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 165. Examples: ''Sales by Branch, Last Month'', ''22K Only''.';
CREATE TABLE `dashboards` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL COMMENT 'e.g. Admin, Manager, Sales, Inventory',
  `role_id` INT UNSIGNED NULL DEFAULT NULL,
  `layout` JSON NULL,
  `is_default` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 166.';
CREATE TABLE `dashboard_widgets` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `dashboard_id` BIGINT UNSIGNED NOT NULL,
  `widget_type` VARCHAR(60) NOT NULL,
  `position` INT NOT NULL DEFAULT 0,
  `refresh_interval_seconds` INT NOT NULL DEFAULT 300,
  `required_permission` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dashboard_widgets_dashboard_id_index` (`dashboard_id`),
  CONSTRAINT `dashboard_widgets_dashboard_id_foreign` FOREIGN KEY (`dashboard_id`) REFERENCES `dashboards` (`id`) ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 167.';
CREATE TABLE `error_logs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `exception_class` VARCHAR(191) NULL DEFAULT NULL,
  `message` TEXT NULL,
  `stack_trace` LONGTEXT NULL,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL,
  `module` VARCHAR(60) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 168.';
CREATE TABLE `system_health` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `metric` VARCHAR(60) NOT NULL COMMENT 'cpu_usage, ram_usage, db_connections, queue_size, disk_usage',
  `value` DECIMAL(10,2) NOT NULL,
  `unit` VARCHAR(20) NULL DEFAULT NULL,
  `recorded_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  KEY `system_health_metric_recorded_idx` (`metric`, `recorded_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 169.';
CREATE TABLE `api_tokens` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `token_name` VARCHAR(150) NOT NULL,
  `owner_user_id` INT UNSIGNED NULL DEFAULT NULL,
  `token_hash` VARCHAR(64) NOT NULL,
  `abilities` JSON NULL COMMENT 'permission scopes',
  `expires_at` DATETIME NULL DEFAULT NULL,
  `last_used_at` DATETIME NULL DEFAULT NULL,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `api_tokens_hash_unique` (`token_hash`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 170. Supports future mobile apps, external system integrations, and BI tools.';

-- ---------------------------------------------------------------------------
-- 3.10 Departments & Employees (SRS Database Layer 5-6)
-- ---------------------------------------------------------------------------
CREATE TABLE `departments` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL COMMENT 'Sales, Inventory, Purchase, Accounts, Repair, Manufacturing, Management, Administration, HR, IT',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 20.';
CREATE TABLE `employees` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `employee_code` VARCHAR(30) NOT NULL,
  `user_id` INT UNSIGNED NULL DEFAULT NULL COMMENT 'optional link to a system login account',
  `warehouse_id` INT UNSIGNED NULL DEFAULT NULL,
  `department_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `designation` VARCHAR(100) NULL DEFAULT NULL,
  `employment_type` VARCHAR(30) NULL DEFAULT NULL COMMENT 'full_time, part_time, contract',
  `salary_grade` VARCHAR(30) NULL DEFAULT NULL,
  `joining_date` DATE NULL DEFAULT NULL,
  `national_id` VARCHAR(60) NULL DEFAULT NULL,
  `emergency_contact` VARCHAR(150) NULL DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `updated_at` TIMESTAMP(6) NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employees_employee_code_unique` (`employee_code`),
  KEY `employees_department_id_index` (`department_id`),
  CONSTRAINT `employees_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='SRS Table 21. Kept separate from ''users'' (Part 1) so HR data and non-system staff (e.g. workshop labour) don''t require a login account.';

-- ==============================================================================
-- END OF SCHEMA
-- ==============================================================================
SET FOREIGN_KEY_CHECKS = 1;

-- =============================================================================
-- Table count summary
--   Part 1 (existing Quantro core, reproduced as-is): 24 tables
--   Part 2 (jewelry-specific, already built):          7 tables
--   Part 3 (remaining SRS enterprise domains):       ~146 tables
--   -----------------------------------------------------------
--   Total:                                           ~177 tables
--
-- This lands inside the SRS's own revised estimate of "150-180
-- well-designed tables" for a mature enterprise implementation
-- (Volume 2, Part 1, item 1809).
-- =============================================================================
