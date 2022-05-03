import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import LocationItem from '../components/LocationItem';
import uniqid from 'uniqid';

const weatherAPIKey = '04dd498fa79f3f46cf725cb2f616018a';


export default function Locations() {
  const [geolocation, setGeolocation] = useState(null);
  const [locations, setLocations] = useState([
    {name: 'London', id: uniqid()}
  ]);

  useEffect(() => {
    if (navigator.geolocation && !geolocation) {
      navigator.geolocation.getCurrentPosition((result) => {

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${result.coords.latitude}&lon=${result.coords.longitude}&appid=${weatherAPIKey}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => {
            setGeolocation(data);
          });
      });
    }
  }, [geolocation]);


  return (
    <div className="locations">
      <Container className={'locations__container'}>
        {geolocation ? (
          <Link className="locations__link" to={`/forecast/${geolocation.name}`}>
            <div className='locations__link-text'>{geolocation.name}</div>
            <p className="locations__modifier">*your region</p>
          </Link>
        ) : null}

        {locations.map((location) => {
          return (
            <LocationItem key={location.id} location={location} />
          );
        })}
      </Container>
    </div>
  );
}
