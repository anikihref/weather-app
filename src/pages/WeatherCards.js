import React from 'react';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';
import WeatherItem from '../components/WeatherItem.js';
import { useWeatherCards } from '../hook/useWeatherCards'

export default function WeatherContent() {
  const { weatherCards } = useWeatherCards()
  return (
    <div className="main__weather-content weather-content">
      <Container>
        <SearchInput />
      </Container>
      <Container classname="weather-content">
        {weatherCards.map((card, i) => {
          return <WeatherItem key={i} weather={card} classname="weather-content"/>;
        })}
      </Container>
    </div>
  );
}
