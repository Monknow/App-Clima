import {useState, useEffect} from "react";
import traerDatos from "./traerDatos";

function useFetchClimaPorNombre (lugarBuscado, lugarCargando) {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);

    const [mensajeResultado, setMensajeResultado] = useState("¡Busque el clima de cualquier ciudad!");

    useEffect(() =>{

        if(lugarCargando === false && lugarBuscado !== null){
            const montarDatos = async () => {

                const urlLugarBuscado = `https://api.openweathermap.org/data/2.5/weather?q=${lugarBuscado}&lang=es&units=metric&appid=cfdf46ac4ccb5e3a4775488af2e57ce0`;
    
                setCargando(true);
                setMensajeResultado("Cargando");

                await traerDatos(urlLugarBuscado)
                .then((res) =>{
                    setDatos(res.data)

                    switch (true) {
                        case res.status === 200:
                            setCargando(false);
                            break;
                        case res.status === 404:
                            setCargando(true);
                            setMensajeResultado("Ciudad no encontrada. Revise su busqueda ");
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
                });


                
            }
            montarDatos();
        }


      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lugarCargando])


    return {datos, cargando, mensajeResultado}
}

export default useFetchClimaPorNombre;