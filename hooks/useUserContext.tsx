import React, { createContext, useState, ReactNode, useContext } from "react"

// Define the type of the context state and its updater function
interface UserContextType {
  user: string
  setUser: (user: string) => void
}

// Create the context with an initial value of undefined
const UserContext = createContext<UserContextType | undefined>(undefined)

// Create the provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>("") // State and its setter function

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook to use the context in child components
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider")
  }
  return context
}
