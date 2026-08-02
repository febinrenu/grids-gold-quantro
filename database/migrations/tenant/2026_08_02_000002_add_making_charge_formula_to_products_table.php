<?php
// Formula-based making charge was supported by JewelryPricingService but had
// nowhere to persist the formula string on the product itself (only
// making_charge_value, a decimal, existed) — this column closes that gap.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMakingChargeFormulaToProductsTable extends Migration
{
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            if (! Schema::hasColumn('products', 'making_charge_formula')) {
                $table->text('making_charge_formula')->nullable()->after('making_charge_value');
            }
        });
    }

    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'making_charge_formula')) {
                $table->dropColumn('making_charge_formula');
            }
        });
    }
}
