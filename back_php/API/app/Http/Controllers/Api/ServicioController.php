<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Servicio;
use Illuminate\Http\Request;

class ServicioController extends Controller
{
    
    public function index()
    {
        $servicios = Servicio ::all();
        return response()->json($servicios);
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:50',
            'telefono' => 'required|string|max:20',
            'direccion' => 'required|string|max:50',
            'fk_id_categoria' => 'required|int'
        ]);
        $servicio = new Servicio();
        $servicio ->nombre = $request ->nombre;
        $servicio ->telefono = $request ->telefono;
        $servicio ->direccion = $request ->direccion;
        $servicio ->fk_id_categoria = $request ->fk_id_categoria;
        $servicio -> save();
        return response()->json($servicio, 201);
    }

    
    public function show(string $id)
    {
        $servicio = Servicio::find($id);
        return response() ->json($servicio);
    }

    
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:50',
            'telefono' => 'required|string|max:20',
            'direccion' => 'required|string|max:50',
            'fk_id_categoria' => 'required|int'
        ]);
        $servicio = Servicio::findOrFail($request ->id);
        $servicio ->nombre = $request ->nombre;
        $servicio ->telefono = $request ->telefono;
        $servicio ->direccion = $request ->direccion;
        $servicio ->fk_id_categoria = $request ->fk_id_categoria;
        $servicio -> save();
        return response()->json($servicio, 201);
    }

    
    public function destroy(string $id)
    {
       Servicio::findOrFail($id)->delete();
       return response()->json(null,204);
    }
}
