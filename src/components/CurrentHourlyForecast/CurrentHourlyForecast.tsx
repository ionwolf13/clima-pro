import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import icon from "../../images/statLon.png";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts";
import dropsIcon from "../../images/drops.webp";
import sunnyRainIcon from "../../images/sunnyRain.webp";
import cloudSunnyIcon from "../../images/cloudySunny.webp";

const styling = () => ({
  currentHourlyForecastContainer: {
    borderRadius: "16px",
    width: "500px",
    height: "360px",
    flexDirection: "column",
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
      <h4>Mostly cloudy. Lows overnight in the low 80s. </h4>
      <ReuseContainer
        styling={{
          flexDirection: "column",
          overflow: "scroll",
          alignItems: "flex-start",
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        <ReuseContainer
          styling={{
            columnGap: "24px",
            fontSize: "small",
            backgroundColor: "rgba(0,0,0,0)",
            width: "1610px",
          }}
        >
          {time.map((times, index) => (
            <ReuseContainer
              styling={{
                flexDirection: "column",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            >
              <p style={{ fontSize: "small" }}>
                {times > 12 ? `${times} AM` : `${times} PM`}
              </p>
              <img
                src={index === 0 ? sunnyRainIcon : cloudSunnyIcon}
                height={16}
              />
              <p>{temps[index]} °</p>
            </ReuseContainer>
          ))}
        </ReuseContainer>
        <Box sx={{ width: "1600px" }}>
          <SparkLineChart
            data={hourlyTemperatures}
            height={80}
            showHighlight
            showTooltip
            color={"#f56942"}
          />
        </Box>
        <ReuseContainer
          styling={{
            columnGap: "10px",
            fontSize: "small",
            backgroundColor: "rgba(0,0,0,0)",
            width: "1600px",
          }}
        >
          {time.map((times, index) => (
            <ReuseContainer
              styling={{
                backgroundColor: "rgba(0,0,0,0)",
              }}
            >
              <img src={dropsIcon} height={16} />
              <p> % {dum[index]} </p>
            </ReuseContainer>
          ))}
        </ReuseContainer>
      </ReuseContainer>
    </ReuseContainer>
  );
};
