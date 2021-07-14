import React from 'react';
import searchIcon from '../pictures/searchIcon-1.png';

export const NavComponent = ({currentLocation, setCurrentLocation}) => {
    
    const getData = (e) => {
        console.log(e.target.enterCity.value)
        e.preventDefault()
        let url = 'https://api.weatherbit.io/v2.0/forecast/daily?city={city}&key=85836ebec12547febf0aa65cba777c57'
        fetch(url.replace('{city}', e.target.enterCity.value))
        .then(res => res.json())
        .then(data => setCurrentLocation({city: data.city_name,
        state: data.state_code,
        country: data.country_code,
        timezone: data.timezone,
        longitude: data.lon,
        latitude: data.lat,
        currentDay: data.data[0],
        currentIcon: data.data[0].weather.icon.substring(1),
        forecastIcons: {1: data.data[1].weather.icon.substring(1), 2: data.data[2].weather.icon.substring(1), 3: data.data[3].weather.icon.substring(1), 4: data.data[4].weather.icon.substring(1), 5: data.data[5].weather.icon.substring(1)},
        forecastDays: data.data[1,2,3,4,5]}))
        e.target.reset()
        
    }


    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return(
        <div className='nav-comp'>
            <div className='nav-sec'>
            <form className='search-bar' onSubmit={(e) => getData(e)}>
                <input id='search-text-area' name='enterCity' type='textfield' placeholder='Search'/>
                <button id='search-submit-button' type='submit' value='submit'><img src={searchIcon} alt='search icon' height='10'/></button>
            </form>
            <h4>{date}<br></br> Last Update: {time} </h4>
            </div>
            
            <div className='nav-sec'>
                <h2> {currentLocation.city}, {currentLocation.state}, {currentLocation.country} <br></br> {currentLocation.timezone}</h2>
                
            </div>
            <div className='nav-sec'>
                <img src={`http://openweathermap.org/img/wn/${currentLocation.currentIcon}.png`} alt='weather icon' height='75'/>
                <h3>{currentLocation.currentDay.temp} C°</h3>
            </div>
            <div className='nav-sec'>
                <button>switch F* or C*</button>
            </div>           
        </div>
    )
}