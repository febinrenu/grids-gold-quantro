<?php
// SRS Table 124. e.g. 18K -> 22K.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('karat_conversions')) {
            return;
        }

        Schema::create('karat_conversions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id')->nullable();
            $table->decimal('original_weight', 12, 3);
            $table->unsignedInteger('original_karat_id')->nullable();
            $table->decimal('new_weight', 12, 3)->nullable();
            $table->unsignedInteger('new_karat_id')->nullable();
            $table->unsignedInteger('converted_by')->nullable();
            $table->dateTime('converted_at');

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('karat_conversions');
    }
};
