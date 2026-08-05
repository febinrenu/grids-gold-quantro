<?php
// SRS Table 100. Remains a liability until applied to an invoice (design principle, SRS Part 6).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('customer_deposits')) {
            return;
        }

        Schema::create('customer_deposits', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('deposit_number', 40);
            $table->integer('client_id');
            $table->decimal('amount', 15, 3);
            $table->decimal('balance', 15, 3);
            $table->string('reference_type', 30)->nullable();
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->timestamps(6);

            $table->unique('deposit_number', 'customer_deposits_number_unique');
            $table->index('client_id', 'customer_deposits_client_id_index');
            $table->foreign('client_id', 'customer_deposits_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customer_deposits');
    }
};
