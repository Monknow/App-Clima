import {useState, useEffect} from "react";


function useConvertirUnidadTemperatura(valorTemperatura, unidadActual, unidadResultado) {

    const [valor, setValor] = useState(valorTemperatura);
    const [unidad, setUnidad] = useState("C");

    useEffect(()=>{
        if(unidadActual === "C" && unidadResultado === "F"){
            setValor((valorTemperatura * 9/5) + 32);
            setUnidad("F");
        }
        else if(unidadActual === "F" && unidadResultado === "C"){
            setValor((valorTemperatura - 32) * 5/9);
            setUnidad("C");
        }
    
        // eslint-disable-next-line
    }, [unidadResultado]);
    



    return {valor, unidad}
}

export default useConvertirUnidadTemperatura;