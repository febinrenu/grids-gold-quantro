<?php
// SRS Table 114. Business rule: a customer-owned repair item never becomes company inventory.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('repair_orders')) {
            return;
        }

        Schema::create('repair_orders', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('repair_number', 40);
            $table->integer('client_id');
            $table->unsignedInteger('product_id')->nullable()->comment('set only if this is a company-owned item; NULL for a customer-owned item');
            $table->boolean('is_customer_owned')->default(1);
            $table->unsignedInteger('technician_id')->nullable();
            $table->string('status', 20)->default('received');
            $table->decimal('estimated_cost', 12, 2)->nullable();
            $table->decimal('final_cost', 12, 2)->nullable();
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('repair_number', 'repair_orders_number_unique');
            $table->index('client_id', 'repair_orders_client_id_index');
            $table->foreign('client_id', 'repair_orders_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('repair_orders');
    }
};
