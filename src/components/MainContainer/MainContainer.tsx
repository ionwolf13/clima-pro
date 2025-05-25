import React from "react";
import "./MainContainer.css";
import { CurrentDayForecast } from "../Forecast/CurrentDayForecast/CurrentDayForecast";
import { FutureForecast } from "../Forecast/FutureForecast/FutureForecast";
import { CurrentHourlyForecast } from "../Forecast/CurrentHourlyForecast/CurrentHourlyForecast";
import { ExtraDetailsForecast } from "../Forecast/ForecastExtras/ForecastExtras";
import { Alerts } from "../Forecast/Alerts/Alerts";

interface MainContainerProps {
  forecastData: any;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  forecastData
}) => {
  console.log("DATA", forecastData);
  return (
    <div className="main-container show-border">
      <Alerts />
      <CurrentDayForecast currentData={forecastData.data[0]} />
      <CurrentHourlyForecast />
      <ExtraDetailsForecast />
      <FutureForecast futureForecast={forecastData.data.slice(0, 8)} />
    </div>
  );
};
