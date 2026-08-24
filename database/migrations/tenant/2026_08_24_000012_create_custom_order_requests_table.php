<?php
// PI-7 gap: "Your storefront currently sells catalog items, not
// build-to-order." A logged-in storefront customer configures metal/karat/
// weight/stones (optionally against a base ProductTemplate), gets an
// auto-quote (reusing JewelryPricingService::previewDraft — the same math
// admin uses to price a real product), and can submit it, which creates a
// Quotation the staff can review and convert like any other quotation.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('custom_order_requests')) {
            return;
        }

        Schema::create('custom_order_requests', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('client_id');
            $table->unsignedInteger('quotation_id')->nullable();
            $table->unsignedBigInteger('product_template_id')->nullable();
            $table->unsignedInteger('metal_type_id');
            $table->unsignedBigInteger('karat_id');
            $table->decimal('target_weight', 10, 3)->nullable();
            $table->json('stone_config')->nullable(); // [{type, quantity, unit_cost_amount}]
            $table->string('design_file_path', 255)->nullable();
            $table->decimal('estimated_price', 14, 2)->nullable();
            $table->unsignedInteger('currency_id')->nullable();
            $table->string('status', 20)->default('submitted'); // submitted, quoted, converted, rejected
            $table->text('notes')->nullable();
            $table->timestamps(6);

            $table->index('client_id', 'custom_order_requests_client_id_index');
            $table->index('status', 'custom_order_requests_status_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('custom_order_requests');
    }
};
