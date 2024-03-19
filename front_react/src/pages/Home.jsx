import React from 'react'
document.head.innerHTML += `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet">
`;

import '../css/home.css'
import imglabrador from '../img/labrador.png'
import imggato from '../img/gato.png'
import imgamigos from '../img/amigos.jfif'
import imgguarderia from '../img/guarderia.jfif'
import imgcuidados from '../img/spapet.jfif'
import imgveterinaria from '../img/veterinario.jfif'
import { Link } from 'react-router-dom';


const Home = () => {

    const datos =[
      {nombre: 'PERROS', imagen: imglabrador, ruta:'/firu'},
      {nombre: 'GATOS', imagen: imggato, ruta:'/michi'},
      {nombre: 'OTROS', imagen: imgamigos, ruta:'/otros'},
      {nombre: 'GUARDERIAS', imagen: imgguarderia, ruta:'/guarderias'},
      {nombre: 'CUIDADOS', imagen: imgcuidados, ruta:'/cuidados'},
      {nombre: 'VETERINARIAS', imagen: imgveterinaria, ruta:'/veterinarias'}
    ];

    const clickplantilla = (nombre) =>{
      console.log(`dio clic en ${nombre}`)
    }

  return (
    <div className='main-containerHome'>
        <div className='contenedorPrincipalHome'>

            {datos.map((dato, index)=>(
              <Link className='solotexto' to= {dato.ruta} key={index}>
                <div 
                  className='plantillaHome' 
                  key={index}
                  onClick={()=>clickplantilla(dato.nombre)}
                  role="button"
                  tabIndex={0}
                  >
                    <img className='imgPlantillaHome' src={dato.imagen} alt={dato.nombre} />
                    <p className='parrafoPlantillaHome'>{dato.nombre}</p>
                </div>
              </Link>
            ))}  
        </div>

    </div>
  )
}

export default Home