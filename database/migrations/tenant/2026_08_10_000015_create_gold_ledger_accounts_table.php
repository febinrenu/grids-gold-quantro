<?php
// SRS Table 141.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_ledger_accounts')) {
            return;
        }

        Schema::create('gold_ledger_accounts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('name', 100);
            $table->string('account_type', 20);
            $table->string('owner_type', 30)->nullable();
            $table->unsignedBigInteger('owner_id')->nullable();
            $table->boolean('is_active')->default(1);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_ledger_accounts');
    }
};
