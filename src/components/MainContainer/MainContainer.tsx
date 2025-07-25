import React from "react";
import "./MainContainer.css";
import { CurrentDayForecast } from "../CurrentDayForecast/CurrentDayForecast";
import { FutureForecast } from "../FutureForecast/FutureForecast";
import { CurrentHourlyForecast } from "../CurrentHourlyForecast/CurrentHourlyForecast";
import { ExtraDetailsForecast } from "../ForecastExtras/ForecastExtras";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { Alerts } from "../Alerts/Alerts";

const styling = () => ({
  mainContainer: {
    height: "100vh",
    flexDirection: "column",
    rowGap: "24px",
    flexWrap: "wrap",
    backgroundColor: "rgba(0,0,0,0)",
  },
});

interface MainContainerProps {
  forecastData: any;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  forecastData,
}) => {
  const styles = styling();
  console.log("DATA", forecastData);
  return (
    <ReuseContainer styling={styles.mainContainer}>
      <CurrentDayForecast currentData={forecastData.data[0]} />
      <Alerts />
      <CurrentHourlyForecast />
      <FutureForecast futureForecast={forecastData.data.slice(0, 8)} />
      <ExtraDetailsForecast />
    </ReuseContainer>
  );
};
