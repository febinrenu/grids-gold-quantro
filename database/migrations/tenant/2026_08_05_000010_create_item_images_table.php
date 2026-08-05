<?php
// SRS Table 32.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('item_images')) {
            return;
        }

        Schema::create('item_images', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->string('image_type', 30)->default('front');
            $table->string('path', 255);
            $table->integer('display_order')->default(0);
            $table->timestamps(6);

            $table->index('product_id', 'item_images_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_images');
    }
};
