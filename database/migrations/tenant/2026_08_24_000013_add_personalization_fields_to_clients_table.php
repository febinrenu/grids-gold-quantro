<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->string('ring_size', 50)->nullable();
            $table->date('anniversary_date')->nullable();
            $table->text('preferred_metals')->nullable();
            $table->integer('partner_customer_id')->nullable();

            $table->foreign('partner_customer_id')->references('id')->on('clients')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->dropForeign(['partner_customer_id']);
            $table->dropColumn(['ring_size', 'anniversary_date', 'preferred_metals', 'partner_customer_id']);
        });
    }
};
