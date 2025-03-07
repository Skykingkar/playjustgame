import React, { useState } from "react";
import reactLogo from "../../assets/icon/Jivniwhitelogo.svg";
import location from "../../assets/icon/location.png";
import language from "../../assets/icon/language.svg";
import phone from "../../assets/icon/phone.svg";
import fire from "../../assets/icon/fire.svg";
import percenatge from "../../assets/icon/Percenageicon.svg";
import Safty from "../../assets/icon/Safty.svg";
import Account from "../../assets/icon/account_circle (1).svg";
import Down from "../../assets/icon/arrow.svg";
import Indian from "../../assets/india1.svg";
import { FaCheck } from "react-icons/fa"; // Importing a check icon
import { Link } from 'react-router-dom';
import Login from "../login/login"; // Import Login component

const Navbar = () => {
  const [selected, setSelected] = useState("In-clinic visit"); // Default selected option
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const options = [
    "General Physician",
    "Female Specialist",
    "Baby Specialist",
    "In-clinic visit",
  ];
  const optionssaerch = [
    "Cold & Flu",
    "Stomac and digestion",
    "Headache",
    "Fever",
  ];
  return (
    <div
      style={{
        backgroundImage: "url('/HomeBgImage.png')",
      }}
      className="flex flex-col bg-cover bg-center h-80 text-white p-5 items-center justify-center "
    >
      <div className="flex flex-row ">
        <div className="flex h-16 items-center justify-end w-1/3  ">
          <img src={reactLogo} className="pl-16 w-52 " alt="React Logo" />
          <div className="flex flex-col pl-4">
            <p className="flex text-[10px]">Find Doctor</p>
            <p className="flex text-[8px]">Book quick appointment</p>
            <span className="border border-blue-500 bg-blue-500 w-full h-1 block"></span>
          </div>
        </div>

        <div className="flex h-16 items-center  w-2/3 pl-10">
          <div className="flex h-10 items-center">
            {/* Text Section */}
            <div className="">
              <img src={percenatge} className="w-6 h-6" />
            </div>
            <div className="p-2">
              <h3 className="flex text-[10px]">Super offers</h3>
              <h3 className="flex text-[8px]">Explore great deals & offers</h3>
            </div>
            {/* Dotted Vertical Line */}
            <div className="border-l border-gray-300 border-dotted h-10"></div>
            <div className="p-2">
              <img src={Safty} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="flex text-[10px]">Your safety</h3>
              <h3 className="flex text-[8px]">Our top priority</h3>
            </div>
            <button className="flex items-center rounded-md bg-blue-500 p-2 ml-2 text-white"  onClick={() => setIsModalOpen(true)}>
              <img src={Account} alt="Account Icon" className="w-3 h-3" />
              <span className="text-[10px] pl-2">Login or create account</span>
              <img src={Down} alt="Account Icon" className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-2 rounded-md bg-transparent ml-2 bg-pink-950 backdrop-blur-2xl p-2">
              <img src={Indian} alt="Account Icon" className="w-3 h-3" />
              <span className="text-[10px]">IN | ENG | INR</span>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-lg z-50">
          <Login onClose={() => setIsModalOpen(false)} />
        </div>
      )}
      
      <div className="flex items-center justify-center ">
        <div className=" bg-white h-32 flex rounded-lg items-center mt-10 flex-col">
          <div className="border-gray  bg-white border  rounded-lg flex items-center m-4">
            <img
              src={location}
              className="w-12 h-12 ml-2 mr-2 p-2"
              alt="Location Icon"
            />
            <div className="flex flex-col p-1">
              <p className="text-gray-800 text-xs">Your Location</p>
              <p className="text-gray-800 font-bold">Garhwa</p>
            </div>
            <span className="border w ml-2 mr-2"></span>
            <input
              placeholder="Search doctor, clinic, hospital name ..."
              className="w-96 p-2"
            />
            <Link
            to="/Search"
            className="align-center bg-orange-500 text-white rounded-r h-full w-44"
            style={{ backgroundColor: "#DC5C33", display: 'inline-flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}
            role="button"
            aria-label="Find now"
          >
            Find now
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-black text-[10px]">Specialist for</p>

            {options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`flex items-center px-1 py-1 rounded-md text-[6px]  ${
                  selected === option
                    ? "bg-gradient-to-r from-blue-500 to-red-700 text-white "
                    : "bg-gray-200 text-black"
                }`}
              >
                <span
                  className={`w-2 h-2 flex items-center justify-center rounded-full border ${
                    selected === option
                      ? "border-white bg-white"
                      : "border-black"
                  }`}
                >
                  {selected === option && (
                    <FaCheck className="text-black text-lg" />
                  )}
                </span>
                <p className="ml-1"> {option}</p>
               
              </button>
            ))}
            <img src={fire} className="ml-8"/>
            <p className="text-black text-[10px]">Trending searches</p>

            {optionssaerch.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`flex items-center gap-1  px-1 py-1 rounded-md text-[6px]  ${
                  selected === option
                    ? "bg-gradient-to-r from-blue-500 to-red-700 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
              
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div
    //   style={{
    //     backgroundImage: "url('/HomeBgImage.png')",
    //   }}
    //   className="flex flex-row bg-cover bg-center h-80 justify-between items-start"
    // >
    //   {/* Logo */}
    //   <img
    //     src={reactLogo}
    //     className="w-24 mb-4 sm:mb-0 flex"
    //     alt="React Logo"
    //   />
    //   <div className="flex bg-black/50 p-2 rounded-md">
    //     <p className="text-lg font-bold">Find Doctor</p>
    //   </div>
    //   {/* Location Search */}
    //   {/* <div className="border-gray border ml-10 rounded-lg flex items-center">
    //       <img src={location} className="w-8 h-8 ml-2 mr-2 p-2" alt="Location Icon" />
    //       <div className="flex flex-col p-2">
    //         <p className="text-gray-800 text-xs">Your Location</p>
    //         <p className="text-gray-800 font-bold">Garhwa</p>
    //       </div>
    //       <span className="border w ml-2 mr-2"></span>
    //       <input
    //         placeholder="Search doctor, clinic, hospital name ..."
    //         className="w-96 p-2"
    //       />
    //       <button
    //         className="align-center bg-orange-500 text-white rounded-r p-4"
    //         style={{ backgroundColor: "#DC5C33" }}
    //       >
    //         Find now
    //       </button>
    //     </div> */}

    //   {/* Language */}
    //   {/* <div className="flex justify-center items-center mt-4 sm:mt-0">
    //       <img src={language} alt="Language Icon" />
    //       <div className="flex flex-col ml-2">
    //         <p className="text-xs">ENG</p>
    //         <p className="text-xs">IN</p>
    //       </div>
    //     </div> */}

    //   {/* Phone */}
    //   {/* <div className="flex justify-center items-center mt-4 sm:mt-0">
    //       <img src={phone} alt="Phone Icon" />
    //       <div className="flex flex-col ml-2">
    //         <p className="text-xs">1800 097 457</p>
    //         <p className="text-xs text-gray-400">Call us to book now</p>
    //       </div>
    //     </div> */}

    //   {/* Account */}
    //   {/* <div className="flex justify-center items-center mt-4 sm:mt-0">
    //       <img src={account} alt="Account Icon" />
    //       <div className="flex flex-col ml-2">
    //         <p className="text-xs">Login or</p>
    //         <p className="text-xs">Create account</p>
    //       </div>
    //     </div> */}
    // </div>
  );
};

export default Navbar;
