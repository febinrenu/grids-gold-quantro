<?php
// SRS Table 154.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('approval_actions')) {
            return;
        }

        Schema::create('approval_actions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('approval_request_id');
            $table->integer('level')->default(1);
            $table->unsignedInteger('user_id')->nullable();
            $table->string('decision', 20);
            $table->string('remarks', 255)->nullable();
            $table->dateTime('decided_at');

            $table->index('approval_request_id', 'approval_actions_request_id_index');
            $table->foreign('approval_request_id', 'approval_actions_request_id_foreign')->references('id')->on('approval_requests')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('approval_actions');
    }
};
