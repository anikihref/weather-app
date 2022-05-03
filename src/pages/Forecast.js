import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import ForecastItem from '../components/ForecastItem';
import SearchInput from '../components/SearchInput';
import { useForecastInputValue } from '../hook/useForecastInputValue';
import { getLocaleDate } from '../formaters/formatCardDate';
import Image from '../components/Image';

const weatherAPIKey = '767b47ca2fe917fd952f6faa9aa0820b';
const regionAPIKey = 'FqDgqeVeoUeukbyLa6nE5w3oP1uYwAuP';

const getDailyForecastArray = (data, num = 6) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push({
      ...data.daily[i],
      feels_like_day: data.daily[i].feels_like.day,
      feels_like_night: data.daily[i].feels_like.night,
      feels_like_eve: data.daily[i].feels_like.eve,
      feels_like_morn: data.daily[i].feels_like.morn,
      temp_day: data.daily[i].temp.day,
      temp_night: data.daily[i].temp.night,
      temp_eve: data.daily[i].temp.eve,
      temp_morn: data.daily[i].temp.morn,
      temp_max: data.daily[i].temp.max,
      temp_min: data.daily[i].temp.min,
      feels_like: null,
      temp: null,
      dateName: getLocaleDate(data.daily[i].dt, 'day-month'),
    });
  }

  return result;
};

const setRegionWeatherArray = (data, num = 6) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push({
      ...data.hourly[i],
      dateName: new Date(data.hourly[i].dt * 1000).getHours() + ':00',
    });
  }

  return result;
};

const getCity = (regionData, weatherData) => {
  const location = regionData.find((location) => {
    return location.TimeZone.Name === weatherData.timezone;
  });

  return location;
};

export default function Region() {
  const [regionInputValue, setRegionInputValue] = useForecastInputValue();
  const [regionLocation, setRegionLocation] = useState();
  const [regionWeather, setRegionWeather] = useState();
  const [hourlyForecast, setHourlyForecast] = useState();
  const [dailyForecast, setDailyForecast] = useState();

  useEffect(() => {
    if (regionInputValue) {
      handleFind(regionInputValue);
    }
    // eslint-disable-next-line
  }, [regionInputValue]);

  async function handleFind(value) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${weatherAPIKey}&units=metric`
    );

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    setRegionInputValue(value);

    Promise.all([
      // запрос на погоду с прогнозом
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${weatherAPIKey}&units=metric`
      ).then((res) => res.json()),

      // запрос на регион
      fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${regionAPIKey}&q=${data.name}`
      ).then((res) => res.json()),
    ]).then((values) => {
      const [weatherData, regionData] = values;

      setRegionWeather({ ...weatherData, value });
      setDailyForecast(getDailyForecastArray(weatherData));
      setHourlyForecast(setRegionWeatherArray(weatherData));

      setRegionLocation(getCity(regionData, weatherData));
    });
  }

  return (
    <div className="region">
      <Container className="region__container">
        {regionLocation ? null : <SearchInput callback={handleFind} />}
        {regionLocation && (
          <>
            <div className="region__info">
              <div className="region__info-header">
                <ul className="region__info-list">
                  <li className="region__info-title">
                    Settlement: {regionLocation.LocalizedName}
                  </li>
                  <li className="region__info-title">
                    Region: {regionLocation.AdministrativeArea.LocalizedName}
                  </li>
                  <li className="region__info-title">
                    Country: {regionLocation.Country.LocalizedName}
                  </li>
                </ul>
                <Image
                  className="region__condition-img"
                  src={`/img/conditions/${regionWeather.current.weather[0].icon}.png`}
                  alt="condition"
                />
              </div>
            </div>

            <div className="region__forecasts">
              <div className="region__hourly-forecast region__forecast">
                {hourlyForecast.map((forecast) => (
                  <ForecastItem key={forecast.dt} forecast={forecast} />
                ))}
              </div>

              <div className="region__daily-forecast region__forecast">
                {dailyForecast.map((forecast) => (
                  <ForecastItem key={forecast.dt} forecast={forecast} />
                ))}
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
