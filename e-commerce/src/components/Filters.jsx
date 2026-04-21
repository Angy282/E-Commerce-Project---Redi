function Filters({ search, setSearch, category, setCategory }) {
  return (
    <div className="flex gap-4 mb-6">
      {/* Search and  Filtering thu categories functions*/}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-2 border rounded-lg"
      />

      {/* Categories */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded-lg"
      >
        <option value="">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
      </select>
    </div>
  );
}

export default Filters;
