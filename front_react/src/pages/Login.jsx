import React from 'react'
//import LoginCSS from "../css/EstilosLogin.module.css"
import "../css/EstilosLogin.css"

import icono_user from '../img/usuario.png'
import icono_candado from '../img/bloquear.png'
import logo from '../img/logo_firu_&_michi_horizontal.png'

const Login = () => {
  return (
    <div className="globalLogin">
        <div className="contenedorPrincipalLogin">
          <div className="contenedorLogologin">
              <img className="imgLogoLogin" src={logo} alt="" />
          </div>
          
              <label className="bienvenidoLogin" >Bienvenido</label>
              <div className="contenedorLogin">
                <img className="imgIconLogin" src={icono_user} alt="icono_user" />
                <input className="inputLogin" type="text" placeholder='Usuario' />
              </div>
              <div className="contenedorLogin">
                <img className="imgIconLogin" src={icono_candado} alt="icono_candado" />
                <input className="inputLogin" type="password" placeholder='Password'  />
              </div>
              <br></br>
              <div className="">
                <a>¿olvide mi contraseña?</a>
                <br></br>
                <a>¡resgistrate!</a>
              </div>
            <button className="buttonLogin" >INGRESAR</button>   
        </div>
    </div>
    
  )
}

export default Login