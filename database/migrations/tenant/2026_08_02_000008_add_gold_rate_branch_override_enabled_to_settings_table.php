<?php
// "Branch-specific rates may override company rates WHEN ENABLED" — the
// service always preferred a branch-specific rate with no way to turn that
// off. This setting makes it the configurable toggle the brief describes.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGoldRateBranchOverrideEnabledToSettingsTable extends Migration
{
    public function up()
    {
        Schema::table('settings', function (Blueprint $table) {
            if (! Schema::hasColumn('settings', 'gold_rate_branch_override_enabled')) {
                $table->boolean('gold_rate_branch_override_enabled')->default(true)->after('gold_rate_requires_approval');
            }
        });
    }

    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            if (Schema::hasColumn('settings', 'gold_rate_branch_override_enabled')) {
                $table->dropColumn('gold_rate_branch_override_enabled');
            }
        });
    }
}
