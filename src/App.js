import './App.css';
import { MainComponent } from './components/MainComponent.js';
import { NavComponent } from './components/NavComponent.js';
import { useState } from 'react';

function App() {

  const[day0, setDay0] = useState({
    wind_spd: 0,
    wind_dir: 0,
    wind_cdir:"",
    wind_cdir_full:"",
    temp: 100,
    max_temp:0,
    min_temp:0,
    pop:0,
    precip:0,
    snow:0,
    pres:0,
    dewpt:0,
    rh:0,
    weather: {"icon":"c04d",
              "code":"804",
              "description":"Overcast clouds"},
    pod:"",
    clouds_low:0,
    clouds_mid:0,
    clouds_hi:0,
    clouds:0,
    vis:0,
    max_dhi:0,
    uv:0,
    moon_phase:0,
    moon_phase_lunation:0,
    moonrise_ts:0,
    moonset_ts:0,
    sunrise_ts:0,
    sunset_ts:0
  })
  const[day1, setDay1] = useState({
    max_temp:0,
    min_temp:0,
    pop:0,
    weather: {"icon":"c04d",
              "code":"804",
              "description":"Overcast clouds"}
  })
  const[day2, setDay2] = useState({
    max_temp:0,
    min_temp:0,
    pop:0,
    weather: {"icon":"c04d",
              "code":"804",
              "description":"Overcast clouds"}
  })
  const[day3, setDay3] = useState({
    max_temp:0,
    min_temp:0,
    pop:0,
    weather: {"icon":"c04d",
              "code":"804",
              "description":"Overcast clouds"}
  })
  const[day4, setDay4] = useState({
    max_temp:0,
    min_temp:0,
    pop:0,
    weather: {"icon":"c04d",
              "code":"804",
              "description":"Overcast clouds"}
  })
  const[day5, setDay5] = useState({
    max_temp:0,
    min_temp:0,
    pop:0,
    weather: {"icon":"c04d",
              "code":"804",
              "description":"Overcast clouds"}
  })

  const [currentLocation, setCurrentLocation] = useState({
    currentDegree: 'C°',
    city: "",
    state: "",
    country: "",
    timezone: "",
    longitude: "",
    latitude: "",
    currentIcon: "",
    daysOfTheWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    currentDay: day0,
    weather1: day1,
    weather2: day2,
    weather3: day3,
    weather4: day4,
    weather5: day5
  })

  return (
    <div className="app-comp">
      <NavComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} day0={day0} day1={day1} day2={day2} day3={day3} day4={day4} day5={day5} setDay0={setDay0} setDay1={setDay1} setDay2={setDay2} setDay3={setDay3} setDay4={setDay4} setDay5={setDay5}/>
      <MainComponent currentLocation={currentLocation} setDay0={setDay0} day0={day0} day1={day1} day2={day2} day3={day3} day4={day4} day5={day5} setDay1={setDay1} setDay2={setDay2} setDay3={setDay3} setDay4={setDay4} setDay5={setDay5}/>
      <footer id='main-footer'>
        Copyright © 2021 Unravel | Designed & Built by Jesus Israel Garcia
      </footer>
    </div>
  );
}

export default App;