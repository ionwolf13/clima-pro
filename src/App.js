import './App.css';
import { MainComponent } from './components/MainComponent.js';
import { NavComponent } from './components/NavComponent.js';
import { LogoComponent } from './components/LogoComponent.js';
import { useState } from 'react';
// import weatherObj from './components/script';

function App() {

  const [currentLocation, setCurrentLocation] = useState({
    city: "",
    state: "",
    country: "",
    timezone: "",
    longitude: "",
    latitude: "",
    currentDay: {}, 
    forecastDay1: {}, 
    forecastDay2: {},
    forecastDay3: {},
    forecastDay4: {},
    forecastDay5: {}
  })


  return (
    <div className="app-comp">
      <LogoComponent />
      <NavComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
      <MainComponent currentLocation={currentLocation} />
      <footer id='main-footer'>
        Copyright © 2021 Unravel | Designed & Built by Jesus Israel Garcia
      </footer>
    </div>
  );
}

export default App;
