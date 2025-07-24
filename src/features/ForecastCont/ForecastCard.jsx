import React from "react";
import statHighTemp from "../../images/statHighTemp.png";
import statLowTemp from "../../images/statLowTemp.png";
import statRain from "../../images/statRain.png";
import statClouds from "../../images/statClouds.png";
import { cel2Far } from "../../utils/utils";

export const ForecastCard = ({
  day,
  todaysNumber,
  count,
  currentDegree,
  data,
}) => {
  const extraWeather = [
    [statHighTemp, "°", "high_temp"],
    [statLowTemp, "°", "low_temp"],
    [statRain, "mm", "precip"],
    [statClouds, "%", "clouds"],
  ];

  return (
    <div className="forecast-card">
      <h3 className="forecast-card-title">
        {" "}
        {day.slice(0, 3)} {parseInt(todaysNumber.day) + count}
      </h3>

      {extraWeather.map((weather) => (
        <div className="forecast-card-values">
          <img src={weather[0]} alt="Weather Logo" height="25" />
          <p>
            {" "}
            {weather[2].includes("temp")
              ? currentDegree.degree === "Celsius"
                ? data[`${weather[2]}`]
                : cel2Far(data[`${weather[2]}`])
              : data[`${weather[2]}`]}
          </p>
          <h4> {weather[1]}</h4>
          <i className="far fa-question-circle"></i>
          <p className="forecast-card-extra">
            {weather[1] === "°" ? (
              <> Temperature in Degrees {currentDegree.degree}</>
            ) : (
              <>Extra Description of this Section</>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};
