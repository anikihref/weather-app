import { useContext } from "react";
import { ForecastPageContext } from "../context/ForecastPageContext";

export function useForecastInputValue() {
  return useContext(ForecastPageContext)
}