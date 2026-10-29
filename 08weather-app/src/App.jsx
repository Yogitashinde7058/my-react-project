import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);

  const handleSearch = async() => {
      if (city.trim() === "") {
          alert("Please enter city name");  
          return;
  }

  const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );

  const data = await response.json();
      console.log(data);

      if (!data.results) {
          alert("City not found!");
          return;
      }

  const latitude = data.results[0].latitude;
  const longitude = data.results[0].longitude;

      console.log(latitude, longitude);

  const weatherResponse = await fetch(
           `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
      );

  const weatherData = await weatherResponse.json();
        setTemperature(weatherData.current.temperature_2m);
  }

  return (
    <div className="app">
      <div className="weather-card">
        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={handleSearch}>Search Weather</button>
      

        <p>City: {city}</p>
        <p>Temperature: {temperature !== null ? `${temperature}°C` : "Search a city"}</p>
        <p>Sunny</p>
      </div>
    </div>
  );
}

export default App;