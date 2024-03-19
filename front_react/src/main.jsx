import React from 'react'
import ReactDOM from 'react-dom/client'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import '../src/css/home.css'
import '../src/css/perro.css'
import '../src/css/EstilosLogin.css'
import '../src/css/gatos.css'
import '../src/css/otros.css'
import '../src/css/cuidados.css'
import '../src/css/veterinaria.css'
import '../src/css/infoCuenta.css'
import '../src/css/guarderias.css'
import '../src/css/nosotros.css';
import '../src/css/registro.css';


import {createBrowserRouter,RouterProvider} from  'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Perro from './pages/Perro'
import Gato from './pages/Gato'
import Otros from './pages/Otros'
import Compras from './pages/Compras'
import Cuidados from './pages/Cuidados'
import InfoCuenta from './pages/InfoCuenta'
import InfoProducto from './pages/InfoProducto'
import Login from './pages/Login'
import Veterinaria from './pages/Veterinaria'
import Guarderias from './pages/Guarderias';
import Layout from './components/Layout'
import Nosotros from './pages/Nosotros';
import Registro from './pages/Registro';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/firu',
        element: <Perro/>
      },
      {
        path: '/michi',
        element: <Gato/>
      },
      {
        path: '/otros',
        element: <Otros/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path:'/guarderias',
        element:<Guarderias/>
      },
      {
        path:'/cuidados',
        element:<Cuidados/>
      },
      {
        path:'/veterinarias',
        element:<Veterinaria/>
      },
      {
        path:'/nosotros',
        element:<Nosotros/>
      },
      {
        path:'/registro',
        element:<Registro/>
      }

      

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
    
  </React.StrictMode>,
)
