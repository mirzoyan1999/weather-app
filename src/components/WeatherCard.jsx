function WeatherCard({ weather, loading }) {
  // get zustand store
  if (loading) {
    return <div>Loading...</div>;
  }

  // եթե weather-ը չկա, մի փորձիր կարդալ ինչ-որ բան
  if (!weather) {
    return <div>Enter city name...</div>;
  }

  return (
    <div className="card">
      <h2>{weather.location.name}</h2>
      <h1>{weather.current.temp_c}°C</h1>
      <p>{weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="icon" />
    </div>
  );
}

export default WeatherCard;
