<?php
// SRS Table 152.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('approval_workflows')) {
            return;
        }

        Schema::create('approval_workflows', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('workflow_name', 150);
            $table->string('module', 40);
            $table->string('trigger_condition', 255);
            $table->integer('approval_levels')->default(1);
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('approval_workflows');
    }
};
