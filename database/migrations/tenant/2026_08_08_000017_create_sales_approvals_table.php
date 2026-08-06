<?php
// SRS Table 103.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sales_approvals')) {
            return;
        }

        Schema::create('sales_approvals', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('sale_id');
            $table->string('approval_type', 30);
            $table->integer('approval_level')->default(1);
            $table->unsignedInteger('approver_id')->nullable();
            $table->string('decision', 20)->default('pending');
            $table->dateTime('decided_at')->nullable();
            $table->string('remarks', 255)->nullable();
            $table->timestamps(6);

            $table->index('sale_id', 'sales_approvals_sale_id_index');
            $table->foreign('sale_id', 'sales_approvals_sale_id_foreign')->references('id')->on('sales')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_approvals');
    }
};
