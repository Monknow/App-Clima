import {useState, useEffect}  from 'react';
import axios from "axios";

const traerDatos = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const useFetchClima = (url) =>{
    const [clima, setClima] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() =>{
        const montarDatos = async () => {
          const resultado = await traerDatos(url);
          setClima(resultado);
          setCargando(false);
        }
    
        montarDatos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return {clima, cargando};
}

export default useFetchClima;