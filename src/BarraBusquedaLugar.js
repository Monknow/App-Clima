import {useState, useEffect} from "react";
import axios from "axios";

const traerDatos = async (url) => {
    return await axios
      .get(url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
};


function useFetchClimaPro (lugarBuscado) {


    const [coords, setCoords] = useState(null);
    const [cargando, setCargando] = useState(true);

    const [datosLugarBuscado, setDatosLugarBuscado] = useState({});

    useEffect(() =>{
            const montarDatos = async () => {
                const urlLugarBuscado = `http://api.openweathermap.org/data/2.5/weather?q=${lugarBuscado}&lang=es&units=metric&appid=cfdf46ac4ccb5e3a4775488af2e57ce0`;
    
    
                const resultado = await traerDatos(urlLugarBuscado);
    
                setCoords(resultado?.coord);
                setCargando(false);
            }
        
            montarDatos();
        

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lugarBuscado])

    useEffect(()=>
    {
        if(cargando === false) {
            const montarDatos = async () => {
                const urlDatosLugarBuscado = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&lang=es&exclude=minutely,&units=metric&appid=cfdf46ac4ccb5e3a4775488af2e57ce0`;
    
    
                const resultado = await traerDatos(urlDatosLugarBuscado);
                setDatosLugarBuscado(resultado);
            }
        
            montarDatos();
        }  

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coords]);

    useEffect(()=>{
        console.dir(datosLugarBuscado);
    }, [datosLugarBuscado]);

    return {datosLugarBuscado}
}

function BarraBusquedaLugar(){
    const [lugarEnBusqueda, setLugarEnBusqueda] = useState(null);
    const [lugarBuscado, setLugarBuscado] = useState(null);
    const datosClima = useFetchClimaPro(lugarBuscado);

    return(
        <div>
            <input type="text" onChange={(event) => setLugarEnBusqueda(event.target.value)}/>
            <button type="button" onClick={() => setLugarBuscado(lugarEnBusqueda)}>Buscar</button>
        </div>
    ) 
}

export default BarraBusquedaLugar;