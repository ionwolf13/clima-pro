import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { NoBackgroundColor } from "../../shared/constants/css";
import { Sunrise, Sunset } from "lucide-react";
import { IconTitle } from "../../shared/components/IconTitle.tsx/IconTitle";

const styling = () => ({
  extraDetailsContainer: {
    width: "600px",
    height: "300px",
    borderRadius: "16px",
  },
});

export const ExtraDetailsForecast = ({}) => {
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
        <IconTitle
          icon={Sunrise}
          title="Sunrise"
          iconColor="#f48037"
          position="center"
        />
        <IconTitle
          icon={Sunset}
          title="Sunset"
          iconColor="#f48037"
          position="center"
        />
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
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#f48037",
            },
          }}
        />
      </div>
    </ReuseContainer>
  );
};
