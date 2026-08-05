<?php
// SRS Table 80.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('supplier_credit_notes')) {
            return;
        }

        Schema::create('supplier_credit_notes', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('credit_note_number', 40);
            $table->integer('provider_id');
            $table->unsignedBigInteger('purchase_return_id')->nullable();
            $table->decimal('amount', 15, 3)->default(0);
            $table->decimal('gold_weight_adjustment', 12, 3)->nullable();
            $table->date('issue_date');
            $table->string('status', 20)->default('open');
            $table->timestamps(6);

            $table->unique('credit_note_number', 'supplier_credit_notes_number_unique');
            $table->index('provider_id', 'supplier_credit_notes_provider_id_index');
            $table->foreign('provider_id', 'supplier_credit_notes_provider_id_foreign')->references('id')->on('providers')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('supplier_credit_notes');
    }
};
