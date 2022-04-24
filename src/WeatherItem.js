import React, { useEffect, useState, useContext } from 'react';
import { WeatherContext } from './App.js';
import chooseConditionImg from './chooseConditionImg.js';
import formatWindDirection from './formatWindDirection'
import closeSvg from './img/icons/close.svg'

export default function WeatherItem({ weather }) {
  const [path, setPath] = useState('');
  const { deleteCard } = useContext(WeatherContext)

  useEffect(() => {
    setPath(chooseConditionImg(weather.icon));
  }, []);

  function handleClose() {
    console.log(deleteCard);
    deleteCard(weather.id)
  } 

  return (
    <div className="weather-content__item weather-item">
      <div className="weather-item__main">
        <div className="weather-item__city">
          {weather.name} / {weather.country}
          <button className='weather-item__close-btn' onClick={handleClose}>
            <img src={closeSvg} alt='close' />
          </button>
        </div>

        <div className="weather-item__env">
          <div className="weather-item__main-stat">
            <div className="weather-item__env-temperature">
              <h5 className="weather-item__category-title">
                Temperature
              </h5>
              <p className="weather-item__env-temperature-value">
                {Math.trunc(weather.temp.default)} °C
              </p>
            </div>

            <div className="weather-item__wind">
              <h5 className="weather-item__category-title">Wind:</h5>
              <div className="weather-item__wind-stats">
                <div className="weather-item__wind-direction">
                  {formatWindDirection(weather.wind.deg)}
                </div>
                <div className="weather-item__wind-speed">
                  {Math.trunc(weather.wind.speed)}
                  <span className="weather-item__wind-speed-unit">Km/hour</span>
                </div>
              </div>
            </div>

            <div className="weather-item__pressure">
              <h5 className="weather-item__category-title">Pressure</h5>
              <div className="weather-item__pressure-value">
                {weather.pressure}
              </div>
            </div>

            <div className="weather-item__env-weather">
              <h5 className="weather-item__category-title">Weather </h5>
              <div className="weather-item__env-weather-img">
                <img src={path} alt="weather" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="weather-item__alternate"></div>
    </div>
  );
}
