<?php
// SRS Table 132.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('accounts_receivable')) {
            return;
        }

        Schema::create('accounts_receivable', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('client_id');
            $table->integer('sale_id')->nullable();
            $table->date('due_date')->nullable();
            $table->decimal('outstanding_amount', 15, 3)->default(0);
            $table->string('aging_bucket', 20)->nullable();
            $table->string('status', 20)->default('open');
            $table->timestamps(6);

            $table->index('client_id', 'accounts_receivable_client_id_index');
            $table->foreign('client_id', 'accounts_receivable_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign('sale_id', 'accounts_receivable_sale_id_foreign')->references('id')->on('sales')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounts_receivable');
    }
};
