function InputCiudad(props){
    const levantarCambio = (event) =>{
        props.levantarInput(event);
    }

    return(<input className="input-ciudad" type="text" onChange={levantarCambio}/>);  
}



export default InputCiudad;