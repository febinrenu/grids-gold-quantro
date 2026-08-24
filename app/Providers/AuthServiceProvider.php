<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Models\WooCommerceSetting' => 'App\Policies\WooCommerceSettingPolicy',
        'App\Models\OnlineOrder' => 'App\Policies\OnlineOrderPolicy',
        'App\Models\StoreBanner' => 'App\Policies\StoreBannerPolicy',
        'App\Models\StoreSetting' => 'App\Policies\StoreSettingPolicy',
        'App\Models\Collection' => 'App\Policies\CollectionPolicy',
        'App\Models\Subscriber' => 'App\Policies\SubscriberPolicy',
        'App\Models\Message' => 'App\Policies\MessagePolicy',

        'App\Models\PaymentMethod' => 'App\Policies\PaymentMethodPolicy',
        'App\Models\ErrorLog' => 'App\Policies\ErrorLogPolicy',
        'App\Models\WhatsappSetting' => 'App\Policies\WhatsappSettingPolicy',
        'App\Models\WhatsappTemplate' => 'App\Policies\WhatsappTemplatePolicy',
        'App\Models\WhatsappLog' => 'App\Policies\WhatsappLogPolicy',
        'App\Models\Subscription' => 'App\Policies\SubscriptionPolicy',
        'App\Models\ExpenseCategory' => 'App\Policies\ExpenseCategoryPolicy',
        'App\Models\Purchase' => 'App\Policies\PurchasePolicy',
        'App\Models\Adjustment' => 'App\Policies\AdjustmentPolicy',
        'App\Models\Product' => 'App\Policies\ProductPolicy',
        'App\Models\Brand' => 'App\Policies\BrandPolicy',
        'App\Models\Category' => 'App\Policies\CategoryPolicy',
        'App\Models\SubCategory' => 'App\Policies\SubCategoryPolicy',
        'App\Models\Client' => 'App\Policies\ClientPolicy',
        'App\Models\Currency' => 'App\Policies\CurrencyPolicy',
        'App\Models\GoldRate' => 'App\Policies\GoldRatePolicy',
        'App\Models\Expense' => 'App\Policies\ExpensePolicy',
        'App\Models\PaymentPurchase' => 'App\Policies\PaymentPurchasePolicy',
        'App\Models\PaymentSaleReturns' => 'App\Policies\PaymentSaleReturnsPolicy',
        'App\Models\PaymentPurchaseReturns' => 'App\Policies\PaymentPurchaseReturnsPolicy',
        'App\Models\PaymentSale' => 'App\Policies\PaymentSalePolicy',
        'App\Models\Warehouse' => 'App\Policies\WarehousePolicy',
        'App\Models\WarehouseLocation' => 'App\Policies\WarehouseLocationPolicy',
        'App\Models\Provider' => 'App\Policies\ProviderPolicy',
        'App\Models\Quotation' => 'App\Policies\QuotationPolicy',
        'App\Models\SaleReturn' => 'App\Policies\SaleReturnPolicy',
        'App\Models\PurchaseReturn' => 'App\Policies\PurchaseReturnPolicy',
        'App\Models\Role' => 'App\Policies\RolePolicy',
        'App\Models\Server' => 'App\Policies\ServerPolicy',
        'App\Models\Setting' => 'App\Policies\SettingPolicy',
        'App\Models\Transfer' => 'App\Policies\TransferPolicy',
        'App\Models\Unit' => 'App\Policies\UnitPolicy',
        'App\Models\Sale' => 'App\Policies\SalePolicy',
        'App\Models\User' => 'App\Policies\UserPolicy',
        'App\Models\Shipment' => 'App\Policies\ShipmentPolicy',
        'App\Models\Account' => 'App\Policies\AccountPolicy',
        'App\Models\TransferMoney' => 'App\Policies\TransferMoneyPolicy',
        'App\Models\Deposit' => 'App\Policies\DepositPolicy',
        'App\Models\DepositCategory' => 'App\Policies\DepositCategoryPolicy',
        'App\Models\Asset' => 'App\Policies\AssetPolicy',
        'App\Models\Damage' => 'App\Policies\DamagePolicy',

        // hrm
        'App\Models\Employee' => 'App\Policies\EmployeePolicy',
        'App\Models\Company' => 'App\Policies\CompanyPolicy',
        'App\Models\Department' => 'App\Policies\DepartmentPolicy',
        'App\Models\Designation' => 'App\Policies\DesignationPolicy',
        'App\Models\OfficeShift' => 'App\Policies\Office_ShiftPolicy',
        'App\Models\Attendance' => 'App\Policies\AttendancePolicy',
        'App\Models\Leave' => 'App\Policies\LeavePolicy',
        'App\Models\Holiday' => 'App\Policies\HolidayPolicy',
        'App\Models\Payroll' => 'App\Policies\PayrollPolicy',
        'App\Models\Project' => 'App\Policies\ProjectPolicy',
        'App\Models\Contract' => 'App\Policies\ContractPolicy',
        'App\Models\Central\SupportTicket' => 'App\Policies\SupportTicketPolicy',
        'App\Models\KnowledgeBaseArticleGroup' => 'App\Policies\KnowledgeBaseArticleGroupPolicy',
        'App\Models\KnowledgeBaseArticle' => 'App\Policies\KnowledgeBaseArticlePolicy',
        'App\Models\Task' => 'App\Policies\TaskPolicy',
        'App\Models\ServiceJob' => 'App\Policies\ServiceJobPolicy',
        'App\Models\Booking' => 'App\Policies\BookingPolicy',

        // Commission module
        'App\Models\CommissionProgram' => 'App\Policies\CommissionProgramPolicy',

        // Recruit module
        'App\Models\RecruitJob' => 'App\Policies\RecruitJobPolicy',
        'App\Models\RecruitJobCategory' => 'App\Policies\RecruitJobCategoryPolicy',
        'App\Models\RecruitCandidate' => 'App\Policies\RecruitCandidatePolicy',
        'App\Models\RecruitApplication' => 'App\Policies\RecruitApplicationPolicy',
        'App\Models\RecruitInterview' => 'App\Policies\RecruitInterviewPolicy',

        // Meeting module
        'App\Models\Meeting' => 'App\Policies\MeetingPolicy',

        // Marketing module
        'App\Models\MarketingCampaign' => 'App\Policies\MarketingCampaignPolicy',
        'App\Models\MarketingSegment' => 'App\Policies\MarketingSegmentPolicy',
        'App\Models\MarketingTemplate' => 'App\Policies\MarketingTemplatePolicy',
        'App\Models\MarketingSetting' => 'App\Policies\MarketingSettingPolicy',

        // Real Estate module
        'App\Models\Property' => 'App\Policies\PropertyPolicy',
        'App\Models\PropertyCategory' => 'App\Policies\PropertyCategoryPolicy',
        'App\Models\PropertyInquiry' => 'App\Policies\PropertyInquiryPolicy',

        // Serial / IMEI tracking module
        'App\Models\ProductSerial' => 'App\Policies\ProductSerialPolicy',

        // Kitchen display module
        'App\Models\KitchenOrder' => 'App\Policies\KitchenOrderPolicy',

        // SRS jewelry-schema domains (database/jewelrydatabase.sql)
        'App\\Models\\Branch' => 'App\\Policies\\Jewelry\\BranchPolicy',
        'App\\Models\\Vault' => 'App\\Policies\\Jewelry\\VaultPolicy',
        'App\\Models\\DisplayCabinet' => 'App\\Policies\\Jewelry\\DisplayCabinetPolicy',
        'App\\Models\\Shelf' => 'App\\Policies\\Jewelry\\ShelfPolicy',
        'App\\Models\\Tray' => 'App\\Policies\\Jewelry\\TrayPolicy',
        'App\\Models\\Country' => 'App\\Policies\\Jewelry\\CountryPolicy',
        'App\\Models\\State' => 'App\\Policies\\Jewelry\\StatePolicy',
        'App\\Models\\City' => 'App\\Policies\\Jewelry\\CityPolicy',
        'App\\Models\\Manufacturer' => 'App\\Policies\\Jewelry\\ManufacturerPolicy',
        'App\\Models\\JewelryCollection' => 'App\\Policies\\Jewelry\\JewelryCollectionPolicy',
        'App\\Models\\ProductDesign' => 'App\\Policies\\Jewelry\\ProductDesignPolicy',
        'App\\Models\\ProductTemplate' => 'App\\Policies\\Jewelry\\ProductTemplatePolicy',
        'App\\Models\\Hallmark' => 'App\\Policies\\Jewelry\\HallmarkPolicy',
        'App\\Models\\ItemHallmark' => 'App\\Policies\\Jewelry\\ItemHallmarkPolicy',
        'App\\Models\\Certificate' => 'App\\Policies\\Jewelry\\CertificatePolicy',
        'App\\Models\\ItemCertificate' => 'App\\Policies\\Jewelry\\ItemCertificatePolicy',
        'App\\Models\\ItemImage' => 'App\\Policies\\Jewelry\\ItemImagePolicy',
        'App\\Models\\RfidTag' => 'App\\Policies\\Jewelry\\RfidTagPolicy',
        'App\\Models\\BarcodeRegistry' => 'App\\Policies\\Jewelry\\BarcodeRegistryPolicy',
        'App\\Models\\QrRegistry' => 'App\\Policies\\Jewelry\\QrRegistryPolicy',
        'App\\Models\\OwnershipType' => 'App\\Policies\\Jewelry\\OwnershipTypePolicy',
        'App\\Models\\InventoryStatus' => 'App\\Policies\\Jewelry\\InventoryStatusPolicy',
        'App\\Models\\ItemLocationHistory' => 'App\\Policies\\Jewelry\\ItemLocationHistoryPolicy',
        'App\\Models\\ItemWeightHistory' => 'App\\Policies\\Jewelry\\ItemWeightHistoryPolicy',
        'App\\Models\\ItemCostHistory' => 'App\\Policies\\Jewelry\\ItemCostHistoryPolicy',
        'App\\Models\\ItemAttachment' => 'App\\Policies\\Jewelry\\ItemAttachmentPolicy',
        'App\\Models\\MovementType' => 'App\\Policies\\Jewelry\\MovementTypePolicy',
        'App\\Models\\MovementReason' => 'App\\Policies\\Jewelry\\MovementReasonPolicy',
        'App\\Models\\StockAdjustment' => 'App\\Policies\\Jewelry\\StockAdjustmentPolicy',
        'App\\Models\\StockReservation' => 'App\\Policies\\Jewelry\\StockReservationPolicy',
        'App\\Models\\InventoryCount' => 'App\\Policies\\Jewelry\\InventoryCountPolicy',
        'App\\Models\\InventoryCountItem' => 'App\\Policies\\Jewelry\\InventoryCountItemPolicy',
        'App\\Models\\TransferItem' => 'App\\Policies\\Jewelry\\TransferItemPolicy',
        'App\\Models\\InventoryFreeze' => 'App\\Policies\\Jewelry\\InventoryFreezePolicy',
        'App\\Models\\InventoryVariance' => 'App\\Policies\\Jewelry\\InventoryVariancePolicy',
        'App\\Models\\WarehouseReceipt' => 'App\\Policies\\Jewelry\\WarehouseReceiptPolicy',
        'App\\Models\\WarehouseDispatch' => 'App\\Policies\\Jewelry\\WarehouseDispatchPolicy',
        'App\\Models\\InventoryBatch' => 'App\\Policies\\Jewelry\\InventoryBatchPolicy',
        'App\\Models\\RfidInventorySession' => 'App\\Policies\\Jewelry\\RfidInventorySessionPolicy',
        'App\\Models\\RfidSessionItem' => 'App\\Policies\\Jewelry\\RfidSessionItemPolicy',
        'App\\Models\\InventoryReconciliation' => 'App\\Policies\\Jewelry\\InventoryReconciliationPolicy',
        'App\\Models\\StockHold' => 'App\\Policies\\Jewelry\\StockHoldPolicy',
        'App\\Models\\InventoryLabel' => 'App\\Policies\\Jewelry\\InventoryLabelPolicy',
        'App\\Models\\SupplierContact' => 'App\\Policies\\Jewelry\\SupplierContactPolicy',
        'App\\Models\\SupplierPaymentTerm' => 'App\\Policies\\Jewelry\\SupplierPaymentTermPolicy',
        'App\\Models\\PurchaseRequest' => 'App\\Policies\\Jewelry\\PurchaseRequestPolicy',
        'App\\Models\\PurchaseRequestItem' => 'App\\Policies\\Jewelry\\PurchaseRequestItemPolicy',
        'App\\Models\\GoodsReceipt' => 'App\\Policies\\Jewelry\\GoodsReceiptPolicy',
        'App\\Models\\GoodsReceiptItem' => 'App\\Policies\\Jewelry\\GoodsReceiptItemPolicy',
        'App\\Models\\QualityInspection' => 'App\\Policies\\Jewelry\\QualityInspectionPolicy',
        'App\\Models\\SupplierInvoice' => 'App\\Policies\\Jewelry\\SupplierInvoicePolicy',
        'App\\Models\\SupplierInvoiceItem' => 'App\\Policies\\Jewelry\\SupplierInvoiceItemPolicy',
        'App\\Models\\PurchaseReturnItem' => 'App\\Policies\\Jewelry\\PurchaseReturnItemPolicy',
        'App\\Models\\SupplierCreditNote' => 'App\\Policies\\Jewelry\\SupplierCreditNotePolicy',
        'App\\Models\\LandedCostAllocation' => 'App\\Policies\\Jewelry\\LandedCostAllocationPolicy',
        'App\\Models\\PurchaseApproval' => 'App\\Policies\\Jewelry\\PurchaseApprovalPolicy',
        'App\\Models\\SupplierPerformance' => 'App\\Policies\\Jewelry\\SupplierPerformancePolicy',
        'App\\Models\\CustomerAddress' => 'App\\Policies\\Jewelry\\CustomerAddressPolicy',
        'App\\Models\\CustomerLoyaltyTransaction' => 'App\\Policies\\Jewelry\\CustomerLoyaltyTransactionPolicy',
        'App\\Models\\QuotationItem' => 'App\\Policies\\Jewelry\\QuotationItemPolicy',
        'App\\Models\\SalesOrder' => 'App\\Policies\\Jewelry\\SalesOrderPolicy',
        'App\\Models\\SalesOrderItem' => 'App\\Policies\\Jewelry\\SalesOrderItemPolicy',
        'App\\Models\\CustomerReceipt' => 'App\\Policies\\Jewelry\\CustomerReceiptPolicy',
        'App\\Models\\SalesReturn' => 'App\\Policies\\Jewelry\\SalesReturnPolicy',
        'App\\Models\\SalesReturnItem' => 'App\\Policies\\Jewelry\\SalesReturnItemPolicy',
        'App\\Models\\CustomerCreditNote' => 'App\\Policies\\Jewelry\\CustomerCreditNotePolicy',
        'App\\Models\\Exchange' => 'App\\Policies\\Jewelry\\ExchangePolicy',
        'App\\Models\\InstallmentPlan' => 'App\\Policies\\Jewelry\\InstallmentPlanPolicy',
        'App\\Models\\InstallmentPayment' => 'App\\Policies\\Jewelry\\InstallmentPaymentPolicy',
        'App\\Models\\CustomerDeposit' => 'App\\Policies\\Jewelry\\CustomerDepositPolicy',
        'App\\Models\\GiftVoucher' => 'App\\Policies\\Jewelry\\GiftVoucherPolicy',
        'App\\Models\\Reservation' => 'App\\Policies\\Jewelry\\ReservationPolicy',
        'App\\Models\\SalesApproval' => 'App\\Policies\\Jewelry\\SalesApprovalPolicy',
        'App\\Models\\Workshop' => 'App\\Policies\\Jewelry\\WorkshopPolicy',
        'App\\Models\\ManufacturingOrder' => 'App\\Policies\\Jewelry\\ManufacturingOrderPolicy',
        'App\\Models\\ManufacturingMaterialIssue' => 'App\\Policies\\Jewelry\\ManufacturingMaterialIssuePolicy',
        'App\\Models\\ManufacturingStoneIssue' => 'App\\Policies\\Jewelry\\ManufacturingStoneIssuePolicy',
        'App\\Models\\ManufacturingReceipt' => 'App\\Policies\\Jewelry\\ManufacturingReceiptPolicy',
        'App\\Models\\ManufacturingReceiptItem' => 'App\\Policies\\Jewelry\\ManufacturingReceiptItemPolicy',
        'App\\Models\\ManufacturingScrap' => 'App\\Policies\\Jewelry\\ManufacturingScrapPolicy',
        'App\\Models\\ManufacturingDust' => 'App\\Policies\\Jewelry\\ManufacturingDustPolicy',
        'App\\Models\\ManufacturingLoss' => 'App\\Policies\\Jewelry\\ManufacturingLossPolicy',
        'App\\Models\\ManufacturingQc' => 'App\\Policies\\Jewelry\\ManufacturingQcPolicy',
        'App\\Models\\WorkshopSettlement' => 'App\\Policies\\Jewelry\\WorkshopSettlementPolicy',
        'App\\Models\\RepairOrder' => 'App\\Policies\\Jewelry\\RepairOrderPolicy',
        'App\\Models\\RepairItem' => 'App\\Policies\\Jewelry\\RepairItemPolicy',
        'App\\Models\\RepairTracking' => 'App\\Policies\\Jewelry\\RepairTrackingPolicy',
        'App\\Models\\RepairPart' => 'App\\Policies\\Jewelry\\RepairPartPolicy',
        'App\\Models\\RepairPayment' => 'App\\Policies\\Jewelry\\RepairPaymentPolicy',
        'App\\Models\\RepairQc' => 'App\\Policies\\Jewelry\\RepairQcPolicy',
        'App\\Models\\UsedGoldPurchase' => 'App\\Policies\\Jewelry\\UsedGoldPurchasePolicy',
        'App\\Models\\UsedGoldPurchaseItem' => 'App\\Policies\\Jewelry\\UsedGoldPurchaseItemPolicy',
        'App\\Models\\GoldTest' => 'App\\Policies\\Jewelry\\GoldTestPolicy',
        'App\\Models\\MeltingBatch' => 'App\\Policies\\Jewelry\\MeltingBatchPolicy',
        'App\\Models\\RefiningBatch' => 'App\\Policies\\Jewelry\\RefiningBatchPolicy',
        'App\\Models\\KaratConversion' => 'App\\Policies\\Jewelry\\KaratConversionPolicy',
        'App\\Models\\GoldExchangeTransaction' => 'App\\Policies\\Jewelry\\GoldExchangeTransactionPolicy',
        'App\\Models\\FinancialPeriod' => 'App\\Policies\\Jewelry\\FinancialPeriodPolicy',
        'App\\Models\\AccountsReceivable' => 'App\\Policies\\Jewelry\\AccountsReceivablePolicy',
        'App\\Models\\AccountsPayable' => 'App\\Policies\\Jewelry\\AccountsPayablePolicy',
        'App\\Models\\CashAccount' => 'App\\Policies\\Jewelry\\CashAccountPolicy',
        'App\\Models\\BankAccount' => 'App\\Policies\\Jewelry\\BankAccountPolicy',
        'App\\Models\\BankTransaction' => 'App\\Policies\\Jewelry\\BankTransactionPolicy',
        'App\\Models\\PaymentAllocation' => 'App\\Policies\\Jewelry\\PaymentAllocationPolicy',
        'App\\Models\\TaxCode' => 'App\\Policies\\Jewelry\\TaxCodePolicy',
        'App\\Models\\TaxTransaction' => 'App\\Policies\\Jewelry\\TaxTransactionPolicy',
        'App\\Models\\ExchangeRate' => 'App\\Policies\\Jewelry\\ExchangeRatePolicy',
        'App\\Models\\GoldLedgerAccount' => 'App\\Policies\\Jewelry\\GoldLedgerAccountPolicy',
        'App\\Models\\GoldLedgerEntry' => 'App\\Policies\\Jewelry\\GoldLedgerEntryPolicy',
        'App\\Models\\GoldBalance' => 'App\\Policies\\Jewelry\\GoldBalancePolicy',
        'App\\Models\\GoldBalanceHistory' => 'App\\Policies\\Jewelry\\GoldBalanceHistoryPolicy',
        'App\\Models\\GoldPriceHistory' => 'App\\Policies\\Jewelry\\GoldPriceHistoryPolicy',
        'App\\Models\\FinancialClosing' => 'App\\Policies\\Jewelry\\FinancialClosingPolicy',
        'App\\Models\\ReconciliationSession' => 'App\\Policies\\Jewelry\\ReconciliationSessionPolicy',
        'App\\Models\\ReconciliationItem' => 'App\\Policies\\Jewelry\\ReconciliationItemPolicy',
        'App\\Models\\ActivityLog' => 'App\\Policies\\Jewelry\\ActivityLogPolicy',
        'App\\Models\\ApprovalWorkflow' => 'App\\Policies\\Jewelry\\ApprovalWorkflowPolicy',
        'App\\Models\\ApprovalRequest' => 'App\\Policies\\Jewelry\\ApprovalRequestPolicy',
        'App\\Models\\ApprovalAction' => 'App\\Policies\\Jewelry\\ApprovalActionPolicy',
        'App\\Models\\NotificationTemplate' => 'App\\Policies\\Jewelry\\NotificationTemplatePolicy',
        'App\\Models\\WorkflowNotification' => 'App\\Policies\\Jewelry\\WorkflowNotificationPolicy',
        'App\\Models\\Attachment' => 'App\\Policies\\Jewelry\\AttachmentPolicy',
        'App\\Models\\Comment' => 'App\\Policies\\Jewelry\\CommentPolicy',
        'App\\Models\\IntegrationEndpoint' => 'App\\Policies\\Jewelry\\IntegrationEndpointPolicy',
        'App\\Models\\IntegrationLog' => 'App\\Policies\\Jewelry\\IntegrationLogPolicy',
        'App\\Models\\ScheduledJob' => 'App\\Policies\\Jewelry\\ScheduledJobPolicy',
        'App\\Models\\QueueJob' => 'App\\Policies\\Jewelry\\QueueJobPolicy',
        'App\\Models\\QueueFailure' => 'App\\Policies\\Jewelry\\QueueFailurePolicy',
        'App\\Models\\ReportDefinition' => 'App\\Policies\\Jewelry\\ReportDefinitionPolicy',
        'App\\Models\\SavedReportFilter' => 'App\\Policies\\Jewelry\\SavedReportFilterPolicy',
        'App\\Models\\Dashboard' => 'App\\Policies\\Jewelry\\DashboardPolicy',
        'App\\Models\\DashboardWidget' => 'App\\Policies\\Jewelry\\DashboardWidgetPolicy',
        'App\\Models\\SystemHealth' => 'App\\Policies\\Jewelry\\SystemHealthPolicy',
        'App\\Models\\ApiToken' => 'App\\Policies\\Jewelry\\ApiTokenPolicy',

        // Medium-priority competitor-gap features (gem-logic/suntech-global/gopiro gap analysis)
        'App\\Models\\GoldSavingScheme' => 'App\\Policies\\Jewelry\\GoldSavingSchemePolicy',
        'App\\Models\\GoldSavingSchemeDeposit' => 'App\\Policies\\Jewelry\\GoldSavingSchemeDepositPolicy',
        'App\\Models\\AlloyMixCalculation' => 'App\\Policies\\Jewelry\\AlloyMixCalculationPolicy',
        'App\\Models\\ScaleReading' => 'App\\Policies\\Jewelry\\ScaleReadingPolicy',
        'App\\Models\\KycVerification' => 'App\\Policies\\Jewelry\\KycVerificationPolicy',
        'App\\Models\\AmlFlaggedTransaction' => 'App\\Policies\\Jewelry\\AmlFlaggedTransactionPolicy',
        'App\\Models\\ConsignmentSettlement' => 'App\\Policies\\Jewelry\\ConsignmentSettlementPolicy',
        'App\\Models\\DiamondPriceRate' => 'App\\Policies\\Jewelry\\DiamondPriceRatePolicy',

    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Tell Passport to load keys from the main storage directory (central).
        // Without this, stancl/tenancy's root_override suffix makes it look for
        // keys inside storage/tenant<id>/app/ instead of the main storage folder.
        Passport::loadKeysFrom(base_path('storage'));
        
        // Passport::routes();
    }
}
