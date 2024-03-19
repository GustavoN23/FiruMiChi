<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Mascota extends Model
{
    use HasFactory;
    protected $table = 'mascota_tb';
    protected $primaryKey = 'id_mascota';
    public $timestamps = false;
    protected $fillable = [
        'nombre_mascota',
        'edad',
        'peso',
        'fk_id_raza'
    ];
    public function raza()
    {
        return $this->belongsTo(Raza::class, 'fk_id_raza');
    }
    public function usuario()
    {
        return $this->hasMany(Usuario::class, 'fk_id_mascota');
    }

}
