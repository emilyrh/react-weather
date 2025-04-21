import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Tue</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForcast-temperature-max">15º</span>
            <span className="WeatherForecast-temperature-min">5º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
