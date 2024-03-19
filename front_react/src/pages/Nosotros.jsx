import '../css/nosotros.css';
import perro from '../img/perritoizquierda-01.png';
import gato from '../img/gaticoDerecha.png';
import amigos from '../img/amigosFiru.png';

const Nosotros = () => {
    return (
        <div className='Nprincipal'>
            <div className='contenedorPrincipalNosotros'>
                <h1 className='tituloNosotros'>Nosotros</h1>
                <div className='contenedorMisionNosotros'>
                    <div className='contenedorTextoMision'>
                        <h2 className='tituloMisionNosotros'>Misión</h2>
                        <p className='pTextoMision'>
                            Somos una aplicación dedicada a la tercerización de productos y servicios para mascotas, que pretende brindar accesibilidad, más eficiente y ágil para el cuidado y el bienestar de la misma, dando así seguridad y confiabilidad por parte del dueño, optimizando el tiempo que esté dedica a las responsabilidades de su mascota.
                        </p>
                    </div>
                    <div className='contenedorImagenMision'>
                        <img className='imagenMision' src={perro} ></img>
                    </div>
                </div>

                <div className='contenedorVisionNosotros'>
                    <div className='contenedorImagenVision'>
                        <img className='imagenVision' src={gato} ></img>
                    </div>
                    <div className='contenedorTextoVision'>
                        <h2 className='tituloVisionNosotros'>Visión</h2>
                        <p className='pTextoVision'>
                            En el 2028 seremos la aplicación líder a nivel nacional en el cuidado y el bienestar de las mascotas domésticas, ocupándose de los compromisos con mayor y menor demanda de tiempo, dando así a nuestro asociado “clientes” un respaldo de seguridad y tranquilidad que ofrece nuestro servicio.
                        </p>
                    </div>
                </div>

                <div className='contenedorObjetivoNosotros'>
                    <div className='contenedorTextoObjetivo'>
                        <h2 className='tituloObjetivoNosotros'>Objetivos</h2>
                        <p className='pTextoObjetivo'>
                            Como objetivo general, tenemos el propósito de ser una pagina que tenga integrados los diferentes servicios de cuidado y bienestar para las mascotas domésticas con diversos módulos de servicio.
                        </p>
                        <h2 className='tituloValoresNosotros'>Valores</h2>
                        <p className='textoValoresNosotros'>Nuestros valores mas importantes son:</p>
                        <ol className='listaValoresNosotros' >
                            <ul>Respeto.</ul>
                            <ul>Responsabilidad.</ul>
                            <ul>Excelencia.</ul>
                            <ul>Transparencia.</ul>
                        </ol>
                    </div>
                    <div className='contenedorImagenObjetivo'>
                        <img className='imagenObjetivo' src={amigos} ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros