import React from 'react'
import WeatherCardsProvider from './WeatherCardsContext'


export default function GlobalContextProvider({ children }) {
  return (
      <WeatherCardsProvider>
          { children }
      </WeatherCardsProvider>
  )
}
