import DatosPrincipales from "./DatosPrincipales";
import DatosBasicos from "./DatosBasicos";
import PronosticoSemana from "./PronosticoSemana";
import GraficaDia from "./GraficaDia";

function CuerpoDatos(props){
    const datos = props.datos; 
    const datosNombre = props.datosNombre;
    const cargando = props.cargando;

    return(
        <div>
            {
                cargando?(
                        <h2>Cargando</h2>
                ):(
                    <div>
                        <DatosPrincipales datos={datos} datosNombreLugar={datosNombre}></DatosPrincipales>
                        <DatosBasicos datos={datos}></DatosBasicos>
                        <PronosticoSemana datos={datos}></PronosticoSemana>
                        <GraficaDia datos={datos.hourly}></GraficaDia>
                    </div>
                )

            }
        </div>
    )
}

export default CuerpoDatos;