import React, {  useContext } from 'react';
import { WeatherContext } from './App.js';
import formatWindDirection from './formatWindDirection';
import WeatherCategoryItem from './WeatherCategoryItem.js';



export default function WeatherItem({ weather }) {
  const { deleteCard } = useContext(WeatherContext);


  function handleClose() {
    deleteCard(weather.id);
  }

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
          

          <button className="weather-item__close-btn" onClick={handleClose}>
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
