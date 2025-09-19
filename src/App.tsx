import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainContainer } from "./components/MainContainer/MainContainer";

export const App = () => {
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${process.env.REACT_APP_API_KEY}`
  //     )
  //     .then((data) => {
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

  // useEffect(() => {
  //   axios
  //     .get(
  //       // `https://api.weatherbit.io/v2.0/current?city=${"Houston"}&key=fe5a73e5fa9a4032a9655c9efb577197&include=minutely`
  //       `https://api.weatherbit.io/v2.0/history/hourly?city=${"Houston"}&start_date=2025-02-12&end_date=2025-02-13&&key=fe5a73e5fa9a4032a9655c9efb577197&include=minutely`
  //     )
  //     .then((data) => {
  //       //       setLocationData({
  //       //         cityName: data.data.city_name,
  //       //         countryCode: data.data.country_code,
  //       //         foreCast: data.data.data,
  //       //         lat: data.data.lat,
  //       //         lon: data.data.lon,
  //       //         stateCode: data.data.state_code,
  //       //         timeZone: data.data.timezone,
  //     });
  // }, []);

  return (
    <div className="app-container">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
};
