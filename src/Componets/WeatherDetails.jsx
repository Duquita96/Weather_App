// WeatherDetails.jsx
import React from "react";

function WeatherDetails({ weatherData }) {
  const wind = weatherData ? weatherData.wind : "N/A";
  const temperature = weatherData ? weatherData.temperature : "N/A";
  const weather = weatherData ? weatherData.weather : "N/A";
  const weatherCase = ["Partlycloudy", "Sunny", "Cloudy", "Rainy", "Overcast"];

  const elementBody = document.getElementsByTagName("body")[0];
  elementBody.style.backgroundImage = "url('../src/assets/Partlycloudy.gif')";
  //cambiar el fondo del body sin condicion

  console.log("weather en WD.jsx: ", typeof weather, weather);
  console.log("weatherCase: ", typeof weatherCase, weatherCase);
  console.log("cond: ", weather === weatherCase ? "claudiaaaa" : "pepe");

  return (
    <div>
      <h2>Weather Details</h2>
      <p>
        <strong>Wind:</strong> {wind}
      </p>
      <p>
        <strong>Temperature:</strong> {temperature}
      </p>
      <p>
        <strong>Weather:</strong> {weather}
      </p>
    </div>
  );
}

export default WeatherDetails;
