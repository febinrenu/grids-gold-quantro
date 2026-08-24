<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Create manufacturing_order_stages table
        Schema::create('manufacturing_order_stages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->string('stage_name', 100);
            $table->integer('sequence');
            $table->string('status', 20)->default('pending'); // pending, in_progress, completed, rejected
            $table->integer('assigned_employee_id')->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->foreign('manufacturing_order_id')->references('id')->on('manufacturing_orders')->onDelete('cascade');
            $table->foreign('assigned_employee_id')->references('id')->on('employees')->onDelete('set null');
        });

        // 2. Create manufacturing_time_logs table
        Schema::create('manufacturing_time_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->unsignedBigInteger('manufacturing_order_stage_id');
            $table->integer('employee_id');
            $table->timestamp('started_at');
            $table->timestamp('ended_at')->nullable();
            $table->integer('duration_seconds')->nullable();
            $table->decimal('labor_cost', 15, 2)->nullable();
            $table->timestamps();

            $table->foreign('manufacturing_order_id')->references('id')->on('manufacturing_orders')->onDelete('cascade');
            $table->foreign('manufacturing_order_stage_id')->references('id')->on('manufacturing_order_stages')->onDelete('cascade');
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('manufacturing_time_logs');
        Schema::dropIfExists('manufacturing_order_stages');
    }
};
