import React from "react";

export default function Forecast() {
  return (
    <div className="forecast-container text-center ms-4 ps-4 mt-4 mb-5 ">
      <div className="row d-flex gap-3">
        <div className="col-2">
          <div className="Day">
            <div className="weekday mb-3">Sun</div>
            <div className="weekday-icon fs-3">⛅</div>
            <div className="weekday-temp mt-3 container">
              <div className="row">
                <div className="col-6">
                  <span>
                    <strong>24°C </strong>
                  </span>
                </div>
                <div className="col-6">
                  <span> 14°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2 ">
          <div className="Day">
            <div className="weekday mb-3">Mon</div>
            <div className="weekday-icon fs-3">⛅</div>
            <div className="weekday-temp mt-3 container">
              <div className="row">
                <div className="col-6">
                  <span>
                    <strong>24°C </strong>
                  </span>
                </div>
                <div className="col-6">
                  <span> 14°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="Day">
            <div className="weekday mb-3">Tue</div>
            <div className="weekday-icon fs-3">⛅</div>
            <div className="weekday-temp mt-3 container">
              <div className="row">
                <div className="col-6">
                  <span>
                    <strong>24°C </strong>
                  </span>
                </div>
                <div className="col-6">
                  <span> 14°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="Day">
            <div className="weekday mb-3">Wed</div>
            <div className="weekday-icon fs-3">⛅</div>
            <div className="weekday-temp mt-3 container">
              <div className="row">
                <div className="col-6">
                  <span>
                    <strong>24°C </strong>
                  </span>
                </div>
                <div className="col-6">
                  <span> 14°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2">
          <div className="Day">
            <div className="weekday mb-3 ">Thu</div>
            <div className="weekday-icon fs-3">⛅</div>
            <div className="weekday-temp mt-3 container">
              <div className="row">
                <div className="col-6">
                  <span>
                    <strong>24°C </strong>
                  </span>
                </div>
                <div className="col-6">
                  <span> 14°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
