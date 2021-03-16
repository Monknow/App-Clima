function DatosBasicos(props) {

    const datos = props.datos;
    const clima = datos.clima;
    const cargando = datos.cargando;
  

    return (
        <div> 
            {cargando || !clima ? (
                <div>
                    <h1>Cargando...</h1>
                </div>
            ):(
            <div>
                <ul>
                    <li>Humedad a {`${clima.current.humidity}%`}</li>
                    <li>Presión a {`${Math.round(clima.current.pressure * 0.0145 * 100) / 100} PSI`}</li> 
                    {/*La presión es convertida de hectopascales a PSI y es redondeada a dos decimales*/}
                    <li>Viento a {`${clima.current.wind_speed} m/s`}</li>
                </ul>
            </div>
        )}
        </div>
    );


}

export default DatosBasicos;
