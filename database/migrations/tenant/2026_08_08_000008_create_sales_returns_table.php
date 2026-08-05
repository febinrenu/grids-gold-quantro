<?php
// SRS Table 94. Business rule: returned items require inspection before being marked Available again.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sales_returns')) {
            return;
        }

        Schema::create('sales_returns', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('return_number', 40);
            $table->integer('sale_id');
            $table->integer('client_id');
            $table->string('return_reason', 255)->nullable();
            $table->string('status', 20)->default('requested');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('return_number', 'sales_returns_number_unique');
            $table->index('sale_id', 'sales_returns_sale_id_index');
            $table->foreign('sale_id', 'sales_returns_sale_id_foreign')->references('id')->on('sales')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign('client_id', 'sales_returns_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_returns');
    }
};
