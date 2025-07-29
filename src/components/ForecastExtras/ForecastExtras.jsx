import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { Gauge } from "@mui/x-charts/Gauge";

const styling = () => ({
  extraDetailsContainer: {
    width: "500px",
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
        width: "500px",
        // backgroundColor: "rgba(0,0,0,0)",
        justifyContent: "flex-start",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <h4 style={{ marginTop: "10px" }}> Sunrise / Sunset </h4>
      <div style={{ position: "absolute", left: "78px", top: "80px" }}>
        <Gauge
          width={130}
          height={130}
          value={30}
          startAngle={225}
          endAngle={90}
          text={({ value }) => `${value} %`}
          sx={{
            ["& .MuiGauge-valueText"]: {
              fontSize: 24,
              fontWeight: 800,
            },
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "175px",
          zIndex: "1",
          bottom: "44px",
        }}
      >
        <Gauge
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
          }}
        />
      </div>
      <div style={{ position: "absolute", right: "78px", top: "80px" }}>
        <Gauge
          width={130}
          height={130}
          value={70}
          startAngle={-90}
          endAngle={-225}
          text={({ value }) => `${value} %`}
          sx={{
            ["& .MuiGauge-valueText"]: {
              fontSize: 24,
              fontWeight: 800,
            },
          }}
        />
      </div>
    </ReuseContainer>
  );
};
