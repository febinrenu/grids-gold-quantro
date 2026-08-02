<?php
// Adds optional source/destination warehouse-location pointers to transfers,
// so a transfer can represent a location-only move (e.g. safe -> showroom
// inside the same warehouse) in addition to the existing warehouse-to-warehouse
// move. Additive and guarded, following the same style as
// 2026_08_01_000004_add_jewelry_fields_to_products_table.php.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLocationsToTransfersTable extends Migration
{
    public function up()
    {
        Schema::table('transfers', function (Blueprint $table) {
            if (! Schema::hasColumn('transfers', 'from_warehouse_location_id')) {
                $table->unsignedInteger('from_warehouse_location_id')->nullable()->after('from_warehouse_id');
            }
            if (! Schema::hasColumn('transfers', 'to_warehouse_location_id')) {
                $table->unsignedInteger('to_warehouse_location_id')->nullable()->after('to_warehouse_id');
            }
        });
    }

    public function down()
    {
        Schema::table('transfers', function (Blueprint $table) {
            $cols = ['from_warehouse_location_id', 'to_warehouse_location_id'];
            foreach ($cols as $c) {
                if (Schema::hasColumn('transfers', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
}
