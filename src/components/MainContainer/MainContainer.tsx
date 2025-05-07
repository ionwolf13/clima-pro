import React from "react";
import "./MainContainer.css";
import { CurrentDayForecast } from "../Forecast/CurrentDayForecast/CurrentDayForecast";
import { FutureForecast } from "../Forecast/FutureForecast/FutureForecast";
import { CurrentHourlyForecast } from "../Forecast/CurrentHourlyForecast/CurrentHourlyForecast";
import { ExtraDetailsForecast } from "../Forecast/ForecastExtras/ForecastExtras";

interface MainContainerProps {
  forecastData: any;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  forecastData
}) => {
  console.log("DATA", forecastData);
  return (
    <div className="main-container show-border">
      <CurrentDayForecast currentData={forecastData.data[0]} />
      <CurrentHourlyForecast />
      <FutureForecast futureForecast={forecastData.data.slice(0, 8)} />
      <ExtraDetailsForecast />
    </div>
  );
};
