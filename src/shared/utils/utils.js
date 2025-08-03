import { TemperatureUnitEnum } from "../Enums/weatherEnums";

export const cel2Far = (celsius) => {
  let farenheit = (celsius * 9) / 5 + 32;
  return farenheit;
};

export const changeTemperatureUnit = (currentUnit) => {
  return currentUnit === TemperatureUnitEnum.C
    ? TemperatureUnitEnum.F
    : TemperatureUnitEnum.C;
};
