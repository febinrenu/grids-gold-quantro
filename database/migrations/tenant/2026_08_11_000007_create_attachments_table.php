<?php
// SRS Table 157. Generic polymorphic file repository for non-jewelry-item entities (repairs, customers, purchases, ...); item_attachments (Part 3.3) covers products specifically.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('attachments')) {
            return;
        }

        Schema::create('attachments', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('attachable_type', 60);
            $table->unsignedBigInteger('attachable_id');
            $table->string('file_type', 20);
            $table->string('path', 255);
            $table->string('original_name', 255)->nullable();
            $table->unsignedInteger('uploaded_by')->nullable();
            $table->timestamps(6);

            $table->index(['attachable_type', 'attachable_id'], 'attachments_attachable_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('attachments');
    }
};
