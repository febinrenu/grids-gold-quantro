<?php
// ST-4/PI-4 gap: diamond pricing is a per-carat matrix keyed by shape/color/
// clarity/carat-band (Rapaport-style), unlike gold's single per-gram rate —
// hence its own table rather than reusing gold_rates.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('diamond_price_rates')) {
            return;
        }

        Schema::create('diamond_price_rates', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('shape', 20); // round, princess, cushion, oval, emerald, pear, ...
            $table->string('color_grade', 5); // D-M
            $table->string('clarity_grade', 10); // FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1, I2, I3
            $table->decimal('carat_min', 6, 2);
            $table->decimal('carat_max', 6, 2);
            $table->decimal('price_per_carat', 12, 2);
            $table->unsignedInteger('currency_id')->nullable();
            $table->string('rate_source', 20)->default('manual'); // manual, api
            $table->dateTime('effective_at');
            $table->dateTime('expires_at')->nullable();
            $table->string('status', 20)->default('active');
            $table->unsignedInteger('created_by')->nullable();
            $table->timestamps(6);

            $table->index(['shape', 'color_grade', 'clarity_grade'], 'diamond_price_rates_lookup_idx');
            $table->index('status', 'diamond_price_rates_status_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('diamond_price_rates');
    }
};
