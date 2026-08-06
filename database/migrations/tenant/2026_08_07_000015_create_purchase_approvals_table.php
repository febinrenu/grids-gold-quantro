<?php
// SRS Table 82. Supports multi-level approval (Employee -> Supervisor -> Manager -> Administrator).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('purchase_approvals')) {
            return;
        }

        Schema::create('purchase_approvals', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('purchase_id');
            $table->integer('approval_level')->default(1);
            $table->unsignedInteger('approver_id')->nullable();
            $table->string('decision', 20)->default('pending');
            $table->dateTime('decided_at')->nullable();
            $table->string('comments', 255)->nullable();
            $table->timestamps(6);

            $table->index('purchase_id', 'purchase_approvals_purchase_id_index');
            $table->foreign('purchase_id', 'purchase_approvals_purchase_id_foreign')->references('id')->on('purchases')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_approvals');
    }
};
