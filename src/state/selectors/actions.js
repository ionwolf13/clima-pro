import { useLocationStore } from "../stores/locationStore";

export const useLocationStoreActions = useLocationStore((state) => state.actions)