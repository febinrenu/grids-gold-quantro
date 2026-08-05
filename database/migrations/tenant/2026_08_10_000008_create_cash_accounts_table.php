<?php
// SRS Table 134.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('cash_accounts')) {
            return;
        }

        Schema::create('cash_accounts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('name', 100);
            $table->string('type', 20)->default('branch_cash');
            $table->unsignedInteger('warehouse_id')->nullable();
            $table->decimal('current_balance', 15, 3)->default(0);
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cash_accounts');
    }
};
