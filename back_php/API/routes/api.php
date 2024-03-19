<?php

use App\Http\Controllers\Api\CategoriaProductoController;
use App\Http\Controllers\Api\CategoriaServicioController;
use App\Http\Controllers\Api\CompraController;
use App\Http\Controllers\Api\MarcaController;
use App\Http\Controllers\Api\MascotaController;
use App\Http\Controllers\Api\ProductoController;
use App\Http\Controllers\Api\RazaController;
use App\Http\Controllers\Api\ServicioController;
use App\Http\Controllers\Api\UsuarioController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(RazaController::class)->group(function (){
    Route::get('/razas', 'index');
    Route::post('/raza', 'store');
    Route::get('/raza/{id}', 'show');
    Route::put('/raza/{id}', 'update');
    Route::delete('/raza/{id}', 'destroy');
});
Route::controller(MascotaController::class)->group(function (){
    Route::get('/mascotas', 'index');
    Route::post('/mascota', 'store');
    Route::get('/mascota/{id}', 'show');
    Route::put('/mascota/{id}', 'update');
    Route::delete('/mascota/{id}', 'destroy');
});
Route::controller(UsuarioController::class)->group(function (){
    Route::get('/usuarios', 'index');
    Route::post('/usuario', 'store');
    Route::get('/usuario/{id}', 'show');
    Route::put('/usuario/{id}', 'update');
    Route::delete('/usuario/{id}', 'destroy');
});
Route::controller(MarcaController::class)->group(function (){
    Route::get('/marcas', 'index');
    Route::post('/marca', 'store');
    Route::get('/marca/{id}', 'show');
    Route::put('/marca/{id}', 'update');
    Route::delete('/marca/{id}', 'destroy');
});
Route::controller(CompraController::class)->group(function (){
    Route::get('/compras', 'index');
    Route::post('/compra', 'store');
    Route::get('/compra/{id}', 'show');
    Route::put('/compra/{id}', 'update');
    Route::delete('/compra/{id}', 'destroy');
});
Route::controller(CategoriaProductoController::class)->group(function (){
    Route::get('/categorias', 'index');
    Route::post('/categoria', 'store');
    Route::get('/categoria/{id}', 'show');
    Route::put('/categoria/{id}', 'update');
    Route::delete('/categoria/{id}', 'destroy');
});
Route::controller(ProductoController::class)->group(function (){
    Route::get('/productos', 'index');
    Route::post('/producto', 'store');
    Route::get('/producto/{id}', 'show');
    Route::put('/producto/{id}', 'update');
    Route::delete('/producto/{id}', 'destroy');
});
Route::controller(ServicioController::class)->group(function (){
    Route::get('/servicios', 'index');
    Route::post('/servicio', 'store');
    Route::get('/servicio/{id}', 'show');
    Route::put('/servicio/{id}', 'update');
    Route::delete('/servicio/{id}', 'destroy');
});
Route::controller(CategoriaServicioController::class)->group(function (){
    Route::get('/categoriaSevicios', 'index');
    Route::post('/categoriaSevicio', 'store');
    Route::get('/categoriaSevicio/{id}', 'show');
    Route::put('/categoriaSevicio/{id}', 'update');
    Route::delete('/categoriaSevicio/{id}', 'destroy');
});