import { InfoContext } from "@/contexts/InfoContext";
import { useContext } from "react";

export function useInfos() {
  return useContext(InfoContext);
}
