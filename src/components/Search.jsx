function Search({ city, setCity, getWeather }) {
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

      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
}

export default Search;
