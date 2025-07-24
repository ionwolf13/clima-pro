import React from "react";
import "./forecastcont.css";
import { ForecastCard } from "./ForecastCard";

export const ForecastCont = ({
  weekDays,
  todaysNumber,
  currentDegree,
  locationData,
}) => {
  let count = 1;
  let currentNumber = todaysNumber.dayNumber + 1;
  let newWeek = [];

  newWeek = newWeek.concat(
    weekDays.slice(currentNumber, 7),
    weekDays.slice(0, currentNumber)
  );

  return (
    <div className="forecast-cont">
      <h2> Forecast </h2>
      <div className="forecast-days-cont">
        {newWeek.map((day) => (
          <ForecastCard
            data={locationData[count]}
            day={day}
            todaysNumber={todaysNumber}
            currentDegree={currentDegree}
            count={count++}
          />
        ))}
      </div>
    </div>
  );
};
