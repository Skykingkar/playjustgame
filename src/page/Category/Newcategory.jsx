import React from "react";
import Profile1 from "../../assets/profileimage/Ellipse 92.svg";
import Profile2 from "../../assets/profileimage/Ellipse 92.svg";
import Profile3 from "../../assets/profileimage/Ellipse 92.svg";
import Profile4 from "../../assets/profileimage/Ellipse 92.svg";
import Profile5 from "../../assets/profileimage/Ellipse 92.svg";
import Profile6 from "../../assets/profileimage/Ellipse 92.svg";
const SpecialistsCarousel = () => {
  const specialists = [
    {
      title: "Dermatologist",
      img: Profile1,
      count: "200+",
    },
    {
      title: "Dentist",
      img: Profile2,
      count: "300+",
    },
    {
      title: "Surgery",
      img: Profile3,
      count: "100+",
    },
    {
      title: "Physician",
      img: Profile4,
      count: "250+",
    },
    {
      title: "Dentist",
      img: Profile5,
      count: "900+",
    },
    {
      title: "Dentist",
      img: Profile6,
      count: "900+",
    },
  ];

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-white">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-8">
        {/* Left Column - Align Text to Start */}
        <div className="flex flex-col items-start justify-center text-left">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Consult doctors based on symptom
          </h2>
          <p className="text-gray-600">Click to find nearby doctor clinic</p>
        </div>

        {/* Right-aligned button */}
        <div className="flex justify-end items-center p-8">
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-200">
            View all specialists
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex items-center justify-between w-full max-w-5xl">
        {/* Left Arrow */}
        <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
          &#9664;
        </button>

        {/* Specialists */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg "
            >
              {/* Image with Count */}
              <div className="relative">
                <img
                  src={specialist.img}
                  alt={specialist.title}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 bg-purple-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {specialist.count}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm font-medium text-gray-800">
                {specialist.title}
              </h3>

              {/* Book Now Button */}
              <button className="mt-2 px-4 py-1 text-xs text-blue-600 border border-blue-600 rounded-full hover:bg-blue-100">
                Book now
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
          &#9654;
        </button>
      </div>

      {/* View All Specialists */}
     
    </div>
  );
};

export default SpecialistsCarousel;
