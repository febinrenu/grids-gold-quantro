<?php
// SRS Table 69.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('purchase_requests')) {
            return;
        }

        Schema::create('purchase_requests', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('request_number', 40);
            $table->unsignedInteger('warehouse_id');
            $table->unsignedInteger('requested_by')->nullable();
            $table->unsignedBigInteger('department_id')->nullable();
            $table->string('priority', 20)->default('normal');
            $table->string('status', 20)->default('draft');
            $table->date('expected_date')->nullable();
            $table->text('remarks')->nullable();
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('request_number', 'purchase_requests_number_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_requests');
    }
};
