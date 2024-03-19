<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoriaProducto extends Model
{
    use HasFactory;
    protected $table = 'categoriaproductos_tb';
    protected $primaryKey = 'id_categoria';
    public $timestamps = false;
    protected $fillable = [
        'categoriaProducto',
    ];
    public function producto()
    {
        return $this->hasMany(Producto::class, 'fk_categoria');
    }
}
