<?php
// SRS Table 39.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('barcode_registry')) {
            return;
        }

        Schema::create('barcode_registry', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('barcode_value', 64);
            $table->string('barcode_type', 20)->default('code128');
            $table->unsignedInteger('product_id')->nullable();
            $table->unsignedBigInteger('product_serial_id')->nullable();
            $table->integer('print_count')->default(0);
            $table->dateTime('last_printed_at')->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);

            $table->unique('barcode_value', 'barcode_registry_value_unique');
            $table->index('product_id', 'barcode_registry_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('barcode_registry');
    }
};
