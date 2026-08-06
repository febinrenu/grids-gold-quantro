<?php
// SRS Table 89. Optional intermediate document for advance orders / custom jewelry / corporate sales. Business rule: may reserve inventory but does not recognize revenue.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sales_orders')) {
            return;
        }

        Schema::create('sales_orders', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('sales_order_number', 40);
            $table->unsignedInteger('client_id');
            $table->unsignedInteger('warehouse_id');
            $table->date('order_date');
            $table->date('expected_delivery')->nullable();
            $table->string('status', 20)->default('draft');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('sales_order_number', 'sales_orders_number_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_orders');
    }
};
