import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "a12670296b5b7ac064111tf40b315o03";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);

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
