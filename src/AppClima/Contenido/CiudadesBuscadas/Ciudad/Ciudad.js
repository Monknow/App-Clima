import useTraerNombrePorCodigoPais from "../../../../customHooks/useTraerNombrePorCodigoPais";
import "./Ciudad.css";

function Ciudad(props){
    const datos = props.datos;
    const cargando = props.cargando;

    const temperatura = Math.floor(datos.main.temp - 273.15);
    const pais = useTraerNombrePorCodigoPais(datos.sys.country);


    return(
        <div 
            tabIndex="0"
            className="ciudad" 
            onClick={() => {
                props.levantarDatosCiudad(props.datos, props.datos.coord, false);
            }}
            onKeyPress={(evento) => {
                if (evento.key === 'Enter'){
                    props.levantarDatosCiudad(props.datos, props.datos.coord, false);
                }
            }}>

            {
                cargando?(
                    <h2>Cargando</h2>
                ):(
                    <div>
                            
                        <h3>{datos.name}, {pais.nombre}</h3>
                        <ul>
                            <li>{temperatura}ºC</li>
                            <li>{datos.main.humidity}%</li>
                        </ul>
                        <p>Latitud: {datos.coord.lat}, Longitud: {datos.coord.lon}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Ciudad;