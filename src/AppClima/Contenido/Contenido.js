import CuerpoDatos from "./CuerpoDatos/CuerpoDatos";
import CiudadesBuscadas from "./CiudadesBuscadas/CiudadesBuscadas";
import "./Contenido.css";

function Contenido(props){
    const climaCiudadesPorNombre = props.climaCiudadesPorNombre;
    const datosCiudad = props.datosCiudad;
    const climaPorCoords = props.climaPorCoords;
    const levantarDatosCiudad = props.levantarDatosCiudad;
    const coordsCiudadCargando = props.coordsCiudadCargando;

    return(
        <div className="contenido">
            {
                !coordsCiudadCargando?(
                    <CuerpoDatos 
                        datos={climaPorCoords.datos} 
                        datosNombre={datosCiudad} 
                        cargando={climaPorCoords.cargando}>
                    </CuerpoDatos>
                ):(
                    <CiudadesBuscadas 
                        ciudades={climaCiudadesPorNombre.datos} 
                        cargando={climaCiudadesPorNombre.cargando} 
                        levantarDatosCiudad={levantarDatosCiudad}>
                    </CiudadesBuscadas>
                )                
            }
        </div>
    )
}

export default Contenido;