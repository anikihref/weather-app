import React, { useEffect, useState, useContext } from 'react';
import { WeatherContext } from './App.js';
import chooseConditionImg from './chooseConditionImg.js';
import formatWindDirection from './formatWindDirection';
import WeatherCategoryItem from './WeatherCategoryItem.js';


import windSvg from './img/icons/wind.svg'
import closeSvg from './img/icons/close.svg';
import windDirectionSvg from './img/icons/wind-direction.svg'
import thermometerSvg from './img/icons/thermometer.svg'

export default function WeatherItem({ weather }) {
  const [path, setPath] = useState('');
  const { deleteCard } = useContext(WeatherContext);

  useEffect(() => {
    setPath(chooseConditionImg(weather.icon));
  }, [weather.icon]);


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
              <img src={path} alt="weather" />
            </div>
          </div>
          

          <button className="weather-item__close-btn" onClick={handleClose}>
            <img src={closeSvg} alt="close" />
          </button>
        </div>

        <div className="weather-item__statistics">
          <WeatherCategoryItem
            weatherStatValue={Math.trunc(weather.temp.default) + '°C'}
            weatherStatName="Temperature"
            weatherStatIcon={thermometerSvg}
          />

          <WeatherCategoryItem
            weatherStatValue={formatWindDirection(weather.wind.deg)}
            weatherStatName="Wind direction"
            weatherStatIcon={windDirectionSvg}
          />

          <WeatherCategoryItem
            weatherStatValue={
              Math.trunc(weather.wind.speed)
            }
            weatherStatName="Wind"
            weatherStatIcon={windSvg}
          />
        </div>
      </div>
    </div>
  );
}
