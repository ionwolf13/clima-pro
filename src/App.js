import "./App.css";
import { useEffect, useState } from "react";
import { FooterCont } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.tsx";
import { LocationInput } from "./components/LocationInput/LocationInput";
import { WeekDaysEnum, MonthsEnum } from "./components/shared/Enums/dates";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { forecastData } from "./data/data";
import axios from "axios";

export const App = () => {
  const [location, setLocation] = useState("none");
  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    const date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    setTodaysDate(
      `${WeekDaysEnum[day]}, ${MonthsEnum[month]} ${date.getDate()}, ${year}`
    );
  }, []);

  const [data, setData] = useState(forecastData);

  console.log("INIIA1111", forecastData);
  // useEffect(() => {
  //   console.log("INIIAL", forecastData);
  //   setData(forecastData);
  // }, [forecastData]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${process.env.REACT_APP_API_KEY}`
  //     )
  //     .then((data) => {
  //       console.log("THIS BE THE DATA", data.data);
  //       setLocationData({
  //         cityName: data.data.city_name,
  //         countryCode: data.data.country_code,
  //         foreCast: data.data.data,
  //         lat: data.data.lat,
  //         lon: data.data.lon,
  //         stateCode: data.data.state_code,
  //         timeZone: data.data.timezone,
  //       });
  //     });
  // }, [location]);

  return (
    <div className="app-container">
      <Header forecastData={data} />
      {!data && (
        <LocationInput todaysDate={todaysDate} setLocation={setLocation} />
      )}
      <MainContainer forecastData={data} />
      {/* <input
        value={searchedLocation}
        onChange={(e) => {
          console.log(e.target.value);
          updateSearchedLocation(e.target.value);
        }}
      /> */}
      <FooterCont />
    </div>
  );
};
