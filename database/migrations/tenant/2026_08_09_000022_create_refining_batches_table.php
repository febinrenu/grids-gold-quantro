<?php
// SRS Table 123.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('refining_batches')) {
            return;
        }

        Schema::create('refining_batches', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('melting_batch_id')->nullable();
            $table->decimal('input_purity', 5, 2)->nullable();
            $table->decimal('output_purity', 5, 2)->nullable();
            $table->decimal('fine_gold_weight', 12, 3)->nullable();
            $table->string('refinery', 150)->nullable();
            $table->timestamps(6);

            $table->index('melting_batch_id', 'refining_batches_melting_batch_id_index');
            $table->foreign('melting_batch_id', 'refining_batches_melting_batch_id_foreign')->references('id')->on('melting_batches')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('refining_batches');
    }
};
