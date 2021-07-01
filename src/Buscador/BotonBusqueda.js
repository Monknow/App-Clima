function BotonBusqueda(props){
   return(
    <button type="button" className="boton-busqueda" onClick={() => {props.levantarBusqueda(props.lugarEnBusqueda)}}>Buscar</button>
   )
}


export default BotonBusqueda;