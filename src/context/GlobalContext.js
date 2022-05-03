import React from 'react'
import RegionPageProvider from './RegionPageContext'
import WeatherCardsProvider from './WeatherCardsContext'


export default function GlobalContextProvider({ children }) {
  return (
    <RegionPageProvider>
      <WeatherCardsProvider>
          { children }
      </WeatherCardsProvider>
    </RegionPageProvider>
  )
}
