import { createContext, useContext, useState } from "react";

//  creating context
const CartContext = createContext();

// provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // add to cart - prev = the latest state
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  // increasing in the dropdown cart
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  // decreasing

  const decreaseQuantity = (id) => {
    setCart((prev) => {
      prev
        .map((item) => {
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // removing the item entirely

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
