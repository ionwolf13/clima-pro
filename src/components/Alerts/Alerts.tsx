import React from "react";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import { IconStyle } from "../../shared/constants/css";
import { TriangleAlert } from "lucide-react";
import "./Alerts.css";

interface AlertsProps {}

export const Alerts: React.FC<AlertsProps> = () => {
  return (
    <ReuseContainer className="alerts-container">
      <TriangleAlert color="yellow" style={IconStyle} />
      <h5> No Weather Warnings </h5>
    </ReuseContainer>
  );
};
