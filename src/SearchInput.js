import React, { useContext, useState } from 'react';
import { formatClassname, WeatherContext } from './App.js';
import Logo from './Logo.js';
import magnifier from './img/icons/magnifier.svg'

const APIKey = '0a21bb175b3d38f25bd87373e3f22c43';

export default function SearchInput({ classname }) {
  const [value, setValue] = useState('');
  const { setWeatherCards } = useContext(WeatherContext);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    setValue('')
  }

  async function handleFind() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKey}&units=metric`
    );

    response.json().then((data) => {
      switch (data.cod) {
        case 200:
          console.log(data)
          setWeatherCards((prev) => {
            return [
              ...prev,
              {
                country: data.sys.country,
                id: Date.now(),
                name: data.name,
                pressure: data.main.pressure,
                icon: data.weather['0'].icon,
                temp: {
                  max: data.main.temp_max,
                  min: data.main.temp_min,
                  default: data.main.temp,
                },
                wind: {
                  speed: data.wind.speed,
                  deg: data.wind.deg,
                },
              },
            ];
          });
          break;

        default:
          console.log('nothing found')
      }
    });
  }

  return (
    <div className={formatClassname('search', classname)}>
      <Logo classname={classname} />

      <form onSubmit={handleSubmit} className={formatClassname('input-block', classname)}>
        <input
          className={formatClassname('search-input', classname)}
          placeholder="search"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button
          onClick={handleFind}
          className={formatClassname('search-magnifier', classname)}
        >
          <img src={magnifier} alt="find" />
        </button>
      </form>
    </div>
  );
}
