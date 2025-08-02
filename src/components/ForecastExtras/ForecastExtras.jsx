import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { SparkLineChart } from "@mui/x-charts";
import { NoBackgroundColor } from "../../shared/constants/colors";
import { Sunrise, Sunset } from "lucide-react";

const styling = () => ({
  extraDetailsContainer: {
    width: "640px",
    height: "300px",
    borderRadius: "16px",
  },
});

export const ExtraDetailsForecast = ({
  titleOne = "lol",
  titleTwo = "LOL",
  titleThree = "Lmfao",
}) => {
  const styles = styling();

  return (
    <ReuseContainer
      styling={{
        height: "200px",
        width: "640px",
        position: "relative",
        flexDirection: "column",
        borderRadius: "16px",
        justifyContent: "flex-start",
      }}
    >
      <ReuseContainer
        styling={{
          backgroundColor: NoBackgroundColor,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <ReuseContainer
          styling={{
            backgroundColor: NoBackgroundColor,
            alignItems: "flex-start",
            columnGap: "16px",
          }}
        >
          <Sunrise
            color="#f48037"
            style={{
              backgroundColor: "rgba(244, 128, 55, 0.1)",
              padding: "8px",
              borderRadius: "32px",
            }}
          />
          <span style={{ marginTop: "10px" }}>
            <strong>Sunrise</strong>
          </span>
        </ReuseContainer>
        <ReuseContainer
          styling={{
            backgroundColor: NoBackgroundColor,
            alignItems: "flex-start",
            columnGap: "16px",
          }}
        >
          <span style={{ marginTop: "10px" }}>
            <strong>Sunset</strong>
          </span>
          <Sunset
            color="#f48037"
            style={{
              backgroundColor: "rgba(244, 128, 55, 0.1)",
              padding: "8px",
              borderRadius: "32px",
            }}
          />
        </ReuseContainer>
      </ReuseContainer>
      <div style={{ position: "absolute", left: "171px", top: "103px" }}>
        <Gauge
          color="#FAA500"
          width={130}
          height={84}
          value={30}
          startAngle={180}
          endAngle={90}
          text={({ value }) => `${value} %`}
          sx={{
            ["& .MuiGauge-valueText"]: {
              fontSize: 24,
              fontWeight: 800,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#f48037",
            },
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "245px",
          zIndex: "1",
          bottom: "60px",
        }}
      >
        <Gauge
          color="#FAA500"
          width={150}
          height={150}
          value={70}
          startAngle={-90}
          endAngle={90}
          text={({ value }) => `${value} %`}
          sx={{
            ["& .MuiGauge-valueText"]: {
              fontSize: 24,
              fontWeight: 800,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#f48037",
            },
          }}
        />
      </div>
      <div style={{ position: "absolute", right: "171px", top: "103px" }}>
        <Gauge
          color="#FAA500"
          width={130}
          height={84}
          value={70}
          startAngle={-90}
          endAngle={-180}
          text={({ value }) => `${value} %`}
          sx={{
            ["& .MuiGauge-valueText"]: {
              fontSize: 24,
              fontWeight: 800,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#f48037",
            },
          }}
        />
      </div>
    </ReuseContainer>
  );
};
