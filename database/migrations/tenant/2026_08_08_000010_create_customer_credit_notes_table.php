<?php
// SRS Table 96.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('customer_credit_notes')) {
            return;
        }

        Schema::create('customer_credit_notes', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('credit_note_number', 40);
            $table->integer('client_id');
            $table->unsignedBigInteger('sales_return_id')->nullable();
            $table->decimal('amount', 15, 3)->default(0);
            $table->string('status', 20)->default('open');
            $table->timestamps(6);

            $table->unique('credit_note_number', 'customer_credit_notes_number_unique');
            $table->index('client_id', 'customer_credit_notes_client_id_index');
            $table->foreign('client_id', 'customer_credit_notes_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customer_credit_notes');
    }
};
