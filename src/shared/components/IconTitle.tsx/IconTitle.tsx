import { ReuseContainer } from "../ReuseContainer/ReuseContainer";
import { NoBackgroundColor, IconStyle } from "../../constants/css";
import React from "react";

interface IconTitleInterface {
  icon: React.ElementType;
  iconColor?: string;
  title?: string;
  titleSize?: string;
  position?: string;
}

export const IconTitle: React.FC<IconTitleInterface> = ({
  icon,
  iconColor = "white",
  title,
  titleSize = "x-large",
  position = "flex-start",
}) => {
  const Icon = icon;

  return (
    <ReuseContainer
      styling={{
        backgroundColor: NoBackgroundColor,
        columnGap: "8px",
        height: "40px",
        justifyContent: position,
      }}
    >
      <Icon color={iconColor} style={IconStyle} />
      {title && (
        <span style={{ fontSize: titleSize }}>
          <strong>{title}</strong>
        </span>
      )}
    </ReuseContainer>
  );
};
