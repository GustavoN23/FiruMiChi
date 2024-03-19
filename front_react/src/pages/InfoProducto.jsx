import React from 'react'


import equilibrio from '../img/Concentrados/equilibrio_todas_las_razas_adulto.png'

import '../css/infoProducto.css'

const InfoProducto = () => {
    return (
            <div>
                <div className='infoProducto'>
                    <div className='contenedorPrincipalInfoProducto'>
                        <div className='informacionProducto'>
                            <div className='imagenProducto'>
                                <img src={equilibrio} alt="Concentrado" />
                            </div>
                            <div className='caracteristicasProducto'>
                                <h5>NOMBRE</h5>
                                <h5>MARCA</h5>
                                <h5>PRECIO</h5>
                                <h5>DISPONIBILIDAD</h5>
                                <h5>PRESENTACIONES</h5>
                                <div className='presentaciones'>
                                    <article className='presentacionInfoProducto'>
                                        4KG
                                    </article>
                                    <article className='presentacionInfoProducto'>
                                        8KG
                                    </article>
                                    <article className='presentacionInfoProducto'>
                                        12KG
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className='descripcionProducto'>
                            <h3>DESCRIPCION</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam consectetur dolorem esse commodi vel, dolore error id laboriosam voluptatem dicta nostrum vitae sapiente atque, debitis ipsum, nihil hic. Velit.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ratione fugiat cum cumque nihil delectus facere est qui laboriosam natus voluptatum, at itaque quaerat rem corrupti magni nostrum consectetur beatae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non veniam sit officia repudiandae quos aut labore quae consectetur provident magni tempore ad, perspiciatis incidunt odit. Consectetur in quis et?
                            </p>
                        </div>
                        <div className='productosRelacionados'>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default InfoProducto
