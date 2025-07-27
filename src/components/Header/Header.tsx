import React from "react";
import "./Header.css";
import gaiaIcon from "../../images/gaiaIcon.jpeg";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import globalSearchIcon from "../../images/globalSearch.webp";
import { TextField, Button, InputAdornment } from "@mui/material";

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
        <ReuseContainer styling={{ columnGap: "16px" }}>
          <Button variant="contained">Degrees to C °</Button>
          <TextField
            size="small"
            label="Search"
            sx={{ paddingTop: "0px" }}
            value={`${forecastData?.city_name}, ${
              forecastData?.state_code || forecastData?.country_code
            }`}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={globalSearchIcon} height={24} />
                  </InputAdornment>
                ),
              },
            }}
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
