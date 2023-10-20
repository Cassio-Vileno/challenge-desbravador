"use client";
import { useState } from "react";
import { ProviderProps, InfoContext } from "./InfoContext";

export function InfoContextProvider({ children }: ProviderProps) {
  const [userName, setUserName] = useState("");

  return (
    <InfoContext.Provider
      value={{
        userName,
        setUserName,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}
