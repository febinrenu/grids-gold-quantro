<?php
// ST-1 gap: recurring customer gold-savings/deposit scheme (standard India/Gulf
// retail product) — a customer enrolls, makes periodic deposits (see
// gold_saving_scheme_deposits), and the accumulated value goes toward a future
// jewelry purchase at maturity.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_saving_schemes')) {
            return;
        }

        Schema::create('gold_saving_schemes', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('client_id');
            $table->string('scheme_name', 100);
            $table->unsignedSmallInteger('duration_months');
            $table->decimal('monthly_installment_amount', 12, 2)->nullable();
            $table->date('start_date');
            $table->date('maturity_date')->nullable();
            $table->string('status', 20)->default('active'); // active, matured, closed, cancelled
            $table->decimal('bonus_percentage', 5, 2)->default(0);
            $table->decimal('total_deposited_amount', 14, 2)->default(0);
            $table->decimal('total_deposited_weight', 12, 3)->default(0);
            $table->unsignedInteger('currency_id')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps(6);
            $table->softDeletes();

            $table->index('client_id', 'gold_saving_schemes_client_id_index');
            $table->index('status', 'gold_saving_schemes_status_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_saving_schemes');
    }
};
