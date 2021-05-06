import {useState} from "react";
import useFetchClimaPorCoords from "./customHooks/useFetchClimaPorCoords";
import useFetchClimaCiudadesPorNombre from "./customHooks/useFetchClimaCiudadesPorNombre";
import Contenido from "./Contenido";


function PronosticoClima() {
  const [lugarEnBusqueda, setLugarEnBusqueda] = useState(null);
  const [lugarBuscado, setLugarBuscado] = useState(null);
  const [lugarCargando, setLugarCargando] = useState(true);

  const [datosCiudad, setDatosCiudad] = useState(null);
  const [coordsCiudad, setCoordsCiudad] = useState(null);
  const [coordsCiudadCargando, setCoordsCiudadCargando] = useState(true);

  const resultadoClimaCiudadesPorNombre = useFetchClimaCiudadesPorNombre(lugarBuscado, lugarCargando);
  const resultadoClimaPorCoords = useFetchClimaPorCoords(coordsCiudad, coordsCiudadCargando);

  const mensajeResultado = resultadoClimaCiudadesPorNombre.mensajeResultado;
  const mensajeDeCarga = resultadoClimaCiudadesPorNombre.cargando;

  const pruebaLevantarEstado = (datosCiudadLevantados, coordsCiudadLevantados, coordsCiudadCargandoLevantados) =>{
    setDatosCiudad(datosCiudadLevantados);
    setCoordsCiudad(coordsCiudadLevantados);
    setCoordsCiudadCargando(coordsCiudadCargandoLevantados);
    
  }

  
    return (
      <div>
        <div>
          <input type="text" onChange={(event) => {setLugarEnBusqueda(event.target.value); setLugarCargando(true)}}/>
          <button type="button" onClick={() => {setLugarBuscado(lugarEnBusqueda); setLugarCargando(false); setCoordsCiudadCargando(true);}}>Buscar</button>
        </div>
        <div> 
          {mensajeDeCarga? (
            <h2>{mensajeResultado}</h2>
          ):(   
            <Contenido climaCiudadesPorNombre={resultadoClimaCiudadesPorNombre} datosCiudad={datosCiudad} coordsCiudadCargando={coordsCiudadCargando} climaPorCoords={resultadoClimaPorCoords} pruebaLevantarEstado={pruebaLevantarEstado}></Contenido>
          )}
        </div>
      </div>
    );
  

}

export default PronosticoClima;
