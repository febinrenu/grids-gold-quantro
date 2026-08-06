<?php
// SRS Table 21. `employees` already exists (2026_03_24_203803, HRM domain)
// with its own department_id (signed int, no FK constraint), employment_type,
// and joining_date columns already covering those SRS fields. This only adds
// the genuinely new SRS columns.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('employees', 'employee_code')) {
            return;
        }

        Schema::table('employees', function (Blueprint $table) {
            $table->string('employee_code', 30)->nullable();
            $table->unsignedInteger('user_id')->nullable()->comment('optional link to a system login account');
            $table->unsignedInteger('warehouse_id')->nullable();
            $table->string('designation', 100)->nullable();
            $table->string('salary_grade', 30)->nullable();
            $table->string('national_id', 60)->nullable();
            $table->string('emergency_contact', 150)->nullable();
            $table->boolean('is_active')->default(1);

            $table->unique('employee_code', 'employees_employee_code_unique');
        });
    }

    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropUnique('employees_employee_code_unique');
            $table->dropColumn([
                'employee_code', 'user_id', 'warehouse_id', 'designation',
                'salary_grade', 'national_id', 'emergency_contact', 'is_active',
            ]);
        });
    }
};
