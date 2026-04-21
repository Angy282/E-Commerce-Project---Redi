import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import useProducts from "./hooks/useProducts"

function App() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");


  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((product) => (category ? product.category === category : true));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to my very random
        </h1>
        {/* SearchBar and filtering thru categories Div */}
        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
