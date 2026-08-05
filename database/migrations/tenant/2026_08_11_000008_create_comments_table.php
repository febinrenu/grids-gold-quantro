<?php
// SRS Table 158. Universal comment system.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('comments')) {
            return;
        }

        Schema::create('comments', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('commentable_type', 60);
            $table->unsignedBigInteger('commentable_id');
            $table->unsignedInteger('user_id')->nullable();
            $table->text('comment');
            $table->json('mentioned_user_ids')->nullable();
            $table->timestamps(6);

            $table->index(['commentable_type', 'commentable_id'], 'comments_commentable_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
