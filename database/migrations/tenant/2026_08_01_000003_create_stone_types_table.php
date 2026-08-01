<?php
// Task 1.3 — same style as metal_types (§1.1).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('stone_types')) {
            return;
        }

        Schema::create('stone_types', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->integer('id', true);
            $table->string('name', 192);
            $table->string('code', 191)->unique();
            $table->boolean('is_active')->default(true);
            $table->timestamps(6);
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stone_types');
    }
};
