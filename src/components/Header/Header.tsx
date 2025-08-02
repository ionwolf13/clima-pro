import React from "react";
import gaiaIcon from "../../images/gaiaIcon.jpeg";
import starIcon from "../../images/star.webp";
import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import globalSearchIcon from "../../images/globalSearch.webp";
import {
  Cloud,
  CloudRain,
  Sun,
  Zap,
  Search,
  MapPin,
  Heart,
  HeartPlus,
  Star,
} from "lucide-react";
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
    height: "auto",
    maxWidth: "600px",
    width: "100%",
    borderRadius: "16px",
    flexDirection: "column",
    padding: "0px 16px 16px 16px",
  },
});

interface HeaderInterface {
  forecastData: any;
}

export const Header: React.FC<HeaderInterface> = ({ forecastData }) => {
  const styles = styling();

  const date = new Date();

  const [input, setInput] = React.useState<string>("");

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
              <Heart
                size={20}
                width={20}
                height={20}
                strokeWidth={2.5}
                color="red"
                fill="red"
              />
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
            onChange={(e) => setInput(e.target.value)}
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
            // value={`${forecastData?.city_name}, ${
            //   forecastData?.state_code || forecastData?.country_code
            // }`}
            value={input}
          />
          <Button
            variant="contained"
            sx={{ minWidth: "auto", padding: "8px", borderRadius: "12px" }}
          >
            <Search size={24} width={24} height={24} strokeWidth={2.5} />
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: "40px",
              minHeight: "40px",
              padding: "0px",
              backgroundColor: "purple",
              borderRadius: "12px",
            }}
          >
            <span style={{ fontSize: "20px" }}>C°</span>
          </Button>
        </ReuseContainer>
      </ReuseContainer>
      {/* <ReuseContainer
        styling={{
          backgroundColor: "rgba(0,0,0,0)",
          justifyContent: "flex-start",
          // paddingLeft: "32px",
          columnGap: "8px",
        }}
      >
        <Star color="gold" size={16} />
        <p> Quick Access: </p>
        <Button
          variant="outlined"
          sx={{
            minWidth: "auto",
            padding: "8px",
            borderRadius: "12px",
            borderColor: "white",
            borderWidth: "0.5px",
            color: "white",
          }}
        >
          Houston, TX
        </Button>
        <Button
          variant="outlined"
          sx={{
            minWidth: "auto",
            padding: "8px",
            borderRadius: "12px",
            borderColor: "white",
            borderWidth: "0.5px",
            color: "white",
          }}
        >
          Houston, TX
        </Button>
        <Button
          variant="outlined"
          sx={{
            minWidth: "auto",
            padding: "8px",
            borderRadius: "12px",
            borderColor: "white",
            borderWidth: "0.5px",
            color: "white",
          }}
        >
          Houston, TX
        </Button>
      </ReuseContainer> */}
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
