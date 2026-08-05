<?php
// SRS Table 155.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('workflow_notifications')) {
            return;
        }

        Schema::create('workflow_notifications', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('notification_template_id')->nullable();
            $table->unsignedInteger('user_id')->nullable();
            $table->string('type', 20)->default('information');
            $table->string('channel', 20)->default('in_app');
            $table->string('title', 191)->nullable();
            $table->text('body')->nullable();
            $table->json('data')->nullable();
            $table->dateTime('read_at')->nullable();
            $table->dateTime('sent_at')->nullable();
            $table->timestamps(6);

            $table->index('user_id', 'notifications_user_id_index');
            $table->foreign('notification_template_id', 'notifications_template_id_foreign')->references('id')->on('notification_templates')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('workflow_notifications');
    }
};
