import React from "react";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";

interface FooterInterface {}

export const Footer: React.FC<FooterInterface> = () => {
  return (
    <ReuseContainer
      styling={{
        flexDirection: "column",
        height: "40px",
      }}
    >
      <p>Copyright © 2021 Unravel | Designed & Built by Unravel</p>
    </ReuseContainer>
  );
};
