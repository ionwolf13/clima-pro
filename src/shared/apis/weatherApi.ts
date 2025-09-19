import { WeatherResponseType } from "../Types/weatherTypes";

export const callWeatherApi = async (
  location: string,
  country?: string
): Promise<WeatherResponseType | null> => {
  try {
    const countryParameter = country ? `&country=${country}` : "";

    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}${countryParameter}&key=${process.env.REACT_APP_WEATHER_BIT_API_KEY}`,
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
    return null;
  }
};
