<?php
// ST-1 gap: individual installment payments toward a gold_saving_schemes
// enrollment. Storing the gold_rate_id + equivalent_weight alongside the cash
// amount lets the scheme report both "money paid in" and "grams accrued at
// the rate on each deposit date", which is how these schemes are marketed.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_saving_scheme_deposits')) {
            return;
        }

        Schema::create('gold_saving_scheme_deposits', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('scheme_id');
            $table->date('deposit_date');
            $table->decimal('amount', 12, 2);
            $table->unsignedBigInteger('gold_rate_id')->nullable();
            $table->decimal('equivalent_weight', 12, 3)->nullable();
            $table->string('payment_method', 30)->nullable();
            $table->string('receipt_number', 50)->nullable();
            $table->unsignedInteger('recorded_by')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps(6);

            $table->index('scheme_id', 'gold_saving_scheme_deposits_scheme_id_index');
            $table->index('deposit_date', 'gold_saving_scheme_deposits_date_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_saving_scheme_deposits');
    }
};
