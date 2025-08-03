import React from "react";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import { Search, MapPin, Heart, HeartPlus, Star } from "lucide-react";
import {
  TextField,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import { useLocationStoreActions } from "../../state/selectors/actions";
import { useLocationStore } from "../../state";
import { selectTemperatureUnit } from "../../state/selectors/getters";
import { TemperatureUnitEnum } from "../../shared/Enums/weatherEnums";
import { changeTemperatureUnit } from "../../shared/utils/utils";

const styling = () => ({
  headerContainer: {
    height: "auto",
    maxWidth: "600px",
    width: "100%",
    borderRadius: "16px",
    flexDirection: "column",
    padding: "0px 16px 16px 16px",
  },
});

interface HeaderInterface {
  location: string | null;
  setLocation: (value: string) => void;
}

export const Header: React.FC<HeaderInterface> = ({
  location,
  setLocation,
}) => {
  const styles = styling();

  const { setTemperatureUnit } = useLocationStoreActions();
  const temperatureUnit = useLocationStore(selectTemperatureUnit);

  const date = new Date();

  return (
    <ReuseContainer styling={styles.headerContainer}>
      <ReuseContainer
        styling={{
          backgroundColor: "rgba(0,0,0,0)",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <ReuseContainer
          styling={{
            backgroundColor: "rgba(0,0,0,0)",
            height: "64px",
            maxWidth: "240px",
          }}
        >
          <MapPin
            size={24}
            width={24}
            height={24}
            strokeWidth={2.5}
            color="white"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "8px",
              borderRadius: "32px",
            }}
          />
          <ReuseContainer
            styling={{
              backgroundColor: "rgba(0,0,0,0)",
              flexDirection: "column",
            }}
          >
            <ReuseContainer
              styling={{
                backgroundColor: "rgba(0,0,0,0)",
                columnGap: "8px",
              }}
            >
              <p style={{ margin: "0px", fontSize: "large" }}>
                <strong>Houston, TX </strong>
              </p>
              <Tooltip title="Saved">
                <Heart
                  size={20}
                  width={20}
                  height={20}
                  strokeWidth={2.5}
                  color="red"
                  fill="red"
                />
              </Tooltip>
            </ReuseContainer>
            <p style={{ margin: "0px" }}> {date.toLocaleString()} </p>
          </ReuseContainer>
        </ReuseContainer>
        <ReuseContainer
          styling={{
            backgroundColor: "rgba(0,0,0,0)",
            columnGap: "8px",
            maxWidth: "320px",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            size="small"
            placeholder="Search location..."
            onChange={(e) => setLocation(e.target.value)}
            sx={{
              paddingTop: "0px",
              width: "240px",
              borderRadius: "12px",
              backgroundColor: "rgba(250,250,250,0.2)",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                // Default border color
                "& fieldset": {
                  borderColor: "white",
                },
                // Hover border color
                "&:hover fieldset": {
                  borderColor: "white",
                },
                // Focused border color
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white",
                opacity: 1, // Optional: Some browsers fade out placeholders, this ensures full opacity
              },
            }}
            value={location}
          />
          <Tooltip title="Search">
            <Button
              variant="contained"
              sx={{ minWidth: "auto", padding: "8px", borderRadius: "12px" }}
            >
              <Search size={24} width={24} height={24} strokeWidth={2.5} />
            </Button>
          </Tooltip>
          <Tooltip
            title={`Change to ${changeTemperatureUnit(temperatureUnit)}`}
          >
            <Button
              variant="contained"
              sx={{
                minWidth: "40px",
                minHeight: "40px",
                padding: "0px",
                backgroundColor: "purple",
                borderRadius: "12px",
              }}
              onClick={() =>
                setTemperatureUnit(changeTemperatureUnit(temperatureUnit))
              }
            >
              <span style={{ fontSize: "20px" }}>{temperatureUnit}</span>
            </Button>
          </Tooltip>
        </ReuseContainer>
      </ReuseContainer>
      <ReuseContainer
        styling={{
          backgroundColor: "rgba(0,0,0,0)",
          justifyContent: "flex-start",
          columnGap: "8px",
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Houston, TX"}
          onChange={() => {}}
          size="small"
          sx={{
            paddingTop: "0px",
            width: "200px",
            backgroundColor: "rgba(250,250,250,0.2)",
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              // Default border color
              "& fieldset": {
                borderColor: "white",
              },
              // Hover border color
              "&:hover fieldset": {
                borderColor: "white",
              },
              // Focused border color
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "white",
              opacity: 1, // Optional: Some browsers fade out placeholders, this ensures full opacity
            },
          }}
          startAdornment={
            <InputAdornment position="start">
              <Star color="gold" />
            </InputAdornment>
          }
        >
          <MenuItem value={"Houston, TX"}>Houston, TX</MenuItem>
          <MenuItem value={"Dallas, TX"}>Dallas, TX</MenuItem>
          <MenuItem value={"Austin, TX"}>Austin, TX</MenuItem>
        </Select>
      </ReuseContainer>
    </ReuseContainer>
  );
};
