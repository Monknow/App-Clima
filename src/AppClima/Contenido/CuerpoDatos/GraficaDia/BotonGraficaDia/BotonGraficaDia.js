import {useState, useEffect} from 'react';
import "./BotonGraficaDia.css";

function BotonGraficaDia(props){
    const [activo, setActivo] = useState("inactivo");

    const datosGraficos = new Map([
        [
        'temperatura',
        {
            propiedad: "temperatura",
            dataKey: 'Temperatura',
            fill: '#f2a735',
            stroke: '#bf790d',
            unit: ' °C',
        },
        ],
        [
        'humedad',
        {
            propiedad: "humedad",
            dataKey: 'Humedad',
            fill: '#4b87cc',
            stroke: '#2b62a1',
            unit: ' %',
        },
        ],
        [
        'viento',
        {
            propiedad: "viento",
            dataKey: 'Viento',
            fill: '#a662de',
            stroke: '#7e34a8',
            unit: ' m/s',
        },
        ],
    ]);

    useEffect(()=>{
        if(props.propiedadActiva === props.propiedad){
            setActivo("activo");
        }
        else{
            setActivo("inactivo");
        }    
    },[props.propiedadActiva, props.propiedad]);




    return(
        <div className={`contenedor-boton-${props.propiedad}`}>
            <button
                className={`grafica-dia-boton ${activo}`}
                onClick={() => props.colocarGraficoEnPantalla(datosGraficos.get(props.propiedad))}
            >
                {props.propiedad}
            </button>
        </div>
    )
}

export default BotonGraficaDia;