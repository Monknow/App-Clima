import {useState, useEffect} from "react";
import useConvertirUnidadTemperatura from "./../../customHooks/useConvertirUnidadTemperatura";


function Temperatura(props){
    const [valor, setValor] = useState(props.temperaturaValor);
    const [unidad, setUnidad] = useState("C");

    const unidadConvertida = useConvertirUnidadTemperatura(valor, unidad, props.unidadTemperatura);
    const CustomTag = props.etiqueta;

    useEffect(()=>{
        setValor(unidadConvertida.valor);
        setUnidad(unidadConvertida.unidad);

    // eslint-disable-next-line
    }, [unidadConvertida]);


    return(
        <CustomTag>
           {` ${Math.round(valor * 100) / 100} `} 
        </CustomTag>
    );
};

export default Temperatura;