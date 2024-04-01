/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", { firstName: "Emre" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
