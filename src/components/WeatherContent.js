import React from 'react';
import Container from './Container';
import WeatherItem from './WeatherItem.js';
import { useWeatherCards } from '../hook/useWeatherCards'

export default function WeatherContent() {
  const { weatherCards } = useWeatherCards()
  return (
    <div className="main__weather-content weather-content">
      <Container classname="weather-content">
        {weatherCards.map((card, i) => {
          return <WeatherItem key={i} weather={card} classname="weather-content"/>;
        })}
      </Container>
    </div>
  );
}
