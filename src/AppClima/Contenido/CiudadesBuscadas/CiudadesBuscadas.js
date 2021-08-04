import {useState, useEffect} from "react";
import Ciudad from './Ciudad/Ciudad';

function CiudadesBuscadas(props) {

    const [ciudadesFiltradas, setCiudadesFiltradas] = useState([]);
    const [ciudadesFiltradasCargadas, setCiudadesFiltradasCargadas] = useState(true);

    const ciudades = props.ciudades;
    const cargando = props.cargando;
    let keyID = 0;

    const filtrarCiudades = () =>{
        let setsDeCoordenadas = [];;

        ciudades.list.forEach((ciudad, index)=>{
            const gradoDeSimplificacion = 30;
            const temperatura = Math.floor(ciudad.main.temp - 273.15);

            let coordenadasSimplificadas = `${Math.round(ciudad.coord.lat / gradoDeSimplificacion) * gradoDeSimplificacion}, ${Math.round(ciudad.coord.lon / gradoDeSimplificacion) * gradoDeSimplificacion}, ${Math.round(temperatura / gradoDeSimplificacion) * gradoDeSimplificacion} ${ciudad.sys.country}`;
            
            setsDeCoordenadas = [...setsDeCoordenadas, coordenadasSimplificadas];
        })

        const ciudadesSinDuplicados = setsDeCoordenadas.map((setDeCoordenadas, index, array)=>{
            
            if(array.indexOf(setDeCoordenadas) === index){
                return ciudades.list[index];
            }
            else{
                return false
            }
        });

        const ciudadesSinDuplicadosFiltrados = ciudadesSinDuplicados.filter((ciudad, index) => ciudad !== false); 

        setCiudadesFiltradasCargadas(false);
        return ciudadesSinDuplicadosFiltrados;
    }

    useEffect(()=>{

        const resultadoDeFiltrarCiudades = filtrarCiudades();

        setCiudadesFiltradas(resultadoDeFiltrarCiudades);

    // eslint-disable-next-line 
    }, [])

    return (
        <div>
            {cargando && ciudadesFiltradasCargadas? (
            <h1>Cargando</h1>
            ) : (
            <div>
                {
                // eslint-disable-next-line
                ciudadesFiltradas.map((datosCiudad, indexMap) => {
                    keyID += 1;   
                        return (
                            <Ciudad
                                key={keyID}
                                datos={datosCiudad}
                                levantarDatosCiudad={props.levantarDatosCiudad}
                                cargando={cargando}
                            ></Ciudad>
                        );  
                })}
            </div>
            )}
        </div>
    );
}

export default CiudadesBuscadas;
