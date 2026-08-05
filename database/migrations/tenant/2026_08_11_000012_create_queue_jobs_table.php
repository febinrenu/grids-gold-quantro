<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('queue_jobs')) {
            return;
        }

        Schema::create('queue_jobs', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('queue', 60)->default('default');
            $table->string('job_type', 100);
            $table->json('payload')->nullable();
            $table->unsignedTinyInteger('attempts')->default(0);
            $table->timestamp('reserved_at')->nullable();
            $table->timestamp('available_at')->useCurrent();
            $table->timestamp('created_at')->useCurrent();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('queue_jobs');
    }
};
