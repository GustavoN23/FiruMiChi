<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    use HasFactory;
    protected $table = 'servicios_tb';
    protected $primaryKey = 'id_servicios';
    public $timestamps = false;
    protected $fillable = [
        'nombre',
        'telefono',
        'direccion',
        'fk_id_categoria'
    ];
    public function categoria()
    {
        return $this->belongsTo(CategoriaServicio::class, 'fk_id_categoria');
    }
}
