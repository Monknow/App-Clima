import Ciudad from "./Ciudad"

function CiudadesBuscadas(props){
    const ciudades = props.ciudades;
    const cargando = props.cargando;
    let keyID = 0;


    return(
        <div>
            {
                cargando?(
                    <h1>Cargandioo</h1>
                ):(
                    <div>
                        {ciudades.list.map((datosCiudad)=>{
                            keyID += 1;
                    
                            return <Ciudad key={keyID} datos={datosCiudad} pruebaLevantarEstado={props.pruebaLevantarEstado} cargando={cargando}></Ciudad>
                        })}
                    </div>
                )
            }
        </div>
    );
}

export default CiudadesBuscadas;

