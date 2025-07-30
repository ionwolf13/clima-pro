import React from "react";
import { Gauge } from "@mui/x-charts";

type GaugePropertyType = React.ComponentProps<typeof Gauge>;

interface ReuseGaugeCardProps {
  data: GaugePropertyType;
}

export const ReuseGaugeCard: React.FC<ReuseGaugeCardProps> = ({ data }) => {
  return (
    <Gauge
      width={data.width ?? 160}
      height={data.height ?? 110}
      value={data.value}
      startAngle={data.startAngle ?? -90}
      endAngle={data.endAngle ?? 90}
      text={({ value }) => `${value} %`}
      sx={{
        ["& .MuiGauge-valueText"]: {
          fontSize: 24,
          fontWeight: 800,
        },
      }}
    />
  );
};
