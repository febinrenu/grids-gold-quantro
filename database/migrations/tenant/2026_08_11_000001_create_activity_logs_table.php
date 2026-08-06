<?php
// SRS Table 151. General user-behavior analytics, distinct from audit_logs (Part 2), which is the compliance/business-rule trail.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('activity_logs')) {
            return;
        }

        Schema::create('activity_logs', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('user_id')->nullable();
            $table->string('action', 60);
            $table->string('subject_type', 60)->nullable();
            $table->unsignedBigInteger('subject_id')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index('user_id', 'activity_logs_user_id_index');
            $table->index(['subject_type', 'subject_id'], 'activity_logs_subject_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activity_logs');
    }
};
