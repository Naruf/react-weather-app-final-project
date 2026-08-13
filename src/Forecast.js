import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";

export default function Forecast({ coordinates }) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  function showForecast(response) {
    setForecast(response.data.daily);

    setForecastReady(true);
  }

  if (forecastReady) {
    console.log(forecast);
    return (
      <div className="forecast-container text-center ms-4 ps-4 mt-4 mb-5 ">
        <div className="row d-flex gap-3">
          <div className="col-2 ">
            <ForecastDay dayForecast={forecast[0]} />
          </div>
          {/* <div className="col-2 ">
            <ForecastDay dayForecast={forecast[1]} />
          </div>
          <div className="col-2 ">
            <ForecastDay dayForecast={forecast[2]} />
          </div>
          <div className="col-2 ">
            <ForecastDay dayForecast={forecast[3]} />
          </div>
          <div className="col-2 ">
            <ForecastDay dayForecast={forecast[4]} />
          </div> */}
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

/* return (
    <div className="forecast-container text-center ms-4 ps-4 mt-4 mb-5 ">
      <div className="row d-flex gap-3">
        <div className="col-2 ">
          <div className="Day border rounded p-2 shadow-sm">
            <div className="weekday mb-3">Sun</div>
            <div className="weekday-icon ">
              <WeatherIcon iconDescription="few-clouds-day" size={50} />
            </div>
            <div className="weekday-temp pt-2 ps-3 container">
              <div className="row ">
                <div className="col-6">
                  <span className="max-temp">
                    <strong>25°</strong>
                  </span>
                </div>
                <div className="col-6">
                  <span className="min-temp opacity-75">14°</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2 ">
          <div className="Day border rounded p-2 shadow-sm ">
            <div className="weekday mb-3">Mon</div>
            <div className="weekday-icon ">
              <WeatherIcon iconDescription="clear-sky-day" size={50} />
            </div>
            <div className="weekday-temp pt-2 ps-3 container">
              <div className="row">
                <div className="col-6">
                  <span className="max-temp">
                    <strong>24°</strong>
                  </span>
                </div>
                <div className="col-6">
                  <span className="min-temp opacity-75">14°</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="Day border rounded p-2 shadow-sm">
            <div className="weekday mb-3">Tue</div>
            <div className="weekday-icon ">
              <WeatherIcon iconDescription="rain-day" size={50} />
            </div>
            <div className="weekday-temp pt-2 ps-3 container">
              <div className="row">
                <div className="col-6">
                  <span className="max-temp">
                    <strong>24°</strong>
                  </span>
                </div>
                <div className="col-6">
                  <span className="min-temp opacity-75">14°</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="Day border rounded p-2 shadow-sm">
            <div className="weekday mb-3">Wed</div>
            <div className="weekday-icon ">
              <WeatherIcon iconDescription="mist-day" size={50} />
            </div>
            <div className="weekday-temp pt-2 ps-3 container">
              <div className="row">
                <div className="col-6">
                  <span className="max-temp">
                    <strong>24°</strong>
                  </span>
                </div>
                <div className="col-6">
                  <span className="min-temp opacity-75">14°</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="Day border rounded p-2 shadow-sm">
            <div className="weekday mb-3 ">Thu</div>
            <div className="weekday-icon ">
              <WeatherIcon iconDescription="snow-day" size={50} />
            </div>
            <div className="weekday-temp pt-2 ps-3 container">
              <div className="row">
                <div className="col-6">
                  <span className="max-temp">
                    <strong>24°</strong>
                  </span>
                </div>
                <div className="col-6">
                  <span className="min-temp opacity-75">14°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
