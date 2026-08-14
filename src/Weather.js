import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

export default function Weather({ defaultCity }) {
  let [ready, setReady] = useState(false);
  let [weatherInfo, setWeatherInfo] = useState({});
  let [city, setCity] = useState(defaultCity);

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
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
    });
  }
  //Search engine logic
  // 1. when form is submitted, prevent default and search for a city we still don't know
  // 2. update city when a value is entered in the form with handleCityUpdate that wil be the value of setCity
  //3. declare function Search with api call info in it
  function search() {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=5d1t76143df0603191aa4604b0b5b1oe&units=metric`;
    axios.get(url).then(handleApiResponse);
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (ready) {
    return (
      <div className="container">
        <header className="border-bottom">
          <form
            className="form-container mt-4 mb-4 me-sm-3 ms-sm-2 ms-0"
            onSubmit={handleSubmit}
          >
            <div className="row d-block m-auto text-center d-sm-flex w-auto">
              <div className="col-12 col-sm-9 me-0 pe-0">
                <input
                  className="search-input w-100 p-2 ps-3 ms-sm-2 rounded border-0 background-color-light text-secondary"
                  type="search"
                  placeholder="Enter a city name..."
                  required
                  autoFocus="on"
                  onChange={handleCityUpdate}
                />
              </div>
              <div className="col-12 justify-content-center m-auto mt-2 mt-sm-0 col-sm-3 ms-sm-0">
                <input
                  className="search-button p-2 ps-5 pe-5 rounded border-0 background-color-dark text-white"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </header>
        <main>
          <WeatherData data={weatherInfo} />
          <Forecast coordinates={weatherInfo.coordinates} />
        </main>
      </div>
    );
  } else {
    search();
    return <h1 className="m-5">Loading...</h1>;
  }
}
