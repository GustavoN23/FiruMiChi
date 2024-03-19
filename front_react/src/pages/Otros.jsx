import React, {useState, useEffect} from 'react'

import '../css/otros.css'

import firu from '../img/letras_firu-01.png'
import bannerOtros from '../img/amigos_lineal-01.jpg'

import royalCaninMP from '../img/Concentrados/royal_canin_mini_puppy.png'
import royalCaninYA from '../img/Concentrados/royal_canin_yorkshire_adult.png'
import equilibrio from '../img/Concentrados/equilibrio_todas_las_razas_adulto.png'

import pedigreeHRP from '../img/Humedos/pedigree_humedos_razas_pequeñas.png'
import royalCaninLP from '../img/Humedos/royal_canin_lata_puppy.png'
import royalCaninMS from '../img/Humedos/royal_canin_miniStarter_Mother_Babydog.png'

import peluditosBarfGold from '../img/Natural/peluditos_barf_gold.png'
import peluditosNaturalBarf from '../img/Natural/peluditos_natural_barf.png'
import petBrunchPollo from '../img/Natural/pet_brunch_pollo.png'

const Otros = () => {
    const filtros = ['Alimentos', 'Snacks', 'Farmacia', 'Juguetes'];
    const options = [
        ['Concentrado', 'Húmedo', 'Natural'],
        ['Galletas y Pasteleria', 'Cuidado Dental', 'Masticables'],
        ['Antipulgas y Antigarrapatas', 'Desparasitantes', 'Suplementos y Vitaminas'],
        ['Mordedores y Cuerdas', 'Pelotas y Lanzadores', 'Peluches']
    ]
    const [productos, setProductos] = useState([]);

    const Todos = [
        {
            imagen: royalCaninMP,
            nombre: 'Royal Canin Mini Puppy',
            precio: 123456,
            presentaciones: ['4KG', '8KG', '12KG']
        },
        {
            imagen: royalCaninYA,
            nombre: 'Royal Canin YorkShire Adulto',
            precio: 123456,
            presentaciones: ['4KG', '8KG', '12KG']
        },
        {
            imagen: equilibrio,
            nombre: 'Equilibrio - Adultos',
            precio: 123456,
            presentaciones: ['4KG', '8KG', '12KG']
        },
        {
            imagen: pedigreeHRP,
            nombre: 'Pedigree Humedo Razas Pequeñas',
            precio: 123456,
            presentaciones: ['100 gr']
        },
        {
            imagen: royalCaninLP,
            nombre: 'Royal Canin Lata Puppy',
            precio: 123456,
            presentaciones: ['150 gr']
        },
        {
            imagen: royalCaninMS,
            nombre: 'Royal Canin MiniStarter',
            precio: 123456,
            presentaciones: ['145 gr']
        },
        {
            imagen: peluditosBarfGold,
            nombre: 'Peluditos Barf Gold',
            precio: 123456,
            presentaciones: ['500 gr']
        },
        {
            imagen: peluditosNaturalBarf,
            nombre: 'Peluditos Natural Barf',
            precio: 123456,
            presentaciones: ['250 gr']
        },
        {
            imagen: petBrunchPollo,
            nombre: 'Pet Brunch Pollo Zanahoria',
            precio: 123456,
            presentaciones: ['145 gr']
        },
    ]
    const Concentrados = [
        {
            imagen: royalCaninMP,
            nombre: 'Royal Canin Mini Puppy',
            precio: 123456,
            presentaciones: ['4KG', '8KG', '12KG']
        },
        {
            imagen: royalCaninYA,
            nombre: 'Royal Canin YorkShire Adulto',
            precio: 123456,
            presentaciones: ['4KG', '8KG', '12KG']
        },
        {
            imagen: equilibrio,
            nombre: 'Equilibrio - Adultos',
            precio: 123456,
            presentaciones: ['4KG', '8KG', '12KG']
        },
    ]
    const Humedos = [
        {
            imagen: pedigreeHRP,
            nombre: 'Pedigree Humedo Razas Pequeñas',
            precio: 123456,
            presentaciones: ['100 gr']
        },
        {
            imagen: royalCaninLP,
            nombre: 'Royal Canin Lata Puppy',
            precio: 123456,
            presentaciones: ['150 gr']
        },
        {
            imagen: royalCaninMS,
            nombre: 'Royal Canin MiniStarter',
            precio: 123456,
            presentaciones: ['145 gr']
        },
    ]

    const Naturales = [
        {
            imagen: peluditosBarfGold,
            nombre: 'Peluditos Barf Gold',
            precio: 123456,
            presentaciones: ['500 gr']
        },
        {
            imagen: peluditosNaturalBarf,
            nombre: 'Peluditos Natural Barf',
            precio: 123456,
            presentaciones: ['250 gr']
        },
        {
            imagen: petBrunchPollo,
            nombre: 'Pet Brunch Pollo Zanahoria',
            precio: 123456,
            presentaciones: ['145 gr']
        },
    ]

    const [productosCargados, setProductosCargados] =  useState(false);
    useEffect(() =>{
        if(!productosCargados) {
            setProductos(Todos);
            setProductosCargados(true);
        }
    }, [productosCargados])

    const handleFiltroChange = (event) => {
        const opcionSeleccionada = event.target.value;
        if (opcionSeleccionada === 'Alimentos') {
            setProductos(Todos);
        } 
        else if (opcionSeleccionada === 'Concentrado'){
            setProductos(Concentrados)
        }
        else if (opcionSeleccionada === 'Húmedo') {
            setProductos(Humedos);
        }
        else if (opcionSeleccionada === 'Natural'){
            setProductos(Naturales);
        }
    };
    return (
        <div>
            <div className='otros'>
                <div className="contenedorPrincipalOtros">
                    <div className="encabezadoOtros" width="100%">
                        <div className="rightOtros">
                            <h1>PRODUCTOS PARA</h1>
                            <img src={firu} alt="Amigos" width="25%" />
                        </div>
                        <div className="leftOtros">
                            <img src={bannerOtros} alt="Otros" />
                        </div>
                    </div>
                    <div className='barraFiltrosOtros'>
                        <div className="filtrosOtros">
                            {filtros.map((filtro, index) =>
                            (
                                <select className="filtroOtros" key={index} onChange={handleFiltroChange} >
                                    <option selected>{filtro}</option>
                                    {options[index].map((option, optionIndex) =>
                                        (<option key={optionIndex}>{option}</option>)
                                    )}
                                </select>
                            )
                            )}
                            <button className="limpiarFiltrosOtros">
                                Limpiar
                            </button>
                        </div>
                    </div>
                    <div className='productosOtros'>
                        {productos.map((producto, index) =>
                            <div className='productoOtros' key={index}>
                                <div className='imagenProductoOtros'>
                                    <img src={producto.imagen} alt={producto.nombre} />
                                </div>
                                <h4>{producto.nombre}</h4>
                                <h5>{producto.precio}</h5>
                                <div className='presentacionesOtros'>
                                    {producto.presentaciones.map((presentacion, presentacionIndex) =>
                                        <article className='presentacionOtros' key={presentacionIndex}>
                                            {presentacion}
                                        </article>
                                    )}
                                </div>
                                <button className='agregarCarritoOtros'>Carrito</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Otros