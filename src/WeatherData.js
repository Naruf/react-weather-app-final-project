import React from "react";
import UpdatedDateTime from "./UpdatedDateTime";

import WeatherIcon from "./WeatherIcon";

export default function WeatherData({ data, size }) {
  return (
    <div className="WeatherData">
      <section className="city-weather-container mt-5 mt-sm-4">
        <div className="row gap-0">
          <div className="city-weather-section d-block m-auto text-center col-sm-7 text-sm-start ps-sm-5 ">
            <h1 className="">{data.city}</h1>
            <ul className="list ps-0">
              <li>
                <span className="">
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
          <div className="temperature-section col-sm-5 text-sm-end pe-sm-5 mt-3">
            <div className=" ">
              <div className="row">
                <div className="col-6 text-end">
                  <span className="weather-icon ">
                    <WeatherIcon iconDescription={data.icon} size={80} />
                  </span>
                </div>
                <div className="col-6 text-sm-start">
                  <span className="tempBlock">
                    <span className="temperature">{data.temperature}</span>
                    <span className="degrees">°C </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
