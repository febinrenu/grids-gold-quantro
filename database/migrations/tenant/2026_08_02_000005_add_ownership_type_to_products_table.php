<?php
// "Memo or consignment ownership" — one of the item list filters required by
// the customization brief (§8.2) that had no backing column at all.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOwnershipTypeToProductsTable extends Migration
{
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            if (! Schema::hasColumn('products', 'ownership_type')) {
                // own, memo, consignment
                $table->string('ownership_type', 20)->default('own')->after('is_jewelry_item');
            }
        });
    }

    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'ownership_type')) {
                $table->dropColumn('ownership_type');
            }
        });
    }
}
