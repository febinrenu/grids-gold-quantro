<?php
// SRS Table 34.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('hallmarks')) {
            return;
        }

        Schema::create('hallmarks', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('hallmark_authority', 150);
            $table->string('country', 100)->nullable();
            $table->string('hallmark_code', 60);
            $table->string('image', 255)->nullable();
            $table->string('verification_status', 20)->default('unverified');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('hallmark_code', 'hallmarks_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hallmarks');
    }
};
