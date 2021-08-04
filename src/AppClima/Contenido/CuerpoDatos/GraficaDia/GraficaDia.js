import {useState} from 'react';
import {AreaChart, Area, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import BotonGraficaDia from "./BotonGraficaDia/BotonGraficaDia";
import './GraficaDia.css';


function GraficaDia(props) {
  const [graficoEnPantalla, setGraficoEnPantalla] = useState({
    propiedad: "temperatura",
    dataKey: 'Temperatura',
    fill: '#f2a735',
    stroke: '#bf790d',
    unit: ' °C',
  });
  var datosDia = [];

  const datosPorHora = props.datos.slice(0, 12);

  datosPorHora.forEach((hora) => {
    var tiempoEnHoras = new Date((hora.dt + props.zonaHoraria) * 1000);

    datosDia.push({
      Temperatura: hora.temp,
      Humedad: hora.humidity,
      Viento: hora.wind_speed,
      Hora:
        tiempoEnHoras.getUTCHours() > 12
          ? `${tiempoEnHoras.getUTCHours() - 12} pm`
          : `${tiempoEnHoras.getUTCHours()} am`,
    });
  });

  const colocarGraficoEnPantalla = (datosGrafico) =>{
    setGraficoEnPantalla(datosGrafico);
  }

  return (
    <div className="grafica-dia">
      <h2 className="grafica-dia-titulo">Gráfica del Día</h2>
      <ResponsiveContainer
        className="grafica-dia-container"
        width="100%"
        height={150}
      >
        <AreaChart data={datosDia}>
          {graficoEnPantalla ? (
            <Area
              type="monotone"
              dataKey={graficoEnPantalla.dataKey}
              fill={graficoEnPantalla.fill}
              stroke={graficoEnPantalla.stroke}
              unit={graficoEnPantalla.unit}
            />
          ) : (
            <br />
          )}

          <XAxis dataKey="Hora" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
      <div className="grafica-dia-botones">
      <BotonGraficaDia
          propiedad="temperatura"
          propiedadActiva={graficoEnPantalla.propiedad}
          colocarGraficoEnPantalla={colocarGraficoEnPantalla}
        ></BotonGraficaDia>
          <BotonGraficaDia
          propiedad="humedad"
          propiedadActiva={graficoEnPantalla.propiedad}
          colocarGraficoEnPantalla={colocarGraficoEnPantalla}
        ></BotonGraficaDia>
        <BotonGraficaDia
          propiedad="viento"
          propiedadActiva={graficoEnPantalla.propiedad}
          colocarGraficoEnPantalla={colocarGraficoEnPantalla}
        ></BotonGraficaDia>
      </div>
    </div>
  );
}

export default GraficaDia;
