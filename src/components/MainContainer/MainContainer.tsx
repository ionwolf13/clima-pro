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
import dropPercentIcon from "../../images/dropPercent.webp";
import sunRaysIcon from "../../images/sunRays.webp";
import visibilityIcon from "../../images/visibility.webp";
import windIcon from "../../images/wind.webp";
import airQualityIcon from "../../images/airQualityIndex.webp";
import pressureIcon from "../../images/pressure.webp";

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
        dataSetOne={{
          title: "Air Quality",
          data: { value: 30 },
          icon: airQualityIcon,
        }}
        dataSetTwo={{
          title: "UV Index",
          data: { value: 30 },
          icon: sunRaysIcon,
        }}
        dataSetThree={{
          title: "Humidity",
          data: { value: 30 },
          icon: dropPercentIcon,
        }}
      />
      <FutureForecast futureForecast={forecastData.data.slice(0, 8)} />
      <ExtraDetailsForecast />
      <MiniCardRow
        dataSetOne={{ title: "Wind", data: { value: 30 }, icon: windIcon }}
        dataSetTwo={{
          title: "Pressure",
          data: { value: 30 },
          icon: pressureIcon,
        }}
        dataSetThree={{
          title: "Visibility",
          data: { value: 30 },
          icon: visibilityIcon,
        }}
      />
    </ReuseContainer>
  );
};
