import React from "react";
import { ReuseContainer } from "../../shared/components/ReuseContainer/ReuseContainer";
import "./Footer.css";

interface FooterInterface {}

export const Footer: React.FC<FooterInterface> = () => {
  return (
    <ReuseContainer className="footer-container">
      Copyright © 2021 Unravel | Designed & Built by Unravel
    </ReuseContainer>
  );
};
