import React, { createContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);

  const contextValue = {
    cartValue,
    setCartValue
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };