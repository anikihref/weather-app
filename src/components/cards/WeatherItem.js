import React from 'react';
import formatWindDirection from '../../formaters/formatWindDirection';
import WeatherCategoryItem from './WeatherCategoryItem.js';
import { useWeatherCards } from '../../hook/useWeatherCards';
import { getLocaleTime, getLocaleDate } from '../../formaters/formatCardDate';
import PropTypes from 'prop-types';

export default function WeatherItem({ weather }) {
  const { dispatch, CARD_ACTIONS } = useWeatherCards();

  return (
    <div className={`weather-content__item weather-item`}>
      <div className="weather-item__main">
        <div className="weather-item__header">
          <div className="weather-item__main-info">
            <div className="weather-item__city">
              {weather.name} / {weather.country}
            </div>
            <div className="weather-item__weather-img">
              <img src={`/img/conditions/${weather.icon}.png`} alt="weather" />
            </div>
          </div>

          <button
            className="weather-item__close-btn"
            onClick={() =>
              dispatch({
                type: CARD_ACTIONS.REMOVE_CARD,
                data: { id: weather.id },
              })
            }
          >
            <img src={'/img/icons/close.svg'} alt="close" />
          </button>
        </div>

        <div className="weather-item__statistics">
          <WeatherCategoryItem
            weatherStatValue={(
              <>
                <p className='weather-item__date-time'>{getLocaleTime(weather.time)}</p>
                <p className='weather-item__date-date'>{getLocaleDate(weather.time)}</p>
              </>
            )}
            weatherStatName="Date"
            weatherStatIcon="/img/icons/time.svg"
          />

          <WeatherCategoryItem
            weatherStatValue={Math.trunc(weather.temp.default) + '°C'}
            weatherStatName="Temperature"
            weatherStatIcon="/img/icons/thermometer.svg"
          />

          <WeatherCategoryItem
            weatherStatValue={formatWindDirection(weather.wind.deg)}
            weatherStatName="Wind direction"
            weatherStatIcon="/img/icons/wind-direction.svg"
          />

          <WeatherCategoryItem
            weatherStatValue={Math.trunc(weather.wind.speed) + ' km/h'}
            weatherStatName="Wind"
            weatherStatIcon="/img/icons/wind.svg"
          />
        </div>
      </div>
    </div>
  );
}

WeatherItem.propTypes = {
  weather: PropTypes.shape({
    wind: PropTypes.shape({
      speed: PropTypes.number,
      deg: PropTypes.number
    }),
    temp: PropTypes.shape({
      default: PropTypes.number
    }),
    time: PropTypes.number,
    id: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    icon: PropTypes.string
  })
}