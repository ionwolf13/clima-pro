import React from "react";
import uvIcon from "../../images/statUV.png";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import "./CurrentDayForecast.css";

const styling = () => ({
  currentDayContainer: {
    columnGap: "24px",
    color: "white",
    maxWidth: "500px",
    height: "200px",
    borderRadius: "16px",
  },
});

interface CurrentDayForecastProps {
  currentData: any;
}

export const CurrentDayForecast: React.FC<CurrentDayForecastProps> = ({
  currentData,
}) => {
  const styles = styling();
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

  const date = new Date();

  return (
    <ReuseContainer styling={styles.currentDayContainer}>
      <div className="current-day-data">
        <h1> {Number(currentData.temp).toFixed(0)} ° </h1>
        <h4> {formattedDescription}</h4>
        <h5>
          {apparentMaxTemperature} ° / {apparentMinTemperature} Feels Like{" "}
          {averageApparentTemperature} °
        </h5>
        <p>
          {date.toLocaleDateString()} {date.getHours()}:{date.getMinutes()}
        </p>
      </div>
      <div className="current-day-images">
        <img src={uvIcon} alt="temp icon" height={100} />
      </div>
    </ReuseContainer>
  );
};
