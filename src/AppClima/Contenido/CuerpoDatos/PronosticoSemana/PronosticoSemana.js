import DiaDeSemana from "./DiaDeSemana/DiaDeSemana";
import "./PronosticoSemana.css";

function PronosticoSemana(props) {
    const datos = props.datos;
    var keyID = 0;

    return (

        <div className="pronostico-semana">
            <h2 className="pronostico-semana-titulo">Pronóstico de la Semana</h2>

            <div className="pronostico-semana-dias">
                {datos.daily.map((dia) => {
                    keyID += 1;
                    const fecha = new Date((dia.dt + datos.timezone_offset) *1000);
                    return(
                        <div key={keyID}>
                            {keyID !== 1?(
                                <DiaDeSemana
                                    temperaturaMin={dia.temp.min}
                                    temperaturaMax={dia.temp.max}
                                    unidadTemperatura={props.unidadTemperatura}
                                    icono={dia.weather[0].icon}
                                    descripción={dia.weather[0].description}
                                    fecha={fecha}>
                                </DiaDeSemana>
                            ):(
                                <div className="pronostico-semana-primer-dia"></div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );


}

export default PronosticoSemana;
