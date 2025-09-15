import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts";
import { WaterColor } from "../../shared/constants/css";
import { Cloud, Droplets, CloudRainWind, CloudLightning } from "lucide-react";
import { WeatherDataType } from "../../shared/Types/weatherTypes";
import { IconTitle } from "../../shared/components/IconTitle.tsx/IconTitle";
import { ReuseText } from "../../shared/components/ReuseText/ReuseText";
import "./HourlyForecast.css";

interface HourlyForecastInterface {
  hourlyData: WeatherDataType[];
}

export const HourlyForecast: React.FC<HourlyForecastInterface> = ({
  hourlyData
}) => {
  const times = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24
  ];

  return (
    <ReuseContainer className="hourly-forecast-container">
      <IconTitle icon={Cloud} title="Hourly Forecast" />
      <ReuseText bold text={`Mostly cloudy. Lows overnight in the low 80s.`} />

      <ReuseContainer className="hourly-chart-flow-container" clearBackground>
        <ReuseContainer clearBackground className="chart-hourly-temperature">
          {hourlyData.map((dataSet, index) => (
            <ReuseContainer
              key={`${dataSet.datetime}-hourly-cont`}
              className="chart-hourly-card"
            >
              <ReuseText
                text={`${
                  times[index] > 12
                    ? `${times[index]} AM`
                    : `${times[index]} PM`
                }`}
              />
              {index === 0 ? (
                <CloudRainWind color={WaterColor} />
              ) : (
                <CloudLightning color={WaterColor} />
              )}
              <ReuseText text={`${dataSet.temp}°C`} />
            </ReuseContainer>
          ))}
        </ReuseContainer>
        <Box sx={{ width: "1520px", marginLeft: "40px" }}>
          <SparkLineChart
            data={hourlyData.map((data) => data.temp || 0)}
            height={80}
            showHighlight
            showTooltip
            color={"#1591EA"}
            valueFormatter={(value) => `${value}°C`}
          />
        </Box>
        <ReuseContainer className="hourly-data-container" clearBackground>
          {hourlyData.map((dataSet, index) => (
            <ReuseContainer
              key={`${dataSet.datetime}-precip-cont`}
              className="hourly-data-section"
            >
              <Droplets color={WaterColor} />
              <ReuseText text={`${dataSet.precip?.toFixed(1)} mm`} />
            </ReuseContainer>
          ))}
        </ReuseContainer>
      </ReuseContainer>
    </ReuseContainer>
  );
};
