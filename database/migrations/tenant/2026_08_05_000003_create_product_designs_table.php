<?php
// SRS Table 24. Supports design version control.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('product_designs')) {
            return;
        }

        Schema::create('product_designs', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('design_code', 60);
            $table->string('cad_reference', 255)->nullable();
            $table->string('designer', 150)->nullable();
            $table->string('design_version', 20)->nullable();
            $table->date('release_date')->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('design_code', 'product_designs_design_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_designs');
    }
};
