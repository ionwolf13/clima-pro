import React from "react";
import "./MainContainer.css";
import { CurrentDayForecast } from "../Forecast/CurrentDayForecast/CurrentDayForecast";
import { Alerts } from "../Forecast/Alerts/Alerts";
import { FutureForecast } from "../Forecast/FutureForecast/FutureForecast";

interface MainContainerProps {
  forecastData: any;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  forecastData
}) => {
  console.log("DATA", forecastData);
  return (
    <div className="main-container">
      <CurrentDayForecast currentData={forecastData.data[0]} />
      <Alerts />
      <FutureForecast futureForecast={forecastData.data.slice(0, 8)} />
    </div>
  );
};
