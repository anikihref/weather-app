import React, { createContext, useState } from "react";

export const WeatherCardsContext = createContext()

export default function WeatherCardsProvider({ children }) {
  const [weatherCards, setWeatherCards] = useState([])

  function deleteCard(id) {
    const filteredCards = weatherCards.filter(weather => {
      return weather.id !== id
    })
    
    setWeatherCards(filteredCards)
  }

  return (
    <WeatherCardsContext.Provider value={{weatherCards, setWeatherCards, deleteCard}}>
      { children }
    </WeatherCardsContext.Provider>
  )
}
