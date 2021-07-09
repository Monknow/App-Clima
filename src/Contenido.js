import CuerpoDatos from "./pronosticoClima/CuerpoDatos";
import CiudadesBuscadas from "./Ciudades/CiudadesBuscadas";

function Contenido(props){
    const climaCiudadesPorNombre = props.climaCiudadesPorNombre;
    const datosCiudad = props.datosCiudad;
    const climaPorCoords = props.climaPorCoords;
    const levantarDatosCiudad = props.levantarDatosCiudad;
    const coordsCiudadCargando = props.coordsCiudadCargando;

 
    return(
        <div>
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