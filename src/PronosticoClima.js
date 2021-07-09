import {useState} from "react";
import useFetchClimaPorCoords from "./customHooks/useFetchClimaPorCoords";
import useFetchClimaCiudadesPorNombre from "./customHooks/useFetchClimaCiudadesPorNombre";
import Contenido from "./Contenido";
import Buscador from "./Buscador/Buscador";


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

  const levantarDatosCiudad = (datosCiudadLevantados, coordsCiudadLevantados, coordsCiudadCargandoLevantados) =>{
    setDatosCiudad(datosCiudadLevantados);
    setCoordsCiudad(coordsCiudadLevantados);
    setCoordsCiudadCargando(coordsCiudadCargandoLevantados);
    
  }

  const levantarBusqueda = (lugarEnBusqueda) =>{
    setLugarBuscado(lugarEnBusqueda); 
    setLugarCargando(false); 
    setCoordsCiudadCargando(true);
  }

  const levantarInput = (event) =>{
    setLugarEnBusqueda(event.target.value); 
    setLugarCargando(true);
  }
  
    return(
      <div>
          <Buscador 
            levantarInput={levantarInput} 
            levantarBusqueda={levantarBusqueda} 
            lugarEnBusqueda={lugarEnBusqueda}>
          </Buscador>
        <div> 
          {mensajeDeCarga? (
            <h2 className="mensaje-resultado">{mensajeResultado}</h2>
          ):(   
            <Contenido 
              climaCiudadesPorNombre={resultadoClimaCiudadesPorNombre} 
              datosCiudad={datosCiudad} 
              coordsCiudadCargando={coordsCiudadCargando} 
              climaPorCoords={resultadoClimaPorCoords} 
              levantarDatosCiudad={levantarDatosCiudad}>
            </Contenido>
          )}
        </div>
      </div>
    );
  

}

export default PronosticoClima;
