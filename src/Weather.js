import React from "react";

export default function Weather() {
  return (
    <div className="container ">
      <header className="border-bottom">
        <form className=" mt-4 mb-4 me-3 ms-3">
          <div className="form-container">
            <div className="row">
              <div className="col-9 me-0 pe-0">
                <input
                  className="search-input w-100 p-2 ps-3  rounded border-0 background-color-light text-secondary
                  "
                  type="search"
                  placeholder="Enter a city name..."
                  required
                />
              </div>
              <div className="col-3 ms-0">
                <input
                  className="search-button p-2 ps-5 pe-5  rounded border-0 background-color-dark text-white"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </div>
        </form>
      </header>
      <section className="city-weather-container mt-4">
        <div className="  row">
          <div className="col-8 city-weather-section ms-4 me-5 pe-5 w-50 ">
            <h1>New York</h1>
            <ul className="list ps-0">
              <li>Monday 17:00, Broken clouds</li>
              <li>
                Humidity: <span className="text-danger fw-bold">80%</span>,
                Wind:
                <span className="text-danger fw-bold"> 4.47km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-4 temperature-section text-end pe-0">
            <span className="weather-icon">⛅</span>
            <span className="temperature">15</span>
            <span className="degrees">°C</span>
          </div>
        </div>
      </section>
    </div>
  );
}
