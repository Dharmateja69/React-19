import React, { useState } from "react";
import Input from "./Inputs/Inputfield";

const Sidebar = ({
  byname,
  byprice,
  data,
  bycategory,
  bykeyword,
  maindata,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedKeyword, setSelectedKeyword] = useState("");

  const handleReset = () => {
    setSearchTerm("");
    setMaxPrice("");
    setMinPrice("");
    setSelectedCategory("");
    setSelectedKeyword("");
    maindata(data);
  };

  const keywords = [
    "Pacer Future Sneaker",
    "Rainbow Chex Skate",
    "Low-Top Trainers",
    "Chunky High Heel",
    "Slip On Stiletto",
    "Nike Air Monarch IV",
  ];

  const category = ["Sneakers", "Flats", "Sandals", "Heels"];

  return (
    <div className="w-full md:w-[250px] bg-gray-100 h-screen p-4 border border-gray-300 box-border overflow-y-auto">
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Search by Name</h3>
          <Input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            onBlur={() => byname(searchTerm)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              onBlur={() => byprice(minPrice, maxPrice)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <Input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              onBlur={() => byprice(minPrice, maxPrice)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Category</h3>
          <div className="flex flex-col gap-1">
            {category.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    bycategory(e.target.value);
                  }}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => {
                  setSelectedKeyword(keyword);
                  bykeyword(keyword);
                }}
                className={`px-3 py-1 rounded text-sm border ${
                  selectedKeyword === keyword
                    ? "border-black bg-gray-200"
                    : "border-gray-300 bg-white"
                }`}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
