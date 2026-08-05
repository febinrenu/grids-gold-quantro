<?php
// SRS Table 159.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('integration_endpoints')) {
            return;
        }

        Schema::create('integration_endpoints', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('name', 100);
            $table->string('base_url', 255)->nullable();
            $table->string('authentication_type', 30)->nullable();
            $table->integer('timeout_seconds')->default(30);
            $table->integer('retry_count')->default(3);
            $table->string('status', 20)->default('active');
            $table->timestamps(6);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('integration_endpoints');
    }
};
