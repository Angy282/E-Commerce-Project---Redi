import { useState } from "react";
import { useCart } from "../context/CartContext";
import DropDown from "./DropDown";

function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between relative">
      <h1 className="font-bold">R-andomy</h1>

      <div className="relative">
        <button onClick={() => setOpen(!open)}>Cart 🛒 ({totalItems})</button>

        {open && (
          <div className="absolute right-0 mt-2 z-50">
            <DropDown />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
