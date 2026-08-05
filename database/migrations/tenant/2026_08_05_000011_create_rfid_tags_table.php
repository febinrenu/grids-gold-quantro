<?php
// SRS Table 38. Business rule: only one active tag per item at a time (enforced at the application layer via status transitions, not a DB constraint, since replacement history must be kept).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('rfid_tags')) {
            return;
        }

        Schema::create('rfid_tags', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('epc_number', 64);
            $table->string('tag_number', 64);
            $table->unsignedInteger('product_id')->nullable();
            $table->unsignedBigInteger('product_serial_id')->nullable();
            $table->string('tag_type', 30)->nullable();
            $table->string('status', 20)->default('active');
            $table->date('activation_date')->nullable();
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('epc_number', 'rfid_tags_epc_number_unique');
            $table->index('product_id', 'rfid_tags_product_id_index');
            $table->index('status', 'rfid_tags_status_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rfid_tags');
    }
};
