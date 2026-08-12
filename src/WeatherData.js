import React, { useState } from "react";
import UpdatedDateTime from "./UpdatedDateTime";
import ReactAnimatedWeather from "react-animated-weather";
import TempConversion from "./TempConversion";

export default function WeatherData({ data }) {
  //   let [temperature, setTemperature] = useState(data.temperature);
  //   function showFarenheit() {
  //     let farenheitRounded = Math.round((data.temperature * 9) / 5 + 32);
  //     setTemperature(farenheitRounded);
  //   }
  //   function showCelsius() {
  //     setTemperature(data.temperature);
  //   }

  return (
    <div className="WeatherData">
      <section className="city-weather-container mt-4">
        <div className="row gap-0">
          <div className="col-7 city-weather-section ps-5 ">
            <h1>{data.city}</h1>
            <ul className="list ps-0">
              <li>
                <span>
                  <UpdatedDateTime date={data.date} />
                </span>
                <span className="text-capitalize">{data.condition}</span>
              </li>
              <li>
                Humidity:{" "}
                <span className="text-danger fw-bold">{data.humidity}%</span>,
                Wind:
                <span className="text-danger fw-bold"> {data.wind}km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-5 temperature-section d-flex text-end pe-5 ">
            <span className="weather-icon ">
              <img src={data.icon} alt="weatherIcon" width="100px" />
            </span>
            <span className="tempBlock">
              <TempConversion defaultTemp={data.temperature} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
