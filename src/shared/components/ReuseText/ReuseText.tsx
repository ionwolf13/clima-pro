import React from "react";
import { Typography } from "@mui/material";
import "./ReuseText.css";

interface ReuseTextInterface {
  text: string;
  bold?: boolean;
  variant?:
    | "subtitle1"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit"
    | undefined;
}

export const ReuseText: React.FC<ReuseTextInterface> = React.memo(
  ({ text, bold, variant = "subtitle1" }) => {
    return (
      <Typography className={`${bold ? "bold-text" : ""}`} variant={variant}>
        {text}
      </Typography>
    );
  }
);
