<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\KycVerification;
use Illuminate\Http\Request;

class KycVerificationController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', KycVerification::class);
        $perPage = (int) $request->input('limit', 15);
        $query = KycVerification::query()->with('client');

        if ($request->filled('client_id')) {
            $query->where('client_id', $request->input('client_id'));
        }
        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        $total = $query->count();
        if ($perPage === -1) {
            $perPage = max($total, 1);
        }
        $page = (int) $request->input('page', 1);
        $items = $query->orderByDesc('id')
            ->offset(max($page - 1, 0) * $perPage)
            ->limit($perPage)
            ->get();

        return response()->json(['data' => $items, 'totalRows' => $total]);
    }

    public function store(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'create', KycVerification::class);
        $request->validate([
            'client_id' => 'required|integer|exists:clients,id',
        ]);

        $item = KycVerification::create($request->only((new KycVerification)->getFillable()));

        return $this->sendResponse($item, 'KYC verification recorded successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', KycVerification::class);
        $item = KycVerification::with('client')->findOrFail($id);

        return $this->sendResponse($item, 'KYC verification retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', KycVerification::class);
        $item = KycVerification::findOrFail($id);

        $data = $request->only($item->getFillable());
        if (($data['status'] ?? null) === 'verified' && empty($data['verified_at'])) {
            $data['verified_at'] = now();
            $data['verified_by'] = optional(request()->user('api'))->id;
        }

        $item->update($data);

        return $this->sendResponse($item, 'KYC verification updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', KycVerification::class);
        $item = KycVerification::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'KYC verification deleted successfully.');
    }
}
