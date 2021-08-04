import {useState} from "react";
import useFetchClimaPorCoords from "../customHooks/useFetchClimaPorCoords";
import useFetchClimaCiudadesPorNombre from "../customHooks/useFetchClimaCiudadesPorNombre";
import Contenido from "./Contenido/Contenido";
import NavBar from "./Estatico/NavBar/NavBar";
import Header from "./Estatico/Header/Header"
import Buscador from "./Buscador/Buscador";
import "./AppClima.css";


function AppClima() {
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

  const levantarInput = (valorInput) =>{
    setLugarEnBusqueda(valorInput); 
    setLugarCargando(true);
  }
  
    return(
      <div className="app-clima">
          <NavBar></NavBar>
          <Header></Header>
        <div>
            <Buscador 
              levantarInput={levantarInput} 
              levantarBusqueda={levantarBusqueda} 
              lugarEnBusqueda={lugarEnBusqueda}>
            </Buscador>
          <div className="mensaje-o-contenido"> 
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
      </div>
    );
  

}

export default AppClima;
