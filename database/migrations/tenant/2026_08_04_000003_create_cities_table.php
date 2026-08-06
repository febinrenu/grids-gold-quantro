<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('cities')) {
            return;
        }

        Schema::create('cities', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('state_id');
            $table->unsignedBigInteger('country_id');
            $table->string('name', 150);
            $table->timestamps(6);

            $table->index('state_id', 'cities_state_id_index');
            $table->index('country_id', 'cities_country_id_index');
            $table->foreign('state_id', 'cities_state_id_foreign')->references('id')->on('states')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign('country_id', 'cities_country_id_foreign')->references('id')->on('countries')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cities');
    }
};
