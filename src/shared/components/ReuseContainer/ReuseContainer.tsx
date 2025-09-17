import React from "react";
import "./ReuseContainer.css";

interface ReuseContainerProps {
  children: React.ReactNode;
  clearBackground?: boolean;
  className?: string;
  shadow?: boolean;
}

export const ReuseContainer: React.FC<ReuseContainerProps> = React.memo(
  (props) => {
    return (
      <div
        className={`reusable-container ${props.className} ${
          props.clearBackground ? `clear-background` : ``
        } ${props.shadow ? "shadow" : ""}`}
      >
        {props.children}
      </div>
    );
  }
);
