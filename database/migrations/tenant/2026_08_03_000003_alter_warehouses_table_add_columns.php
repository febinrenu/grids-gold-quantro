<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('warehouses', 'branch_id')) {
            return;
        }

        Schema::table('warehouses', function (Blueprint $table) {
            $table->unsignedBigInteger('branch_id')->nullable();
            $table->index('branch_id', 'warehouses_branch_id_index');
            $table->foreign('branch_id', 'warehouses_branch_id_foreign')->references('id')->on('branches')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('warehouses', function (Blueprint $table) {
            $table->dropForeign('warehouses_branch_id_foreign');
            $table->dropIndex('warehouses_branch_id_index');
            $table->dropColumn('branch_id');
        });
    }
};
