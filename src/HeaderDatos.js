//import './App.css';
import useFetchClima from "./useFetchClima";



function HeaderDatos(props) {

  const datos = useFetchClima(props.url);
  const clima = datos.clima;
  const cargando = datos.cargando;

    return (
      <header> 
        {cargando || !clima ? (
          <h1>Cargando...</h1>
        ):(
        <div>
          <h1>{clima.timezone}</h1>
          <h2>{`${clima.current.temp}°`}</h2>
          <h3>{`${Math.floor(clima.daily[0].temp.min)}°`}/
              {`${Math.floor(clima.daily[0].temp.max)}°`}
          </h3>
          <h4>{clima.current.weather[0].description}</h4>
          <img 
          src={`http://openweathermap.org/img/wn/${clima.current.weather[0].icon}@2x.png`} 
          alt={`Imgen de${clima.current.weather[0].description}`}/>
        </div>
        )}
      </header>
    );
  

}

export default HeaderDatos;
