function HeaderDatos(props) {

  const datos = props.datos;

    return (
      <header> 
          <h1>{datos.timezone}</h1>
          <h2>{`${datos.current.temp}°`}</h2>
          <h3>{`${Math.floor(datos.daily[0].temp.min)}°`}/
              {`${Math.floor(datos.daily[0].temp.max)}°`}
          </h3>
          <h4>{datos.current.weather[0].description}</h4>
          <img 
          src={`http://openweathermap.org/img/wn/${datos.current.weather[0].icon}@2x.png`} 
          alt={`Imagen de${datos.current.weather[0].description}`}/>

      </header>
    );
  

}

export default HeaderDatos;
