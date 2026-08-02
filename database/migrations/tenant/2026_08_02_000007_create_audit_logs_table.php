<?php
// General audit trail for "price changes, rate changes, adjustments, voids,
// and overrides are auditable" (customization brief §2). Gold-rate history
// and jewelry price overrides already had dedicated trails; this covers the
// rest (product price/cost edits, adjustments) with one simple, append-only
// log rather than a bespoke history table per feature.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuditLogsTable extends Migration
{
    public function up()
    {
        Schema::create('audit_logs', function (Blueprint $table) {
            $table->id();
            $table->string('auditable_type', 60);
            $table->unsignedInteger('auditable_id');
            // e.g. price_change, rate_created, adjustment, override, void
            $table->string('action', 40);
            $table->json('old_values')->nullable();
            $table->json('new_values')->nullable();
            $table->unsignedInteger('user_id')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index(['auditable_type', 'auditable_id'], 'audit_logs_auditable_idx');
        });
    }

    public function down()
    {
        Schema::dropIfExists('audit_logs');
    }
}
