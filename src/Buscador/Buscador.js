import BotonBusqueda from "./BotonBusqueda";
import InputCiudad from "./InputCiudad";

function Buscador(props){
   return(
       <div className="buscador">
        <InputCiudad levantarInput={props.levantarInput}></InputCiudad>
        <BotonBusqueda levantarBusqueda={props.levantarBusqueda} lugarEnBusqueda={props.lugarEnBusqueda}></BotonBusqueda>
         </div>
   )
}


export default Buscador;