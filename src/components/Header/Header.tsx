import React from "react";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import { Search, MapPin, Heart, HeartPlus, Star } from "lucide-react";
import {
  TextField,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Tooltip,
  Autocomplete
} from "@mui/material";
import { useLocationStoreActions } from "../../state/selectors/actions";
import { useLocationStore } from "../../state";
import {
  selectCurrentLocation,
  selectTemperatureUnit
} from "../../state/selectors/getters";
import { changeTemperatureUnit } from "../../shared/utils/utils";
import { debounce } from "../../shared/utils/utils";
import { callLocationApi } from "../../shared/apis/locationApi";
import { GeocodingDataType } from "../../shared/Types/locationTypes";
import { IconStyle } from "../../shared/constants/css";
import { ReuseText } from "../../shared/components/ReuseText/ReuseText";
import "./Header.css";

interface HeaderInterface {}

export const Header: React.FC<HeaderInterface> = () => {
  // Local states to manage inputs and api calls
  const [location, setLocation] = React.useState<string>("");
  const [locationsList, setLocationsList] = React.useState<GeocodingDataType[]>(
    []
  );
  // Global states to manage app data
  const { setTemperatureUnit, setCurrentLocation } = useLocationStoreActions();
  const temperatureUnit = useLocationStore(selectTemperatureUnit);
  const currentLocation = useLocationStore(selectCurrentLocation);

  const date = new Date();

  const debouncedApiCall = React.useCallback(
    debounce(async (value: string) => {
      if (value !== "") {
        const response = await callLocationApi(value);
        setLocationsList(response);
      }
    }, 1000),
    [] // Empty dependency array ensures the function is created only once
  );
  console.log("THE LOCATION", location);
  const onChangeSearch = (value: string) => {
    setLocation(value);
    debouncedApiCall(value);
  };

  return (
    <ReuseContainer className="header-container">
      <ReuseContainer clearBackground>
        <ReuseContainer clearBackground>
          <MapPin
            size={24}
            width={24}
            height={24}
            strokeWidth={2.5}
            color="white"
            style={IconStyle}
          />
          <ReuseContainer clearBackground className="header-location-container">
            <ReuseContainer clearBackground>
              <ReuseText
                text={`${
                  currentLocation
                    ? `${currentLocation?.name}, ${currentLocation?.state},
                 $ {currentLocation?.country}`
                    : " - - - "
                }`}
              />
              <Tooltip title="Add To Favorites">
                <Button
                  variant="text"
                  color="error"
                  sx={{ width: "40px", minWidth: "40px", padding: "4px 0px" }}
                >
                  {temperatureUnit === "C°" ? (
                    <Heart
                      size={20}
                      width={20}
                      height={20}
                      strokeWidth={2.5}
                      color="red"
                      fill="red"
                    />
                  ) : (
                    <HeartPlus
                      size={20}
                      width={20}
                      height={20}
                      strokeWidth={2.5}
                      color="red"
                    />
                  )}
                </Button>
              </Tooltip>
            </ReuseContainer>
            <ReuseText text={date.toLocaleString()} />
          </ReuseContainer>
        </ReuseContainer>
        <ReuseContainer clearBackground className="header-search-container">
          <Autocomplete
            size="small"
            options={locationsList.map(
              (locationData) =>
                `${locationData.name}, ${locationData.state}, ${locationData.country}`
            )}
            onInputChange={(e, value) => onChangeSearch(value)}
            renderInput={(params) => (
              <TextField {...params} label="Search Location..." />
            )}
            open={locationsList.length !== 0}
            onChange={(e, value) => {
              const splitValue = value?.split(",").map((word) => word.trim());

              if (splitValue !== undefined) {
                setCurrentLocation(
                  locationsList.find(
                    (item) =>
                      item.name === splitValue[0] &&
                      item.state === splitValue[1] &&
                      item.country === splitValue[2]
                  ) || null
                );
              }
              // After Selecting an Option, Reset the Input and Options back to empty string and array
              setLocation("");
              setLocationsList([]);
            }}
            sx={{
              width: "300px",
              paddingTop: "0px",
              borderRadius: "12px",
              backgroundColor: "rgba(250,250,250,0.2)",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "white"
                },
                "&:hover fieldset": {
                  borderColor: "white"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white"
                }
              },
              "& .MuiInputBase-input": {
                color: "white"
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white",
                opacity: 1
              }
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
                borderRadius: "12px"
              }}
              onClick={() =>
                setTemperatureUnit(changeTemperatureUnit(temperatureUnit))
              }
            >
              <ReuseText text={`${temperatureUnit}`} bold />
            </Button>
          </Tooltip>
        </ReuseContainer>
      </ReuseContainer>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={""}
        onChange={() => {}}
        size="small"
        sx={{
          paddingTop: "0px",
          width: "240px",
          backgroundColor: "rgba(250,250,250,0.2)",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            // Default border color
            "& fieldset": {
              borderColor: "white"
            },
            // Hover border color
            "&:hover fieldset": {
              borderColor: "white"
            },
            // Focused border color
            "&.Mui-focused fieldset": {
              borderColor: "white"
            }
          },
          "& .MuiInputBase-input": {
            color: "white"
          },
          "& .MuiInputBase-input::placeholder": {
            color: "white",
            opacity: 1 // Optional: Some browsers fade out placeholders, this ensures full opacity
          }
        }}
        startAdornment={
          <InputAdornment position="start">
            <Star color="gold" />
          </InputAdornment>
        }
      >
        {/* {[].map((locationData) => (
            <MenuItem
              value={`${locationData.name}, ${locationData.state}, $
            {locationData.country}`}
            >
              `${locationData.name}, ${locationData.state}, $
              {locationData.country}`
            </MenuItem>
          ))} */}
      </Select>
    </ReuseContainer>
  );
};
