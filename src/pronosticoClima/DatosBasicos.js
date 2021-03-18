function DatosBasicos(props) {

    const datos = props.datos;

    return (
        <div>
            <ul>
                <li>Humedad a {`${datos.current.humidity}%`}</li>
                <li>Presión a {`${Math.round(datos.current.pressure * 0.0145 * 100) / 100} PSI`}</li> 
                {/*La presión es convertida de hectopascales a PSI y es redondeada a dos decimales*/}
                <li>Viento a {`${datos.current.wind_speed} m/s`}</li>
            </ul>
        </div>
    );


}

export default DatosBasicos;
