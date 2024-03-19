<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuarios_tb';
    protected $primaryKey = 'id_usuario';
    public $timestamps = false;
    protected $fillable = [
        'nombre_usuario',
        'apellido_usuario',
        'password_usuario',
        'correo',
        'telefono',
        'rol',
        'fk_id_mascota'
    ];
    public function mascota()
    {
        return $this->belongsTo(Mascota::class, 'fk_id_mascota');
    }
    public function compra()
    {
        return $this->hasMany(Compra::class, 'fk_id_usuario');
    }

}
