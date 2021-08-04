import DatosBasicos from './DatosBasicos/DatosBasicos';
import Temperatura from './../../../Varios/Temperatura';
import useTraerNombrePorCodigoPais from './../../../../customHooks/useTraerNombrePorCodigoPais';
import "./DatosPrincipales.css";

function DatosPrincipales(props) {
  const datos = props.datos;
  const datosNombreLugar = props.datosNombreLugar;
  const fecha = new Date((datos.current.dt + datos.timezone_offset) * 1000);
  const minutos = fecha.getUTCMinutes() < 10
  ? `0${fecha.getUTCMinutes()}`
  : `${fecha.getUTCMinutes()}`;
  const hora = fecha.getUTCHours() > 12
  ? `${fecha.getUTCHours() - 12}:${minutos} pm`
  : `${fecha.getUTCHours()}:${minutos} am`;


  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const pais = useTraerNombrePorCodigoPais(datosNombreLugar.sys.country);

  return (
    <div className="datos-principales">
      <header className="datos-principales-header">
        <h2>{`${datosNombreLugar.name}, ${pais.nombre}`}</h2>
        <h3>{`${dias[fecha.getUTCDay()]}, ${hora}`}</h3>
        <Temperatura
          temperaturaValor={datos.current.temp}
          unidadTemperatura={props.unidadTemperatura}
          etiqueta="h1"
          className="temperatura-principal"
        ></Temperatura>
        <h2>
          <Temperatura
            temperaturaValor={datos.daily[0].temp.min}
            unidadTemperatura={props.unidadTemperatura}
            etiqueta="span"
          ></Temperatura>
          /
          <Temperatura
            temperaturaValor={datos.daily[0].temp.max}
            unidadTemperatura={props.unidadTemperatura}
            etiqueta="span"
          ></Temperatura>
        </h2>
        <h3 className="datos-principales-descripcion">
          {datos.current.weather[0].description}
        </h3>
        <img
          src={`https://openweathermap.org/img/wn/${datos.current.weather[0].icon}@2x.png`}
          alt={`Imagen de${datos.current.weather[0].description}`}
          className="datos-principales-imagen"
        />
      </header>
      <DatosBasicos datos={datos}></DatosBasicos>
    </div>
  );
}

export default DatosPrincipales;
