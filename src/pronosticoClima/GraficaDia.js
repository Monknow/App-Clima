import {useState} from "react";
import {AreaChart, Area, XAxis, Tooltip, ResponsiveContainer} from "recharts";


const datosGraficos = new Map([
  [
    "temperatura",
    {
      dataKey: "Temperatura",
      fill: "#f2a735",
      stroke: "#bf790d",
      unit: " C°",
    },
  ],
  [
    "humedad",
    {
      dataKey: "Humedad",
      fill: "#4b87cc",
      stroke: "#2b62a1",
      unit: " %",
    },
  ],
  [
    "viento",
    {
      dataKey: "Viento",
      fill: "#a662de",
      stroke: "#7e34a8",
      unit: " m/s",
    },
  ],
]);


function GraficaDia(props) {
  const [graficoEnPantalla, setGraficoEnPantalla] = useState(datosGraficos.get("temperatura"));
  var datosDia = [];


  const datosPorHora = props.datos.slice(0, 12);

  datosPorHora.forEach((hora) => {
      var tiempoEnHoras = new Date(hora.dt * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      datosDia.push({
        Temperatura: hora.temp,
        Humedad: hora.humidity,
        Viento: hora.wind_speed,
        Hora: tiempoEnHoras,
      });
  });

  return (
      <div>
        <ResponsiveContainer width="90%" height={125}>
            
                <AreaChart data={datosDia}>

                  {graficoEnPantalla?
                  (
                    <Area
                      type="monotone"
                      dataKey={graficoEnPantalla.dataKey}
                      fill={graficoEnPantalla.fill}
                      stroke={graficoEnPantalla.stroke}
                      unit={graficoEnPantalla.unit}
                    />
                  ):(
                    <br/>
                  )}

                    <XAxis dataKey="Hora" />
                    <Tooltip />
                </AreaChart>

        </ResponsiveContainer>
          <div>
            <button onClick={() => setGraficoEnPantalla(datosGraficos.get("temperatura"))}>Temperatura</button>
            <button onClick={() => setGraficoEnPantalla(datosGraficos.get("humedad"))}>Humedad</button>
            <button onClick={() => setGraficoEnPantalla(datosGraficos.get("viento"))}>Viento</button>

          </div>
        </div>
  );
}

export default GraficaDia;
