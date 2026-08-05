<?php
// SRS Table 37.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('item_certificates')) {
            return;
        }

        Schema::create('item_certificates', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->unsignedBigInteger('certificate_id');
            $table->string('certificate_number', 191);
            $table->date('issue_date')->nullable();
            $table->date('expiry_date')->nullable();
            $table->string('digital_copy', 255)->nullable();
            $table->string('verification_url', 255)->nullable();
            $table->timestamps(6);

            $table->index('product_id', 'item_certificates_product_id_index');
            $table->index('certificate_id', 'item_certificates_certificate_id_index');
            $table->foreign('certificate_id', 'item_certificates_certificate_id_foreign')->references('id')->on('certificates')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_certificates');
    }
};
