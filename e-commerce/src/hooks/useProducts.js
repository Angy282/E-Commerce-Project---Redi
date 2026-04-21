import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  return products;
}

export default useProducts;
