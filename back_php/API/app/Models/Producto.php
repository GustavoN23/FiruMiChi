<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $table = 'productos_tb';
    protected $primaryKey = 'id_productos';
    public $timestamps = false;
    protected $fillable = [
        'nombre_producto',
        'precio',
        'presentacion',
        'descripcion',
        'imagen',
        'stock',
        'fk_nombre_marca',
        'fk_categoria'
    ];
    public function marca()
    {
        return $this->belongsTo(Marca::class, 'fk_nombre_marca');
    }
    public function categoriaProducto()
    {
        return $this->belongsTo(CategoriaProducto::class, 'fk_categoria');
    }
    public function compra()
    {
        return $this->hasMany(Compra::class, 'fk_id_producto');
    }
}
