// WeatherDetails.jsx
import React from 'react';


function WeatherDetails({ weatherData }) {
  const wind = weatherData ? weatherData.wind : 'N/A';
  const temperature = weatherData ? weatherData.temperature : 'N/A';
  const weather = weatherData ? weatherData.weather : 'N/A';
  const [backgroundStyle, setBackgroundStyle] = useState();

  if(weather === "Partlycloudy"){

  }
  
  return (
    <div>
      <h2>Weather Details</h2>
      <p><strong>Wind:</strong> {wind}</p>
      <p><strong>Temperature:</strong> {temperature}</p>
      <p><strong>Weather:</strong> {weather}</p>
    </div>
  );
}



export default WeatherDetails;
