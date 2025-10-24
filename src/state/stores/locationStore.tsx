import { create } from "zustand";
import { GeocodingDataType } from "../../shared/Types/locationTypes";
import { callWeatherApi } from "../../shared/apis/weatherApi";
import { WeatherResponseType } from "../../shared/Types/weatherTypes";
import { emptyWeatherResponse } from "../../data/data";

type LocationState = {
  currentLocation: GeocodingDataType | null;
  favoriteLocations: string[];
  temperatureUnit: "C°" | "F°";
  isLoadingWeather: boolean;
  currentWeather: WeatherResponseType | null;
  actions: {
    setCurrentLocation: (params: GeocodingDataType | null) => void;
    // updateFavoriteLocations: (params: {
    //   favoriteLocations: GeocodingDataType[];
    // }) => void;
    setTemperatureUnit: (params: "C°" | "F°") => void;
    fetchLocationWeather: () => void;
  };
};

export const useLocationStore = create<LocationState>((set, get) => ({
  // Initial States
  currentLocation: null,
  favoriteLocations: [],
  temperatureUnit: "C°",
  isLoadingWeather: false,
  currentWeather: emptyWeatherResponse,
  // Actions
  actions: {
    setCurrentLocation: (location) => set({ currentLocation: location }),
    // updateFavoriteLocations: (locations) =>
    //   set({ favoriteLocations: locations }),
    setTemperatureUnit: (unit) =>
      set({
        temperatureUnit: unit
      }),
    fetchLocationWeather: async () => {
      const { currentLocation } = get();
      console.log("current", currentLocation);
      if (!currentLocation) return;
      set({ isLoadingWeather: true });
      

      const weatherData = await callWeatherApi(
        currentLocation
      );
      set({ currentWeather: weatherData, isLoadingWeather: false });
    }
  }
}));
