import BotonBusqueda from "./BotonBusqueda/BotonBusqueda";
import InputCiudad from "./InputCiudad/InputCiudad";
import "./Buscador.css";


function Buscador(props){

   return(
      <form className="buscador" 
      onSubmit={(evento) => {
         evento.preventDefault(); 
         props.levantarBusqueda(props.lugarEnBusqueda)}}>
         <InputCiudad 
            levantarInput={props.levantarInput}>
         </InputCiudad>
         <BotonBusqueda 
            levantarBusqueda={props.levantarBusqueda} 
            lugarEnBusqueda={props.lugarEnBusqueda}>
         </BotonBusqueda>
      </form>
   )
}


export default Buscador;