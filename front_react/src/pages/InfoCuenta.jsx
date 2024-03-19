import React from 'react'

import '../css/infoCuenta.css'
import user from '../img/user.png'
const InfoCuenta = () => {
  return (
    <div className='infoCuenta'>
        <div className='contenedorPrincipalInfoCuenta'>
            <h1>PROPIETARIO</h1>
            <div className='propietarioInfoCuenta'>
                <div className='fotoPropietarioInfoCuenta'>
                    <img src={user} alt="" />
                </div>
                <div className='infoPropietarioInfoCuenta'>
                    <form action="" className='formularioPropietario'>
                        <div>
                            <label htmlFor="" >Nombre y Apellido</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div>
                            <label htmlFor="" >Contraseña</label>
                            <input type="password" class="form-control" />
                        </div>
                        <div>
                            <label htmlFor="" >Teléfono</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div>
                            <label htmlFor="" >Correo</label>
                            <input type="text" class="form-control" />
                        </div>
                    </form>
                </div>
            </div>
            <h1>MASCOTA</h1>
            <div className='mascotaInfoCuenta'>
                <div className='fotoMascotaInfoCuenta'>
                    <img src={user} alt="" />
                </div>
                <div className='infoMascotaInfoCuenta'>
                    <form action="" className='formularioMascotaInfoCuenta'>
                        <div>
                            <label htmlFor="" >Nombre</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div>
                            <label htmlFor="" >Tipo Mascota</label>
                            <select name="" id="">
                                <option selected>Por favor seleccione</option>
                                <option value="">Perro</option>
                                <option value="">Gato</option>
                                <option value="">Ave</option>
                                <option value="">Pez</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" >Raza</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div>
                            <label htmlFor="" >Edad</label>
                            <input type="text" class="form-control" />
                        </div>
                    </form>
                </div>
            </div>
            <button className='guardar' type='submit'>Guardar</button>
        </div>
    </div>
  )
}
export default InfoCuenta