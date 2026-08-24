<?php
// ST-2 gap: AML/KYC compliance for large cash transactions, required in
// UAE/India jewelry retail. The threshold and on/off switch are tenant
// configurable since the legal cash-transaction limit varies by
// jurisdiction (and this app doesn't presume to know the tenant's).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAmlSettingsToSettingsTable extends Migration
{
    public function up()
    {
        Schema::table('settings', function (Blueprint $table) {
            if (! Schema::hasColumn('settings', 'aml_kyc_enabled')) {
                $table->boolean('aml_kyc_enabled')->default(false);
            }
            if (! Schema::hasColumn('settings', 'aml_transaction_threshold')) {
                $table->decimal('aml_transaction_threshold', 14, 2)->nullable();
            }
        });
    }

    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            $cols = ['aml_kyc_enabled', 'aml_transaction_threshold'];
            foreach ($cols as $c) {
                if (Schema::hasColumn('settings', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
}
