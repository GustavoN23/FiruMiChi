<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CategoriaProducto;
use Illuminate\Http\Request;
class CategoriaProductoController extends Controller
{
    public function index()
    {
        $categorias = CategoriaProducto ::all();
        return response()->json($categorias);
    }
    public function store(Request $request)
    {
        $request->validate([
            'categoriaProducto' => 'required|string|max:20',
        ]);
        $categoria = new CategoriaProducto();
        $categoria ->categoriaProducto = $request ->categoriaProducto;
        $categoria -> save();
        return response()->json($categoria, 201);
    }
    public function show(string $id)
    {
        $categoria = CategoriaProducto::find($id);
        return response() ->json($categoria);
    }
    public function update(Request $request, string $id)
    {
        $request->validate([
            'categoriaProducto' => 'required|string|max:20',
        ]);
        $categoria = CategoriaProducto::findOrFail($request ->id);
        $categoria ->categoriaProducto = $request ->categoriaProducto;
        $categoria -> save();
        return response()->json($categoria, 200);
    }
    public function destroy(string $id)
    {
        CategoriaProducto::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
