function PronosticoSemana(props) {
    const datos = props.datos;
    const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

    var keyID = 0;

    return (

        <div className="pronostico-semana">
            <h2 className="pronostico-semana-titulo">Pronostico de la Semana</h2>
            <div className="pronostico-semana-dias">
                {datos.daily.map((dia) => {
                    keyID += 1;
                    const fecha = new Date(dia.dt *1000);
                    console.log(`${dias[fecha.getDay()]}, ${fecha.getDate()}/${meses[fecha.getMonth()]}`);
                    return(
                        <div key={keyID} className="pronostico-semana-dia">
                            <p>
                                {`${Math.floor(dia.temp.min)}°`}/
                                {`${Math.floor(dia.temp.max)}°`}   
                            </p>
                            <img 
                                src={`http://openweathermap.org/img/wn/${dia.weather[0].icon}@2x.png`} 
                                alt={`Imagen de${dia.weather[0].description}`}
                                className="pronostico-semana-imagen"/>
                            <p>
                                {`${dias[fecha.getDay()]}, ${fecha.getDate()}/${meses[fecha.getMonth()]}`} 
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );


}

export default PronosticoSemana;
