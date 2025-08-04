import { create } from "zustand";

export const useLocationStore = create((set) => ({
  // Initial States
  currentLocation: null,
  favoriteLocations: [],
  temperatureUnit: "C°",
  // Actions
  actions: {
    setCurrentLocation: (location) => set({ currentLocation: location }),
    updateFavoriteLocations: (locations) =>
      set({ favoriteLocations: locations }),
    setTemperatureUnit: (unit) =>
      set({
        temperatureUnit: unit,
      }),
  },
}));
