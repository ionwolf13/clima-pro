import { TemperatureUnitEnum } from "../Enums/weatherEnums";

export type TemperatureUnitType = `${TemperatureUnitEnum}`;

export type DailyForecastType = {
  app_max_temp: number | null;
  app_min_temp: number | null;
  clouds: number | null;
  clouds_hi: number | null;
  clouds_low: number | null;
  clouds_mid: number | null;
  datetime: string | null;
  dewpt: number | null;
  high_temp: number | null;
  low_temp: number | null;
  max_dhi: null;
  max_temp: number | null;
  min_temp: number | null;
  moon_phase: number | null;
  moon_phase_lunation: number | null;
  moonrise_ts: number | null;
  moonset_ts: number | null;
  ozone: number | null;
  pop: number | null;
  precip: number | null;
  pres: number | null;
  rh: number | null;
  slp: number | null;
  snow: number | null;
  snow_depth: number | null;
  sunrise_ts: number | null;
  sunset_ts: number | null;
  temp: number | null;
  ts: number | null;
  uv: number | null;
  valid_date: string | null;
  vis: number | null;
  weather: {
    icon: string | null;
    code: number | null;
    description: string | null;
  };
  wind_cdir: string | null;
  wind_cdir_full: string | null;
  wind_dir: number | null;
  wind_gust_spd: number | null;
  wind_spd: number | null;
};

export type WeatherResponseType = {
  city_name: string;
  country_code: string;
  lat: number;
  lon: number;
  state_code: string;
  timezone: string;
  data: DailyForecastType[];
};

export interface WeatherIcon {
  day: string;
  night: string;
}

export interface WeatherDetail {
  description: string;
  icons: WeatherIcon;
}

export type WeatherDictionary = Record<number, WeatherDetail>;
