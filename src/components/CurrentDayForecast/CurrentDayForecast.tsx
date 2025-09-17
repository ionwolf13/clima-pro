import React from "react";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import { Thermometer, Sun } from "lucide-react";
import { IconTitle } from "../../shared/components/IconTitle.tsx/IconTitle";
import { ReuseText } from "../../shared/components/ReuseText/ReuseText";
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

  return (
    <ReuseContainer className={"current-day-container"} shadow>
      <IconTitle
        bold
        icon={Thermometer}
        title={`${Number(currentData.temp).toFixed(0)} °`}
        titleSize={"56px"}
      />
      <ReuseText text={formattedDescription} />
      <ReuseText
        text={`Feels Like ${averageApparentTemperature}°C • High
        ${apparentMaxTemperature}°C • Low ${apparentMinTemperature}°C`}
      />
      <Sun size={100} style={{ margin: "16px" }} color="orange" />
    </ReuseContainer>
  );
};
