import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import WeatherCards from './pages/weather-cards/WeatherCards';
import Notfound from './pages/Notfound';
import GlobalContextProvider from './context/GlobalContext';
import Forecast from './pages/forecast/Forecast';
import Locations from './pages/location/Locations'

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
            <Route path="forecast" element={<Forecast />} />
            <Route path="forecast/:region" element={<Forecast />} />
            <Route path="locations" element={<Locations />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </GlobalContextProvider>
    </>
  );
}

export default App;
