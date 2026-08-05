<?php
// SRS Table 61.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('rfid_inventory_sessions')) {
            return;
        }

        Schema::create('rfid_inventory_sessions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('session_number', 40);
            $table->unsignedInteger('warehouse_id');
            $table->string('reader_id', 60)->nullable();
            $table->dateTime('started_at');
            $table->dateTime('ended_at')->nullable();
            $table->integer('total_tags_found')->default(0);
            $table->integer('missing_tags')->default(0);
            $table->integer('unexpected_tags')->default(0);
            $table->timestamps(6);

            $table->unique('session_number', 'rfid_inventory_sessions_number_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rfid_inventory_sessions');
    }
};
