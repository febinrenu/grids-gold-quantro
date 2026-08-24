<?php

namespace App\Services\Jewelry;

use App\Models\Currency;
use App\Models\DiamondPriceRate;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;

/**
 * Mirrors GoldRateService's read/write shape for the diamond_price_rates
 * matrix (see DiamondPriceService for the live-feed side).
 */
class DiamondRateService
{
    public function getCurrentPrice(string $shape, string $colorGrade, string $clarityGrade, float $carat): ?DiamondPriceRate
    {
        $now = Carbon::now();

        return DiamondPriceRate::where('status', 'active')
            ->where('shape', $shape)
            ->where('color_grade', $colorGrade)
            ->where('clarity_grade', $clarityGrade)
            ->where('carat_min', '<=', $carat)
            ->where('carat_max', '>=', $carat)
            ->where('effective_at', '<=', $now)
            ->where(function ($query) use ($now) {
                $query->whereNull('expires_at')->orWhere('expires_at', '>', $now);
            })
            ->orderBy('effective_at', 'desc')
            ->orderBy('id', 'desc')
            ->first();
    }

    /**
     * Store a live price matrix fetched from the tenant's configured feed.
     *
     * @return DiamondPriceRate[]
     */
    public function syncFromApi(string $shape, DiamondPriceService $priceService): array
    {
        $matrix = $priceService->getPriceMatrix($shape);
        $usdCurrency = Currency::firstOrCreate(['code' => 'USD'], ['name' => 'US Dollar', 'symbol' => '$']);

        $created = [];
        foreach ($matrix as $row) {
            $created[] = DiamondPriceRate::create([
                'shape' => $shape,
                'color_grade' => $row['color_grade'],
                'clarity_grade' => $row['clarity_grade'],
                'carat_min' => $row['carat_min'],
                'carat_max' => $row['carat_max'],
                'price_per_carat' => $row['price_per_carat'],
                'currency_id' => $usdCurrency->id,
                'rate_source' => 'api',
                'effective_at' => Carbon::now(),
                'status' => 'active',
            ]);
        }

        return $created;
    }

    public function setRate(string $shape, string $colorGrade, string $clarityGrade, float $caratMin, float $caratMax, float $pricePerCarat, int $currencyId, int $userId): DiamondPriceRate
    {
        return DiamondPriceRate::create([
            'shape' => $shape,
            'color_grade' => $colorGrade,
            'clarity_grade' => $clarityGrade,
            'carat_min' => $caratMin,
            'carat_max' => $caratMax,
            'price_per_carat' => $pricePerCarat,
            'currency_id' => $currencyId,
            'rate_source' => 'manual',
            'effective_at' => Carbon::now(),
            'status' => 'active',
            'created_by' => $userId,
        ]);
    }

    public function history(?string $shape = null): Collection
    {
        return DiamondPriceRate::query()
            ->when($shape, fn ($q) => $q->where('shape', $shape))
            ->orderBy('effective_at', 'desc')
            ->orderBy('id', 'desc')
            ->get();
    }
}
