import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Timer from "./Componets/WeatherSite";
import Weather from './Componets/Weather';
import './index.css'

function App() {

  function handleClick(){
window.open('https://wttr.in/', 'target:_blank');
}

  

return(

  <div>
<div>
  <h3>Referential Info.</h3>

  <div id='OtherSourceButtons'>
    <button id='firstButton' onClick={handleClick}>wttr site</button>

  </div>
</div>


      <div id='DetailsWeatherBox'>
    <Router>
         <Timer/> 
         < Weather/>
    </Router>

  </div>
  </div>


)
}

export default App
