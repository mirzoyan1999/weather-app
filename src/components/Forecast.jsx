function Forecast({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="forecast">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <div>
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </div>
          <div>Max: {day.day.maxtemp_c}°C</div>
          <div>Min: {day.day.mintemp_c}°C</div>
          <div>{day.day.condition.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
