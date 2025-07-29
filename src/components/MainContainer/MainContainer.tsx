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
import { MiniCardRow } from "../MiniCardRow/MiniCardRow";

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
      <MiniCardRow
        dataSetOne={{ title: "Air Quality Index", data: { value: 30 } }}
        dataSetTwo={{ title: "UV Index", data: { value: 30 } }}
        dataSetThree={{ title: "Humidity", data: { value: 30 } }}
      />
      <FutureForecast futureForecast={forecastData.data.slice(0, 8)} />
      <ExtraDetailsForecast />
      <MiniCardRow
        dataSetOne={{ title: "Wind", data: { value: 30 } }}
        dataSetTwo={{ title: "Pressure", data: { value: 30 } }}
        dataSetThree={{ title: "Visibility", data: { value: 30 } }}
      />
      {/* <MiniCardRow dataSetOne={"Pressure"} dataSetTwo={"Visibility"} />*/}
    </ReuseContainer>
  );
};
