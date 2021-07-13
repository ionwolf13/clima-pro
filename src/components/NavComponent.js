import React from 'react';

export const NavComponent = ({currentLocation, setCurrentLocation}) => {

    const getWeather = (e) => {
        console.log(e.target.enterCity.value)
        e.preventDefault()
        let url = 'https://api.weatherbit.io/v2.0/forecast/daily?city={city},NC&key=85836ebec12547febf0aa65cba777c57'
        fetch(url.replace('{city}', e.target.enterCity.value))
        .then(res => res.json())
        .then(data => setCurrentLocation({city: data.city_name,
        state: data.state_code,
        country: data.country_code,
        timezone: data.timezone,
        longitude: data.lon,
        latitude: data.lat,
        currentDay: data.data[0], 
        forecastDays: data.data[1,2,3,4,5]}))
        console.log(currentLocation.forecastDays)
        e.target.reset()
        
    }


    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    

    return(
        <div className='nav-comp'>
            <div className='nav-sec'>
            <form className='search-bar' onSubmit={(e) => getWeather(e)}>
                <input id='search-text-area' name='enterCity' type='textfield' placeholder='Search'/>
                <button id='search-submit-button' type='submit' value='submit'></button>
            </form>
            </div>
            
            <div className='nav-sec'>
                <h3> {currentLocation.city}, {currentLocation.state}, {currentLocation.country}  </h3>
                <p>{date}, {time} , {currentLocation.timezone}</p>
            </div>
            <div className='nav-sec'>
                <p>picture</p>
                <p>{currentLocation.currentDay.temp}</p>
            </div>
            <div className='nav-sec'>
                <button>switch F* or C*</button>
            </div>           
        </div>
    )
}