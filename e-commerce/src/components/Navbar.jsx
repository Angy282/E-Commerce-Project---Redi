import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">R-andomy</h1>

      <div>Cart 🛒 ({cart.length})</div>
    </nav>
  );
}

export default Navbar;
