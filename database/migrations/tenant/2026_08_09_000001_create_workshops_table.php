<?php
// SRS Table 112.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('workshops')) {
            return;
        }

        Schema::create('workshops', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('workshop_code', 30);
            $table->string('name', 150);
            $table->string('type', 20)->default('internal');
            $table->text('address')->nullable();
            $table->string('contact', 150)->nullable();
            $table->decimal('rating', 3, 2)->nullable();
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('workshop_code', 'workshops_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('workshops');
    }
};
