import {useState} from "react";

import DatosPrincipales from "./DatosPrincipales/DatosPrincipales";
import PronosticoSemana from "./PronosticoSemana/PronosticoSemana";
import GraficaDia from "./GraficaDia/GraficaDia";
import UnidadTemperatura from "./UnidadTemperatura/UnidadTemperatura";
import "./CuerpoDatos.css";


function CuerpoDatos(props){
    const [unidadTemperatura, setUnidadTemperatura] = useState("C");

    const datos = props.datos; 
    const datosNombre = props.datosNombre;

    const levantarUnidadTemperatura = (unidadLevantada) =>{
        setUnidadTemperatura(unidadLevantada);
    }

    return(
        <div>
            {
                props.cargando?(
                    <h1 className="mensaje-resultado">Cargando</h1>
                ):(
                    <div className="cuerpo-datos">
                        <UnidadTemperatura 
                            levantarUnidadTemperatura={levantarUnidadTemperatura}
                            unidadTemperatura={unidadTemperatura}>  
                        </UnidadTemperatura>
                        <DatosPrincipales 
                            datos={datos} 
                            datosNombreLugar={datosNombre}
                            unidadTemperatura={unidadTemperatura}>  
                        </DatosPrincipales>
                        <PronosticoSemana 
                            datos={datos}
                            unidadTemperatura={unidadTemperatura}>
                        </PronosticoSemana>
                        <GraficaDia 
                            datos={datos.hourly}
                            zonaHoraria={datos.timezone_offset}
                            unidadTemperatura={unidadTemperatura}>
                        </GraficaDia>
                    </div>
                )

            }
        </div>
    )
}

export default CuerpoDatos;