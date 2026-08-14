import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ dayForecast }) {
  function dayData() {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date(dayForecast.time * 1000);
    let day = date.getDay();
    let today = days[day];
    return today;
  }
  return (
    <div className="ForecastDay">
      <div className="Day border rounded text-center p-2  p-sm-2 shadow-sm">
        <div className="weekday mb-3 fs-6">{dayData()}</div>
        <div className="weekday-icon text-center ">
          <WeatherIcon iconDescription={dayForecast.condition.icon} size={40} />
        </div>
        <div className="weekday-temp pt-2 ps-0 ps-sm-2 container">
          <div className="row ">
            <div className="col-6 ps-sm-2 ps-2 fontSmall">
              <span className="max-temp">
                <strong>{Math.round(dayForecast.temperature.maximum)}° </strong>
              </span>
            </div>
            <div className="col-6 ps-sm-2 ps-2 fontSmall">
              <span className="min-temp opacity-75">
                {Math.round(dayForecast.temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
