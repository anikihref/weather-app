import React, { createContext, useReducer } from "react";

export const WeatherCardsContext = createContext()

const CARD_ACTIONS = {
  ADD_CARD: 'add_card',
  REMOVE_CARD: 'remove_card'
}

function reducer(state, action) {
  switch (action.type) {
    case CARD_ACTIONS.ADD_CARD:
      return [...state, {
        time: action.data.dt,
        country: action.data.sys.country,
        id: Date.now(),
        name: action.data.name,
        value: action.data.value,
        pressure: action.data.main.pressure,
        icon: action.data.weather['0'].icon,
        temp: {
          max: action.data.main.temp_max,
          min: action.data.main.temp_min,
          default: action.data.main.temp,
        },
        wind: {
          speed: action.data.wind.speed,
          deg: action.data.wind.deg,
        },
      }]

    case CARD_ACTIONS.REMOVE_CARD:
      return state.filter(weather => {
        return weather.id !== action.data.id
      })

    default: console.log('nothing')
  }
}

export default function WeatherCardsProvider({ children }) {
  const [weatherCards, dispatch] = useReducer(reducer, [])


  return (
    <WeatherCardsContext.Provider value={{weatherCards, dispatch, CARD_ACTIONS}}>
      { children }
    </WeatherCardsContext.Provider>
  )
}