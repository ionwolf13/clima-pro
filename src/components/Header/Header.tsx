import React from "react";
import "./Header.css";
import menuLines from "../../images/menuLines.png";
import gaiaIcon from "../../images/gaiaIcon.jpeg";
import { IconButton } from "../shared/IconButton/IconButton";

interface HeaderInterface {
  forecastData: any;
}

export const Header: React.FC<HeaderInterface> = ({ forecastData }) => {
  const onClickMenuButton = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("HIT", forecastData);
  };

  return (
    <div className="header-container">
      <IconButton
        icon={menuLines}
        size={"md"}
        style={{ position: "absolute", left: "1vh", top: "1vh" }}
        onClick={onClickMenuButton}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "16px",
        }}
      >
        {forecastData ? (
          <h3>
            {forecastData?.city_name},
            {forecastData?.state_code || forecastData?.country_code}
          </h3>
        ) : (
          <>
            <h3> Gaia's Watch </h3>
            <img src={gaiaIcon} alt="Proj Clima Logo" height="25" />
          </>
        )}
      </div>
    </div>
  );
};
