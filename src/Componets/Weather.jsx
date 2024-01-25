// Weather.jsx
import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState(null);



  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSearchClick = () => {
    if (textInput !== "") {
      //fetch(`https://wttr.in/${textInput}?format=%C+%t+%w&lang=en`)
      fetch(`https://wttr.in/${textInput}?format=%C+%t+%w&lang=en`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ups! I couldn’t find that one, please try again!");
          }
          return response.text();
        })
        .then((data) => {
          const dataArray = data.split(" ");
          const wind = dataArray.pop();
          const temperature = dataArray.pop();
          const weather = dataArray.toString().replace(/,/g, " ");
          setWeatherData({ weather, temperature, wind });
          setError(null);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error.message);
        });
    }
  };

  const handleClearClick = () => {
    setTextInput("");
    setWeatherData(null);
    setError(null);
  };

  return (
    <div id="inputSearchBox">
      <button onClick={handleSearchClick}>Search</button>
      <input type="text" onChange={handleInputChange} value={textInput} />
      <button onClick={handleClearClick}>Clear</button>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {weatherData && (
        <div>
          <WeatherDetails weatherData={weatherData} />
        </div>
      )}
    </div>
  );
}

export default Weather;
