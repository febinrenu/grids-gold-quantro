<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

/**
 * Creates one Permission per SRS-domain resource (database/jewelrydatabase.sql,
 * app/Policies/Jewelry/*) and grants them all to the built-in Owner role
 * (id 1), matching how every other module's permissions default to fully
 * open for Owner. Other roles get no access until an admin explicitly
 * grants it via Roles & Permissions -- same as any other resource.
 *
 * Idempotent: firstOrCreate + syncWithoutDetaching, safe to re-run.
 */
class JewelrySrsPermissionsSeeder extends Seeder
{
    private const RESOURCES = [
        'branches', 'vaults', 'display_cabinets', 'shelves', 'trays',
        'countries', 'states', 'cities',
        'manufacturers', 'jewelry_collections', 'product_designs', 'product_templates',
        'hallmarks', 'item_hallmarks', 'certificates', 'item_certificates', 'item_images',
        'rfid_tags', 'barcode_registry', 'qr_registry', 'ownership_types', 'inventory_statuses',
        'item_location_history', 'item_weight_history', 'item_cost_history', 'item_attachments',
        'movement_types', 'movement_reasons', 'stock_adjustments', 'stock_reservations',
        'inventory_counts', 'inventory_count_items', 'transfer_items', 'inventory_freezes',
        'inventory_variances', 'warehouse_receipts', 'warehouse_dispatches', 'inventory_batches',
        'rfid_inventory_sessions', 'rfid_session_items', 'inventory_reconciliations',
        'stock_holds', 'inventory_labels',
        'supplier_contacts', 'supplier_payment_terms', 'purchase_requests', 'purchase_request_items',
        'goods_receipts', 'goods_receipt_items', 'quality_inspections', 'supplier_invoices',
        'supplier_invoice_items', 'purchase_return_items', 'supplier_credit_notes',
        'landed_cost_allocations', 'purchase_approvals', 'supplier_performance',
        'customer_addresses', 'customer_loyalty_transactions', 'quotation_items',
        'sales_orders', 'sales_order_items', 'customer_receipts', 'sales_returns',
        'sales_return_items', 'customer_credit_notes', 'exchanges', 'installment_plans',
        'installment_payments', 'customer_deposits', 'gift_vouchers', 'reservations',
        'sales_approvals',
        'workshops', 'manufacturing_orders', 'manufacturing_material_issues',
        'manufacturing_stone_issues', 'manufacturing_receipts', 'manufacturing_receipt_items',
        'manufacturing_scrap', 'manufacturing_dust', 'manufacturing_losses', 'manufacturing_qc',
        'workshop_settlements', 'repair_orders', 'repair_items', 'repair_tracking',
        'repair_parts', 'repair_payments', 'repair_qc', 'used_gold_purchases',
        'used_gold_purchase_items', 'gold_tests', 'melting_batches', 'refining_batches',
        'karat_conversions', 'gold_exchange_transactions',
        'financial_periods', 'accounts_receivable', 'accounts_payable', 'cash_accounts',
        'bank_accounts', 'bank_transactions', 'payment_allocations', 'tax_codes',
        'tax_transactions', 'exchange_rates', 'gold_ledger_accounts', 'gold_ledger_entries',
        'gold_balances', 'gold_balance_history', 'gold_price_history', 'financial_closings',
        'reconciliation_sessions', 'reconciliation_items',
        'activity_logs', 'approval_workflows', 'approval_requests', 'approval_actions',
        'notification_templates', 'workflow_notifications', 'attachments', 'comments',
        'integration_endpoints', 'integration_logs', 'scheduled_jobs', 'queue_jobs',
        'queue_failures', 'report_definitions', 'saved_report_filters', 'dashboards',
        'dashboard_widgets', 'system_health', 'api_tokens',
        // Medium-priority competitor-gap features
        'gold_saving_schemes', 'gold_saving_scheme_deposits', 'alloy_mix_calculations',
        'scale_readings', 'kyc_verifications', 'aml_flagged_transactions',
        'consignment_settlements', 'diamond_price_rates',
    ];

    public function run(): void
    {
        $owner = Role::find(1);
        if (! $owner) {
            return;
        }

        $ids = [];
        foreach (self::RESOURCES as $name) {
            $ids[] = Permission::firstOrCreate(['name' => $name])->id;
        }

        $owner->permissions()->syncWithoutDetaching($ids);
    }
}
