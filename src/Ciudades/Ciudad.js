function Ciudad(props){
    const datos = props.datos;
    const cargando = props.cargando;

    const temperatura = Math.floor(datos.main.temp - 273.15);

    return(
        <div className="ciudad">
            {
                cargando?(
                    <h2>Cargando</h2>
                ):(
                    <div onClick={() => {
                        props.pruebaLevantarEstado(props.datos, props.datos.coord, false);
                        }}>
                            
                        <h3>{datos.name}, {datos.sys.country}</h3>
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