import React from "react";
import UpdatedDateTime from "./UpdatedDateTime";
import TempConversion from "./TempConversion";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData({ data }) {
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
              <WeatherIcon iconDescription={data.icon} />
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
