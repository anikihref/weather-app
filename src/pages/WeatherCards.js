import React from 'react';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';
import WeatherItem from '../components/WeatherItem.js';
import { useWeatherCards } from '../hook/useWeatherCards';

const APIKey = '04dd498fa79f3f46cf725cb2f616018a'

export default function WeatherContent() {
  const { weatherCards, dispatch, CARD_ACTIONS } = useWeatherCards();
  const handleFind = async (value) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKey}&units=metric`
    ).then(res => res.json());


    switch (data.cod) {
      case 200:
        dispatch({ type: CARD_ACTIONS.ADD_CARD, data: { ...data, value } });
        break;

      case 429: 
        console.info('Reached limit of requests');
        break;

      default:
        console.log('nothing found');
    }
  };

  return (
    <div className="main__weather-content weather-content">
      <Container>
        <SearchInput callback={handleFind} />
      </Container>
      <Container className="weather-content__container">
        {weatherCards.map((card, i) => {
          return (
            <WeatherItem key={i} weather={card} classname="weather-content" />
          );
        })}
      </Container>
    </div>
  );
}
