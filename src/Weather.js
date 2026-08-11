import React, { useState } from "react";
import axios from "axios";
import UpdatedDateTime from "./UpdatedDateTime";

export default function Weather({ city }) {
  //date update
  // let now = new Date();
  // let weekdays = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thurday",
  //   "Friday",
  //   "Saturday",
  // ];
  // let day = now.getDay();
  // let today = weekdays[day];
  // let hours = String(now.getHours()).padStart(2, "0");
  // let minutes = String(now.getMinutes()).padStart(2, "0");

  let [ready, setReady] = useState(false);
  let [weatherInfo, setWeatherInfo] = useState({});

  //Weather api call to update weather info for a given city in the component <Weather city = "london">
  function handleApiResponse(response) {
    console.log(response.data);
    setReady(true);
    setWeatherInfo({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  if (ready) {
    return (
      <div className="container">
        <header className="border-bottom">
          <form
            className="form-container mt-4 mb-4 me-3 ms-3"
            // onSubmit={handleSubmit}
          >
            <div className="row ">
              <div className="col-9 me-0 pe-0">
                <input
                  className="search-input w-100 p-2 ps-3 ms-2 rounded border-0 background-color-light text-secondary"
                  type="search"
                  placeholder="Enter a city name..."
                  required
                  autoFocus="on"
                  // onUpdate={handleUpdate}
                />
              </div>
              <div className="col-3 ms-0">
                <input
                  className="search-button p-2 ps-5 pe-5 rounded border-0 background-color-dark text-white"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </header>
        <section className="city-weather-container mt-4">
          <div className="row gap-0">
            <div className="col-7 city-weather-section ps-5 ">
              <h1>{weatherInfo.city}</h1>
              <ul className="list ps-0">
                <li>
                  <span>
                    <UpdatedDateTime date={weatherInfo.date} />
                  </span>
                  <span className="text-capitalize">
                    {weatherInfo.condition}
                  </span>
                </li>
                <li>
                  Humidity:{" "}
                  <span className="text-danger fw-bold">
                    {weatherInfo.humidity}%
                  </span>
                  , Wind:
                  <span className="text-danger fw-bold">
                    {" "}
                    {weatherInfo.wind}km/h
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-5 temperature-section text-end pe-5 ">
              <span className="weather-icon">
                <img src={weatherInfo.icon} alt="weatherIcon" width="90px" />
              </span>
              <span className="temperature">{weatherInfo.temperature}</span>
              <span className="degrees">°C | °F</span>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=5d1t76143df0603191aa4604b0b5b1oe&units=metric`;
    axios.get(url).then(handleApiResponse);
    alert("Something went wrong. Try again");
  }
}
