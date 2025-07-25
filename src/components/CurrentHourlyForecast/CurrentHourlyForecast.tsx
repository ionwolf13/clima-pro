import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import icon from "../../images/statLon.png";

const styling = () => ({
  currentHourlyForecastContainer: {
    borderRadius: "16px",
    width: "500px",
    height: "300px",
    flexDirection: "column",
  },
  hourlyContainer: {
    flexDirection: "column",
  },
});

export const CurrentHourlyForecast = () => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.currentHourlyForecastContainer}>
      <p> Mostly cloudy. Lows overnight in the low 80s. </p>
      <ReuseContainer>
        <ReuseContainer styling={styles.hourlyContainer}>
          {dummyData()}
        </ReuseContainer>
        <ReuseContainer styling={styles.hourlyContainer}>
          {dummyData()}
        </ReuseContainer>

        <ReuseContainer styling={styles.hourlyContainer}>
          {dummyData()}
        </ReuseContainer>
        <ReuseContainer styling={styles.hourlyContainer}>
          {dummyData()}
        </ReuseContainer>
        <ReuseContainer styling={styles.hourlyContainer}>
          {dummyData()}
        </ReuseContainer>
      </ReuseContainer>
    </ReuseContainer>
  );
};

const dummyData = () => (
  <>
    <p> 7 am </p>
    <img src={icon} height={32} />
    <p> 92 ° </p>
    <p> * </p>
    <ReuseContainer styling={{ height: "60px", rowGap: "16px" }}>
      <img src={icon} height={32} />
      <p> 0 %</p>
    </ReuseContainer>
  </>
);
