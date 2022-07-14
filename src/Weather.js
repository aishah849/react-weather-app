import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f617fc313f1abac3b9f67f0a1a41e6c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setWeather(
      <ul>
        <li>City: {response.data.name}</li>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)}km/h</li>
        <li>
          {" "}
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
      </ul>
    );
  }

  let form = (
    <form>
      <input type="Search" placeholder="Type a city..." onChange={updateCity} />
      <input type="Submit" value="Search" onClick={handleSubmit} />
    </form>
  );

  return (
    <div>
      {form}
      {weather}
    </div>
  );
}
