import React, { useState, useEffect } from "react";
import "./maincard.css";
import statCelsius from "../../images/statCelsius.png";
import statFarenheit from "../../images/statFarenheit.png";
import statClouds from "../../images/statClouds.png";
import statHighTemp from "../../images/statHighTemp.png";
import statHumidity from "../../images/statHumidity.png";
import statLat from "../../images/statLat.png";
import statLon from "../../images/statLon.png";
import statLowTemp from "../../images/statLowTemp.png";
import statPressure from "../../images/statPressure.png";
import statRain from "../../images/statRain.png";
import statSnow from "../../images/statSnow.png";
import statSunrise from "../../images/statSunrise.png";
import statSunset from "../../images/statSunset.png";
import statUV from "../../images/statUV.png";
import statVisibility from "../../images/statVisibility.png";
import statWind from "../../images/statWind.png";
import statWindDirection from "../../images/statWindDirection.png";
import { MiniCard } from "./MiniCard";
import springSeason from "./images/springSeason.png";
import summerSeason from "./images/summerSeason.png";
import fallSeason from "./images/fallSeason.png";
import winterSeason from "./images/winterSeason.png";

const MainCard = ({
  locationData,
  todaysNumber,
  currentDegree,
  setCurrentDegree,
}) => {
  const [backImage, setBackgroundImage] = useState(springSeason);

  const mainWeather = [
    ["Temp", currentDegree.degreePic, "°", "temp"],
    ["Cloud", statClouds, "%", "clouds"],
    ["Rain", statRain, "mm", "precip"],
  ];

  const latLong = [
    ["Lat", statLat, "°", "lat"],
    ["Lon", statLon, "°", "lon"],
  ];

  const extraWeather = [
    ["High", statHighTemp, "°", "high_temp"],
    ["Low", statLowTemp, "°", "low_temp"],
    ["Humi", statHumidity, "%", "rh"],
    ["Press", statPressure, "mb", "pres"],
    ["Snow", statSnow, "mm", "snow"],
    ["UV", statUV, "ind", "uv"],
    ["Vis", statVisibility, "km", "vis"],
    ["Wind Spd", statWind, "m/s", "wind_spd"],
    ["Wind Dir", statWindDirection, "°", "wind_dir"],
    ["Sunrise", statSunrise, "am", "sunrise_ts"],
    ["Sunset", statSunset, "pm", "sunset_ts"],
  ];

  let seasonNum = todaysNumber.month;

  useEffect(() => {
    seasonNum > 0 && seasonNum < 4
      ? setBackgroundImage(springSeason)
      : seasonNum > 3 && seasonNum < 7
      ? setBackgroundImage(summerSeason)
      : seasonNum > 6 && seasonNum < 10
      ? setBackgroundImage(fallSeason)
      : setBackgroundImage(winterSeason);
  }, []);

  const changeTemp = (e) => {
    e.preventDefault();

    currentDegree.degree === "Celsius"
      ? setCurrentDegree({ degree: "Farenheit", degreePic: statFarenheit })
      : setCurrentDegree({ degree: "Celsius", degreePic: statCelsius });
  };

  return (
    <div className="main-card-cont">
      <div className="main-data-cont">
        <div id="main-data-1" style={{ backgroundImage: `url(${backImage})` }}>
          <h2>
            {" "}
            Location: {locationData.cityName}, {locationData.stateCode},{" "}
            {locationData.countryCode}{" "}
          </h2>
          <h4
            id="change-degree"
            onClick={(e) => {
              changeTemp(e);
            }}
          >
            {" "}
            Change Degree:{" "}
            <img
              className="labels-data-img"
              src={currentDegree.degreePic}
              alt="Celcius"
              height="20"
            />
          </h4>
          <div className="labels-data-cont">
            {latLong.map((weather) => (
              <MiniCard
                currentDegree={currentDegree}
                weather={weather}
                data={locationData}
              />
            ))}
          </div>
        </div>
        <div className="labels-data-cont">
          {mainWeather.map((weather) => (
            <MiniCard
              weather={weather}
              data={locationData.foreCast[0]}
              currentDegree={currentDegree}
            />
          ))}
        </div>
      </div>
      <h4> More Details</h4>
      <div className="labels-data-cont">
        {extraWeather.map((weather) => (
          <MiniCard
            weather={weather}
            data={locationData.foreCast[0]}
            currentDegree={currentDegree}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCard;
