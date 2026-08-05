<?php
// SRS Table 70.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('purchase_request_items')) {
            return;
        }

        Schema::create('purchase_request_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('purchase_request_id');
            $table->unsignedBigInteger('product_template_id')->nullable();
            $table->decimal('quantity', 12, 3)->default(1);
            $table->decimal('estimated_weight', 12, 3)->nullable();
            $table->decimal('estimated_cost', 15, 3)->nullable();
            $table->string('remarks', 255)->nullable();

            $table->index('purchase_request_id', 'purchase_request_items_request_id_index');
            $table->foreign('purchase_request_id', 'purchase_request_items_request_id_foreign')->references('id')->on('purchase_requests')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_request_items');
    }
};
