<?php
// "Karat is required when the selected metal REQUIRES PURITY IDENTIFICATION"
// — previously inferred by checking whether any karats existed for the
// metal. This makes it an explicit, editable flag on the metal type itself.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRequiresPurityToMetalTypesTable extends Migration
{
    public function up()
    {
        Schema::table('metal_types', function (Blueprint $table) {
            if (! Schema::hasColumn('metal_types', 'requires_purity')) {
                $table->boolean('requires_purity')->default(true)->after('density');
            }
        });
    }

    public function down()
    {
        Schema::table('metal_types', function (Blueprint $table) {
            if (Schema::hasColumn('metal_types', 'requires_purity')) {
                $table->dropColumn('requires_purity');
            }
        });
    }
}
