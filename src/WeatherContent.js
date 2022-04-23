import React, { useContext } from 'react';
import { WeatherContext } from './App.js';
import Container from './Container.js';
import WeatherItem from './WeatherItem.js';

export default function WeatherContent() {
  const { weatherCards } = useContext(WeatherContext);

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
