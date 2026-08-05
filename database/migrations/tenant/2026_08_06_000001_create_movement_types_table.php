<?php
// SRS Table 48. Purchase Receipt, Purchase Return, Sales Issue, Sales Return, Repair Out/In, Manufacturing Issue/Receipt, Branch/Warehouse Transfer, Adjustment, Gold Exchange, Scrap, Melting, Refining, Reservation, Reservation Release.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('movement_types')) {
            return;
        }

        Schema::create('movement_types', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('code', 40);
            $table->string('name', 100);
            $table->boolean('is_active')->default(1);

            $table->unique('code', 'movement_types_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('movement_types');
    }
};
