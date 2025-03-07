import React from "react";
import { MdShare } from "react-icons/md";
import { FaStar, FaArrowRight } from "react-icons/fa6";
import Heart from "../assets/icon/broken_heart_red.svg";

const ProfileCard = ({
  name,
  degree,
  location,
  rating,
  reviews,
  gender,
  specialty,
  fee,
  experience,
  image,
}) => {
  return (
    <div className="flex flex-row justify-center items-center w-full border p-2">
      {/* Profile Image */}
      <div>
        <img src={image || "https://via.placeholder.com/80"} alt="Profile" />
      </div>

      {/* Profile Details */}
      <div className="flex flex-col w-full pl-2 p-2">
        {/* Header with Name and Share Button */}
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row items-center">
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500 p-1">({degree})</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={Heart}
              alt="Favorite"
              className="h-6 w-6"
            />
            <button className="border rounded-3xl px-4 py-1 flex items-center text-sm font-light">
              Share <MdShare className="ml-1" />
            </button>
          </div>
        </div>

        {/* Address */}
        <div className="flex">
          <p className="text-sm text-gray-500">{location}</p>
        </div>

        {/* Rating */}
        <div className="w-full flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-sm bg-green-900 text-white p-1 rounded">
            <FaStar className="w-2 h-2" />
            <p className="text-[10px]">{rating}</p>
          </div>
          <p className="text-sm text-gray-500">({reviews})</p>
        </div>

        {/* Specialization and Fee */}
        <div className="w-full mt-2 flex justify-between items-center">
          <div className="flex space-x-2">
            <p className="px-2 py-1 border bg-gray-200 rounded text-sm">
              {gender}
            </p>
            <p className="px-2 py-1 border bg-gray-200 rounded text-sm">
              {specialty}
            </p>
          </div>
          <div className="text-sm">
            <p>
              ${fee} <span className="text-gray-500">/ 20min</span>
            </p>
          </div>
        </div>

        {/* Experience and Booking */}
        <div className="w-full flex justify-between items-center">
          <div className="text-sm">
            <p>
              <span className="font-medium">{experience}+</span>{" "}
              <span className="text-[10px]">years of experience</span>
            </p>
          </div>
          <button className="border px-4 py-2 bg-purple-950 text-white flex items-center rounded text-sm">
            Book now <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
