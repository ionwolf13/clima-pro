import React from "react";
import "./MainContainer.css";
import { CurrentDayForecast } from "../CurrentDayForecast/CurrentDayForecast";
import { FutureForecast } from "../FutureForecast/FutureForecast";
import { CurrentHourlyForecast } from "../CurrentHourlyForecast/CurrentHourlyForecast";
import { ExtraDetailsForecast } from "../ForecastExtras/ForecastExtras";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { Alerts } from "../Alerts/Alerts";
import { hourlyData } from "../../data/hourlyData";
import { MiniCard } from "../MiniCard/MiniCard";

const styling = () => ({
  mainContainer: {
    // height: "100vh",
    flexDirection: "column",
    rowGap: "24px",
    flexWrap: "wrap",
    backgroundColor: "rgba(0,0,0,0)",
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
  console.log("DATA", forecastData);
  return (
    <ReuseContainer styling={styles.mainContainer}>
      <CurrentDayForecast currentData={forecastData.data[0]} />
      <Alerts />
      <CurrentHourlyForecast hourlyData={hourlyData} />
      <MiniCard
        titleOne={"Air Quality Index"}
        titleTwo={"UV Index"}
        titleThree={"Humidity"}
      />
      <FutureForecast futureForecast={forecastData.data.slice(0, 8)} />
      <ExtraDetailsForecast />
      <MiniCard
        titleOne={"Wind"}
        titleTwo={"Pressure"}
        titleThree={"Visibility"}
      />
      {/* <MiniCard titleOne={"Pressure"} titleTwo={"Visibility"} />*/}
    </ReuseContainer>
  );
};
