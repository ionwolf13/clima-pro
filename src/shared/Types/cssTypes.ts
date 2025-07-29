import React from "react";
import { SizesEnum } from "../Enums/sizes";

export type SizesType = `${SizesEnum}`;
export type CSSPropertiesType = () => Record<string, React.CSSProperties>;
