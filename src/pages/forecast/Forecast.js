import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import ForecastItem from '../../components/forecast/ForecastItem';
import SearchInput from '../../components/SearchInput';
import Loader from '../../components/Loader.js';
import './forecast.css';
import { getLocaleDate } from '../../helpers/formatCardDate';
import { useNavigate, useParams } from 'react-router-dom';

const weatherAPIKey = '04dd498fa79f3f46cf725cb2f616018a';
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

export default function Forecast() {
  const [loading, setLoading] = useState(false);
  const { region } = useParams();
  const navigate = useNavigate();

  const regionWeather = JSON.parse(localStorage.getItem('regionWeather'));
  const dailyForecast = JSON.parse(localStorage.getItem('dailyForecast'));
  const hourlyForecast = JSON.parse(localStorage.getItem('hourlyForecast'));
  const regionLocation = JSON.parse(localStorage.getItem('regionLocation'));
  const regionName = localStorage.getItem('regionName');

  useEffect(() => {


    if (region) {
      handleFind(region);
    } else if (regionName) {
      navigate(`/forecast/${regionName}`);
    }
    // eslint-disable-next-line
  }, [regionName]);

  async function handleFind(value) {
    setLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${weatherAPIKey}&units=metric`
    );

    if (!response.ok) {
      setLoading(false);
      return;
    }

    const data = await response.json();
    navigate(`/forecast/${value}`);
    localStorage.setItem('regionName', value);

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

      [
        ['regionWeather', { ...weatherData, value }],
        ['dailyForecast', getDailyForecastArray(weatherData)],
        ['hourlyForecast', setRegionWeatherArray(weatherData)],
        ['regionLocation', getCity(regionData, weatherData)],
      ].forEach(([dataName, data]) => {
        localStorage.setItem(dataName, JSON.stringify(data));
      });

      setLoading(false);
    });
  }

  function handleZeroing() {
    [
      'regionName',
      'regionLocation',
      'dailyForecast',
      'hourlyForecast',
      'regionLocation',
    ].forEach((dataName) => {
      localStorage.removeItem(dataName);
    });

    navigate('/forecast');
  }

  return (
    <div className="region">
      <Container className="region__container">
        {regionName ? null : <SearchInput callback={handleFind} />}

        {loading && <Loader className="loader">loading</Loader>}

        {regionName && regionLocation && (
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
                <div className="region__condition-img">
                  <img
                    src={`/img/conditions/${regionWeather.current.weather[0].icon}.png`}
                    alt="condition"
                  />
                </div>
              </div>
            </div>

            <button onClick={handleZeroing} className="clear-forecast">
              <p className="clear-forecast__text">Clear</p>
            </button>

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
