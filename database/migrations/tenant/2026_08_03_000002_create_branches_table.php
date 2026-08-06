<?php
// company_id is a plain signed integer, not unsignedBigInteger, to match
// the existing `companies.id` column type exactly (companies predates this
// migration and was defined as a signed INT — see 2026_08_03_000001).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('branches')) {
            return;
        }

        Schema::create('branches', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('company_id');
            $table->string('branch_code', 30);
            $table->string('branch_name', 150);
            $table->unsignedInteger('manager_id')->nullable();
            $table->string('email', 255)->nullable();
            $table->string('phone', 255)->nullable();
            $table->text('address')->nullable();
            $table->string('city', 150)->nullable();
            $table->decimal('latitude', 10, 6)->nullable();
            $table->decimal('longitude', 10, 6)->nullable();
            $table->boolean('gold_price_override')->default(0);
            $table->unsignedInteger('default_currency_id')->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique(['company_id', 'branch_code'], 'branches_company_branch_code_unique');
            $table->index('manager_id', 'branches_manager_id_index');
            $table->foreign('company_id', 'branches_company_id_foreign')->references('id')->on('companies')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('branches');
    }
};
