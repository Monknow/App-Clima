import {useState, useEffect} from "react";
import traerDatos from "./traerDatos";

function useFetchClimaCiudadesPorNombre (lugarBuscado,lugarCargando) {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);

    const [mensajeResultado, setMensajeResultado] = useState("¡Busque el clima de cualquier ciudad!");

    useEffect(() =>{

        if(lugarCargando === false && lugarBuscado !== null){
            const montarDatos = async () => {

                const urlLugarBuscado = `http://openweathermap.org/data/2.5/find?callback=?&q=${lugarBuscado}&lang=es&units=metric&&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02`
    
                setCargando(true);
                setMensajeResultado("Cargando");

                await traerDatos(urlLugarBuscado)
                .then((res) =>{

                    try{
                        const resultadoLimpio = JSON.parse(res.data.replace(/[\\?()]/g, ""));

                        switch (true) {
                            case resultadoLimpio.count === 0:
                                setCargando(true);
                                setMensajeResultado("Ciudad no encontrada. Revise su busqueda ");
                                break;
                            case res.status === 200:
                                    setDatos(resultadoLimpio);
                                    setCargando(false);
                                    setMensajeResultado("Cargando");
                                break;
                            case res.status >= 500:
                                setCargando(true);
                                setMensajeResultado("Ha ocurrido un error en el servidor, Intenté más tarde por favor");
                                break;
                            default:
                                setCargando(true);
                                setMensajeResultado("Ha ocurrido un error desconocido. Intenté más tarde por favor");
                                break;
                        }
                    } catch{
                        setCargando(true);
                        setMensajeResultado("Ha ocurrido un error desconocido. Intenté más tarde por favor");
                    }

                });
                
            }
            montarDatos();
        }


      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lugarCargando])

    return {datos, cargando, mensajeResultado}
}

export default useFetchClimaCiudadesPorNombre;