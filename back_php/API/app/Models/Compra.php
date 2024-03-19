<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    use HasFactory;
    protected $table = 'compras_tb';
    protected $primaryKey = 'id_compra';
    public $timestamps = false;
    protected $fillable = [
        'fecha_compra',
        'metodo_pago',
        'total_compra',
        'cantidad_items',
        'fk_id_usuario',
        'fk_id_producto'
    ];
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'fk_id_usuario');
    }
    public function producto()
    {
        return $this->belongsTo(Producto::class, 'fk_id_producto');
    }
}
