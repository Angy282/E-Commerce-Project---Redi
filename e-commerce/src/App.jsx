import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to my very random
        </h1>

        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
