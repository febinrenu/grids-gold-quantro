<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class KycVerification extends Model
{
    use SoftDeletes;

    protected $table = 'kyc_verifications';

    protected $fillable = [
        'client_id', 'verification_type', 'document_type', 'document_number',
        'id_expiry_date', 'verified_by', 'verified_at', 'status', 'risk_level',
        'attachment_path', 'notes',
    ];

    protected $casts = [
        'id_expiry_date' => 'date',
        'verified_at' => 'datetime',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
