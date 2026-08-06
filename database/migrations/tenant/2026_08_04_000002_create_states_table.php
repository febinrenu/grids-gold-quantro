<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('states')) {
            return;
        }

        Schema::create('states', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('country_id');
            $table->string('name', 150);
            $table->string('code', 10)->nullable();
            $table->timestamps(6);

            $table->index('country_id', 'states_country_id_index');
            $table->foreign('country_id', 'states_country_id_foreign')->references('id')->on('countries')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('states');
    }
};
