import useFetchClima from "./useFetchClima";
import DatosBasicos from "./cuerpoDatos/datosBasicos"
import PronosticoSemana from "./cuerpoDatos/pronosticoSemana"


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
            <DatosBasicos url={props.url}></DatosBasicos>
            <PronosticoSemana url={props.url}></PronosticoSemana>

        </div>
        )}
      </div>
    );
  

}

export default CuerpoDatos;
