<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesApproval extends Model
{
    protected $table = 'sales_approvals';

    protected $fillable = [
        'sale_id', 'approval_type', 'approval_level', 'approver_id', 'decision', 'decided_at',
        'remarks',
    ];

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }
}
