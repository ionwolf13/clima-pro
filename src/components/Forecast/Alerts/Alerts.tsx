import React from "react";
import alertIcon from "../../../images/warning.jpeg";
import "./Alerts.css";

interface AlertsProps {}

export const Alerts: React.FC<AlertsProps> = () => {
  return (
    <div
      className="alerts-container"
      style={
        {
          // border: "2px solid black",
          // padding: "0px 8px"
        }
      }
    >
      <img src={alertIcon} alt="warning" height={24} />
      <h5> No Warnings Today</h5>
    </div>
  );
};
