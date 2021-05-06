import {useState, useEffect} from "react";
import traerDatos from "./traerDatos";


function useFetchClimaPorCoords (coords, coordsCargando) {
    
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);


    useEffect(()=>{
        if(coordsCargando === false) {
            const montarDatos = async () => {
                
                const urlDatosLugarBuscado = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&lang=es&exclude=minutely,alerts&units=metric&appid=cfdf46ac4ccb5e3a4775488af2e57ce0`;
    
    
                await traerDatos(urlDatosLugarBuscado)
                .then((res) =>{
                    setDatos(res.data);
                    setCargando(false);
                });
            }
        
            setCargando(true);
            montarDatos();
        }  

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coordsCargando]);


    return {datos, cargando}
}

export default useFetchClimaPorCoords;