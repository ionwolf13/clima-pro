import "./App.css";
import { useEffect, useState } from "react";
import { FooterCont } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.tsx";
import { NavCont } from "./components/NavCont/NavCont.jsx";
import ForecastCont from "./components/ForecastCont/ForecastCont";
import MainCard from "./components/MainCard/MainCard";
import statCelsius from "./images/statCelsius.png";
import { useLocationStore } from "./state";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("none");
  const [locationData, setLocationData] = useState({});
  const [clock, setClock] = useState(null);
  const [todaysDate, setTodaysDate] = useState("");
  const [todaysNumber, setTodaysNumber] = useState({
    day: "",
    month: "",
    dayName: "",
    monthName: "",
  });
  const [currentDegree, setCurrentDegree] = useState({
    degree: "Celsius",
    degreePic: statCelsius,
  });

  const searchedLocation = useLocationStore((state) => state.location);
  const updateSearchedLocation = useLocationStore(
    (state) => state.updateLocation
  );

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesay",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let day = date.getDay();
      let month = date.getMonth();
      let year = date.getFullYear();
      setClock(date.toLocaleTimeString());
      setTodaysDate(
        `${weekDays[day]}, ${monthsYear[month]} ${date.getDate()}, ${year}`
      );
      setTodaysNumber({
        dayNumber: day,
        day: `${date.getDate()}`,
        month: month,
        dayName: `${weekDays[day]}`,
        monthName: `${monthsYear[month]}`,
      });
    }, 60000);
  }, []);
  console.log("API", process.env.REACT_APP_API_KEY);
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
      <Header />
      <NavCont
        clock={clock}
        todaysDate={todaysDate}
        setLocation={setLocation}
      />
      <input
        value={searchedLocation}
        onChange={(e) => {
          console.log(e.target.value);
          updateSearchedLocation(e.target.value);
        }}
      />
      {/* {location !== null && (
        <>
          <MainCard
            locationData={locationData}
            location={location}
            todaysNumber={todaysNumber}
            currentDegree={currentDegree}
            setCurrentDegree={setCurrentDegree}
          />
          <ForecastCont
            locationData={locationData.foreCast}
            weekDays={weekDays}
            todaysNumber={todaysNumber}
            currentDegree={currentDegree}
          />
        </>
      )} */}
      <FooterCont />
    </div>
  );
}

export default App;
