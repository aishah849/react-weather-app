import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  id="city-input"
                  autoComplete="off"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-secondary w-100"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Current"
                  id="current-button"
                  className="btn btn-light w-100"
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-4">
              <div className="clearfix weather-temperature">
                <img
                  src="http://openweathermap.org/img/wn/04n@2x.png"
                  alt="Clear"
                  className="float-left"
                  id="icon"
                />
                <span className="float-left">
                  <span
                    className="current-temperature"
                    id="current-temperature"
                  >
                    30
                  </span>
                  <span className="units">
                    <span id="celsius-link" className="active">
                      ℃
                    </span>{" "}
                    |<span id="fahrenheit-link">℉</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-3">
              <ul className="weather-details">
                <li>
                  <span className="description" id="description"></span>
                </li>
                <li>
                  Humidity: <span id="humidity">30</span>%
                </li>
                <li>
                  Wind: <span id="wind">5</span>km/h
                </li>
              </ul>
            </div>
            <div className="col-5">
              <div className="overview">
                <h1 id="city">Singapore</h1>
                <ul className="current-time">
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
          <Weather />
        </div>
        <small>
          Open sourced on {""}
          <a
            href="https://github.com/aishah849/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {""} and hosted by {""}
          <a
            href="https://storied-bonbon-baacab.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          . Coding by Aishah Al-Rashid.
        </small>
      </div>
    </div>
  );
}
