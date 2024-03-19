<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;
class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario ::all();
        return response()->json($usuarios);
    }
    public function store(Request $request)
    {
        $request->validate([
            'nombre_usuario' => 'required|string|max:50',
            'apellido_usuario' => 'required|string|max:50',
            'password_usuario' => 'required',
            'correo' => 'required|string|max:50',
            'telefono' => 'required|string|max:20',
            'rol' => 'required|int',
            'fk_id_mascota' => 'required|int',
        ]);
        $usuario = new Usuario();
        $usuario ->nombre_usuario = $request ->nombre_usuario;
        $usuario ->apellido_usuario = $request ->apellido_usuario;
        $usuario ->password_usuario = $request ->password_usuario;
        $usuario ->correo = $request ->correo;
        $usuario ->telefono = $request ->telefono;
        $usuario ->rol = $request ->rol;
        $usuario ->fk_id_mascota = $request ->fk_id_mascota;
        $usuario -> save();
        return response()->json($usuario, 201);
    }
    public function show(string $id)
    {
        $usuario = Usuario::find($id);
        return response() ->json($usuario);
    }
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nombre_usuario' => 'required|string|max:50',
            'apellido_usuario' => 'required|string|max:50',
            'password_usuario' => 'required',
            'correo' => 'required|string|max:50',
            'telefono' => 'required|string|max:20',
            'rol' => 'required|int',
            'fk_id_mascota' => 'required|int',
        ]);
        $usuario = Usuario::findOrFail($request ->id);
        $usuario ->nombre_usuario = $request ->nombre_usuario;
        $usuario ->apellido_usuario = $request ->apellido_usuario;
        $usuario ->password_usuario = $request ->password_usuario;
        $usuario ->correo = $request ->correo;
        $usuario ->telefono = $request ->telefono;
        $usuario ->rol = $request ->rol;
        $usuario ->fk_id_mascota = $request ->fk_id_mascota;

        $usuario -> save();
        return response()->json($usuario, 200);
    }
    public function destroy(string $id)
    {
        Usuario::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
