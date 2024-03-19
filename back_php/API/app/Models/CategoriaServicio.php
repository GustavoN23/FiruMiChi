<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoriaServicio extends Model
{
    use HasFactory;
    protected $table = 'categoriaservicios_tb';
    protected $primaryKey = 'id_categoriaServicio';
    public $timestamps = false;
    protected $fillable = [
        'nombre_categoria'
    ];
    public function servicio()
    {
        return $this->hasOne(Servicio::class, 'fk_id_categoria');
    }
}
