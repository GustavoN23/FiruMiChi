<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Compra;
use Illuminate\Http\Request;
class CompraController extends Controller
{
    
    public function index()
    {
        $compras = Compra::all();
        return response()->json($compras);
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'fecha_compra' => 'required',
            'metodo_pago' => 'required|string|max:20',
            'total_compra' => 'required|int',
            'cantidad_items' => 'required|int',
            'fk_id_usuario' => 'required|int',
            'fk_id_producto' => 'required|int'
        ]);
        $compra = new Compra();
        $compra ->fecha_compra = $request ->fecha_compra;
        $compra ->metodo_pago = $request ->metodo_pago;
        $compra ->total_compra = $request ->total_compra;
        $compra ->cantidad_items = $request ->cantidad_items;
        $compra ->fk_id_usuario= $request ->fk_id_usuario;
        $compra ->fk_id_producto = $request ->fk_id_producto;
        $compra -> save();
        return response()->json($compra, 201);
    }

   
    public function show(string $id)
    {
        $compra = Compra::find($id);
        return response() ->json($compra);
    }

    
    public function update(Request $request, string $id)
    {
        $request->validate([
            'fecha_compra' => 'required',
            'metodo_pago' => 'required|string|max:20',
            'total_compra' => 'required|int',
            'cantidad_items' => 'required|int',
            'fk_id_usuario' => 'required|int',
            'fk_id_producto' => 'required|int'
        ]);
        $compra = Compra::findOrFail($request ->id);
        $compra ->fecha_compra = $request ->fecha_compra;
        $compra ->metodo_pago = $request ->metodo_pago;
        $compra ->total_compra = $request ->total_compra;
        $compra ->cantidad_items = $request ->cantidad_items;
        $compra ->fk_id_usuario= $request ->fk_id_usuario;
        $compra ->fk_id_producto = $request ->fk_id_producto;
        $compra -> save();
        return response()->json($compra, 201);
    }

    
    public function destroy(string $id)
    {
        Compra::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
