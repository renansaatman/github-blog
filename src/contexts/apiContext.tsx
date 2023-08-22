import { ReactNode, createContext } from "react";

export const ApiContext = createContext({})

interface ApiContextProviderProps {
  children: ReactNode
}
export function ApiContextProvider({ children }: ApiContextProviderProps) {
  return (
    <ApiContext.Provider
      value={{
        
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}