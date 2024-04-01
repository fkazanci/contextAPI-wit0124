/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const BasketContext = createContext();
export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", ["Emre", "Erdem"]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const getCount = () => {
    return basket.length;
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, getCount }}>
      {children}
    </BasketContext.Provider>
  );
};
