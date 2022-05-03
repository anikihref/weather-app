import { useContext } from "react";
import { RegionPageContext } from "../context/RegionPageContext";

export function useRegionInputValue() {
  return useContext(RegionPageContext)
}