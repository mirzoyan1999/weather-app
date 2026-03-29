import { useWeatherStore } from "../store/weatherStore";

function WeatherCard() {
  const { weather, loading, error } = useWeatherStore();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!weather) {
    return <p>No data</p>;
  }

  return (
    <div className="weather-card top-left">
      <div className="weather-info">
        <h2 className="city-name">{weather.location.name}</h2>
        <p className="temperature">{weather.current.temp_c}°C</p>
        <p className="condition">{weather.current.condition.text}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
