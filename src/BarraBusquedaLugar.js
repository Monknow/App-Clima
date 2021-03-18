import {useState, useEffect} from "react";
import useFetchClimaPro from "./useFetchClimaPro";



function BarraBusquedaLugar(){
    const [lugarEnBusqueda, setLugarEnBusqueda] = useState(null);
    const [lugarBuscado, setLugarBuscado] = useState(null);
    const [nombreLugarCargado, setNombreLugarCargado] = useState(true);
    const datosClima = useFetchClimaPro(lugarBuscado, nombreLugarCargado);

    return(
        <div>
            <div>
            <input type="text" onChange={(event) => setLugarEnBusqueda(event.target.value)}/>
            <button type="button" onClick={() => {setLugarBuscado(lugarEnBusqueda); setNombreLugarCargado(false)}}>Buscar</button>
            </div>
        </div>
    ) 
}

export default BarraBusquedaLugar;