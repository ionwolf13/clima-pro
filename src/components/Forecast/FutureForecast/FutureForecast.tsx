import React from "react";
import rainIcon from "../../../images/statRain.png";
import "./FutureForecast.css";

interface FutureForecastProps {
  futureForecast: any[];
}

export const FutureForecast: React.FC<FutureForecastProps> = ({
  futureForecast
}) => {
  console.log("THE FUTURE", futureForecast);

  return (
    <div className="future-forecast-container">
      <h2> FUTURE FORECAST</h2>
      <div className="future-forecast-table">
        <div className="future-forecast-table-row">
          <p> Today </p>
          <img src={rainIcon} alt="rain" height="16" />
          <p> 50 *</p>
          <p> 50 *</p>
        </div>
        <div className="future-forecast-table-row">
          <p> Today </p>
          <img src={rainIcon} alt="rain" height="16" />
          <p> 50 *</p>
          <p> 50 *</p>
        </div>
      </div>
    </div>
  );
};
