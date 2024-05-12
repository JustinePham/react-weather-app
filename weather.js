import React from 'react';
import { useState } from 'react';
import './weather.scss';
export default function Weather() {
  const api = {
    key: 'd42c31b9ced94ac18d3211406241005',
    base: 'https://api.weatherapi.com/v1',
  };

  //JSON: http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const getWindDirection = (dir) => {
    switch (dir) {
      case 'NNW':
        return (
          <span class="material-symbols-outlined direction">north_west</span>
        );
      case 'NNE':
        return (
          <span class="material-symbols-outlined direction">north_east</span>
        );
      case 'SSE':
        return (
          <span class="material-symbols-outlined direction">south_east</span>
        );
      case 'SSW':
        return (
          <span class="material-symbols-outlined direction">south_west</span>
        );
      case 'S':
        return <span class="material-symbols-outlined direction">south</span>;
      case 'E':
        return <span class="material-symbols-outlined direction">east</span>;
      case 'N':
        return (
          <span class="material-symbols-outlined direction">south_west</span>
        );
      case 'W':
        return <span class="material-symbols-outlined direction">west</span>;
      default:
        return '-';
    }
  };

  const getConditions = () => {
    return <img src={`${weather.current?.condition?.icon}`} />;
  };
  const onSearch = () => {
    fetch(`${api.base}/current.json?key=${api.key}&q=${search}&aqi=no`)
      .then((value) => value.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div class="weather-container">
      <h2 class="title">Weather</h2>
      <div class="weather-search">
        <input
          class="weather-search-bar input"
          type="text"
          placeholder=" Search location..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button class="weather-search-btn" onClick={() => onSearch()}>
          <span class="material-symbols-outlined search-icon">search</span>
        </button>
      </div>
      <h4 class="area">Location:</h4>
      <h2 class="area">
        {weather.location
          ? `${weather.location.name}, ${weather.location.region} region, ${weather.location.country}`
          : '-'}
      </h2>
      <div class="conditions">
        {weather.current?.condition ? getConditions() : ''}
        {weather.current?.condition.text}
      </div>
      <br />
      <div class="weather-container-info">
        <div class="weather-container--sub temperature">
          <span class="material-symbols-outlined">device_thermostat</span>
          {weather.current?.temp_c ? weather.current?.temp_c + '°C' : '-'}
        </div>
        <div class="weather-container--sub wind">
          <span class="material-symbols-outlined">air</span> {}
          {weather.current?.wind_kph ? weather.current?.wind_kph + ' kph' : '-'}
          {weather.current?.wind_dir
            ? getWindDirection(weather.current.wind_dir)
            : ''}
        </div>
        <div class="weather-container--sub humidity">
          <span class="material-symbols-outlined">water_drop</span>
          {weather.current?.humidity ? weather.current?.humidity + '%' : '-'}
        </div>
      </div>
    </div>
  );
}
