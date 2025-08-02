import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import icon from "../../images/statLon.png";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts";
import dropsIcon from "../../images/drops.webp";
import sunnyRainIcon from "../../images/sunnyRain.webp";
import cloudSunnyIcon from "../../images/cloudySunny.webp";
import { NoBackgroundColor, WaterColor } from "../../shared/constants/colors";
import { Cloud, Droplets, CloudRainWind, CloudLightning } from "lucide-react";

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
  hourlyData: any;
}

export const CurrentHourlyForecast: React.FC<HourlyForecast> = ({
  hourlyData,
}) => {
  const styles = styling();
  console.log("HOURLY DATA", hourlyData);

  const hourlyTemperatures = hourlyData.data.map(
    (dataSet: any) => dataSet.temp
  );
  const time = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const temps = [
    78, 55, 92, 63, 81, 50, 99, 71, 59, 88, 67, 95, 52, 74, 85, 60, 91, 57, 83,
    69, 97, 65, 76, 53,
  ];
  const dum = [
    2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1,
  ];

  console.log("DATA", hourlyTemperatures, "");

  return (
    <ReuseContainer styling={styles.currentHourlyForecastContainer}>
      <ReuseContainer
        styling={{
          backgroundColor: NoBackgroundColor,
          justifyContent: "flex-start",
          columnGap: "16px",
        }}
      >
        <Cloud
          color="white"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "8px",
            borderRadius: "32px",
          }}
        />
        <span style={{ fontSize: "x-large" }}>
          <strong>Hourly Forecast</strong>
        </span>
      </ReuseContainer>
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
            width: "2400px",
          }}
        >
          {time.map((times, index) => (
            <ReuseContainer
              styling={{
                flexDirection: "column",
                borderRadius: "12px",
                rowGap: "16px",
                padding: "16px",
              }}
            >
              <span style={{ fontSize: "small" }}>
                {times > 12 ? `${times} AM` : `${times} PM`}
              </span>
              {index === 0 ? (
                <CloudRainWind color={WaterColor} />
              ) : (
                <CloudLightning color={WaterColor} />
              )}
              <span style={{ fontSize: "medium" }}>
                <strong>{temps[index]}°C </strong>
              </span>
            </ReuseContainer>
          ))}
        </ReuseContainer>
        <Box sx={{ width: "2340px", marginLeft: "32px" }}>
          <SparkLineChart
            data={hourlyTemperatures}
            height={80}
            showHighlight
            showTooltip
            color={"#1591EA"}
            valueFormatter={(value) => `${value}°C`}
          />
        </Box>
        <ReuseContainer
          styling={{
            columnGap: "10px",
            fontSize: "small",
            backgroundColor: NoBackgroundColor,
            width: "2400px",
          }}
        >
          {time.map((times, index) => (
            <ReuseContainer
              styling={{
                backgroundColor: NoBackgroundColor,
              }}
            >
              <Droplets color={WaterColor} />
              <span> {dum[index]}%</span>
            </ReuseContainer>
          ))}
        </ReuseContainer>
      </ReuseContainer>
    </ReuseContainer>
  );
};
