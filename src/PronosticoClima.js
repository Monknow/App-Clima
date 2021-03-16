
import useFetchClima from "./useFetchClima";
import DatosPrincipales from "./pronosticoClima/DatosPrincipales"
import DatosBasicos from "./pronosticoClima/DatosBasicos"
import PronosticoSemana from "./pronosticoClima/PronosticoSemana"
import GraficaDia from "./pronosticoClima/GraficaDia"

function CuerpoDatos(props) {
  const datos = useFetchClima(props.url);
  const clima = datos.clima;
  const cargando = datos.cargando;

    return (
      <div> 
        {cargando || !clima ? (
          <h1>Cargando...</h1>
        ):(
        <div>
            <DatosPrincipales datos={datos}></DatosPrincipales>
            <DatosBasicos datos={datos}></DatosBasicos>
            <PronosticoSemana datos={datos}></PronosticoSemana>
            <GraficaDia datos={clima.hourly}></GraficaDia>
        </div>
        )}
      </div>
    );
  

}

export default CuerpoDatos;
