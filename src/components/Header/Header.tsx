import React from "react";
import "./Header.css";
import gaiaIcon from "../../images/gaiaIcon.jpeg";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import globalSearchIcon from "../../images/globalSearch.webp";
import { TextField, Button } from "@mui/material";

const styling = () => ({
  headerContainer: {
    height: "64px",
  },
});

interface HeaderInterface {
  forecastData: any;
}

export const Header: React.FC<HeaderInterface> = ({ forecastData }) => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.headerContainer}>
      {forecastData ? (
        <ReuseContainer>
          <img src={globalSearchIcon} height={32} />
          <TextField
            value={`${forecastData?.city_name}, ${
              forecastData?.state_code || forecastData?.country_code
            }`}
          />
          <Button variant="contained">Search</Button>
        </ReuseContainer>
      ) : (
        <>
          <h3> Gaia's Watch </h3>
          <img src={gaiaIcon} alt="Proj Clima Logo" height="25" />
        </>
      )}
    </ReuseContainer>
  );
};
