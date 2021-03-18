function PronosticoSemana(props) {
    const datos = props.datos;

    var keyID = 0;

    return (
    
        <div>
            {datos.daily.map((dia) => {
                keyID += 1;

                return(
                    <div key={keyID}>
                        <p>
                            {`${Math.floor(dia.temp.min)}°`}/
                            {`${Math.floor(dia.temp.max)}°`}    
                        </p>
                        <img 
                            src={`http://openweathermap.org/img/wn/${dia.weather[0].icon}@2x.png`} 
                            alt={`Imagen de${dia.weather[0].description}`}/>
                    </div>
                )
            })}
        </div>
    );


}

export default PronosticoSemana;
