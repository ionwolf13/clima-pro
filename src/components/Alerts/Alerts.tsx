import React from "react";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import { IconStyle } from "../../shared/constants/css";
import { TriangleAlert } from "lucide-react";
import { ReuseText } from "../../shared/components/ReuseText/ReuseText";
import "./Alerts.css";

interface AlertsProps {}

export const Alerts: React.FC<AlertsProps> = () => {
  return (
    <ReuseContainer className="alerts-container" shadow>
      <TriangleAlert color="yellow" style={IconStyle} />
      <ReuseText text={"No Weather Warnings"} />
    </ReuseContainer>
  );
};
