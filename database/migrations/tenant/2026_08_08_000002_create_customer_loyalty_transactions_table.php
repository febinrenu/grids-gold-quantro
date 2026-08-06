<?php
// SRS Table 86.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('customer_loyalty_transactions')) {
            return;
        }

        Schema::create('customer_loyalty_transactions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('client_id');
            $table->string('transaction_type', 20);
            $table->decimal('points', 12, 2)->default(0);
            $table->string('reference_type', 40)->nullable();
            $table->unsignedInteger('reference_id')->nullable();
            $table->decimal('balance_after', 12, 2)->default(0);
            $table->timestamps(6);

            $table->index('client_id', 'customer_loyalty_transactions_client_id_index');
            $table->foreign('client_id', 'customer_loyalty_transactions_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customer_loyalty_transactions');
    }
};
