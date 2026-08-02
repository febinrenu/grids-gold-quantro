<?php
// Task 1.6

namespace Database\Seeders;

use App\Models\MetalType;
use Illuminate\Database\Seeder;

class MetalTypeSeeder extends Seeder
{
    public function run(): void
    {
        $metals = [
            ['name' => 'Gold', 'code' => 'GOLD', 'is_active' => true],
            ['name' => 'Silver', 'code' => 'SILVER', 'is_active' => true],
            ['name' => 'Platinum', 'code' => 'PLATINUM', 'is_active' => true],
        ];

        foreach ($metals as $metal) {
            MetalType::firstOrCreate(['code' => $metal['code']], $metal);
        }
    }
}
