function ProductPage({ product, onBack }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl text-white">
      <button onClick={onBack} className="mb-6 text-blue-400 hover:underline">
        ← Back to products
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <img src={product.thumbnail} className="w-full rounded-xl" />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-gray-300 mb-4">{product.description}</p>

          <p className="text-xl font-semibold mb-4">${product.price}</p>

          <p className="text-yellow-400">{product.rating} ⭐️</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-3 w-30 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
