import React, { useState, createContext } from "react";

export const ForecastPageContext = createContext()

export default function ForecastPageProvider({ children }) {
  const [regionInputValue, setRegionInputValue] = useState('')


  return (
    <ForecastPageContext.Provider value={[regionInputValue, setRegionInputValue]}>
      { children }
    </ForecastPageContext.Provider>
  )
}
