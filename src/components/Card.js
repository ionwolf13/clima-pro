import React from 'react';
import statRain from '../pictures/statRain-1.png';
import statHighTemp from '../pictures/statHighTemp.png';
import statLowTemp from '../pictures/statLowTemp.png';

export const Card = ({nextDay,currentLocation,counter}) => {

    return(
        <div className='card-comp' id='mini-card'>
            <div className='mini-card-detail'>
                <h3 className='mini-card-detail'>{nextDay}</h3>
            </div>
            <div className='mini-card-detail'>  
            <img id='nav-temp-pic' src={`http://openweathermap.org/img/wn/${currentLocation.forecastDays[counter].weather.icon.substring(1)}.png`} alt='weather icon' height='75'/>
            </div>
            <div className='mini-card-detail'>
                <p className='mini-card-detail' > <img src={statRain} alt='icon' height='25'/> {currentLocation.forecastDays[counter].pop}% </p>
            </div>
            <div className='mini-card-detail'> 
                <p className='mini-card-detail' > <img src={statHighTemp} alt='icon' height='25'/> {currentLocation.forecastDays[counter].max_temp}<img src={currentLocation.currentDegree} alt='icon' height='10'/></p>
            </div>
            <div className='mini-card-detail'>
                <p className='mini-card-detail' > <img src={statLowTemp} alt='icon' height='25'/> {currentLocation.forecastDays[counter].min_temp}<img src={currentLocation.currentDegree} alt='icon' height='10'/></p>
            </div>
            

        </div>
    )
}