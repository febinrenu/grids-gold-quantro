<?php
// SRS Table 122.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('melting_batches')) {
            return;
        }

        Schema::create('melting_batches', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('batch_number', 40);
            $table->decimal('input_weight', 12, 3);
            $table->decimal('output_weight', 12, 3)->nullable();
            $table->decimal('loss', 10, 3)->nullable();
            $table->string('furnace', 60)->nullable();
            $table->unsignedInteger('operator_id')->nullable();
            $table->timestamps(6);

            $table->unique('batch_number', 'melting_batches_number_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('melting_batches');
    }
};
