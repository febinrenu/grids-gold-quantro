<?php
// Posted Invoice Snapshot (customization brief §10) requires "Effective rate
// date" alongside the rate value itself — gold_rate_value was copied onto
// sale_details already, but the rate's effective_at timestamp was not.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGoldRateEffectiveAtToSaleDetailsTable extends Migration
{
    public function up()
    {
        Schema::table('sale_details', function (Blueprint $table) {
            if (! Schema::hasColumn('sale_details', 'gold_rate_effective_at')) {
                $table->timestamp('gold_rate_effective_at')->nullable()->after('gold_rate_value');
            }
        });
    }

    public function down()
    {
        Schema::table('sale_details', function (Blueprint $table) {
            if (Schema::hasColumn('sale_details', 'gold_rate_effective_at')) {
                $table->dropColumn('gold_rate_effective_at');
            }
        });
    }
}
