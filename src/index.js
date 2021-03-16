import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PronosticoClima from './PronosticoClima.js';
import BarraBusquedaLugar from './BarraBusquedaLugar.js';
import reportWebVitals from './reportWebVitals';

const urlToFetch = "https://api.openweathermap.org/data/2.5/onecall?lat=10.488&lon=-66.8792&lang=es&exclude=minutely,&units=metric&appid=cfdf46ac4ccb5e3a4775488af2e57ce0";

ReactDOM.render(
  <React.StrictMode>
    <BarraBusquedaLugar/>
    <PronosticoClima url={urlToFetch}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
