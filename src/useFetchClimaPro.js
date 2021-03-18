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


function useFetchClimaPro (nombreLugarBuscado, nombreLugarCargado) {

    const [coords, setCoords] = useState(null);
    const [cargandoCoords, setCargandoCoords] = useState(true);
    const [cargadoDatosClima, setcargandoDatosClima] = useState(true);

    const [datosLugarBuscado, setDatosLugarBuscado] = useState({});

    useEffect(() =>{


        if(nombreLugarCargado === false && nombreLugarBuscado !== null){

            const montarDatos = async () => {

                const urlLugarBuscado = `http://api.openweathermap.org/data/2.5/weather?q=${nombreLugarBuscado}&lang=es&units=metric&appid=cfdf46ac4ccb5e3a4775488af2e57ce0`;
    
    
                const resultado = await traerDatos(urlLugarBuscado);
    
                setCoords(resultado?.coord);
                setCargandoCoords(false);
            }

            montarDatos();
        }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nombreLugarBuscado])

    useEffect(()=>{

        if(cargandoCoords === false) {

            const montarDatos = async () => {
                const urlDatosLugarBuscado = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&lang=es&exclude=minutely,&units=metric&appid=cfdf46ac4ccb5e3a4775488af2e57ce0`;
    
    
                const resultado = await traerDatos(urlDatosLugarBuscado);
                setDatosLugarBuscado(resultado);
                setcargandoDatosClima(false);
            }
        
            montarDatos();
        }  

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cargandoCoords]);

    useEffect(()=>{
        console.dir(datosLugarBuscado);

    }, [datosLugarBuscado]);

    return {datosLugarBuscado, cargadoDatosClima}
}

export default useFetchClimaPro;