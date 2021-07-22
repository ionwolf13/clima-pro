import React from 'react';
import statClouds from '../pictures/statClouds.png';
import statHumidity from '../pictures/statHumidity.png';
import statRain from '../pictures/statRain-1.png';
import statHighTemp from '../pictures/statHighTemp.png';
import statLowTemp from '../pictures/statLowTemp.png';
import statPressure from '../pictures/statPressure.png';
import statSnow from '../pictures/statSnow.png';
import statSunrise from '../pictures/statSunrise.png';
import statSunset from '../pictures/statSunset.png';
import statUV from '../pictures/statUV.png';
import statVisibility from '../pictures/statVisibility.png';
import statWind from '../pictures/statWind.png';
import statWindDirection from '../pictures/statWindDirection.png';
import Moon from '../pictures/moon-1.png'

export const MainCardComponent = ({currentLocation}) => {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1)+'-'+today.getDate();
    let days = currentLocation.daysOfTheWeek;
    var dayName = days[new Date().getDay()];

    function turnTime(UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);  
        let hour = a.getHours();
        let min = a.getMinutes();
        let time = hour + ':' + min;
        return time
    }
    let sunrise = turnTime(currentLocation.currentDay.sunrise_ts);
    let sunset = turnTime(currentLocation.currentDay.sunset_ts);
    
    return(
        <div className='card-comp' id='main-card-comp'>
            <div className='main-card-details-1'>
                <h3 className='main-card-detail'>{dayName}</h3>   
                <h4> {date} </h4>
            </div>
            <div className='main-card-details-1'>
                <img id='nav-temp-pic' src={`http://openweathermap.org/img/wn/${currentLocation.currentIcon}.png`} alt='weather icon' height='105'/>
            </div>
            <div className='main-card-details-1'>
                <h2 className='detail-2'> {currentLocation.currentDay.temp} <img src={currentLocation.currentDegree} alt='icon' height='20'/></h2>
            </div>
            <div className='main-card-details-1'>
                <p><img src={statRain} alt='icon' height='20'/> {currentLocation.currentDay.pop}%</p>
                <p><img src={statVisibility} alt='icon' height='20'/> {currentLocation.currentDay.vis}km</p>
            </div>
            <div className='main-card-details-1'>
                <p> <img src={statHighTemp} alt='icon' height='20'/> {currentLocation.currentDay.max_temp}</p>
                <p> <img src={statLowTemp} alt='icon' height='20'/> {currentLocation.currentDay.min_temp}</p>
            </div>
            <div className='main-card-details-1'>
                <p><img src={statPressure} alt='icon' height='20'/> {currentLocation.currentDay.pres} mb</p>
                <p><img src={statHumidity} alt='icon' height='20'/> {currentLocation.currentDay.rh} %</p>
            </div>
            <div className='main-card-details-1'>
                <p><img src={statClouds} alt='icon' height='20'/> {currentLocation.currentDay.clouds} %</p>    
                <p><img src={statSnow} alt='icon' height='20'/> {currentLocation.currentDay.snow} mm</p>
            </div>
            <div className='main-card-details-1'>
                <p><img src={statSunrise} alt='icon' height='20'/>{sunrise} am</p>
                <p><img src={statSunset} alt='icon' height='20'/>{sunset} pm</p>      
            </div>
            <div className='main-card-details-1'>
            <p><img src={statWindDirection} alt='icon' height='20'/> {currentLocation.currentDay.wind_cdir} °</p>
                <p><img src={statWind} alt='icon' height='20'/> {currentLocation.currentDay.wind_spd} m/s</p>
            </div>
            <div className='main-card-details-1'>
                <p><img src={statUV} alt='icon' height='20'/> {currentLocation.currentDay.uv}</p>
                <p><img src={Moon} alt='icon' height='20'/>full moon</p>
            </div>
            
        </div>
    )
}