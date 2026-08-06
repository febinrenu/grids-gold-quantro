<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Comment;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `comments` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CommentController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Comment::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Comment::query();

        $total = $query->count();
        if ($perPage === -1) {
            $perPage = max($total, 1);
        }
        $page = (int) $request->input('page', 1);
        $items = $query->orderByDesc('id')
            ->offset(max($page - 1, 0) * $perPage)
            ->limit($perPage)
            ->get();

        return response()->json([
            'data' => $items,
            'totalRows' => $total,
        ]);
    }

    public function store(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'create', Comment::class);
        $item = Comment::create($request->only((new Comment)->getFillable()));

        return $this->sendResponse($item, 'Comment created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Comment::class);
        $item = Comment::findOrFail($id);

        return $this->sendResponse($item, 'Comment retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Comment::class);
        $item = Comment::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Comment updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Comment::class);
        $item = Comment::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Comment deleted successfully.');
    }
}
