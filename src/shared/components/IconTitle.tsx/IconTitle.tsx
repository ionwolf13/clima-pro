import { ReuseContainer } from "../ReuseContainer/ReuseContainer";
import { IconStyle } from "../../constants/css";
import "./IconTitle.css";
import { ReuseText } from "../ReuseText/ReuseText";
import React from "react";

interface IconTitleInterface {
  icon: React.ElementType;
  iconColor?: string;
  title?: string;
  titleSize?: string;
  position?: string;
  bold?: boolean;
}

export const IconTitle: React.FC<IconTitleInterface> = ({
  icon,
  iconColor = "white",
  title,
  bold = false
}) => {
  const Icon = icon;

  return (
    <ReuseContainer className={`icon-title-container `} clearBackground>
      <Icon color={iconColor} style={IconStyle} />
      {title && <ReuseText text={title} bold={bold} />}
    </ReuseContainer>
  );
};
