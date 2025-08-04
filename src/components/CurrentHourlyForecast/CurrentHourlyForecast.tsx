import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts";
import { NoBackgroundColor, WaterColor } from "../../shared/constants/css";
import { Cloud, Droplets, CloudRainWind, CloudLightning } from "lucide-react";
import { WeatherDataType } from "../../shared/Types/weatherTypes";
import { IconTitle } from "../../shared/components/IconTitle.tsx/IconTitle";

const styling = () => ({
  currentHourlyForecastContainer: {
    borderRadius: "16px",
    width: "600px",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "8px 16px",
  },
  hourlyContainer: {
    flexDirection: "column",
  },
});

interface HourlyForecast {
  hourlyData: WeatherDataType[];
}

export const CurrentHourlyForecast: React.FC<HourlyForecast> = ({
  hourlyData,
}) => {
  const styles = styling();

  const times = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <ReuseContainer styling={styles.currentHourlyForecastContainer}>
      <IconTitle icon={Cloud} title="Hourly Forecast" />
      <span style={{ textAlign: "left", width: "100%", marginBottom: "16px" }}>
        <strong>Mostly cloudy. Lows overnight in the low 80s.</strong>
      </span>
      <ReuseContainer
        styling={{
          flexDirection: "column",
          overflow: "scroll",
          alignItems: "flex-start",
          backgroundColor: NoBackgroundColor,
        }}
      >
        <ReuseContainer
          styling={{
            columnGap: "16px",
            fontSize: "small",
            backgroundColor: NoBackgroundColor,
            width: "1600px",
          }}
        >
          {hourlyData.map((dataSet, index) => (
            <ReuseContainer
              key={`${dataSet.datetime}-hourly-cont`}
              styling={{
                flexDirection: "column",
                borderRadius: "12px",
                rowGap: "16px",
                padding: "16px",
              }}
            >
              <span style={{ fontSize: "small" }}>
                {times[index] > 12
                  ? `${times[index]} AM`
                  : `${times[index]} PM`}
              </span>
              {index === 0 ? (
                <CloudRainWind color={WaterColor} />
              ) : (
                <CloudLightning color={WaterColor} />
              )}
              <span style={{ fontSize: "medium" }}>
                <strong>{dataSet.temp}°C </strong>
              </span>
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
        <ReuseContainer
          styling={{
            columnGap: "16px",
            fontSize: "small",
            backgroundColor: NoBackgroundColor,
            width: "1600px",
          }}
        >
          {hourlyData.map((dataSet, index) => (
            <ReuseContainer
              key={`${dataSet.datetime}-precip-cont`}
              styling={{
                // backgroundColor: NoBackgroundColor,
                borderRadius: "12px",
                columnGap: "4px",
              }}
            >
              <Droplets color={WaterColor} />
              <span> {dataSet.precip?.toFixed(1)} mm</span>
            </ReuseContainer>
          ))}
        </ReuseContainer>
      </ReuseContainer>
    </ReuseContainer>
  );
};
