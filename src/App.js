//import './App.css';
import React, {useState, useEffect}  from 'react';
import axios from "axios";

const traerDatos = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};


function DatosBasicos() {

  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(true);


  useEffect(() =>{
    const montarDatos = async () => {
      const resultado = await traerDatos("http://api.openweathermap.org/data/2.5/weather?q=Caracas&lang=es&units=metric&appid=cfdf46ac4ccb5e3a4775488af2e57ce0");
      console.log(resultado);
      setClima(resultado);
      setCargando(false);
    }

    montarDatos();
  }, [])

    return (
      <div> 
        {cargando || !clima ? (
          <h1>Cargando...</h1>
        ):(
        <div>
          <h1>{clima.name}</h1>
          <h2>{`${clima.main.temp}°`}</h2>
          <h3>{`${Math.floor(clima.main.temp_max)}°`}/{`${Math.floor(clima.main.temp_min)}°`}</h3>
        </div>
        )}
      </div>
    );
  

}

export default DatosBasicos;
