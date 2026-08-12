import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
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
    </div>
  );
}
