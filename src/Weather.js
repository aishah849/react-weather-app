import React from "react";

export default function Weather(props) {
  return (
    <div className="weather-forecast" id="forecast">
      <p className="upcoming-forecast">This Week's Forecast</p>
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-date">Saturday</div>
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt=""
            width="60"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-max">33°</span>
            <span className="weather-forecast-min">27°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
