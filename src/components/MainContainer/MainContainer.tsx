import React from "react";
import { CurrentDayForecast } from "../CurrentDayForecast/CurrentDayForecast";
import { FutureForecast } from "../FutureForecast/FutureForecast";
import { HourlyForecast } from "../CurrentHourlyForecast/HourlyForecast";
import { Alerts } from "../Alerts/Alerts";
import { MiniCardRow } from "../MiniCardRow/MiniCardRow";
import { Droplet, Sun, Wind, WindArrowDown, Eye, Gauge } from "lucide-react";
import { useLocationStore } from "../../state";
import {
  selectCurrentWeather,
  selectIsLoadingWeather
} from "../../state/selectors/getters";
import { Welcome } from "../Welcome/Welcome";
import "./MainContainer.css";

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = React.memo(() => {
  const currentWeather = useLocationStore(selectCurrentWeather);
  const isLoadingWeather = useLocationStore(selectIsLoadingWeather);
  console.log("iS LOADING", isLoadingWeather);
  console.log("CURRENT", currentWeather);
  const [todaysData, ...hourlyData] = currentWeather.data;
  console.log("length", currentWeather.data.length);
  const dataSetOne = [
    {
      title: "Dewpoint",
      data: { value: todaysData?.dewpt },
      valueType: null,
      icon: Gauge
    },
    {
      title: "UV Index",
      data: { value: todaysData?.uv },
      valueType: null,
      icon: Sun,
      maxValue: 11
    },
    {
      title: "Humidity",
      data: { value: todaysData?.rh },
      valueType: "%",
      icon: Droplet
    }
  ];

  const dataSetTwo = [
    {
      title: "Wind Speed",
      data: { value: todaysData?.wind_spd },
      valueType: "m/s",
      icon: Wind,
      maxValue: 253
    },
    {
      title: "Pressure",
      data: { value: todaysData?.pres },
      valueType: "mb",
      icon: WindArrowDown,
      maxValue: 1084
    },
    {
      title: "Visibility",
      data: { value: todaysData?.vis },
      valueType: "km",
      icon: Eye,
      maxValue: 296
    }
  ];

  return (
    <>
      {currentWeather.data.length === 0 ? (
        <Welcome />
      ) : (
        <>
          <CurrentDayForecast currentData={todaysData} />
          <Alerts />
          <HourlyForecast hourlyData={hourlyData} />
          <FutureForecast futureForecast={hourlyData.slice(0, 8)} />
          <MiniCardRow data={dataSetOne} />
          <MiniCardRow data={dataSetTwo} />
        </>
      )}
    </>
  );
});
