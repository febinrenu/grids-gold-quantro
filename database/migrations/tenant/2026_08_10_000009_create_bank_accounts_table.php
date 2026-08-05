<?php
// SRS Table 135.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('bank_accounts')) {
            return;
        }

        Schema::create('bank_accounts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('bank_name', 150);
            $table->unsignedBigInteger('branch_id')->nullable();
            $table->string('account_number', 60);
            $table->string('ifsc_swift', 30)->nullable();
            $table->unsignedInteger('currency_id')->nullable();
            $table->decimal('current_balance', 15, 3)->default(0);
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bank_accounts');
    }
};
