<?php
// SRS Table 41. Governance lookup for products.ownership_type (own, memo, consignment, customer_owned, supplier_consignment).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('ownership_types')) {
            return;
        }

        Schema::create('ownership_types', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('code', 30);
            $table->string('name', 100);
            $table->boolean('is_active')->default(1);

            $table->unique('code', 'ownership_types_code_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ownership_types');
    }
};
