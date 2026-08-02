<?php
// Lets a tenant flag a location (safe, vault, etc.) as restricted so only
// users holding the new `view_restricted_locations` permission can see its
// inventory — the customization brief's "unauthorized users cannot view
// safe, vault, or restricted-location inventory" rule.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsRestrictedToWarehouseLocationsTable extends Migration
{
    public function up()
    {
        Schema::table('warehouse_locations', function (Blueprint $table) {
            if (! Schema::hasColumn('warehouse_locations', 'is_restricted')) {
                $table->boolean('is_restricted')->default(false)->after('is_active');
            }
        });
    }

    public function down()
    {
        Schema::table('warehouse_locations', function (Blueprint $table) {
            if (Schema::hasColumn('warehouse_locations', 'is_restricted')) {
                $table->dropColumn('is_restricted');
            }
        });
    }
}
