import React from 'react'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/veterinaria.css'

import Slider from 'react-slick';

import gatico3 from '../img/gatico3.jpg'
import gatico1 from '../img/gatico1.jpg'
import gatico4 from '../img/gatico4.jpg'



const carruselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

};

const Veterinaria = () => {
    return (
        <div>
            <div className='contendorPrincipalVeterinaria'>
                <h1>veterinarias</h1>
                <div className='contenedorCarruselVeterinaria'>
                    <Slider className='carruselVeterinaria' {...carruselSettings}>
                        <div className='slideVeteri'>
                            <img src={gatico1} alt="" />
                        </div>
                        <div className='slideVeteri'>
                            <img src={gatico1} alt="" />
                        </div>
                        <div className='slideVeteri'>
                            <img src={gatico4} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className='contenedorVeteri1'>
                    <div className='contenedorVeteri'>
                        <div className='veteri1'>
                            <div className='imagenVeterinaria'>
                                <img src={gatico3} ></img>
                            </div>
                            <div className='informacionVeterinaria'>
                                <ul>
                                    <li>Nombre</li>
                                    <li>Direccion</li>
                                    <li>Telefono</li>
                                    <li>Calificacion</li>
                                </ul>
                            </div>
                            <div className='ubicacionVeterinaria'>
                                <img src={gatico3}></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contenedorVeteri2'>
                    <div className='veteri2'>
                        <div className='itemVeterinaria'>
                            <div className='contenedorImgVeteri'>
                                <img src={gatico4}></img>
                            </div>
                            <div className='contenedorListaVeterinaria'>
                                <ul>
                                    <li>Nombre</li>
                                    <li>Direcciob vxcnsfgnabngfgnn</li>
                                    <li>Telefono</li>
                                    <li>Calificacion</li>
                                </ul>
                            </div>
                        </div>
                        <div className='itemVeterinaria'>
                            <div className='contenedorImgVeteri'>
                                <img src={gatico4}></img>
                            </div>
                            <div className='contenedorListaVeterinaria'>
                                <ul>
                                    <li>Nombre</li>
                                    <li>Direcciob vxcnsfgnabngfgnn</li>
                                    <li>Telefono</li>
                                    <li>Calificacion</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Veterinaria