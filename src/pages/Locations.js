import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import LocationItem from '../components/LocationItem';
import uniqid from 'uniqid';

const cities = [
  'london',
  'new york',
  'paris',
  'los angeles',
  'beijing',
  'egypt',
  'madrid',
  'kyiv',
  'dubai',
  'miami',
  'abu dhabi',
];

const weatherAPIKey = '04dd498fa79f3f46cf725cb2f616018a';

function createCityObj(city, userRegion = null) {
  return {
    name: city,
    id: uniqid(),
    isUserRegion: city === userRegion,
  };
}

export default function Locations() {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    if (navigator.geolocation && !locations) {
      navigator.geolocation.getCurrentPosition(
        (result) => {
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${result.coords.latitude}&lon=${result.coords.longitude}&appid=${weatherAPIKey}&units=metric`
          )
            .then((res) => res.json())
            .then((data) => {
              setLocations(
                [data.name, ...cities].map((city) => {
                  return createCityObj(city, data.name);
                })
              );
            });
        },
        () => {
          setLocations(cities.map((city) => createCityObj(city)));
        }
      );
    } else if (!navigator.geolocation && !locations) {
      setLocations(cities.map((city) => createCityObj(city)));
    }
  }, [locations]);

  return (
    <div className="locations">
      <Container className={'locations__container'}>
        {locations &&
          locations.map((location) => {
            return <LocationItem key={location.id} location={location} />;
          })}
      </Container>
    </div>
  );
}
