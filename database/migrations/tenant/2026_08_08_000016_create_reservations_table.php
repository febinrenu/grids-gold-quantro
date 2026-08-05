<?php
// SRS Table 102. Customer-facing counterpart of stock_reservations (Part 3.4).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('reservations')) {
            return;
        }

        Schema::create('reservations', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('reservation_number', 40);
            $table->integer('client_id');
            $table->unsignedInteger('product_id');
            $table->date('reservation_date');
            $table->date('expiry_date')->nullable();
            $table->decimal('deposit_amount', 15, 3)->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);

            $table->unique('reservation_number', 'reservations_number_unique');
            $table->index('client_id', 'reservations_client_id_index');
            $table->index('product_id', 'reservations_product_id_index');
            $table->foreign('client_id', 'reservations_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
