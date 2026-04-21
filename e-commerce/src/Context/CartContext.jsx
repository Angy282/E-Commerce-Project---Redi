import { createContext, useContext, useState } from "react";

//  creating context
const CartContext = createContext();

// provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
