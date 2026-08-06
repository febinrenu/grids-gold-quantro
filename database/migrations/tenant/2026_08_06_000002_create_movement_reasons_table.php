<?php
// SRS Table 49. Configurable by administrators.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('movement_reasons')) {
            return;
        }

        Schema::create('movement_reasons', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('code', 40);
            $table->string('name', 150);
            $table->boolean('is_active')->default(1);

            $table->unique('code', 'movement_reasons_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('movement_reasons');
    }
};
