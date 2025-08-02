import React from "react";
import alertIcon from "../../images/warning.jpeg";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import "./Alerts.css";
import { TriangleAlert } from "lucide-react";

const styling = () => ({
  alertsContainer: {
    columnGap: "16px",
    height: "64px",
    width: "600px",
    borderRadius: "16px",
    justifyContent: "flex-start",
    padding: "0px 16px",
  },
});

interface AlertsProps {}

export const Alerts: React.FC<AlertsProps> = () => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.alertsContainer}>
      <TriangleAlert color="yellow" />
      <h5> No Weather Warnings </h5>
    </ReuseContainer>
  );
};
