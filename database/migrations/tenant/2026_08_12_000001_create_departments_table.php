<?php
// SRS Table 20. `departments` already exists (2026_03_24_203803, HRM domain:
// id, department, company_id, department_head). Its `department` column
// already serves the SRS `name` field's purpose, so this only adds the one
// genuinely new column, `is_active`.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('departments', 'is_active')) {
            return;
        }

        Schema::table('departments', function (Blueprint $table) {
            $table->boolean('is_active')->default(1);
        });
    }

    public function down(): void
    {
        Schema::table('departments', function (Blueprint $table) {
            $table->dropColumn('is_active');
        });
    }
};
