import React from 'react';
import ForecastItemCategory from './ForecastCategoryItem';
import formatWindDirection from '../formaters/formatWindDirection'

export default function ForecastItem({ forecast }) {
  return (
    <div className="forecast-item">
      <div className="forecast-item__header">
        <div className="forecast-item__header-top">
          <h3 className="forecast-item__title">{forecast.dateName}</h3>
          <div className="forecast-item__weather-img">
            <img
              src={`/img/conditions/${forecast.weather[0].icon}.png`}
              alt="weather"
            />
          </div>
        </div>
        <div className="forecast-item__header-bottom">
          <h4 className="forecast-item__weather-name">{forecast.weather[0].description}</h4>
        </div>
      </div>
      <div className="forecast-item__content">

        <div className="forecast-item__category-section">
          <h4 className="forecast-item__category-name">Temperature:</h4>
          <ul className="forecast-item__categories">
            <ForecastItemCategory name="air" value={forecast.temp || forecast.temp_day} />
            <ForecastItemCategory
              name="feels like"
              value={forecast.feels_like || forecast.feels_like_day}
            />
            
            {forecast.temp_min ? (
              <ForecastItemCategory
              name="min/max"
              value={`${Math.trunc(forecast.temp_min)} / ${Math.trunc(forecast.temp_max)}`}
            />
            ) : null}
            <ForecastItemCategory name="dew point" value={forecast.dew_point} />
          </ul>
        </div>

        <div className="forecast-item__category-section">
          <h4 className="forecast-item__category-name">Wind:</h4>
          <ul className="forecast-item__categories">
            <ForecastItemCategory name="speed" value={forecast.wind_speed} />
            <ForecastItemCategory
              name="direction"
              value={formatWindDirection(forecast.wind_deg)}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
