import React, { useState, useEffect } from "react";
import './maincard.css';
import statCelsius from '../../pictures/statCelsius.png'
import statFarenheit from '../../pictures/statFarenheit.png'
import statClouds from '../../pictures/statClouds.png'
import statHighTemp from '../../pictures/statHighTemp.png'
import statHumidity from '../../pictures/statHumidity.png'
import statLat from '../../pictures/statLat.png'
import statLon from '../../pictures/statLon.png'
import statLowTemp from '../../pictures/statLowTemp.png'
import statPressure from '../../pictures/statPressure.png'
import statRain from '../../pictures/statRain.png'
import statSnow from '../../pictures/statSnow.png'
import statSunrise from '../../pictures/statSunrise.png'
import statSunset from '../../pictures/statSunset.png'
import statUV from '../../pictures/statUV.png'
import statVisibility from '../../pictures/statVisibility.png'
import statWind from '../../pictures/statWind.png'
import statWindDirection from '../../pictures/statWindDirection.png'
import { MiniCard } from "./MiniCard";
import springSeason from './pictures/springSeason.png';
import summerSeason from './pictures/summerSeason.png';
import fallSeason from './pictures/fallSeason.png';
import winterSeason from './pictures/winterSeason.png';


const MainCard = ({ locationData, todaysNumber, currentDegree, setCurrentDegree }) => {

    const [backImage, setBackgroundImage] = useState(springSeason)

    const mainWeather =[
        ['Temp', currentDegree.degreePic,'°', 'temp'],
        ['Cloud', statClouds, '%', 'clouds'],
        ['Rain', statRain, 'mm', 'precip']
    ]

    const latLong =[
        ['Lat', statLat, '°', 'lat'],
        ['Lon', statLon, '°', 'lon']
    ]

    const extraWeather = [
        ['High', statHighTemp,'°', 'high_temp'],
        ['Low', statLowTemp,'°', 'low_temp'],
        ['Humi', statHumidity, '%', 'rh'],
        ['Press', statPressure, 'mb', 'pres'],
        ['Snow', statSnow, 'mm', 'snow'],
        ['UV', statUV, 'ind', 'uv'],
        ['Vis', statVisibility, 'km', 'vis'],
        ['Wind Spd',statWind, 'm/s', 'wind_spd'],
        ['Wind Dir', statWindDirection, '°', 'wind_dir'],
        ['Sunrise', statSunrise, 'am', 'sunrise_ts'],
        ['Sunset', statSunset, 'pm', 'sunset_ts'],
    ]

    let seasonNum = todaysNumber.month;

    useEffect(() => {
        (seasonNum > 0 && seasonNum <4)? 
        setBackgroundImage(springSeason)
        :(seasonNum > 3 && seasonNum < 7)?
        setBackgroundImage(summerSeason)
        :(seasonNum > 6 && seasonNum < 10)?
        setBackgroundImage(fallSeason)
        : setBackgroundImage(winterSeason)

    }, [])

    const changeTemp = (e) => {
        e.preventDefault();

        (currentDegree.degree === 'Celsius') ? 
        setCurrentDegree({degree: 'Farenheit', degreePic: statFarenheit})
        :
        setCurrentDegree({degree: 'Celsius', degreePic: statCelsius})
    }


    return(
        <div className="main-card-cont">
            <div className="main-data-cont">
                <div id='main-data-1' style={{backgroundImage: `url(${backImage})`}}>
                    <h2> Location:  {locationData.cityName}, {locationData.stateCode}, {locationData.countryCode} </h2>
                    <h4 id='change-degree' onClick={(e) => {changeTemp(e)}}> Change Degree: <img className="labels-data-img" src={currentDegree.degreePic} alt='Celcius' height='20'/></h4>
                    <div className="labels-data-cont">
                        {latLong.map((weather) => <MiniCard currentDegree={currentDegree} weather={weather} data={locationData}/>)}
                    </div>
                </div>
                <div className="labels-data-cont">
                    {mainWeather.map((weather) => <MiniCard weather={weather} data={locationData.foreCast[0]} currentDegree={currentDegree} />)}
                </div>
            </div>
            <h4> More Details</h4>
            <div className="labels-data-cont">
                {extraWeather.map((weather) => <MiniCard weather={weather} data={locationData.foreCast[0]} currentDegree={currentDegree} />)}
            </div>
        </div>
    )
}

export default MainCard;