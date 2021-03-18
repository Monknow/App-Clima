import {useState} from "react";
import useFetchClimaPro from "./useFetchClimaPro";
import DatosPrincipales from "./pronosticoClima/DatosPrincipales"
import DatosBasicos from "./pronosticoClima/DatosBasicos"
import PronosticoSemana from "./pronosticoClima/PronosticoSemana"
import GraficaDia from "./pronosticoClima/GraficaDia"

function CuerpoDatos() {
  const [lugarEnBusqueda, setLugarEnBusqueda] = useState(null);
  const [lugarBuscado, setLugarBuscado] = useState(null);
  const [nombreLugarCargado, setNombreLugarCargado] = useState(true);

  const datosClima = useFetchClimaPro(lugarBuscado, nombreLugarCargado);
  const datos = datosClima.datosLugarBuscado;
  const cargadoDatosClima = datosClima.cargadoDatosClima;

  console.log(datos, cargadoDatosClima);

    return (
      <div>
        <div>
          <input type="text" onChange={(event) => setLugarEnBusqueda(event.target.value)}/>
          <button type="button" onClick={() => {setLugarBuscado(lugarEnBusqueda); setNombreLugarCargado(false)}}>Buscar</button>
        </div>
        <div> 
          {cargadoDatosClima? (
            <h1>Cargando...</h1>
          ):(
          <div>
            <DatosPrincipales datos={datos}></DatosPrincipales>
            <DatosBasicos datos={datos}></DatosBasicos>
            <PronosticoSemana datos={datos}></PronosticoSemana>
            <GraficaDia datos={datos.hourly}></GraficaDia>
          </div>
          )}
        </div>
      </div>
    );
  

}

export default CuerpoDatos;
