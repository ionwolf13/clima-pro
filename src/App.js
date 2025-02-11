import "./App.css";
import { useEffect, useState } from "react";
import { FooterCont } from "./components2/Footer/FooterCont.jsx";
import { Header } from "./components2/Header/HeaderCont.jsx";
import { NavCont } from "./components2/NavCont/NavCont.jsx";
import ForecastCont from "./components2/ForecastCont/ForecastCont";
import MainCard from "./components2/MainCard/MainCard";
import statCelsius from "./pictures/statCelsius.png";
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
  }, [location]);
  console.log("API", process.env.REACT_APP_API_KEY);
  useEffect(() => {
    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((data) => {
        console.log("THIS BE THE DATA", data.data);
        setLocationData({
          cityName: data.data.city_name,
          countryCode: data.data.country_code,
          foreCast: data.data.data,
          lat: data.data.lat,
          lon: data.data.lon,
          stateCode: data.data.state_code,
          timeZone: data.data.timezone,
        });
      });
  }, [location]);

  return (
    <div className="app-comp">
      <Header />
      <NavCont
        clock={clock}
        todaysDate={todaysDate}
        setLocation={setLocation}
      />
      {location === "none" ? null : (
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
      )}
      <FooterCont />
    </div>
  );
}

export default App;
