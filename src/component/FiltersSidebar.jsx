import React from "react";

const FiltersSidebar = () => (
  <div className="w-1/5  p-6  ">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-2xl">Filters</h3>
      <button className="text-red-500 text-sm">clear all</button>
    </div>

    {/* Popular Locations */}
    <div className="mb-6 ">
      <p className="text-sm  flex">
        Popular locations in Ranchi, Jharkhand, India
      </p>
      <input
        type="text"
        placeholder="Search..."
        className="mt-2 w-full p-2 border rounded text-sm"
      />
      <div className="flex flex-wrap gap-1 mt-3">
        {["Lalpur", "Kanke Road", "Harmu", "Morabadi"].map((location) => (
          <span
            key={location}
            className="bg-gray-200 px-4 py-1 rounded-full text-xs"
          >
            {location}
          </span>
        ))}
      </div>
      <button className="text-red-500 text-sm mt-2 flex">+ View more</button>
    </div>

    {/* Price Range */}
    <div className="mb-6">
      <p className="font-medium mb-2 flex">Price</p>
      <input type="range" min="199" max="9999" className="w-full" />
      <div className="flex justify-between text-sm">
        <span>₹ 199</span>
        <span>₹ 9999</span>
      </div>
    </div>

    {/* Suggested for You */}
    <div className="mb-6">
      <p className="font-medium mb-2 flex">Suggested for you</p>
      <ul className="space-y-2">
        {[
          "Cold & Cough",
          "High Fever High Body Temp.",
          "Low Blood Pressure",
          "High Blood Pressure",
          "Body Pain",
          "Stomach Problem",
        ].map((suggestion) => (
          <li key={suggestion} className="flex items-center">
            <input type="checkbox" id={suggestion} className="mr-2" />
            <label htmlFor={suggestion} className="text-sm text-gray-700">
              {suggestion}
            </label>
          </li>
        ))}
      </ul>
    </div>

    {/* Categories */}
    <div className="mb-6">
      <p className="font-medium mb-2 flex">Categories</p>
      <ul className="space-y-2">
        {[
          "Physician",
          "Dentist",
          "Surgery",
          "Dermatologist",
          "Nutritionist",
          "Cardiologist",
        ].map((category) => (
          <li key={category} className="flex items-center">
            <input type="checkbox" id={category} className="mr-2" />
            <label htmlFor={category} className="text-sm text-gray-700">
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>

    {/* Promo Code */}
    <div className="rounded-md text-center shadow-md border">
      <div className="bg-orange-500 p-5 mb-2">
        <p className="font-bold text-2xl text-white ">Flat 10% OFF</p>
        <div className="mt-[4px] h-[2px] bg-white w-16 mx-auto"></div>
      </div>
      {/* Title */}

      {/* Promo Code */}
      <div className="flex items-center justify-center bg-white rounded-md  border-gray-300 p-2 mb-2">
        <span className="font-bold text-sm tracking-widest border p-2 h-10 flex items-center">
          WELCOMEGIFT12
        </span>
        <button className="ml-2 bg-black text-white text-xs px-3 h-10 flex items-center rounded ">
          COPY
        </button>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600 mb-2">
        A Welcome Surprise For You! Get Flat 10% off up to Rs. 2100 on your
        first appointment booking with Jeevni.
      </p>

      {/* Terms and Conditions */}
      <a href="/" className="text-blue-500 text-xs ">
        Terms and Conditions
      </a>
    </div>
  </div>
);

export default FiltersSidebar;
