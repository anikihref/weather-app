import React, { useState } from 'react';
import Logo from './Logo.js';
import { useWeatherCards } from '../hook/useWeatherCards'


export default function SearchInput({ callback }) {
  const [value, setValue] = useState('');
  const { weatherCards } = useWeatherCards();

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

   
    return callback(value)
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
