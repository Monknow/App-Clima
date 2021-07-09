import {useState} from "react";

import DatosPrincipales from "./DatosPrincipales";
import PronosticoSemana from "./PronosticoSemana";
import GraficaDia from "./GraficaDia";
import UnidadTemperatura from "./UnidadTemperatura";


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
                    <div className="clima-datos">
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
                            unidadTemperatura={unidadTemperatura}>
                        </GraficaDia>
                    </div>
                )

            }
        </div>
    )
}

export default CuerpoDatos;