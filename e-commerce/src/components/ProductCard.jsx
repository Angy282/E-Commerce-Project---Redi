function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />

      <h2 className="mt-3 font-semibold text-lg">{product.title}</h2>

      <p className="text-gray-600">${product.price}</p>

      <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}
