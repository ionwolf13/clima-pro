import React from "react";
import { DaysArray } from "../../shared/constants/dateConstants";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import rainDropsIcon from "../../images/rainDrops.webp";
import { Sun } from "lucide-react";
import { NoBackgroundColor } from "../../shared/constants/css";
import { IconTitle } from "../../shared/components/IconTitle.tsx/IconTitle";
import "./FutureForecast.css";

const styling = () => ({
  futureForecastContainer: {
    width: "600px",
    flexDirection: "column",
    borderRadius: "16px",
    padding: "8px 16px",
  },
});
interface FutureForecastProps {
  futureForecast: any[];
}

export const FutureForecast: React.FC<FutureForecastProps> = ({
  futureForecast,
}) => {
  const styles = styling();
  console.log("cast,", futureForecast);
  return (
    <ReuseContainer styling={styles.futureForecastContainer}>
      <IconTitle icon={Sun} title={"7-Day Outlook"} />
      <ReuseContainer
        styling={{
          flexDirection: "column",
          backgroundColor: NoBackgroundColor,
          rowGap: "8px",
        }}
      >
        {futureForecast.map((data, index) => {
          const dayNumber = new Date(data.datetime).getDay();
          return (
            <ReuseContainer
              key={`forecast-${index === 0 ? "Today" : dayNumber}`}
              styling={{
                borderRadius: "12px",
                justifyContent: "space-between",
              }}
            >
              <ReuseContainer
                styling={{
                  backgroundColor: NoBackgroundColor,
                  width: "32%",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ marginLeft: "16px" }}>
                  <strong>
                    {index === 0 ? "Today" : DaysArray[dayNumber]}
                  </strong>
                </span>
                <ReuseContainer
                  styling={{
                    backgroundColor: NoBackgroundColor,
                    width: "50%",
                  }}
                >
                  <img src={rainDropsIcon} alt="rain" height="24" width={24} />
                  <span>
                    <strong>{`${data.pop}  %`}</strong>
                  </span>
                </ReuseContainer>
              </ReuseContainer>
              <ReuseContainer
                styling={{
                  backgroundColor: NoBackgroundColor,
                  width: "24%",
                  paddingRight: "16px",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <strong>{data.max_temp}°C</strong>
                </span>
                <span>
                  <strong>{data.min_temp}°C</strong>
                </span>
              </ReuseContainer>
            </ReuseContainer>
          );
        })}
      </ReuseContainer>
    </ReuseContainer>
  );
};
