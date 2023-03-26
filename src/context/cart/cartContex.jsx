import {  createContext, useState } from "react";

export const CreatContext = createContext();

const Cart = ({children}) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <CreatContext.Provider value={{ counter, increment }}>
      {children}{" "}
    </CreatContext.Provider>
  );
};

export default Cart;
