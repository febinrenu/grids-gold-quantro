<?php
// SRS Table 163. Supports retry.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('queue_failures')) {
            return;
        }

        Schema::create('queue_failures', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('queue_job_id')->nullable();
            $table->string('job_type', 100)->nullable();
            $table->json('payload')->nullable();
            $table->text('exception')->nullable();
            $table->timestamp('failed_at')->useCurrent();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('queue_failures');
    }
};
