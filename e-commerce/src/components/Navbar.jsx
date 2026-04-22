import { useState } from "react";
import { useCart } from "../context/CartContext";
import DropDown from "./DropDown";

function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        R-andomy
      </h1>

      <button
        onClick={() => setOpen(!open)}
        className="relative bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        🛒 Cart
        <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
          {totalItems}
        </span>
      </button>

      {open && (
        <div className="absolute right-6 top-16 z-50">
          <DropDown />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
