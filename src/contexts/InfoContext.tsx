"use client";

import { ReactNode, createContext, useState } from "react";

export const InfoContext = createContext({
  userName: "",
  setUserName: (value: string) => {},
});

export interface ProviderProps {
  children: ReactNode;
}

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
