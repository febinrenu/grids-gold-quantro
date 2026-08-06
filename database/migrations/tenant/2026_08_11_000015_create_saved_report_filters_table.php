<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('saved_report_filters')) {
            return;
        }

        Schema::create('saved_report_filters', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('report_definition_id');
            $table->unsignedInteger('user_id')->nullable();
            $table->string('name', 150);
            $table->json('filters')->nullable();
            $table->timestamps(6);

            $table->index('report_definition_id', 'saved_report_filters_report_id_index');
            $table->foreign('report_definition_id', 'saved_report_filters_report_id_foreign')->references('id')->on('report_definitions')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('saved_report_filters');
    }
};
