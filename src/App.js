import './App.css';
import { MainComponent } from './components/MainComponent.js';
import { NavComponent } from './components/NavComponent.js';
import { LogoComponent } from './components/LogoComponent.js';
import { useEffect, useState } from 'react';
import weatherObj from './components/script';

function App() {

  const [currentLocation, setCurrentLocation] = useState({current: ""})


  return (
    <div className="app-comp">
      <LogoComponent />
      <NavComponent currentLocation='currentLocation' setCurrentLocation='setCurrentLocation' />
      <MainComponent />
      <footer id='main-footer'>
        Copyright © 2021 Unravel | Designed & Built by Jesus Israel Garcia
      </footer>
    </div>
  );
}

export default App;
