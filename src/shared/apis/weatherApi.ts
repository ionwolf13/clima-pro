import { WeatherResponseType } from "../Types/weatherTypes";
import { GeocodingDataType } from "../Types/locationTypes";
import { emptyWeatherResponse } from "../../data/data";

export const callWeatherApi = async (
  location: GeocodingDataType
): Promise<WeatherResponseType | null> => {
  try {
    const locationName = `${location.name}, ${location.state}`;
    const countryParameter = location.country
      ? `&country=${location.country}`
      : "";

    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${locationName}${countryParameter}&key=${process.env.REACT_APP_WEATHER_BIT_API_KEY}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (!response.ok) throw new Error("Failed to fetch weather Data.");

    const responseJson = await response.json();

    return responseJson;
  } catch (e) {
    console.error("Error: ", e);
    return emptyWeatherResponse;
  }
};
