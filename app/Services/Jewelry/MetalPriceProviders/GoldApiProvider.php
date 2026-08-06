<?php

namespace App\Services\Jewelry\MetalPriceProviders;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * goldapi.io — free tier: 100 requests/day. https://www.goldapi.io
 */
class GoldApiProvider implements MetalPriceProviderInterface
{
    protected const SYMBOL_MAP = [
        'GOLD'      => 'XAU',
        'SILVER'    => 'XAG',
        'PLATINUM'  => 'XPT',
        'PALLADIUM' => 'XPD',
    ];

    public function __construct(protected string $apiKey)
    {
    }

    public function getSpotPricePerOunceUsd(string $metalCode): float
    {
        $symbol = self::SYMBOL_MAP[strtoupper($metalCode)] ?? null;

        if ($symbol === null) {
            throw new \RuntimeException("goldapi.io has no symbol mapping for metal code '{$metalCode}'.");
        }

        if (empty($this->apiKey)) {
            throw new \RuntimeException(
                'No goldapi.io API key configured. Set one in Settings → Jewelry, or GOLDAPI_KEY in .env.'
            );
        }

        try {
            $response = Http::withHeaders([
                'x-access-token' => $this->apiKey,
                'Content-Type'   => 'application/json',
            ])->timeout(10)->get("https://www.goldapi.io/api/{$symbol}/USD");

            if ($response->successful()) {
                $price = $response->json('price');
                if ($price && $price > 0) {
                    return (float) $price;
                }
            }

            Log::warning("goldapi.io returned an unusable response for {$symbol}", [
                'status' => $response->status(),
                'body'   => $response->body(),
            ]);
        } catch (\Throwable $e) {
            Log::warning("goldapi.io request failed for {$symbol}: {$e->getMessage()}");
        }

        throw new \RuntimeException("Unable to fetch a live spot price for {$symbol} from goldapi.io.");
    }
}
