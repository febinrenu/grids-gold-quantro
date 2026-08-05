<?php
// SRS Table 121.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_tests')) {
            return;
        }

        Schema::create('gold_tests', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('used_gold_purchase_item_id')->nullable();
            $table->unsignedInteger('product_id')->nullable();
            $table->string('test_method', 30);
            $table->unsignedInteger('tester_id')->nullable();
            $table->decimal('purity_percentage', 5, 2)->nullable();
            $table->decimal('fineness', 6, 3)->nullable();
            $table->string('result', 20)->default('pass');
            $table->dateTime('tested_at');

            $table->index('used_gold_purchase_item_id', 'gold_tests_purchase_item_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_tests');
    }
};
