import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/compras.css'
import perro from '../img/perrito3.jpg'

const Compras = () => {
  return (
    <div>
      <Header/>
      <div className='contenedorPago'>
        <div className='contPago'>
          <h1>Confirmacion pago</h1>
          <div className='direccionesPago'>
            <h4>Direccion De Entrega</h4>
            <input type='text'></input>
          </div>
          <div className='metodoPago'>
            <h4>Selecciona El Metodo De Pago</h4>
            <ul>
              <li>Tarjeta Debito/Pse</li>
              <li>Tarjeta Credito</li>
              <li>Efectivo</li>
            </ul>
          </div>
          <div className='contenedorProdPago'>
            <div className='imgProdPago'>
              <img src={perro}></img>
            </div>
            <div className='informacionProdPago'>
              <ul>
                <li>Gm2 Pro Lenovo</li>
                <li>Audifonos Bluetooth</li>
                <li>$60.000</li>
              </ul>
            </div>
            <div className='cantidadProdPago'>
              <h4>Cantidad</h4>
              <div className='contenedorProducPago'>
                <div className='cantidadMenosPago'>
                  <button className='btnMenosPago'>
                    <p>-</p>
                  </button>
                </div>
                <div className='cantidadSelecPago'>
                  <span className='cantidadNumeroPago'>1</span>
                </div>
                <div className='cantidadMasPago'>
                  <button className='btnMasPago'>
                    <p>+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

               <div className='contenedorProdPago'>
            <div className='imgProdPago'>
              <img src={perro}></img>
            </div>
            <div className='informacionProdPago'>
              <ul>
                <li>Gm2 Pro Lenovo</li>
                <li>Audifonos Bluetooth</li>
                <li>$60.000</li>
              </ul>
            </div>
            <div className='cantidadProdPago'>
              <h4>Cantidad</h4>
              <div className='contenedorProducPago'>
                <div className='cantidadMenosPago'>
                  <button className='btnMenosPago'>
                    <p>-</p>
                  </button>
                </div>
                <div className='cantidadSelecPago'>
                  <span className='cantidadNumeroPago'>1</span>
                </div>
                <div className='cantidadMasPago'>
                  <button className='btnMasPago'>
                    <p>+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

               <div className='contenedorProdPago'>
            <div className='imgProdPago'>
              <img src={perro}></img>
            </div>
            <div className='informacionProdPago'>
              <ul>
                <li>Gm2 Pro Lenovo</li>
                <li>Audifonos Bluetooth</li>
                <li>$60.000</li>
              </ul>
            </div>
            <div className='cantidadProdPago'>
              <h4>Cantidad</h4>
              <div className='contenedorProducPago'>
                <div className='cantidadMenosPago'>
                  <button className='btnMenosPago'>
                    <p>-</p>
                  </button>
                </div>
                <div className='cantidadSelecPago'>
                  <span className='cantidadNumeroPago'>1</span>
                </div>
                <div className='cantidadMasPago'>
                  <button className='btnMasPago'>
                    <p>+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>


               <div className='contenedorProdPago'>
            <div className='imgProdPago'>
              <img src={perro}></img>
            </div>
            <div className='informacionProdPago'>
              <ul>
                <li>Gm2 Pro Lenovo</li>
                <li>Audifonos Bluetooth</li>
                <li>$60.000</li>
              </ul>
            </div>
            <div className='cantidadProdPago'>
              <h4>Cantidad</h4>
              <div className='contenedorProducPago'>
                <div className='cantidadMenosPago'>
                  <button className='btnMenosPago'>
                    <p>-</p>
                  </button>
                </div>
                <div className='cantidadSelecPago'>
                  <span className='cantidadNumeroPago'>1</span>
                </div>
                <div className='cantidadMasPago'>
                  <button className='btnMasPago'>
                    <p>+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='resumenCompraPago'>
            <div className='itemsProdPago'>
              <ul>
                <li>Costo Total De Los Productos:</li>
                <li>Codigo Promocional:</li>
                <li> Total Envio:</li>
              </ul>
            </div>
            <div className='itemsProdPago'>
              <ul>
                <li>Precio Total</li>
                <li>Codigo</li>
                <li>Precio/Gratis</li>
              </ul>
            </div>
          </div>
          <div className='contenedorTotalPago'>
            <div className='contenedorPrecioPago'>
              <div className='totalPago'>
                <p>Total</p>
              </div>
              <div className='precioPago'>
                <p>Precio</p>
              </div>
            </div>
            <div className='confirmacionPago'>
              <button className='btnConfirmarPago'>Confirmar Pedido</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Compras

