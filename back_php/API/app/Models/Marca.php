<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;
    protected $table = 'marca_tb';
    protected $primaryKey = 'id_marca';
    public $timestamps = false;
    protected $fillable = [
        'nombre_marca'
    ];
    public function producto()
    {
        return $this->hasMany(Producto::class, 'fk_nombre_marca');
    }
}
