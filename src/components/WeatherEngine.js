import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/Component";

function WeatherEngine({ location }) {
  // const location = "sydney, au";

  const [query, setQuery] = useState("");
  // const [city, setCity] = useState("");
  // const [temp, setTemp] = useState("");
  // const [condition, setCondition] = useState("");
  // const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
    message: null
  });

  const getWeather = async q => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=a62ccbd3d0187b46b8b021d77783f1e8`
    );
    const resJSON = await apiRes.json();
    // return resJSON;
    if (resJSON.cod === 200) {
      setWeather({
        city: resJSON.name,
        country: resJSON.sys.country,
        condition: resJSON.weather[0].main,
        temp: resJSON.main.temp
      });
    } else if (resJSON.cod !== 200) {
      setWeather({
        message: resJSON.message
      });
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
    // console.log(res);
    // setTemp(res.main.temp);
    // setCondition(res.weather[0].main);
    // setCountry(res.sys.country);
    // setCity(res.name);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="weather-wrap">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
        message={weather.message}
      />

      <form>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Find a city..."
        />
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default WeatherEngine;
