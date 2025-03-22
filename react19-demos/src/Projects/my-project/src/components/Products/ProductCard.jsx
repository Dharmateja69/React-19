import React from "react";

const ProductCard = ({ img, title, newPrice, prevPrice, company }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-3 w-48 h-60 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-24 flex items-center justify-center">
        <img src={img} alt={title} className="max-h-full object-contain" />
      </div>

      {/* Info Section */}
      <div className="mt-3 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 text-center mb-1">
          {title}
        </h2>

        {/* Category Button */}
        <button className="border border-white bg-black text-white text-xs px-2 py-1 rounded mb-2">
          {company}
        </button>

        {/* Price Info */}
        <div className="text-center">
          <p className="text-sm font-bold text-green-600">${newPrice}</p>
          <p className="text-xs font-medium text-gray-500 line-through">
            ${prevPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
