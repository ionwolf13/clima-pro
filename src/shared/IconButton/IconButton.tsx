import React, { FC } from "react";
import { SizesType } from "../Types/cssTypes";
import { SizesEnum } from "../Enums/sizes";
import "./IconButton.css";

interface IconButtonInterface {
  size: SizesType;
  icon: string;
  style: React.CSSProperties;
  onClick: (e: React.MouseEvent) => void;
}

export const IconButton: FC<IconButtonInterface> = (props) => {
  const { size = SizesEnum.MEDIUM, icon, ...restProps } = props;
  return (
    <button {...restProps} className="icon-button" id={`button-size-${size}`}>
      <img id={`button-icon-size-${size}`} src={icon} alt={`icon`} />
    </button>
  );
};
