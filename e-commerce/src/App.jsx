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
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Very Random Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
