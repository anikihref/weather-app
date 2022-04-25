import React from 'react';
import formatWindDirection from '../format-values/formatWindDirection';
import WeatherCategoryItem from './WeatherCategoryItem.js';
import { useWeatherCards } from '../hook/useWeatherCards'


export default function WeatherItem({ weather }) {
  const { deleteCard } = useWeatherCards();

  return (
    <div className="weather-content__item weather-item">
      <div className="weather-item__main">
        <div className="weather-item__header">
          <div className='weather-item__main-info'>
            <div className='weather-item__city'>
              {weather.name} / {weather.country}
            </div>
            <div className='weather-item__weather-img'>
              <img src={`/img/conditions/${weather.icon}.png`} alt="weather" />
            </div>
          </div>
          

          <button className="weather-item__close-btn" onClick={() => deleteCard(weather.id)}>
            <img src={'/img/icons/close.svg'} alt="close" />
          </button>
        </div>

        <div className="weather-item__statistics">
          <WeatherCategoryItem
            weatherStatValue={Math.trunc(weather.temp.default) + '°C'}
            weatherStatName="Temperature"
            weatherStatIcon='/img/icons/thermometer.svg'
          />

          <WeatherCategoryItem
            weatherStatValue={formatWindDirection(weather.wind.deg)}
            weatherStatName="Wind direction"
            weatherStatIcon='/img/icons/wind-direction.svg'
          />

          <WeatherCategoryItem
            weatherStatValue={
              Math.trunc(weather.wind.speed) + ' km/h'
            }
            weatherStatName="Wind"
            weatherStatIcon='/img/icons/wind.svg'
          />
        </div>
      </div>
    </div>
  );
}
