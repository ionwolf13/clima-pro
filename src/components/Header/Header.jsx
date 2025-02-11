import React from "react";
import "./Header.css";
import weatherLogo from "../../pictures/weatherlogo.png";
import menuLines from "../../pictures/menuLines.png";

export const Header = () => {
  const onClickMenuButton = (e) => {
    e.preventDefault();
  };

  return (
    <div className="header-cont" style={{ display: "flex" }}>
      <button className="menu-button" onClick={onClickMenuButton}>
        <img id="menu-button-icon" src={menuLines} />
      </button>
      <h3> Gaia's Watch </h3>
      <img src={weatherLogo} alt="Proj Clima Logo" height="50" />
    </div>
  );
};
