<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Raza;
use Illuminate\Http\Request;

class RazaController extends Controller
{
    public function index()
    {
        $razas = Raza::all();
        return response()->json($razas);
    }
    public function store(Request $request)
    {
        $request->validate([
            'raza' => 'required|string|max:50|unique:razas_tb',
            'especie' => 'required|string|max:20',
        ]);
        $raza = new Raza();
        $raza ->raza = $request ->raza;
        $raza ->especie = $request ->especie;
        $raza -> save();
        return response()->json($raza, 201);
    }
    public function show($id)
    {
        $raza = Raza::find($id);
        return response() ->json($raza);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'raza' => 'required|string|max:50|unique:razas_tb',
            'especie' => 'required|string|max:20',
        ]);
        $raza = Raza::findOrFail($request ->id);
        $raza ->raza = $request -> raza;
        $raza ->especie = $request ->especie;
        $raza -> save();
        return response()->json($raza, 200);
    }
    public function destroy($id)
    {
        Raza::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
