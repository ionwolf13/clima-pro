import React from "react";
import { DaysArray } from "../../shared/constants/dateConstants";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import rainDropsIcon from "../../images/rainDrops.webp";
import "./FutureForecast.css";

const styling = () => ({
  futureForecastContainer: {
    width: "640px",
    flexDirection: "column",
    borderRadius: "16px",
    height: "460px",
  },
});
interface FutureForecastProps {
  futureForecast: any[];
}

export const FutureForecast: React.FC<FutureForecastProps> = ({
  futureForecast,
}) => {
  const styles = styling();
  console.log("THE FUTURE", futureForecast);
  console.log("ARAY", DaysArray);
  return (
    <ReuseContainer styling={styles.futureForecastContainer}>
      <div className="future-forecast-table-row">
        <p className="future-forecast-table-row-item">Day</p>
        <p className="future-forecast-table-row-item">Precipitation</p>
        <p className="future-forecast-table-row-item">Max °</p>
        <p className="future-forecast-table-row-item">Min °</p>
      </div>
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
              <img src={rainDropsIcon} alt="rain" height="24" width={24} />
              <p>{`${data.pop}  %`}</p>
            </div>
            <p className="future-forecast-table-row-item">{data.max_temp} °</p>
            <p className="future-forecast-table-row-item">{data.min_temp} °</p>
          </div>
        );
      })}
    </ReuseContainer>
  );
};
