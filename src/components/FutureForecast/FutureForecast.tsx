import React from "react";
import { DaysArray } from "../../shared/constants/dateConstants";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import rainDropsIcon from "../../images/rainDrops.webp";
import { Sun } from "lucide-react";
import { IconTitle } from "../../shared/components/IconTitle.tsx/IconTitle";
import { ReuseText } from "../../shared/components/ReuseText/ReuseText";
import "./FutureForecast.css";

interface FutureForecastProps {
  futureForecast: any[];
}

export const FutureForecast: React.FC<FutureForecastProps> = ({
  futureForecast
}) => {
  return (
    <ReuseContainer className="future-container" shadow>
      <IconTitle icon={Sun} title={"7-Day Outlook"} />
      <ReuseContainer clearBackground className="future-data-container">
        {futureForecast.map((data, index) => {
          const dayNumber = new Date(data.datetime).getDay();
          return (
            <ReuseContainer
              key={`forecast-${index === 0 ? "Today" : dayNumber}`}
              className="future-row-data"
              shadow
            >
              <ReuseContainer
                clearBackground
                className="future-precipitation-container"
              >
                <ReuseText
                  text={index === 0 ? "Today" : DaysArray[dayNumber]}
                />
                <ReuseContainer
                  clearBackground
                  className="future-precipitation"
                >
                  <img src={rainDropsIcon} alt="rain" height="24" width={24} />
                  <ReuseText text={`${data.pop}  %`} />
                </ReuseContainer>
              </ReuseContainer>
              <ReuseContainer className="future-temperature" clearBackground>
                <ReuseText text={`${data.max_temp}°C`} />
                <ReuseText text={`${data.min_temp}°C`} />
              </ReuseContainer>
            </ReuseContainer>
          );
        })}
      </ReuseContainer>
    </ReuseContainer>
  );
};
