<?php
// Task 1.5 — modeled on the real, most-recent comparable child table:
// database/migrations/tenant/2026_06_22_000001_create_product_serials_table.php
// (bigIncrements id, engine=InnoDB, unsignedInteger FK-style columns
// referencing products.id which is a plain `integer('id', true)`,
// named indexes, no ->foreign() constraint — matches the codebase-wide
// convention of zero hard FK constraints in tenant migrations).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('item_stones')) {
            return;
        }

        Schema::create('item_stones', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');

            $table->unsignedInteger('product_id');
            $table->unsignedInteger('stone_type_id');
            $table->string('stone_name', 191)->nullable();
            $table->integer('quantity')->default(1);
            $table->decimal('carat_value', 8, 3)->nullable();
            $table->string('color', 100)->nullable();
            $table->string('clarity', 100)->nullable();
            $table->string('cut', 100)->nullable();
            $table->string('shape', 100)->nullable();
            $table->string('certificate_number', 191)->nullable();
            $table->decimal('unit_cost_amount', 12, 2)->nullable();
            $table->decimal('total_cost_amount', 12, 2)->nullable();
            $table->text('notes')->nullable();
            $table->timestamps(6);

            $table->index('product_id', 'item_stones_product_idx');
            $table->index('stone_type_id', 'item_stones_stone_type_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_stones');
    }
};
