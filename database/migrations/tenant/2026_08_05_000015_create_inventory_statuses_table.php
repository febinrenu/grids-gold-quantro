<?php
// SRS Table 42. Examples: available, reserved, sold, in_repair, in_manufacturing, on_display, in_transit, scrapped, melted, lost, returned. Governance lookup for product_serials.status.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inventory_statuses')) {
            return;
        }

        Schema::create('inventory_statuses', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('code', 30);
            $table->string('name', 100);
            $table->boolean('is_active')->default(1);

            $table->unique('code', 'inventory_statuses_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_statuses');
    }
};
