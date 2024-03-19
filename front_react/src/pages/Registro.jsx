import React from 'react'
import gato from '../img/gaticoDerecha.png'
import perro from '../img/perritoizquierda-01.png'


const Registro = () => {
    return (
        <div>
            <div className='contenedorPrincipalRegistro'>
                <h1 className='tituloRegistro'>Registro</h1>
                <form className='formularioRegistro'>
                    <div className='contenedorFormularioRegistro'>
                        <div className='formularioRegistroCampos'>
                            <h1 className='tituloFormulario'>Mascota</h1>
                            <div className='contenedorImagenFormulario'>
                                <img className='imagenFormulario' src={gato}></img>
                                <img className='imagenFormulario' src={perro}></img>
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa nombre mascota</label>
                                <input type='text' />
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa edad</label>
                                <input type='number' />
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa peso mascota</label>
                                <input type='text' />
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa Raza</label>
                                <input type='number' />
                            </div>
                        </div>
                        <div className='formularioRegistroCampos'>
                            <h1 className='tituloFormulario'>Usuario</h1>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa tu nombre</label>
                                <input type='text' required/>
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa tu apellido</label>
                                <input type='text' required/>
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa una contraseña</label>
                                <input type='text' />
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa tu correo</label>
                                <input type='mail' />
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa tu teléfono</label>
                                <input type='number' />
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Ingresa tu Rol</label>
                                <input type='number' />
                            </div>
                            <div className='contenedorCampo' >
                                <label className=''>Nombre de tu mascota</label>
                                <input type='number' />
                            </div>
                        </div>

                    </div>
                    <div className='contenedorBoton'>
                        <button className='btnGuardar' type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registro