<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GiftVoucher extends Model
{
    protected $table = 'gift_vouchers';

    protected $fillable = [
        'voucher_number', 'issue_date', 'expiry_date', 'value', 'remaining_balance', 'status',
    ];

    protected $casts = [
        'value' => 'decimal:3',
        'remaining_balance' => 'decimal:3',
    ];
}
