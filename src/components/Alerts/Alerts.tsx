import React from "react";
import alertIcon from "../../images/warning.jpeg";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import "./Alerts.css";

const styling = () => ({
  alertsContainer: {
    columnGap: "16px",
    height: "64px",
    width: "500px",
    borderRadius: "16px",
  },
});

interface AlertsProps {}

export const Alerts: React.FC<AlertsProps> = () => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.alertsContainer}>
      <img src={alertIcon} alt="warning" height={24} />
      <h5> No Warnings Today</h5>
    </ReuseContainer>
  );
};
