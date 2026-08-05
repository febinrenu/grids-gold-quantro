<?php
// SRS Table 167.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('dashboard_widgets')) {
            return;
        }

        Schema::create('dashboard_widgets', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('dashboard_id');
            $table->string('widget_type', 60);
            $table->integer('position')->default(0);
            $table->integer('refresh_interval_seconds')->default(300);
            $table->string('required_permission', 150)->nullable();

            $table->index('dashboard_id', 'dashboard_widgets_dashboard_id_index');
            $table->foreign('dashboard_id', 'dashboard_widgets_dashboard_id_foreign')->references('id')->on('dashboards')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dashboard_widgets');
    }
};
