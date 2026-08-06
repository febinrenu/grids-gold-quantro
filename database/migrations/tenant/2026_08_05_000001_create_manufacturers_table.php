<?php
// SRS Table 27.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturers')) {
            return;
        }

        Schema::create('manufacturers', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('name', 200);
            $table->string('contact_details', 255)->nullable();
            $table->text('address')->nullable();
            $table->decimal('rating', 3, 2)->nullable();
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);
            $table->softDeletes();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturers');
    }
};
