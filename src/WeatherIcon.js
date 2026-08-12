import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon({ iconDescription }) {
  console.log(iconDescription);
  const iconMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  return (
    <div className="WeatherIcon">
      <span>
        <ReactAnimatedWeather
          icon={iconMapping[iconDescription]}
          color={"goldenrod"}
          size={100}
          animate={true}
        />
      </span>
    </div>
  );
}
