<?php
// SRS Table 40.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('qr_registry')) {
            return;
        }

        Schema::create('qr_registry', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('qr_value', 191);
            $table->string('qr_type', 30)->default('item');
            $table->unsignedInteger('product_id')->nullable();
            $table->string('target_url', 255)->nullable();
            $table->dateTime('generated_at')->nullable();
            $table->dateTime('last_scanned_at')->nullable();
            $table->timestamps(6);

            $table->unique('qr_value', 'qr_registry_value_unique');
            $table->index('product_id', 'qr_registry_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('qr_registry');
    }
};
