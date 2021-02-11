import useFetchClima from "../useFetchClima";


function DatosBasicos(props) {

  const datos = useFetchClima(props.url);
  const clima = datos.clima;
  const cargando = datos.cargando;

    return (
        <div> 
            {cargando || !clima ? (
                <h1>Cargando...</h1>
            ):(
            <div>
                <ul>
                    <li>Humedad a {`${clima.current.humidity}%`}</li>
                    <li>Presión a {clima.current.pressure}</li>
                    <li>Viento a {`${clima.current.wind_speed} m/s`}</li>
                </ul>
            </div>
        )}
        </div>
    );


}

export default DatosBasicos;
