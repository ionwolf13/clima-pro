import React from "react";
import { CurrentDayForecast } from "../CurrentDayForecast/CurrentDayForecast";
import { FutureForecast } from "../FutureForecast/FutureForecast";
import { HourlyForecast } from "../CurrentHourlyForecast/HourlyForecast";
import { ExtraDetailsForecast } from "../ForecastExtras/ForecastExtras";
import { Alerts } from "../Alerts/Alerts";
import { MiniCardRow } from "../MiniCardRow/MiniCardRow";
import { Droplet, Sun, Wind, WindArrowDown, Eye, Gauge } from "lucide-react";
import "./MainContainer.css";

interface MainContainerProps {
  forecastData: any;
}

export const MainContainer: React.FC<MainContainerProps> = React.memo(
  ({ forecastData }) => {
    const [todaysData, ...hourlyData] = forecastData.data;

    const dataSetOne = [
      {
        title: "Air Quality",
        data: { value: todaysData.aqi },
        valueType: null,
        icon: Gauge
      },
      {
        title: "UV Index",
        data: { value: todaysData.uv },
        valueType: null,
        icon: Sun
      },
      {
        title: "Humidity",
        data: { value: todaysData.rh },
        valueType: "%",
        icon: Droplet
      }
    ];

    const dataSetTwo = [
      {
        title: "Wind",
        data: { value: todaysData.wind_spd },
        valueType: "m/s",
        icon: Wind
      },
      {
        title: "Pressure",
        data: { value: todaysData.pres },
        valueType: "mb",
        icon: WindArrowDown
      },
      {
        title: "Visibility",
        data: { value: todaysData.vis },
        valueType: "km",
        icon: Eye
      }
    ];

    return (
      <>
        <CurrentDayForecast currentData={todaysData} />
        <Alerts />
        <HourlyForecast hourlyData={hourlyData} />
        <FutureForecast futureForecast={hourlyData.slice(0, 8)} />
        <MiniCardRow data={dataSetOne} />
        <MiniCardRow data={dataSetTwo} />
      </>
    );
  }
);
