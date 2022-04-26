import React, { useState } from 'react';
import { formatClassname } from '../App.js';
import Logo from './Logo.js';
import { useWeatherCards } from '../hook/useWeatherCards'


const APIKey = '0a21bb175b3d38f25bd87373e3f22c43';

export default function SearchInput() {
  const [value, setValue] = useState('');
  const { dispatch, weatherCards, CARD_ACTIONS } = useWeatherCards();

  function handleChange(e) {
    setValue(e.target.value);
  }

  async function handleFind(e) {
    e.preventDefault();

    if (
      weatherCards.some((card) => card.value === value)
    ) {
      return null;
    } else {
      setValue('');
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKey}&units=metric`
    );

    response.json().then((data) => {
      console.log(data)
      switch (data.cod) {
        case 200:
          dispatch({ type: CARD_ACTIONS.ADD_CARD, data: {...data, value}})
          break;

        default:
          console.log('nothing found');
      }
    });
  }

  return (
    <div className='search'>
      <Logo classname='navbar' />

      <form
        onSubmit={handleFind}
        className='input-block'
      >
        <input
          className='search-input'
          placeholder="search"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button
          onClick={handleFind}
          className='search-magnifier'
        >
          <img src='/img/icons/magnifier.svg' alt="find" />
        </button>
      </form>
    </div>
  );
}
