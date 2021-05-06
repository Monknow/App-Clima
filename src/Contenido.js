import CuerpoDatos from "./pronosticoClima/CuerpoDatos";
import CiudadesBuscadas from "./Ciudades/CiudadesBuscadas";

function Contenido(props){
    const climaCiudadesPorNombre = props.climaCiudadesPorNombre;
    const datosCiudad = props.datosCiudad;
    const climaPorCoords = props.climaPorCoords;
    const pruebaLevantarEstado = props.pruebaLevantarEstado;
    const coordsCiudadCargando = props.coordsCiudadCargando;


    return(
        <div>
            {
                !coordsCiudadCargando && climaPorCoords?.datos?(
                    <CuerpoDatos datos={climaPorCoords.datos} datosNombre={datosCiudad} cargando={climaPorCoords.cargando}></CuerpoDatos>
                   
                ):(
                    <CiudadesBuscadas ciudades={climaCiudadesPorNombre.datos} cargando={climaCiudadesPorNombre.cargando} pruebaLevantarEstado={pruebaLevantarEstado}></CiudadesBuscadas>
                )                
            }
        </div>
    )
}

export default Contenido;