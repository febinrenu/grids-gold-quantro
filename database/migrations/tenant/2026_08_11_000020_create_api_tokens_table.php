<?php
// SRS Table 170. Supports future mobile apps, external system integrations, and BI tools.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('api_tokens')) {
            return;
        }

        Schema::create('api_tokens', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('token_name', 150);
            $table->unsignedInteger('owner_user_id')->nullable();
            $table->string('token_hash', 64);
            $table->json('abilities')->nullable()->comment('permission scopes');
            $table->dateTime('expires_at')->nullable();
            $table->dateTime('last_used_at')->nullable();
            $table->timestamps(6);

            $table->unique('token_hash', 'api_tokens_hash_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('api_tokens');
    }
};
