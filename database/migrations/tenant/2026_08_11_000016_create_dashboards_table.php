<?php
// SRS Table 166.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('dashboards')) {
            return;
        }

        Schema::create('dashboards', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('name', 100);
            $table->unsignedInteger('role_id')->nullable();
            $table->json('layout')->nullable();
            $table->boolean('is_default')->default(0);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dashboards');
    }
};
