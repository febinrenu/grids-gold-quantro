<?php

namespace App\Services\Jewelry\DiamondPriceProviders;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * No free public Rapaport-equivalent feed exists, so this is a "bring your
 * own subscription" adapter: it calls a tenant-configured URL (their own
 * Rapaport/IDEX/RapNet-compatible feed) and expects a JSON price matrix,
 * exactly like a tenant plugging their own goldapi.io key into
 * MetalPriceService. Expected response shape:
 * [{"color_grade":"G","clarity_grade":"VS1","carat_min":0.5,"carat_max":0.99,"price_per_carat":4200}, ...]
 */
class HttpFeedDiamondProvider implements DiamondPriceProviderInterface
{
    public function __construct(protected string $feedUrl, protected ?string $apiKey = null)
    {
    }

    public function getPriceMatrix(string $shape): array
    {
        if (empty($this->feedUrl)) {
            throw new \RuntimeException(
                'No diamond price feed URL configured. Set one in Settings → Jewelry → Diamond Pricing.'
            );
        }

        try {
            $request = Http::timeout(10);
            if ($this->apiKey) {
                $request = $request->withHeaders(['Authorization' => 'Bearer ' . $this->apiKey]);
            }

            $response = $request->get($this->feedUrl, ['shape' => $shape]);

            if ($response->successful()) {
                $rows = $response->json();
                if (is_array($rows)) {
                    return array_values(array_filter($rows, fn ($row) => is_array($row)
                        && isset($row['color_grade'], $row['clarity_grade'], $row['carat_min'], $row['carat_max'], $row['price_per_carat'])
                    ));
                }
            }

            Log::warning('Diamond price feed returned an unusable response', [
                'shape' => $shape,
                'status' => $response->status(),
            ]);
        } catch (\Throwable $e) {
            Log::warning("Diamond price feed request failed for {$shape}: {$e->getMessage()}");
        }

        throw new \RuntimeException("Unable to fetch a diamond price matrix for shape '{$shape}'.");
    }
}
