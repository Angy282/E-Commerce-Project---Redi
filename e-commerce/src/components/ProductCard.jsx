import { useCart } from "../context/CartContext";

function ProductCard({ product, onSelect }) {
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => onSelect(product)}
      className="cursor-pointer bg-gray-800 text-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />

      <h2 className="m-5 font-semibold text-lg">{product.title}</h2>

      <div className="flex justify-between mt-6">
        <p className="text-gray-300 text-lg">${product.price}</p>
        <p className="text-gray-300 text-lg">{product.rating} ⭐️</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
