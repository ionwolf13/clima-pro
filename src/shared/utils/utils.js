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

export const debounce = (func, wait) => {
  // `timeoutId` is stored in a closure, so it persists across calls to the returned function.
  let timeoutId;

  // This is the debounced function that will be returned and used by the caller.
  return function (...args) {
    // Save the `this` context of the original function call.
    const context = this;

    // Clear any existing timeout. This is the core of the debounce logic.
    // If the function is called again before the timer runs out, the timer is reset.
    clearTimeout(timeoutId);

    // Set a new timeout.
    timeoutId = setTimeout(() => {
      // After the `wait` time has elapsed, execute the original function
      // with the correct `this` context and arguments.
      func.apply(context, args);
    }, wait);
  };
};
