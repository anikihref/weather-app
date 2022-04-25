import { useContext } from "react";
import { WeatherCardsContext } from "../context/WeatherCardsContext";

export function useWeatherCards() {
  return useContext(WeatherCardsContext)
}