<?php
// SRS Table 168. `error_logs` already exists (2026_03_24_203803: id, context,
// message, details, occurred_at). `details` (longtext) already serves the
// SRS `stack_trace` field's purpose and `occurred_at` already serves
// `created_at`'s, so only the genuinely new columns are added here.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('error_logs', 'exception_class')) {
            return;
        }

        Schema::table('error_logs', function (Blueprint $table) {
            $table->string('exception_class', 191)->nullable();
            $table->string('url', 255)->nullable();
            $table->unsignedInteger('user_id')->nullable();
            $table->string('module', 60)->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('error_logs', function (Blueprint $table) {
            $table->dropColumn(['exception_class', 'url', 'user_id', 'module']);
        });
    }
};
