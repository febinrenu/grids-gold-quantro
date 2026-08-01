<?php
// Task 1.6

namespace Database\Seeders;

use App\Models\StoneType;
use Illuminate\Database\Seeder;

class StoneTypeSeeder extends Seeder
{
    public function run(): void
    {
        $stones = ['Diamond', 'Ruby', 'Emerald', 'Sapphire', 'Pearl', 'Topaz', 'Opal'];

        foreach ($stones as $name) {
            StoneType::firstOrCreate(
                ['code' => strtoupper($name)],
                ['name' => $name, 'code' => strtoupper($name), 'is_active' => true]
            );
        }
    }
}
