import { ForecastCont } from "../ForecastCont/ForecastCont";
import "./MainContainer.css";

export const MainContainer = ({ forecastData }) => {
  console.log("DATA", forecastData);
  return (
    <ForecastCont />
  )
};
