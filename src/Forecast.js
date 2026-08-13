import React, { useState } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

export default function Forecast({ coordinates }) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  function showForecast(response) {
    setForecast(response.data.daily);
    setForecastReady(true);
  }

  if (forecastReady) {
    // console.log(forecast);
    return (
      <div className="forecast-container text-center ms-4 ps-4 mt-4 mb-5 ">
        <div className="row d-flex gap-3">
          {forecast.map(function (eachDayForecast, index) {
            if (index < 5) {
              return (
                <div key={index} className="col-2 ">
                  <ForecastDay dayForecast={eachDayForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let latitude = coordinates.latitude;
    let longitude = coordinates.longitude;
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=5d1t76143df0603191aa4604b0b5b1oe&units=metric`;
    axios.get(forecastUrl).then(showForecast);
    return <h4 className="text-center m-3 p-3">Loading forecast...</h4>;
  }
}
