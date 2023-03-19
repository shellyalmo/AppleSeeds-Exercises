import React, { useState } from 'react';
import axios from 'axios';

function WeatherApp() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/api/weather?location=${location}`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
      setError('Error fetching weather data. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={handleLocationChange} />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
        <div>
          <h2>Current Weather in {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;