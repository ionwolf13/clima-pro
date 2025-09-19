import { GeocodingDataType } from "../Types/locationTypes";

export const callLocationApi = async (location: string) => {
  try {
    if (location === "") return [];

    const response = await fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=${location}&country=`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-Api-Key": `${process.env.REACT_APP_LOCATION_API_KEY}`
        }
      }
    );
    if (!response.ok) throw new Error("Failed to obtain locations.");
    const responseJson: GeocodingDataType[] = await response.json();

    return responseJson;
  } catch (e) {
    console.error("Error: ", e);
    return [];
  }
};
