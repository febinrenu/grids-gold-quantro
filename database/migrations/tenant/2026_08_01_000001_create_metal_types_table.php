<?php
// Task 1.1 — modeled exactly on the real
// database/migrations/tenant/2026_03_24_203803_create_currencies_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('metal_types')) {
            return;
        }

        Schema::create('metal_types', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->integer('id', true);
            $table->string('name', 192);
            $table->string('code', 191)->unique();
            $table->decimal('density', 8, 3)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps(6);
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('metal_types');
    }
};
