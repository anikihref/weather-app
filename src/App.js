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

  return (
    <>
      <WeatherContext.Provider value={{weatherCards, setWeatherCards}}>
        <Header />
        <Main />
      </WeatherContext.Provider>
    </>
  );
}

export default App;
