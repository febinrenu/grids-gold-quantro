<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('tax_codes')) {
            return;
        }

        Schema::create('tax_codes', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('code', 30);
            $table->string('name', 100);
            $table->decimal('rate', 5, 2)->default(0);
            $table->string('type', 20)->default('gst');
            $table->date('effective_date');
            $table->boolean('is_active')->default(1);

            $table->unique('code', 'tax_codes_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tax_codes');
    }
};
