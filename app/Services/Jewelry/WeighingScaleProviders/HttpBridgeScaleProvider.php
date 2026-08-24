<?php

namespace App\Services\Jewelry\WeighingScaleProviders;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * Reads from a local bridge agent (e.g. a small process running on the POS
 * counter PC that owns the serial/USB connection to the physical scale and
 * exposes it over HTTP on the local network). This is the same integration
 * shape used by card-present payment terminals — a web server cannot open a
 * serial port on a client machine directly, so a local bridge is the
 * realistic architecture rather than a fictitious direct-serial driver.
 *
 * Expected bridge response: {"weight_grams": 12.345}
 */
class HttpBridgeScaleProvider implements WeighingScaleProviderInterface
{
    public function __construct(protected string $bridgeUrl, protected ?string $apiKey = null)
    {
    }

    public function readWeightGrams(): float
    {
        if (empty($this->bridgeUrl)) {
            throw new \RuntimeException(
                'No scale bridge URL configured. Set one in Settings → Jewelry → Weighing Scale.'
            );
        }

        try {
            $request = Http::timeout(5);
            if ($this->apiKey) {
                $request = $request->withHeaders(['x-api-key' => $this->apiKey]);
            }

            $response = $request->get(rtrim($this->bridgeUrl, '/') . '/weight');

            if ($response->successful()) {
                $weight = $response->json('weight_grams');
                if (is_numeric($weight) && $weight >= 0) {
                    return (float) $weight;
                }
            }

            Log::warning('Scale bridge returned an unusable response', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);
        } catch (\Throwable $e) {
            Log::warning("Scale bridge request failed: {$e->getMessage()}");
        }

        throw new \RuntimeException('Unable to read a weight from the configured scale bridge.');
    }
}
