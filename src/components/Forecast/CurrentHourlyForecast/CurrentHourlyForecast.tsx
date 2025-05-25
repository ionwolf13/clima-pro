import React from "react";

export const CurrentHourlyForecast = () => {
  return (
    <div
      style={{
        // border: "2px solid black",
        borderRadius: "8px",
        maxWidth: "500px",
        width: "100%",
        maxHeight: "480px",
        height: "100%",
        minHeight: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "16px",
        padding: "0px 8px",
        backgroundColor: " rgba(255, 255, 255, 0.2)"
      }}
    >
      Today's Hourly Forecast
    </div>
  );
};
