<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CategoriaServicio;
use Illuminate\Http\Request;

class CategoriaServicioController extends Controller
{
    public function index()
    {
        $categorias = CategoriaServicio::all();
        return response()->json($categorias);
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'nombre_categoria' => 'required|string|max:50',
        ]);
        $categoria = new CategoriaServicio();
        $categoria ->nombre_categoria = $request ->nombre_categoria;
        $categoria -> save();
        return response()->json($categoria, 201);
    }

   
    public function show(string $id)
    {
        $categoria = CategoriaServicio::find($id);
        return response() ->json($categoria);
    }

    
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nombre_categoria' => 'required|string|max:50',
        ]);
        $categoria = CategoriaServicio::findOrFail($request ->id);
        $categoria ->nombre_categoria = $request ->nombre_categoria;
        $categoria -> save();
        return response()->json($categoria, 200);
    }

    
    public function destroy(string $id)
    {
        CategoriaServicio::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
