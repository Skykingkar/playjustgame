import React from "react";

const CardHome1 = ({ icon, title, description, eram,extra }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 mx-auto flex flex-col items-center justify-center text-center">
      {/* Icon Section */}
      <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center" style={{ backgroundColor: "#E9F2F4" }}>
        <img src={icon} alt="Icon" className="w-8 h-8" />
      </div>

      {/* Text Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold from-zinc-200">{title}</h3>
        <p className="text-gray-400 font-light">{description}</p>
      </div>

      {/* ERAM Data */}
      <div className="mb-4">
        <span className=" font-medium">{extra}</span>
      </div>

      {/* Book Now Button */}
      <div>
        <button className=" text-blue-500 py-2 px-4 font-bold rounded hover:bg-blue-600 transition duration-200">
         {eram}
        </button>
      </div>
    </div>
  );
};

export default CardHome1;
