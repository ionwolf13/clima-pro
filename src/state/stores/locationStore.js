import { create } from "zustand";

export const useLocationStore = create((set) => ({
  currentLocation: null,
  savedLocations: [],
  temperatureUnit: "F",
  favoriteLocation: null,
  isMenuOpen: false,
  updateLocation: (location) => set(() => ({ location: location })),
  updateSavedLocations: (locations) =>
    set(() => ({ savedLocations: locations })),
}));
