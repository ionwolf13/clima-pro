import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";

export const MiniCard: React.FC<any> = ({ titleOne, titleTwo }) => {
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
          height: "220px",
          width: "220px",
          borderRadius: "16px",
        }}
      >
        <h3> {titleOne} </h3>
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
          height: "220px",
          width: "220px",
          borderRadius: "16px",
        }}
      >
        <h3> {titleTwo} </h3>
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
