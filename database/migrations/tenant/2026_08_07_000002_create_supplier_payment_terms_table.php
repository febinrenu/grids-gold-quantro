<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('supplier_payment_terms')) {
            return;
        }

        Schema::create('supplier_payment_terms', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('name', 100);
            $table->integer('due_days')->default(0);
            $table->decimal('discount_percentage', 5, 2)->nullable();
            $table->boolean('is_active')->default(1);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('supplier_payment_terms');
    }
};
