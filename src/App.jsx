import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Timer from "./Componets/WeatherSite";
import Weather from './Componets/Weather';
import './index.css'

function App() {
return(
  <div id='DetailsWeatherBox'>
    <Router>
         <Timer/> 
         < Weather/>
    </Router>

  </div>

)
}

export default App
