import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import MainCard from './components/MainCard';
import BottomCard from './components/BottomCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = '043ca34bbac667acfd52fffe844de462';
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      Promise.all([axios.get(weatherUrl), axios.get(forecastUrl)])
        .then(([weatherResponse, forecastResponse]) => {
          setWeatherData(weatherResponse.data);
          setForecastData(forecastResponse.data);
          setLocation('');
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  };

  return (
    <div className="App">
      <Container>
        <SearchBar location={location} setLocation={setLocation} onSearch={searchLocation} />
        <MainCard data={weatherData} />
        <BottomCard data={forecastData} />
      </Container>
    </div>
  );
}

export default App;
