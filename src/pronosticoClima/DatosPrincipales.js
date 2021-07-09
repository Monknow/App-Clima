import DatosBasicos from "./DatosBasicos";
import Temperatura from "./Temperatura";

function HeaderDatos(props) {
  const datos = props.datos;
  const datosNombreLugar = props.datosNombreLugar;

    return (
      <div className="datos-principales">
        <header className="datos-principales-header"> 
            <h1>{`${datosNombreLugar.name}, ${datosNombreLugar.sys.country}`}</h1>
            <Temperatura 
              temperaturaValor={datos.current.temp}
              unidadTemperatura={props.unidadTemperatura}
              etiqueta="h1">
            </Temperatura>
            <h2>            
              <Temperatura 
                temperaturaValor={datos.daily[0].temp.min}
                unidadTemperatura={props.unidadTemperatura}
                etiqueta="span">
              </Temperatura>
            /
              <Temperatura 
                temperaturaValor={datos.daily[0].temp.max}
                unidadTemperatura={props.unidadTemperatura}
                etiqueta="span">
              </Temperatura>
            </h2>
            <h3 className="datos-principales-descripcion">{datos.current.weather[0].description}</h3>
            <img 
            src={`http://openweathermap.org/img/wn/${datos.current.weather[0].icon}@2x.png`} 
            alt={`Imagen de${datos.current.weather[0].description}`}
            className="datos-principales-imagen"/>
        </header>
        <DatosBasicos datos={datos}></DatosBasicos>
      </div>
    );
  

}

export default HeaderDatos;
