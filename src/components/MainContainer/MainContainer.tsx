import React from "react";
import { CurrentDayForecast } from "../CurrentDayForecast/CurrentDayForecast";
import { FutureForecast } from "../FutureForecast/FutureForecast";
import { CurrentHourlyForecast } from "../CurrentHourlyForecast/CurrentHourlyForecast";
import { ExtraDetailsForecast } from "../ForecastExtras/ForecastExtras";
import { Alerts } from "../Alerts/Alerts";
import { hourlyData } from "../../data/hourlyData";
import { MiniCardRow } from "../MiniCardRow/MiniCardRow";
import { Droplet, Sun, Wind, WindArrowDown, Eye, Gauge } from "lucide-react";
import { NoBackgroundColor } from "../../shared/constants/colors";
import "./MainContainer.css";

const styling = () => ({
  mainContainer: {
    flexDirection: "column",
    rowGap: "24px",
    flexWrap: "wrap",
    backgroundColor: NoBackgroundColor,
    justifyContent: "flex-start",
    paddingTop: "40px",
  },
});

interface MainContainerProps {
  forecastData: any;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  forecastData,
}) => {
  const styles = styling();

  const [todaysData, ...hourlyData] = forecastData.data;

  const dataSetOne = [
    {
      title: "Air Quality",
      data: { value: todaysData.aqi },
      valueType: null,
      icon: Gauge,
    },
    {
      title: "UV Index",
      data: { value: todaysData.uv },
      valueType: null,
      icon: Sun,
    },
    {
      title: "Humidity",
      data: { value: todaysData.rh },
      valueType: "%",
      icon: Droplet,
    },
  ];

  const dataSetTwo = [
    {
      title: "Wind",
      data: { value: todaysData.wind_spd },
      valueType: "m/s",
      icon: Wind,
    },
    {
      title: "Pressure",
      data: { value: todaysData.pres },
      valueType: "mb",
      icon: WindArrowDown,
    },
    {
      title: "Visibility",
      data: { value: todaysData.vis },
      valueType: "km",
      icon: Eye,
    },
  ];

  return (
    <>
      <CurrentDayForecast currentData={todaysData} />
      <Alerts />
      <CurrentHourlyForecast hourlyData={hourlyData} />
      <MiniCardRow data={dataSetOne} />
      <FutureForecast futureForecast={hourlyData.slice(0, 8)} />
      <ExtraDetailsForecast />
      <MiniCardRow data={dataSetTwo} />
    </>
  );
};
