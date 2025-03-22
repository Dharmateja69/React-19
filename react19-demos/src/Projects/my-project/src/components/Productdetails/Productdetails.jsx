import React from "react";

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-2xl relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ×
        </button>

        {/* Product Image and Info */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="flex-1">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>

            <div className="flex items-center mb-2 text-yellow-500">
              <span className="text-sm text-gray-600 ml-2">{product.star}</span>
            </div>

            <div className="text-lg font-semibold text-green-600 mb-2">
              ₹{product.newPrice}
              <span className="line-through text-red-500 ml-3 font-normal">
                ₹{product.prevPrice}
              </span>
            </div>

            <p className="text-gray-700 mb-1">
              <strong>Company:</strong> {product.company}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Color:</strong> {product.color}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
