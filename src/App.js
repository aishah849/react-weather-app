import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form id="search-form" class="mb-3">
            <div class="row">
              <div class="col-8">
                <input
                  type="search"
                  placeholder="Type a city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="col-2">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-secondary w-100"
                />
              </div>
              <div class="col-2">
                <input
                  type="submit"
                  value="Current"
                  id="current-button"
                  class="btn btn-light w-100"
                />
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-4">
              <div class="clearfix weather-temperature">
                <img src="" alt="Clear" class="float-left" id="icon" />
                <span class="float-left">
                  <span class="current-temperature" id="current-temperature">
                    30
                  </span>
                  <span class="units">
                    <a href="#" id="celsius-link" class="active">
                      ℃
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      ℉
                    </a>
                  </span>
                </span>
              </div>
            </div>
            <div class="col-3">
              <ul class="weather-details">
                <li>
                  <span class="description" id="description"></span>
                </li>
                <li>
                  Humidity: <span id="humidity">30</span>%
                </li>
                <li>
                  Wind: <span id="wind">5</span>km/h
                </li>
              </ul>
            </div>
            <div class="col-5">
              <div class="overview">
                <h1 id="city">Singapore</h1>
                <ul class="current-time">
                  <li>
                    <span id="today-date">17 July 2022</span>
                  </li>
                  <li>
                    Last updated: <span id="today-time">1200HRS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p class="upcoming-forecast">This Week's Forecast</p>
          <div class="weather-forecast" id="forecast">
            <div class="row">
              <div class="col-2">
                <div class="weather-forecast-date">Saturday</div>
                <img
                  src="http://openweathermap.org/img/wn/04n@2x.png"
                  alt=""
                  width="60"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-max">33°</span>
                  <span class="weather-forecast-min">27°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <small>
          Open sourced on {""}
          <a
            href="https://github.com/aishah849/react-weather-app"
            target="_blank"
          >
            Github
          </a>
          {""} and hosted by {""}
          <a
            href="https://comfy-sopapillas-508d31.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
          . Coding by Aishah Al-Rashid.
        </small>
      </div>
    </div>
  );
}
