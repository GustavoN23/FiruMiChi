<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Marca;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    public function index()
    {
        $marcas = Marca ::all();
        return response()->json($marcas);
    }
    public function store(Request $request)
    {
        $request->validate([
            'nombre_marca' => 'required|string|max:50',
        ]);
        $marca = new Marca();
        $marca ->nombre_marca = $request ->nombre_marca;
        $marca -> save();
        return response()->json($marca, 201);
    }
    public function show(string $id)
    {
        $marca = Marca::find($id);
        return response() ->json($marca);
    }
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nombre_marca' => 'required|string|max:50',
        ]);
        $marca = Marca::findOrFail($request ->id);
        $marca ->nombre_marca = $request -> nombre_marca;
        $marca -> save();
        return response()->json($marca, 200);
    }
    public function destroy(string $id)
    {
        Marca::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
