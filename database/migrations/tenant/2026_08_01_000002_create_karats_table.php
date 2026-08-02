<?php
// Task 1.2 — same style as metal_types (§1.1).
// NOTE: this codebase does not use ->foreign()/->references() anywhere in
// database/migrations/tenant/ (checked: zero hits across 299 migration
// files) — every "FK" is an application-level Eloquent relationship only,
// enforced in code, not at the DB level. Match that: no hard constraint here.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('karats')) {
            return;
        }

        Schema::create('karats', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->integer('id', true);
            $table->unsignedInteger('metal_type_id');
            $table->string('name', 20); // e.g. "22K"
            $table->decimal('purity_percentage', 5, 2);
            $table->decimal('fineness', 6, 3)->nullable();
            $table->decimal('tolerance', 5, 2)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps(6);
            $table->softDeletes();

            $table->index('metal_type_id', 'karats_metal_type_id_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('karats');
    }
};
