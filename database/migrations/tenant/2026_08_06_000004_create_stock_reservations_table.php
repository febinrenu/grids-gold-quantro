<?php
// SRS Table 51.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('stock_reservations')) {
            return;
        }

        Schema::create('stock_reservations', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('reservation_number', 40);
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('client_id')->nullable();
            $table->unsignedInteger('reserved_by')->nullable();
            $table->date('reservation_date');
            $table->date('expiry_date')->nullable();
            $table->string('reservation_status', 20)->default('active');
            $table->timestamps(6);

            $table->unique('reservation_number', 'stock_reservations_number_unique');
            $table->index('product_id', 'stock_reservations_product_id_index');
            $table->index('client_id', 'stock_reservations_client_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_reservations');
    }
};
