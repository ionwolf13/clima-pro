import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import icon from "../../images/statLon.png";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts";

const styling = () => ({
  currentHourlyForecastContainer: {
    borderRadius: "16px",
    width: "500px",
    height: "300px",
    flexDirection: "column",
    overFlow: "scroll",
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
    2, 0, 3, 1, 2, 0, 3, 1, 2, 0, 3, 1, 2, 0, 3, 1, 2, 0, 3, 1, 2, 0, 3, 1,
  ];

  console.log("DATA", hourlyTemperatures, "");

  return (
    <ReuseContainer styling={styles.currentHourlyForecastContainer}>
      <h3> Mostly cloudy. Lows overnight in the low 80s. </h3>
      <ReuseContainer
        styling={{
          columnGap: "10px",
          fontSize: "x-small",
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        {time.map((times, index) => (
          <ReuseContainer
            styling={{
              flexDirection: "column",
              backgroundColor: "rgba(0,0,0,0)",
            }}
          >
            <p style={{ fontSize: "xx-small" }}>{times}</p>
            <p>{temps[index]} </p>
            <p>{dum[index]} </p>
          </ReuseContainer>
        ))}
      </ReuseContainer>
      <Box sx={{ flexGrow: 1, width: "92%" }}>
        <SparkLineChart
          data={hourlyTemperatures}
          height={100}
          showHighlight
          showTooltip
          color={"#f56942"}
        />
      </Box>
    </ReuseContainer>
  );
};
