import React from 'react';
import WeatherCardsProvider from './context/WeatherCardsContext.js';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.js';
import WeatherCards from './pages/WeatherCards.js';
import Region from './pages/Region.js';
import Notfound from './pages/Notfound.js';
import GlobalContextProvider from './context/GlobalContext.js';

export function formatClassname(className, alternateClassName) {
  return alternateClassName
    ? `${className} ${alternateClassName}__${className}`
    : className;
}

export const WeatherContext = React.createContext();

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WeatherCards />} />
            <Route path="region" element={<Region />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </GlobalContextProvider>
    </>
  );
}

export default App;
