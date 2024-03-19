<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Mascota;
use Illuminate\Http\Request;

class MascotaController extends Controller
{
    public function index()
    {
        $mascotas = Mascota ::all();
        return response()->json($mascotas);
    }
    public function store(Request $request)
    {
        $request->validate([
            'nombre_mascota' => 'required|string|max:30',
            'edad' => 'required|int',
            'peso' => 'required|string|max:30',
        ]);
        $mascota = new Mascota();
        $mascota ->nombre_mascota = $request ->nombre_mascota;
        $mascota ->edad = $request ->edad;
        $mascota ->peso = $request ->peso;
        $mascota ->fk_id_raza = $request ->fk_id_raza;
        $mascota -> save();
        return response()->json($mascota, 201);
    }
    public function show(string $id)
    {
        $mascota = Mascota::find($id);
        return response() ->json($mascota);
    }
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nombre_mascota' => 'required|string|max:30',
            'edad' => 'required|int',
            'peso' => 'required|string|max:30',
        ]);
        $mascota = Mascota::findOrFail($request ->id);
        $mascota ->nombre_mascota = $request ->nombre_mascota;
        $mascota ->edad = $request ->edad;
        $mascota ->peso = $request ->peso;
        $mascota ->fk_id_raza = $request ->fk_id_raza;
        $mascota -> save();
        return response()->json($mascota, 200);
    }
    public function destroy(string $id)
    {
        Mascota::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
