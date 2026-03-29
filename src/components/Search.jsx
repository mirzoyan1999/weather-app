import { useWeatherStore } from "../store/weatherStore";

function Search() {

  const { city, setCity, getWeather } = useWeatherStore();

  const handleSearch = () => {
    if (!city.trim()) return;
    getWeather(city);
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      />
    </div>
  );
}

export default Search;
