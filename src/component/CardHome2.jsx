import React from "react";
import female from "../assets/icon/menstrual_health.svg";

const ProductCard = ({ image, name, price, discount, onConsult }) => {
  // Format price with decimal and small decimal part
  const formattedPrice = price.toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-md w-44 overflow-hidden flex flex-col relative">
      {/* Full-Size Product Image */}
      <div className="w-full h-32 relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* Discount Badge with Icon (positioned between image and name) */}
        {discount && (
          <div
            className="absolute -bottom-2.5 left-2 bg-slate-900 text-white text-xs px-2 py-1 rounded-md flex items-center"
            style={{ backgroundColor: "#323537" }}
          >
            <img src={female} className="w-4 h-4 mr-2" alt="Discount Icon" /> {/* Added margin-right for spacing */}
            {discount}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Product Name - Left-Aligned */}
        <h3 className="text-sm font-semibold text-gray-800 text-left">
          {name}
        </h3>

        {/* Price and Consult Now Row */}
        <div className="flex justify-between mt-4">
          <button
            onClick={onConsult}
            className="flex items-center text-blue-500 text-[10px] rounded"
          >
            Consult Now
            <span className="ml-1">→</span>
          </button>

          <span className="text-gray-800 font-bold text-xs">
            ₹
            <span className="text-xl">{formattedPrice.split(".")[0]}</span>
            <span className="text-sm">
              .{formattedPrice.split(".")[1]}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
