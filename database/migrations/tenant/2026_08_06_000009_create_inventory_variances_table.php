<?php
// SRS Table 57. Missing item, weight difference, wrong location, wrong RFID/barcode/status — discovered during audits/counts.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inventory_variances')) {
            return;
        }

        Schema::create('inventory_variances', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('variance_number', 40);
            $table->unsignedInteger('product_id');
            $table->string('expected_value', 191)->nullable();
            $table->string('actual_value', 191)->nullable();
            $table->string('difference', 191)->nullable();
            $table->string('severity', 20)->default('low');
            $table->string('resolution_status', 20)->default('open');
            $table->timestamps(6);

            $table->unique('variance_number', 'inventory_variances_number_unique');
            $table->index('product_id', 'inventory_variances_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_variances');
    }
};
