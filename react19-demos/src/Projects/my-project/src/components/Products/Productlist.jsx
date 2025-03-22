import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  product,
  filtervalue,
  handleNext,
  handleprev,
  current,
  page,
  total,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const size = product.length;

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="flex-1 flex flex-col items-center bg-gray-100 min-h-screen p-6">
      {/* Filter Button */}
      <div className="w-full flex justify-start mb-4 relative">
        <button
          onClick={toggleDropdown}
          className="bg-white text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-200 transition"
        >
          Filter <span>({size})</span>
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute left-0 mt-12 bg-white border rounded shadow-md w-40 z-10">
            <ul className="py-2">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  filtervalue("Cheap");
                  toggleDropdown();
                }}
              >
                Cheap
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  filtervalue("Medium");
                  toggleDropdown();
                }}
              >
                Medium
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  filtervalue("Expensive");
                  toggleDropdown();
                }}
              >
                Expensive
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {product.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            star={item.star}
            reviews={item.reviews}
            prevPrice={item.prevPrice}
            newPrice={item.newPrice}
            company={item.company}
            color={item.color}
            category={item.category}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-6">
        <button
          onClick={handleprev}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => current(i + 1)} // ✅ FIXED THIS LINE
            className={`px-3 py-1 rounded ${
              page === i + 1 ? "bg-black text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={page === total}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
