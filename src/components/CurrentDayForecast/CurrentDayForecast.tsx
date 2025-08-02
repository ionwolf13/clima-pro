import React from "react";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { Thermometer, Sun } from "lucide-react";
import { NoBackgroundColor } from "../../shared/constants/colors";
import "./CurrentDayForecast.css";

const styling = () => ({
  currentDayContainer: {
    columnGap: "24px",
    color: "white",
    maxWidth: "600px",
    borderRadius: "16px",
    padding: "0px 16px",
    flexDirection: "column",
    rowGap: "8px",
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

  return (
    <ReuseContainer styling={styles.currentDayContainer}>
      <ReuseContainer
        styling={{
          backgroundColor: NoBackgroundColor,
        }}
      >
        <Thermometer />
        <span style={{ fontSize: "56px" }}>
          {Number(currentData.temp).toFixed(0)} °
        </span>
      </ReuseContainer>
      <span style={{ fontSize: "large" }}>
        <strong>{formattedDescription}</strong>
      </span>
      <span>
        Feels Like {averageApparentTemperature}°C • High{" "}
        {apparentMaxTemperature}°C • Low {apparentMinTemperature}°C
      </span>
      <Sun size={100} style={{ margin: "16px" }} color="orange" />
    </ReuseContainer>
  );
};
