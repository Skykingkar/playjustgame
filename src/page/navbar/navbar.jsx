import React from "react";
import reactLogo from "../../assets/logo.svg";
import location from "../../assets/icon/location.png";
import language from "../../assets/icon/language.svg";
import phone from "../../assets/icon/phone.svg";
import account from "../../assets/icon/account_circle.svg";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex flex-1 justify-center items-center mt-2 border-b-2 shadow-lg p-2">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <Link to="/">
        <img src={reactLogo} className="w-24 mb-4 sm:mb-0" alt="React Logo" /></Link>

        {/* Location Search */}
        <div className="border-gray border ml-10 rounded-lg flex items-center">
          <img src={location} className="w-8 h-8 ml-2 mr-2 p-2" alt="Location Icon" />
          <div className="flex flex-col p-2">
            <p className="text-gray-800 text-xs">Your Location</p>
            <p className="text-gray-800 font-bold">Garhwa</p>
          </div>
          <span className="border w ml-2 mr-2"></span>
          <input
            placeholder="Search doctor, clinic, hospital name ..."
            className="w-96 p-2"
          />
          <button
            className="align-center bg-orange-500 text-white rounded-r p-4"
            style={{ backgroundColor: "#DC5C33" }}
          >
            Find now
          </button>
        </div>

        {/* Language */}
        <div className="flex justify-center items-center mt-4 sm:mt-0 ml-2">
          <img src={language} alt="Language Icon" />
          <div className="flex flex-col ml-2">
            <p className="text-xs">ENG</p>
            <p className="text-xs">IN</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex justify-center items-center mt-4 sm:mt-0 ml-2">
          <img src={phone} alt="Phone Icon" />
          <div className="flex flex-col ml-2">
            <p className="text-xs">1800 097 457</p>
            <p className="text-xs text-gray-400">Call us to book now</p>
          </div>
        </div>

        {/* Account */}
        <div className="flex justify-center items-center mt-4 sm:mt-0 ml-2">
          <img src={account} alt="Account Icon" />
          <div className="flex flex-col ml-2">
            <p className="text-xs">Login or</p>
            <p className="text-xs">Create account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
