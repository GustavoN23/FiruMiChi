<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Raza extends Model
{
    use HasFactory;
    protected $table = 'razas_tb';
    protected $primaryKey = 'id_raza';
    public $timestamps = false;
    protected $fillable = [
        'raza',
        'especie'
    ];
    public function mascotas()
    {
        return $this->hasMany(Mascota::class, 'fk_id_raza');
    }
}
