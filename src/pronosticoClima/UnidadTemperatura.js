function UnidadTemperatura(props){
    let botonNegritasC;
    let botonNegritasF;

    if(props.unidadTemperatura === "C"){
        botonNegritasC = "activo";
    }
    else{
        botonNegritasF = "activo";
    }

    return(
        <div className="unidad-temperatura">
            <button 
                type="button" 
                className={botonNegritasC}
                onClick={()=>{props.levantarUnidadTemperatura("C")}}
                >ºC
            </button>
            <span>|</span>
            <button 
                type="button"
                className={botonNegritasF}
                onClick={()=>{props.levantarUnidadTemperatura("F")}}
            >ºF
            </button>
        </div>
    );
};

export default UnidadTemperatura;