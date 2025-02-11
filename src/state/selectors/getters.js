import { useLocationStore } from "../stores/locationStore";

export const selectCurrentLocation = useLocationStore(
  (state) => state.currentLocation
);
export const selectSavedLocations = useLocationStore(
  (state) => state.savedLocations
);
export const selectTemperatureUnit = useLocationStore(
  (state) => state.temperatureUnit
);
export const selectFavoriteLocation = useLocationStore(
  (state) => state.FavoriteLocation
);
export const selectIsMenuOpen = useLocationStore((state) => state.isMenuOpen);
