import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";

const styling = () => ({
  extraDetailsContainer: {
    width: "500px",
    height: "300px",
    borderRadius: "16px",
  },
});

export const ExtraDetailsForecast = () => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.extraDetailsContainer}>
      Extra Details Forecast
    </ReuseContainer>
  );
};
