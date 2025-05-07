import React from "react";
import uvIcon from "../../../images/statUV.png";
import "./CurrentDayForecast.css";

interface CurrentDayForecastProps {
  currentData: any;
}

export const CurrentDayForecast: React.FC<CurrentDayForecastProps> = ({
  currentData
}) => {
  const apparentMaxTemperature = currentData.app_max_temp;
  const apparentMinTemperature = currentData.app_min_temp;
  const averageApparentTemperature =
    (apparentMaxTemperature + apparentMinTemperature) / 2;
  const description = currentData.weather.description;
  const formattedDescription = description.includes("with")
    ? description
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
        .split("With")
        .join("/")
    : description;
  console.log("CURRENT DAY", currentData);
  return (
    <div
      className="current-day-forecast-container"
      style={{
        border: "2px solid black"
      }}
    >
      <div className="current-day-data">
        <h1> {Number(currentData.temp).toFixed(0)} ° </h1>
        <h4> {formattedDescription}</h4>
        <h5>
          {apparentMaxTemperature} ° / {apparentMinTemperature} Feels Like{" "}
          {averageApparentTemperature} °
        </h5>
      </div>
      <div className="current-day-images">
        <img src={uvIcon} alt="temp icon" height={100} />
      </div>
    </div>
  );
};
