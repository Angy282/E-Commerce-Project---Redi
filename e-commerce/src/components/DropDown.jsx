import React from "react";
import { useCart } from "../Context/CartContext";

const DropDown = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  if (cart.length === 0) {
    return <p className="p-4">Cart is empty</p>;
  }

  return (
    <div className="bg-white text-black p-4 w-80 shadow-lg rounded-lg">
      {cart.map((item) => (
        <div key={item.product.id} className="mb-4 border-b pb-2">
          <h3 cl passName="font-semibold">
            {item.product.title}
          </h3>
          <p>${item.product.price}</p>

          <div className="flex items-center gap-2 mt-2">
            <button onClick={() => decreaseQuantity(item.product.id)}>-</button>
            <button onClick={() => increaseQuantity(item.product.id)}>+</button>
          </div>
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="text-red-500 text-sm mt-1"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
