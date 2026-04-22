import { useState } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import useProducts from "./hooks/useProducts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";

function App() {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((product) => (category ? product.category === category : true));

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Welcome To My Very Random Store
          </h1>

          <div className="bg-gray-800 p-4 rounded-xl shadow-md mb-8">
            <Filters
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
            />
          </div>

          {/* this is the component for the single product page */}
          {selectedProduct ? (
            <ProductPage
              product={selectedProduct}
              onBack={() => setSelectedProduct(null)}
            />
          ) : (
            <ProductList
              products={filteredProducts}
              onSelect={setSelectedProduct}
            />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
