// WeatherDetails.jsx
import React from "react";

const weatherCase = ["Partly cloudy", "Sunny", "Cloudy", "Rainy", "Overcast", "Light snow, mist", "Clear"];

const bGAddress =["Partlycloudy.gif", "Sunny.gif", "Cloudy.gif", "Rainy.gif", "Overcast.gif", "Lightsnowmist.gif", "Clear.gif", "extra.gif"]


function WeatherDetails({ weatherData }) {
  const wind = weatherData ? weatherData.wind : "N/A";
  const temperature = weatherData ? weatherData.temperature : "N/A";
  const weather = weatherData ? weatherData.weather : "N/A";
  console.log(`weather: <${weather}>`);
  console.log(`weatherTrim: <${weather.trim()}>`);
  console.log(`weatherTrim2: <${weather.trim()}>`);
  let mapPos = weatherCase.indexOf(weather.trim());
// weather.


console.log("mapPos: ", mapPos);
  const elementBody = document.getElementsByTagName("body")[0];
  if(mapPos === -1){
    mapPos = bGAddress.length-1;
    }
    console.log("mapPos: ", mapPos);


  elementBody.style.backgroundImage = `url('../src/assets/${bGAddress[mapPos]}')`;
 

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
