import React from "react";
import "./Header.css";
import menuLines from "../../images/menuLines.png";
import weatherlogo from "../../images/weatherlogo.png";
import { IconButton } from "../shared/IconButton/IconButton";

interface HeaderInterface {}

export const Header: React.FC<HeaderInterface> = () => {
  const onClickMenuButton = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("HIT");
  };

  return (
    <div className="header-cont" style={{ display: "flex" }}>
      <IconButton
        icon={menuLines}
        size={"md"}
        style={{ position: "absolute", left: "8vh" }}
        onClick={onClickMenuButton}
      />
      <h3> Gaia's Watch </h3>
      <img src={weatherlogo} alt="Proj Clima Logo" height="50" />
    </div>
  );
};
