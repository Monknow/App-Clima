import "./InputCiudad.css"

function InputCiudad(props){
    const levantarCambio = (event) =>{
        props.levantarInput(event.target.value);
    }

    return(
        <input 
            className="input-ciudad" 
            type="text" 
            onChange={levantarCambio}
        />
    );  
}



export default InputCiudad;