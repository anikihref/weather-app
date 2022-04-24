import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';


export function formatClassname(className, alternateClassName) {
  return alternateClassName
    ? `${className} ${alternateClassName}__${className}`
    : className;
}

export const WeatherContext = React.createContext();

function App() {
  const [weatherCards, setWeatherCards] = useState([])
  
  function deleteCard(id) {
    const filteredCards = weatherCards.filter(weather => {
      return weather.id !== id
    })
    
    setWeatherCards(filteredCards)
  }

  return (
    <>
      <WeatherContext.Provider value={{weatherCards, setWeatherCards, deleteCard}}>
        <Header />
        <Main />
      </WeatherContext.Provider>
    </>
  );
}

export default App;
