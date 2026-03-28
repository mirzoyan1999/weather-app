import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
// import Forecast from "./components/Forecast";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [forecast, setForecast] = useState([]);

  const getWeather = async (cityName) => {
    if (!cityName.trim()) return;

    setLoading(true);

    try {
      const resWeather = await fetch(
        `${import.meta.env.VITE_WEATHER_API_URL}current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${cityName}&aqi=no`
      );
      const dataWeather = await resWeather.json();
      setWeather(dataWeather);

      // const resForecast = await fetch(
      //   `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=3&aqi=no&alerts=no`
      // );
      // const dataForecast = await resForecast.json();
      // setForecast(dataForecast.forecast.forecastday);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setWeather(null);
      // setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  // Conditional class based on weather
  let appClass = "app";
  if (weather) {
    const condition = weather.current.condition.text.toLowerCase();
    if (condition.includes("sun")) {
      appClass += " sunny";
    } else if (condition.includes("cloud")) {
      appClass += " cloudy";
    } else if (condition.includes("rain")) {
      appClass += " rainy";
    } else if (condition.includes("snow")) {
      appClass += " snowy";
    }
  }

  return (
    <div className={appClass}>
      <div className="weather-container">
        <Search city={city} setCity={setCity} getWeather={getWeather} />
        <div className="weather-main">
          {/* <Forecast forecast={forecast} /> */}
          <WeatherCard weather={weather} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
