<?php
// SRS Table 58.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('warehouse_receipts')) {
            return;
        }

        Schema::create('warehouse_receipts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('receipt_number', 40);
            $table->unsignedInteger('warehouse_id');
            $table->string('source_type', 30);
            $table->unsignedBigInteger('source_id')->nullable();
            $table->unsignedInteger('received_by')->nullable();
            $table->dateTime('received_at');
            $table->timestamps(6);

            $table->unique('receipt_number', 'warehouse_receipts_number_unique');
            $table->index(['source_type', 'source_id'], 'warehouse_receipts_source_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('warehouse_receipts');
    }
};
