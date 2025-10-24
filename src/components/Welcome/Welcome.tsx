import React from "react";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import { ReuseText } from "../../shared/components/ReuseText/ReuseText";
import "./Welcome.css";

export const Welcome: React.FC = () => {
  return (
    <ReuseContainer className="welcome-container">
      <ReuseText text="Welcome!" />
      <ReuseText text="Search A City!!" />
    </ReuseContainer>
  );
};
