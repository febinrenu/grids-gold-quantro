<?php
// SRS Table 156. Examples: sales invoice, OTP, repair ready, payment reminder, purchase approval.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('notification_templates')) {
            return;
        }

        Schema::create('notification_templates', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('code', 60);
            $table->string('name', 150);
            $table->string('channel', 20)->default('email');
            $table->string('subject', 255)->nullable();
            $table->text('body')->comment('supports {{placeholders}}');
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);

            $table->unique('code', 'notification_templates_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notification_templates');
    }
};
