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
import { Droplet, Sun, Wind, WindArrowDown, Eye, Gauge } from "lucide-react";
import { NoBackgroundColor } from "../../shared/constants/colors";

const styling = () => ({
  mainContainer: {
    flexDirection: "column",
    rowGap: "24px",
    flexWrap: "wrap",
    backgroundColor: NoBackgroundColor,
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
    <>
      <CurrentDayForecast currentData={forecastData.data[0]} />
      <Alerts />
      <CurrentHourlyForecast hourlyData={hourlyData} />
      <MiniCardRow
        dataSetOne={{
          title: "Air Quality",
          data: { value: 30 },
          icon: Gauge,
        }}
        dataSetTwo={{
          title: "UV Index",
          data: { value: 30 },
          icon: Sun,
        }}
        dataSetThree={{
          title: "Humidity",
          data: { value: 30 },
          icon: Droplet,
        }}
      />
      <FutureForecast futureForecast={forecastData.data.slice(0, 8)} />
      <ExtraDetailsForecast />
      <MiniCardRow
        dataSetOne={{ title: "Wind", data: { value: 30 }, icon: Wind }}
        dataSetTwo={{
          title: "Pressure",
          data: { value: 30 },
          icon: WindArrowDown,
        }}
        dataSetThree={{
          title: "Visibility",
          data: { value: 30 },
          icon: Eye,
        }}
      />
    </>
  );
};
