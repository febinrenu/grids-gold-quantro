<?php
// SRS Table 1. `companies` already exists (2026_03_24_203803, HRM domain: id,
// name, email, phone, country). Rather than duplicate the table, this adds
// only the SRS columns that aren't already covered. New columns are nullable
// even where the SRS marks them NOT NULL, since existing company rows have
// no value to backfill them with.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('companies', 'company_code')) {
            return;
        }

        Schema::table('companies', function (Blueprint $table) {
            $table->string('company_code', 20)->nullable()->unique('companies_company_code_unique')->after('id');
            $table->string('legal_name', 200)->nullable();
            $table->string('trade_name', 200)->nullable();
            $table->string('registration_number', 100)->nullable();
            $table->string('tax_number', 100)->nullable();
            $table->string('website', 255)->nullable();
            $table->string('logo', 255)->nullable();
            $table->unsignedInteger('currency_id')->nullable();
            $table->string('timezone', 50)->nullable();
            $table->date('fiscal_year_start')->nullable();
            $table->string('status', 20)->default('active');

            $table->index('currency_id', 'companies_currency_id_index');
        });
    }

    public function down(): void
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->dropUnique('companies_company_code_unique');
            $table->dropIndex('companies_currency_id_index');
            $table->dropColumn([
                'company_code', 'legal_name', 'trade_name', 'registration_number',
                'tax_number', 'website', 'logo', 'currency_id', 'timezone',
                'fiscal_year_start', 'status',
            ]);
        });
    }
};
