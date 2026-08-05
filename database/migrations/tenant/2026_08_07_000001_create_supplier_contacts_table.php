<?php
// SRS Table 67.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('supplier_contacts')) {
            return;
        }

        Schema::create('supplier_contacts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('provider_id');
            $table->string('name', 150);
            $table->string('designation', 100)->nullable();
            $table->string('phone', 64)->nullable();
            $table->string('email', 150)->nullable();
            $table->boolean('is_primary_contact')->default(0);
            $table->timestamps(6);

            $table->index('provider_id', 'supplier_contacts_provider_id_index');
            $table->foreign('provider_id', 'supplier_contacts_provider_id_foreign')->references('id')->on('providers')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('supplier_contacts');
    }
};
