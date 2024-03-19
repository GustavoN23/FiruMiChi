import React from 'react'
import '../css/footer.css'

import logoFooter from '../img/logoFooter.png'
import face from '../img/face.png'
import insta from '../img/insta.png'
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='containerPrincipalFooter'>
                <div className='listFooter'>
                    <div className='logoFooter'>
                        <img className='imgFooter' src={logoFooter} alt='Logo' ></img>
                    </div>
                </div>
                <div className='listFooter'>
                    <h5>Siguenos En</h5>
                    <div className='redesFooter'>
                        <ul>
                            <li><img className='faceFooter' src={face} alt='Facebook'></img> @FiruMichi</li>
                            <li><img className='instaFooter' src={insta} alt='Instagram'></img> @FiruMichi</li>
                        </ul>
                    </div>
                </div>
                <div className='listFooter'>
                    <h5>Acerca De Firu&Michi</h5>
                    <ul>
                        <li><a></a>Terminos Y Condiciones</li>
                        <li><a></a>Nosotros</li>
                    </ul>
                </div>
                <div className='listFooter'>
                    <h5>Informacion</h5>
                    <ul>
                        <li>Firu&Michi@FiruMichi.com</li>
                        <li>Telefono: 3044553100</li>
                        <li>Medellin,Colombia</li>
                    </ul>
                </div>
                <div className='listFooter'>
                    <h5>Productos</h5>
                    <ul>
                        <li><a></a>Alimentos Humedos</li>
                        <li><a></a>Concentrados</li>
                        <li><a></a>Medicado</li>
                        <li><a></a>Natural</li>
                    </ul>
                </div>
                <div className='listFooter'>
                    <h5>Registrate</h5>
                    <ul>
                        <li><a></a>Login</li>
                    </ul>
                </div>
            </div>
            <div className='containerDerechosFooter'>
                <small>&copy; 2023 <b>Firu&Michi</b> - Todos Los Derechos Reservados</small>
            </div>
        </footer>
    )
}

export default Footer