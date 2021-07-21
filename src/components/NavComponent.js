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
        .then(data => setCurrentLocation({
                currentDegree: statC,
                city: data.city_name,
                state: data.state_code,
                country: data.country_code,
                timezone: data.timezone,
                longitude: data.lon,
                latitude: data.lat,
                currentDay: data.data[0],
                currentIcon: data.data[0].weather.icon.substring(1),
                forecastDays: data.data,
                foreCastDays: {},
            })
            
        )
        
        e.target.reset()
    }

    function celsius2F(celsius) {
        console.log(celsius)
        let farenheit = celsius * (1.8) + 32
        console.log(farenheit)
        return farenheit
     }
     function farenheit2C(farenheit){
        console.log(farenheit)  
        let celsius =  (farenheit - 32)/(1.8)
        console.log(celsius)
        return celsius
     }
    
     function updateTemp() {
         let n = 0
         console.log(n)
         if(currentLocation.currentDegree === statC){
             n = celsius2F(currentLocation.currentDay.temp)
             setCurrentLocation({...currentLocation})
             console.log(n,"new degree in farenheit")
         }
         else if(currentLocation.currentDegree === statF){
             n = farenheit2C(currentLocation.currentDay.temp)
             console.log(n,"new degree in celsius")
             
         }
         return n
     }

    const changeDegrees = (e) => {
        e.preventDefault();
         
        if(currentLocation.currentDegree === statC){
            setCurrentLocation({...currentLocation,currentDegree: statF})
            updateTemp()
        }
        else if(currentLocation.currentDegree === statF){
            setCurrentLocation({...currentLocation,currentDegree: statC})
            updateTemp()
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