import React from 'react'

import '../css/guarderias.css'
import guarderiaUnGatoenParis from '../img/unGatoenParis.png'
import guarderiaClubFamilyDogs from '../img/clubFamilyDogs.png'
const Guarderias = () => {

    const Guarderias = [
        {
            foto: guarderiaClubFamilyDogs,
            nombre: 'Club Family Dogs Campestre',
            direccion: 'Envigado Loma del Escobero 500m antes del peaje.',
            telefono: '3105223653 // 3172378286',
            mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9325677872066!2d-75.53141932635279!3d6.139761227506489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683375ea3171b%3A0x458a92129422f373!2sClub%20Family%20Dogs%20Envigado!5e0!3m2!1ses-419!2sco!4v1704667756113!5m2!1ses-419!2sco'
        },
        {
            foto: guarderiaClubFamilyDogs,
            nombre: 'Club Family Dogs Urbano',
            direccion: 'Carrera 71 #32B 126 Belén Rosales - Medellín',
            telefono: '3105223653 // 3172378286',
            mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.203468500628!2d-75.59458464992527!3d6.236890557841085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429bc9cbae1f5%3A0x7b62f6bd3e1f0b41!2sClub%20Happy%20Dogs!5e0!3m2!1ses-419!2sco!4v1704667955223!5m2!1ses-419!2sco'
        },
        {
            foto: guarderiaUnGatoenParis,
            nombre: 'Club Family Dogs Urbano',
            direccion: 'Av. 80 #28-132, Belen - Medellín',
            telefono: '304 4650515',
            mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63460.02901742557!2d-75.67416307832029!3d6.230496800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442994930034b7%3A0x5503551d07202e6a!2sUn%20Gato%20En%20Paris%2C%20Guarderia!5e0!3m2!1ses-419!2sco!4v1704724914316!5m2!1ses-419!2sco'
        },
    ]

  return (
    <div className='guarderias'>
        <div className='contenedorPrincipalGuarderias'>
            <h1>GUARDERÍAS</h1>
            <div className='tarjetasGuarderias' >
                {Guarderias.map((guarderia, index) =>
                (
                    <div className='tarjetaGuarderia' key={index}>
                        <div className='principalTarjetaGuarderia'>
                            <div className='fotoGuarderia'>
                                <img className='imagenGuarderia' src={guarderia.foto} alt="Foto Guardería" />
                            </div>
                            <div className='infoGuarderia'>
                                <h4>{guarderia.nombre}</h4>
                                <h4>{guarderia.direccion}</h4>
                                <h4>{guarderia.telefono}</h4>
                            </div>
                        </div>
                        <div className='mapaGuarderia'>
                            <iframe src={guarderia.mapa} style={{ border: '0' }} allowFullScreen="" width="500" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                )
                )}
            </div>
        </div>
    </div>
  )
}

export default Guarderias