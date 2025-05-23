import React from "react";
import { Alerts } from "../Alerts/Alerts";

export const CurrentHourlyForecast = () => {
  return (
    <div
      style={{
        border: "2px solid black",
        maxWidth: "800px",
        width: "100%",
        maxHeight: "480px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "16px",
        padding: "8px",
        backgroundColor: " rgba(255, 255, 255, 0.2)"
      }}
    >
      <Alerts />
      Today's Hourly Forecast
    </div>
  );
};
