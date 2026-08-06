<?php
// SRS Table 101. Supports partial redemption.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gift_vouchers')) {
            return;
        }

        Schema::create('gift_vouchers', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('voucher_number', 40);
            $table->date('issue_date');
            $table->date('expiry_date')->nullable();
            $table->decimal('value', 15, 3);
            $table->decimal('remaining_balance', 15, 3);
            $table->string('status', 20)->default('active');
            $table->timestamps(6);

            $table->unique('voucher_number', 'gift_vouchers_number_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gift_vouchers');
    }
};
