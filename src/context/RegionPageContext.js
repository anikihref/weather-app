import React, { useState, createContext } from "react";

export const RegionPageContext = createContext()

export default function RegionPageProvider({ children }) {
  const [regionInputValue, setRegionInputValue] = useState('')


  return (
    <RegionPageContext.Provider value={[regionInputValue, setRegionInputValue]}>
      { children }
    </RegionPageContext.Provider>
  )
}
