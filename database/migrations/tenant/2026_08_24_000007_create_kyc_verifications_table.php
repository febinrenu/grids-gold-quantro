<?php
// ST-2 gap: identity verification records for a customer, required before
// (or triggered by) large cash transactions in AML-regulated jewelry markets.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('kyc_verifications')) {
            return;
        }

        Schema::create('kyc_verifications', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('client_id');
            $table->string('verification_type', 30)->default('id_document'); // id_document, address_proof, enhanced_due_diligence
            $table->string('document_type', 50)->nullable(); // passport, national_id, driving_license, ...
            $table->string('document_number', 100)->nullable();
            $table->date('id_expiry_date')->nullable();
            $table->unsignedInteger('verified_by')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->string('status', 20)->default('pending'); // pending, verified, rejected, expired
            $table->string('risk_level', 10)->default('low'); // low, medium, high
            $table->string('attachment_path', 255)->nullable();
            $table->text('notes')->nullable();
            $table->timestamps(6);
            $table->softDeletes();

            $table->index('client_id', 'kyc_verifications_client_id_index');
            $table->index('status', 'kyc_verifications_status_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kyc_verifications');
    }
};
