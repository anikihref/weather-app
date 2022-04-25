import React from 'react';
import Header from './page-parts/Header.js';
import Main from './page-parts/Main.js';
import WeatherCardsProvider from './context/WeatherCardsContext.js';
import WeatherContent from './components/WeatherContent.js'
import Navbar from './components/Navbar.js'

export function formatClassname(className, alternateClassName) {
  return alternateClassName
    ? `${className} ${alternateClassName}__${className}`
    : className;
}

export const WeatherContext = React.createContext();



function App() {

  return (
    <>
      <WeatherCardsProvider>
        <Header>
          <Navbar classname='navbar'/>
        </Header>
        
        <Main>
          <WeatherContent />
        </Main>
      </WeatherCardsProvider>
    </>
  );
}

export default App;
