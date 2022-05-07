import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherCategoryItem({
  weatherStatValue,
  weatherStatName,
  weatherStatIcon
}) {
  return (
    <div className='weather-item__category'>
      <h5 className='weather-item__category-title'>{weatherStatName}</h5>
      <div className='weather-item__category-content'>
        <div className='weather-item__category-value'>{weatherStatValue}</div>
        {weatherStatIcon && 
          <div className='weather-item__category-icon'>
            <img src={weatherStatIcon} alt='item'></img>
          </div>}
      </div>
    </div>
  );
}

WeatherCategoryItem.propTypes = {
  weatherStatName: PropTypes.string,
  weatherStatIcon: PropTypes.string,
  weatherStatValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
}

