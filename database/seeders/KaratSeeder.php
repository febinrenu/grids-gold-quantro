<?php
// Task 1.6 — purity percentages are standard fineness-to-karat conversions
// (24K=99.9%, 22K=91.6%, 21K=87.5%, 18K=75%, sterling silver 925=92.5%).
// Confirm against Grids Gold's real defaults during the Week 0 reference-
// dictionary freeze (implementation plan §11 flags this as an open item).

namespace Database\Seeders;

use App\Models\Karat;
use App\Models\MetalType;
use Illuminate\Database\Seeder;

class KaratSeeder extends Seeder
{
    public function run(): void
    {
        $karatsByMetal = [
            'GOLD' => [
                ['name' => '18K', 'purity_percentage' => 75.00],
                ['name' => '21K', 'purity_percentage' => 87.50],
                ['name' => '22K', 'purity_percentage' => 91.60],
                ['name' => '24K', 'purity_percentage' => 99.90],
            ],
            'SILVER' => [
                ['name' => '925', 'purity_percentage' => 92.50],
                ['name' => '900', 'purity_percentage' => 90.00],
                ['name' => '800', 'purity_percentage' => 80.00],
            ],
            'PLATINUM' => [
                ['name' => '950', 'purity_percentage' => 95.00],
            ],
        ];

        foreach ($karatsByMetal as $metalCode => $karats) {
            $metal = MetalType::where('code', $metalCode)->first();

            if (! $metal) {
                continue;
            }

            foreach ($karats as $karat) {
                Karat::firstOrCreate(
                    ['metal_type_id' => $metal->id, 'name' => $karat['name']],
                    array_merge($karat, ['metal_type_id' => $metal->id, 'is_active' => true])
                );
            }
        }
    }
}
