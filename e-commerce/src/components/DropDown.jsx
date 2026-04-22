import React from "react";
import { useCart } from "../context/CartContext";

const DropDown = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  if (cart.length === 0) {
    return <p className="p-4 text-blue-900">Cart is empty</p>;
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white text-black p-4 w-80 shadow-lg rounded-lg">
      {cart.map((item) => (
        <div key={item.product.id} className="mb-4 border-b pb-2">
          <h3 className="font-semibold">{item.product.title}</h3>
          <p>${item.product.price}</p>

          <div className="flex items-center gap-2 mt-2">
            <button onClick={() => decreaseQuantity(item.product.id)}>-</button>
            <span>{item.quantity}</span>
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

      <div className="mt-4 pt-2 border-t">
        <h2 className="font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default DropDown;
