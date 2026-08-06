<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class ProductDesign extends Model
{
    use SoftDeletes;

    protected $table = 'product_designs';

    protected $fillable = [
        'design_code', 'cad_reference', 'designer', 'design_version', 'release_date', 'status',
    ];
}
