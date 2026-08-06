<?php
// SRS Table 46.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('item_attachments')) {
            return;
        }

        Schema::create('item_attachments', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->string('file_type', 20);
            $table->string('path', 255);
            $table->string('original_name', 255)->nullable();
            $table->unsignedInteger('uploaded_by')->nullable();
            $table->timestamps(6);

            $table->index('product_id', 'item_attachments_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_attachments');
    }
};
