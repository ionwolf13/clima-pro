import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";

export const MiniCard: React.FC<any> = ({ titleOne, titleTwo, titleThree }) => {
  return (
    <ReuseContainer
      styling={{
        height: "200px",
        width: "500px",
        backgroundColor: "rgba(0,0,0,0)",
        justifyContent: "space-between",
      }}
    >
      <ReuseContainer
        styling={{
          flexDirection: "column",
          height: "160px",
          width: "160px",
          borderRadius: "16px",
        }}
      >
        <h4> {titleOne} </h4>
        <Gauge
          width={160}
          height={160}
          value={30}
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
      </ReuseContainer>
      <ReuseContainer
        styling={{
          flexDirection: "column",
          height: "160px",
          width: "160px",
          borderRadius: "16px",
        }}
      >
        <h4> {titleTwo} </h4>
        <Gauge
          width={160}
          height={160}
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
      </ReuseContainer>
      <ReuseContainer
        styling={{
          flexDirection: "column",
          height: "160px",
          width: "160px",
          borderRadius: "16px",
        }}
      >
        <h4> {titleThree} </h4>
        <Gauge
          width={160}
          height={160}
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
      </ReuseContainer>
    </ReuseContainer>
  );
};
