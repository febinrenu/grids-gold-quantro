<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseApproval extends Model
{
    protected $table = 'purchase_approvals';

    protected $fillable = [
        'purchase_id', 'approval_level', 'approver_id', 'decision', 'decided_at', 'comments',
    ];

    public function purchase()
    {
        return $this->belongsTo(Purchase::class, 'purchase_id');
    }
}
