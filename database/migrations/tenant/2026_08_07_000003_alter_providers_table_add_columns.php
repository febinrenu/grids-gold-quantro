<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('providers', 'payment_terms_id')) {
            return;
        }

        Schema::table('providers', function (Blueprint $table) {
            $table->unsignedBigInteger('payment_terms_id')->nullable();
            $table->boolean('preferred_supplier')->default(0);
            $table->boolean('blocked')->default(0);
            $table->index('payment_terms_id', 'providers_payment_terms_id_index');
            $table->foreign('payment_terms_id', 'providers_payment_terms_id_foreign')->references('id')->on('supplier_payment_terms')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('providers', function (Blueprint $table) {
            $table->dropForeign('providers_payment_terms_id_foreign');
            $table->dropIndex('providers_payment_terms_id_index');
            $table->dropColumn('payment_terms_id');
            $table->dropColumn('preferred_supplier');
            $table->dropColumn('blocked');
        });
    }
};
