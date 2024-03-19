<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    
    public function index()
    {
        $productos = Producto ::all();
        return response()->json($productos);
    }

 
    public function store(Request $request)
    {
        $request->validate([
            'nombre_producto' => 'required|string|max:50',
            'precio' => 'required|int',
            'presentacion' => 'required|string|max:50',
            'descripcion' => 'required',
            'imagen' => 'required',
            'stock' => 'required|int',
            'fk_nombre_marca' => 'required|int',
            'fk_categoria' => 'required|int'
        ]);
        $producto = new Producto();
        $producto ->nombre_producto = $request ->nombre_producto;
        $producto ->precio = $request ->precio;
        $producto ->presentacion = $request ->presentacion;
        $producto ->descripcion = $request ->descripcion;
        $producto ->imagen = $request ->imagen;
        $producto ->stock = $request ->stock;
        $producto ->fk_nombre_marca= $request ->fk_nombre_marca;
        $producto ->fk_categoria = $request ->fk_categoria;
        $producto -> save();
        return response()->json($producto, 201);
    }


    public function show(string $id)
    {
        $producto = Producto::find($id);
        return response() ->json($producto);
    }

    
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nombre_producto' => 'required|string|max:50',
            'precio' => 'required|int',
            'presentacion' => 'required|string|max:50',
            'descripcion' => 'required',
            'imagen' => 'required',
            'stock' => 'required|int',
            'fk_nombre_marca' => 'required|int',
            'fk_categoria' => 'required|int'
        ]);
        $producto = Producto::findOrFail($request ->id);
        $producto ->nombre_producto = $request ->nombre_producto;
        $producto ->precio = $request ->precio;
        $producto ->presentacion = $request ->presentacion;
        $producto ->descripcion = $request ->descripcion;
        $producto ->imagen = $request ->imagen;
        $producto ->stock = $request ->stock;
        $producto ->fk_nombre_marca= $request ->fk_nombre_marca;
        $producto ->fk_categoria = $request ->fk_categoria;
        $producto -> save();
        return response()->json($producto, 201);
    }

    
    public function destroy(string $id)
    {
        Producto::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
