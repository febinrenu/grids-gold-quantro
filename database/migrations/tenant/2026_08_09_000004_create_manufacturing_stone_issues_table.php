<?php
// SRS Table 106.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_stone_issues')) {
            return;
        }

        Schema::create('manufacturing_stone_issues', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->unsignedInteger('stone_type_id');
            $table->integer('quantity')->default(1);
            $table->decimal('weight', 10, 3)->nullable();
            $table->decimal('cost', 12, 2)->nullable();

            $table->index('manufacturing_order_id', 'manufacturing_stone_issues_order_id_index');
            $table->foreign('manufacturing_order_id', 'manufacturing_stone_issues_order_id_foreign')->references('id')->on('manufacturing_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_stone_issues');
    }
};
