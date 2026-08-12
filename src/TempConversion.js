import React, { useState } from "react";

export default function TempConversion({ defaultTemp }) {
  function convertFarenheit(event) {
    event.preventDefault();
    setTempUnit("farenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setTempUnit("celsius");
  }
  let [tempUnit, setTempUnit] = useState("celsius");
  if (tempUnit === "celsius") {
    return (
      <div className="TempConversion">
        <span className="temperature">{defaultTemp}</span>
        <span className="degrees">
          <span>°C </span>|
          <span>
            <a
              href="/"
              onClick={convertFarenheit}
              className="text-decoration-none"
            >
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let farenheit = Math.round((defaultTemp * 9) / 5 + 32);
    return (
      <div className="TempConversion">
        <span className="temperature ps-0">{farenheit}</span>
        <span className="degrees pe-2">
          <span>
            <a
              href="/"
              onClick={convertCelsius}
              className="text-decoration-none"
            >
              °C{" "}
            </a>
          </span>
          |<span>°F</span>
        </span>
      </div>
    );
  }
}
