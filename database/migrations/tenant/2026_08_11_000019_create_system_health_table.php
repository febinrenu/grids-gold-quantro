<?php
// SRS Table 169.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('system_health')) {
            return;
        }

        Schema::create('system_health', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('metric', 60);
            $table->decimal('value', 10, 2);
            $table->string('unit', 20)->nullable();
            $table->dateTime('recorded_at');

            $table->index(['metric', 'recorded_at'], 'system_health_metric_recorded_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('system_health');
    }
};
