import React from "react";
import rainIcon from "../../../images/statRain.png";
import { Day } from "../../shared/Enums/dates";
import { DaysArray } from "../../shared/constants/dateConstants";
import "./FutureForecast.css";

interface FutureForecastProps {
  futureForecast: any[];
}

export const FutureForecast: React.FC<FutureForecastProps> = ({
  futureForecast
}) => {
  console.log("THE FUTURE", futureForecast);
  console.log("ARAY", DaysArray);
  return (
    <div
      className="future-forecast-container"
      style={{
        border: "2px solid black"
      }}
    >
      <h2> FUTURE FORECAST</h2>
      <div className="future-forecast-table">
        {futureForecast.map((data, index) => {
          const dayNumber = new Date(data.datetime).getDay();
          return (
            <div className="future-forecast-table-row">
              <p className="future-forecast-table-row-item">
                {index === 0 ? "Today" : DaysArray[dayNumber]}
              </p>
              <div
                className="future-forecast-table-row-item"
                id="precipitation-column"
              >
                <img src={rainIcon} alt="rain" height="24" width={24} />
                <p>{`${data.pop}  %`}</p>
              </div>
              <p className="future-forecast-table-row-item">
                {data.max_temp} °
              </p>
              <p className="future-forecast-table-row-item">
                {data.min_temp} °
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
