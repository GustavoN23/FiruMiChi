import React, { useEffect, useState } from 'react'
import '../css/header.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import bannerMascotas from '../img/logo_firu_&_michi_horizontal1.png'; // Importa la imagen aquí

const Header = () => {  
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Usa useState para controlar la visibilidad del menú desplegable
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='header'>
      <div className="conten">
        <div className="logo">
          <img src={bannerMascotas} alt="logo" />
        </div>
        <div className="icono">
          <button className="login">Login</button>
          <span className="basketIcon">
            <FontAwesomeIcon icon={faBasketShopping} />
          </span>
        </div>
      </div>
      <nav className="navbar">
        <Link to='/'>Home</Link>
        {/* Añade el contenedor del menú desplegable */}
        <div className="dropdown" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
          <a href="#">Productos</a>
          {/* Muestra el menú si showMenu es true */}
          {showMenu && (
            <div className="dropdown-menu">
              {/* Opciones del menú */}
              <Link to='/firu'>Perros</Link>
              <Link to='/michi'>Gatos</Link>
              <Link to='/otros'>Otros</Link>
            </div>
          )}
        </div>
        <Link to='/nosotros'>Nosotros</Link>
        <Link to='/login'>Login</Link>
        <form className="form">
          <input className="buscar" type="search" placeholder="Buscar" width="100%" height="100%" />
          <span className="searchIcon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </form>
      </nav>
    </div>
  )
}
export default Header