<?php
// SRS Table 153. Generic approval envelope reused by every module (sales discounts, gold price changes, weight adjustments, purchase approvals, ...).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('approval_requests')) {
            return;
        }

        Schema::create('approval_requests', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('request_number', 40);
            $table->unsignedBigInteger('approval_workflow_id');
            $table->string('module', 40);
            $table->string('reference_type', 60)->nullable();
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->integer('current_level')->default(1);
            $table->string('status', 20)->default('pending');
            $table->timestamps(6);

            $table->unique('request_number', 'approval_requests_number_unique');
            $table->index('approval_workflow_id', 'approval_requests_workflow_id_index');
            $table->index(['reference_type', 'reference_id'], 'approval_requests_reference_index');
            $table->foreign('approval_workflow_id', 'approval_requests_workflow_id_foreign')->references('id')->on('approval_workflows')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('approval_requests');
    }
};
