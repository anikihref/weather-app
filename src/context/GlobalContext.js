import React from 'react'
import ForecastPageProvider from './ForecastPageContext'
import WeatherCardsProvider from './WeatherCardsContext'


export default function GlobalContextProvider({ children }) {
  return (
    <ForecastPageProvider>
      <WeatherCardsProvider>
          { children }
      </WeatherCardsProvider>
    </ForecastPageProvider>
  )
}
