import React from "react";
import gaiaIcon from "../../images/gaiaIcon.jpeg";
import starIcon from "../../images/star.webp";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import globalSearchIcon from "../../images/globalSearch.webp";
import {
  TextField,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

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
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"Houston, TX"}
            onChange={() => {}}
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <img src={starIcon} height={24} />
              </InputAdornment>
            }
          >
            <MenuItem value={"Houston, TX"}>Houston, TX</MenuItem>
            <MenuItem value={"Dallas, TX"}>Dallas, TX</MenuItem>
            <MenuItem value={"Austin, TX"}>Austin, TX</MenuItem>
          </Select>
          <Button variant="contained">Change to C°</Button>
          <TextField
            size="small"
            label="Location"
            sx={{ paddingTop: "0px", width: "160px" }}
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
