<?php
// SRS Table 25. Examples: Wedding, Luxury, Festival, Kids, Premium.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('jewelry_collections')) {
            return;
        }

        Schema::create('jewelry_collections', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);
            $table->softDeletes();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jewelry_collections');
    }
};
