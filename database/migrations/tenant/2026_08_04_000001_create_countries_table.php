<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('countries')) {
            return;
        }

        Schema::create('countries', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('name', 150);
            $table->string('iso_code', 3);
            $table->unsignedInteger('currency_id')->nullable();
            $table->string('phone_code', 10)->nullable();
            $table->string('timezone', 50)->nullable();
            $table->timestamps(6);

            $table->unique('iso_code', 'countries_iso_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('countries');
    }
};
