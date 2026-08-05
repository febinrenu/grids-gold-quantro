<?php
// SRS Table 36. Master list of certificate authorities (GIA, IGI, BIS, HRD, SGL).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('certificates')) {
            return;
        }

        Schema::create('certificates', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('authority_name', 150);
            $table->string('website', 255)->nullable();
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);
            $table->softDeletes();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};
