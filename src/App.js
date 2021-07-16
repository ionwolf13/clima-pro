import './App.css';
import { MainComponent } from './components/MainComponent.js';
import { NavComponent } from './components/NavComponent.js';
import { useState } from 'react';
// import weatherObj from './components/script';

function App() {

  const [currentLocation, setCurrentLocation] = useState({
    currentDegree: 'C°',
    city: "",
    state: "",
    country: "",
    timezone: "",
    longitude: "",
    latitude: "",
    currentDay: {}, 
    currentIcon: "",
    forecastDays: []
  })


  return (
    <div className="app-comp">
      <NavComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
      <MainComponent currentLocation={currentLocation} />
      <footer id='main-footer'>
        Copyright © 2021 Unravel | Designed & Built by Jesus Israel Garcia
      </footer>
    </div>
  );
}

export default App;
