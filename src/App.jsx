import "./App.css";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import { useWeatherStore } from "./store/weatherStore";

function App() {
  const { weather } = useWeatherStore();

  // const resForecast = await fetch(
  //   `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=3&aqi=no&alerts=no`
  // );
  // const dataForecast = await resForecast.json();
  // setForecast(dataForecast.forecast.forecastday);

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
      <div className="weather-header">
        {weather ? (
          <img
            className="weather-icon"
            src={`https:${weather?.current?.condition?.icon}`}
            alt={weather?.current?.condition?.text}
          />
        ) : null}
      </div>

      <div className="weather-container">
        <Search />
        <div className="weather-main">
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}

export default App;
