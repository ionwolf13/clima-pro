import React from 'react';
import searchIcon from '../pictures/searchIcon-1.png';
import { LogoComponent } from './LogoComponent.js';
import statLat from '../pictures/statLat.png';
import statLon from '../pictures/statLon.png';
import statF from '../pictures/statFarenheit.png';
import statC from '../pictures/statCelsius.png';

export const NavComponent = ({currentLocation, setCurrentLocation, day0, day1, day2, day3, day4, day5,setDay0, setDay1, setDay2, setDay3, setDay4, setDay5}) => {
    
    const getData = (e) => {
        e.preventDefault()
        let url = 'https://api.weatherbit.io/v2.0/forecast/daily?city={city}&key=85836ebec12547febf0aa65cba777c57'
        fetch(url.replace('{city}', e.target.enterCity.value))
        .then(res => res.json())
        .then(data => {
            console.log(data, "this be the data before the setting")
            setDay0({ 
                wind_spd: data.data[0].wind_spd,
                wind_dir: data.data[0].wind_dir,
                wind_cdir: data.data[0].wind_cdir,
                wind_cdir_full: data.data[0].wind_cdir_full,
                temp: data.data[0].temp,
                max_temp:data.data[0].max_temp,
                min_temp:data.data[0].min_temp,
                pop:data.data[0].pop,
                precip:data.data[0].precip,
                snow:data.data[0].snow,
                pres:data.data[0].pres,
                dewpt:data.data[0].dewpt,
                rh:data.data[0].rh,
                weather: data.data[0].weather,
                pod:data.data[0].pod,
                clouds_low:data.data[0].clouds_low,
                clouds_mid:data.data[0].clouds_mid,
                clouds_hi:data.data[0].clouds_hi,
                clouds:data.data[0].clouds,
                vis:data.data[0].vis,
                max_dhi:data.data[0].max_dhi,
                uv:data.data[0].uv,
                moon_phase:data.data[0].moon_phase,
                moon_phase_lunation:data.data[0].moon_phase_lunation,
                moonrise_ts:data.data[0].moonrise_ts,
                moonset_ts:data.data[0].moonset_ts,
                sunrise_ts:data.data[0].sunrise_ts,
                sunset_ts: data.data[0].sunset_ts
            })
            setDay1({
                max_temp: data.data[1].max_temp,
                min_temp: data.data[1].min_temp,
                pop: data.data[1].pop,
                weather: data.data[1].weather
              })
              setDay2({
                max_temp: data.data[2].max_temp,
                min_temp: data.data[2].min_temp,
                pop: data.data[2].pop,
                weather: data.data[2].weather
              })
              setDay3({
                max_temp: data.data[3].max_temp,
                min_temp: data.data[3].min_temp,
                pop: data.data[3].pop,
                weather: data.data[3].weather
              })
              setDay4({
                max_temp: data.data[4].max_temp,
                min_temp: data.data[4].min_temp,
                pop: data.data[4].pop,
                weather: data.data[4].weather
              })
              setDay5({
                max_temp: data.data[5].max_temp,
                min_temp: data.data[5].min_temp,
                pop: data.data[5].pop,
                weather: data.data[5].weather
              })
            setCurrentLocation({
                currentDegree: statC,
                city: data.city_name,
                state: data.state_code,
                country: data.country_code,
                timezone: data.timezone,
                longitude: data.lon,
                latitude: data.lat,
                daysOfTheWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                currentIcon: data.data[0].weather.icon.substring(1),
                currentDay: day0,
                weather1: day1,
                weather2: day2,
                weather3: day3,
                weather4: day4,
                weather5: day5,
            })            
        })
        console.log(currentLocation, "this be the fetch")
        e.target.reset()
    }

    function celsius2F(celsius) {
        let farenheit = celsius * (1.8) + 32
        return farenheit
     }
     function farenheit2C(farenheit){
        let celsius =  (farenheit - 32)/(1.8)
        return celsius
     }

     function updateTemp() {
         let n = 0
         if(currentLocation.currentDegree === statC){
             n = celsius2F(currentLocation.currentDay.temp)
             setDay0({...day0,temp: n})
             setCurrentLocation({...currentLocation, currentDay: day0})
             console.log(n,"new degree in farenheit")
         }
         else if(currentLocation.currentDegree === statF){
             n = farenheit2C(currentLocation.currentDay.temp)
             setDay0({...day0,temp: n})
             setCurrentLocation({...currentLocation, currentDay: day0})
             console.log(n,"new degree in celsius")
         }
         return n
     }

    const changeDegrees = (e) => {
        e.preventDefault();
        updateTemp()
        if(currentLocation.currentDegree === statC){
            setCurrentLocation({...currentLocation,currentDegree: statF})
        }
        else if(currentLocation.currentDegree === statF){
            setCurrentLocation({...currentLocation,currentDegree: statC})
            
        }
        
              
    }

    

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return(
        <div className='nav-comp'>
            <LogoComponent />
            <div className='nav-sec'>
                <form className='search-bar' onSubmit={(e) => getData(e)}>
                    <input id='search-text-area' name='enterCity' type='textfield' placeholder='City, State'/>
                    <button id='search-submit-button' type='submit' value='submit'><img src={searchIcon} alt='search icon' height='10'/></button>
                </form>
                <h3>{date}<br></br> Last Update: {time} </h3>
            </div>
            <div className='nav-sec'>
                <h2>Location:</h2>
                <h3> {currentLocation.city}, {currentLocation.state}, {currentLocation.country} <br></br> {currentLocation.timezone}</h3>   
            </div>
            <div className='nav-sec'>
                <h2><span > <img onClick={(e) => changeDegrees(e)}  src={currentLocation.currentDegree} alt='icon' height='25'/> </span></h2>
                <h4><img src={statLon} alt='icon' height='25'/> {currentLocation.longitude}°</h4>
                <h4><img src={statLat} alt='icon' height='25'/>{currentLocation.latitude}°</h4>
            </div>         
        </div>
    )
}