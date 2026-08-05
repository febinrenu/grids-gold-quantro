<?php
// SRS Table 4. A highly-secure sub-location of a warehouse. Also represented operationally as a restricted warehouse_locations row (is_restricted = 1); this table adds vault-specific attributes (capacity, access policy).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('vaults')) {
            return;
        }

        Schema::create('vaults', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('warehouse_id');
            $table->string('vault_code', 30);
            $table->string('vault_name', 150);
            $table->decimal('maximum_capacity', 12, 3)->nullable();
            $table->string('security_level', 30)->nullable();
            $table->text('access_policy')->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique(['warehouse_id', 'vault_code'], 'vaults_warehouse_code_unique');
            $table->foreign('warehouse_id', 'vaults_warehouse_id_foreign')->references('id')->on('warehouses')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vaults');
    }
};
