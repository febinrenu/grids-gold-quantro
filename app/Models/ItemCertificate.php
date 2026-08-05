<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemCertificate extends Model
{
    protected $table = 'item_certificates';

    protected $fillable = [
        'product_id', 'certificate_id', 'certificate_number', 'issue_date', 'expiry_date',
        'digital_copy', 'verification_url',
    ];

    public function certificate()
    {
        return $this->belongsTo(Certificate::class, 'certificate_id');
    }
}
