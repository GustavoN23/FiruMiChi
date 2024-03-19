import React from 'react'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../css/cuidados.css'
import Slider from 'react-slick';

import bannerAmigos from '../img/amigos_lineal-01.jpg'
import paseadores from '../img/paseadores.png'
import peluqueria from '../img/peluqueriaCaninaGatuna.png'

const carruselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

const Cuidados = () => {
  return (
    <div>
      <div className='cuidados'>
        <h1>CUIDADOS</h1>
        <div className='contenedorPrincipalCuidados'>
          <Slider className='carrusel' {...carruselSettings}>
            <div className='slide'>
              <img src={bannerAmigos} alt="" />
            </div>
            <div className='slide'>
              <img src={bannerAmigos} alt="" />
            </div>
          </Slider>
        </div>
        <div>
          <Slider>
            
          </Slider>
        </div>
        <div className='tarjetasCuidados'>
            <div className='peluqueria'>
              <div className='imagenPeluqueria'>
                <img src={peluqueria} alt="Peluquería" />
              </div>
              <h5>Peluquería</h5>
              <div className='botonesPeluqueria'>
                <button className='peluqueriaGato'>Gato</button>
                <button className='peluqueriaPerro'>Perro</button>
              </div>
            </div>
            <div className='paseadores'>
              <div className='imagenPaseadores'>
                <img src={paseadores} alt="Paseadores" />
              </div>
              <h5>Paseadores</h5>
              <div className='botonesPaseadores'>
                <button className='paseadoresGato'>Gato</button>
                <button className='paseadoresPerro'>Perro</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cuidados