import Temperatura from "./../../../../Varios/Temperatura";
import "./DiaDeSemana.css";

function DiaDeSemana(props) {
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    return(
        <div 

            className="pronostico-dia">
            <p>
                <Temperatura 
                    temperaturaValor={props.temperaturaMin}
                    unidadTemperatura={props.unidadTemperatura}
                    etiqueta="span">
                </Temperatura>/
                <Temperatura 
                    temperaturaValor={props.temperaturaMax}
                    unidadTemperatura={props.unidadTemperatura}
                    etiqueta="span">
                </Temperatura>
            </p>
            <img 
                src={`https://openweathermap.org/img/wn/${props.icono}@2x.png`} 
                alt={`Imagen de ${props.descripcion}`}
                className="dia-imagen"/>

            <p>
                {`${dias[props.fecha.getUTCDay()]}, ${props.fecha.getUTCDate()}/${meses[props.fecha.getUTCMonth()]}`} 
            </p>
            <div>

            </div>
        </div>
    )
}

export default DiaDeSemana;
