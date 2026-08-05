<?php
// SRS Table 164.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('report_definitions')) {
            return;
        }

        Schema::create('report_definitions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('report_name', 150);
            $table->string('module', 40);
            $table->string('source_reference', 191)->nullable()->comment('SQL/view reference');
            $table->string('export_formats', 60);
            $table->boolean('is_active')->default(1);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('report_definitions');
    }
};
