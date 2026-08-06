<?php
// SRS Table 161.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('scheduled_jobs')) {
            return;
        }

        Schema::create('scheduled_jobs', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('job_name', 100);
            $table->string('frequency', 50)->comment('cron expression or named frequency');
            $table->dateTime('last_run_at')->nullable();
            $table->dateTime('next_run_at')->nullable();
            $table->string('status', 20)->default('active');

            $table->unique('job_name', 'scheduled_jobs_job_name_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('scheduled_jobs');
    }
};
