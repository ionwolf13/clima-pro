import React from "react";
import { DaysArray } from "../../shared/constants/dateConstants";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import rainDropsIcon from "../../images/rainDrops.webp";
import { Sun } from "lucide-react";
import { NoBackgroundColor } from "../../shared/constants/colors";
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

  return (
    <ReuseContainer styling={styles.futureForecastContainer}>
      <ReuseContainer
        styling={{
          backgroundColor: NoBackgroundColor,
          columnGap: "16px",
          justifyContent: "flex-start",
        }}
      >
        <Sun
          color="white"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "8px",
            borderRadius: "32px",
          }}
        />
        <span style={{ fontSize: "x-large" }}>
          <strong>7-Day Outlook</strong>
        </span>
      </ReuseContainer>
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
