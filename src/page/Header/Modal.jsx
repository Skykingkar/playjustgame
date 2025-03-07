import React from 'react';
import Woman from "../../assets/woman_login.svg";
import Cancel from "../../assets/icon/cancel.svg";
import Arrow_right from "../../assets/icon/arrow_right.svg";
import Button from "../../component/Button"; // Import the Button component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <img src="path-to-cancel-icon" alt="Close" className="w-6 h-6" />
        </button>
        <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row justify-center items-center border border-gray-400 rounded-2xl w-full max-w-md md:max-w-5xl">
          <div className="bg-orange-400 w-full md:w-1/2 h-1/2 rounded-t-xl">
            <img src={Woman} alt="Woman" className="w-full" />
          </div>
    
          <div className="w-full md:w-1/2 h-1/2 flex flex-col p-4 md:p-20 relative">
            {/* Position cancel button to top right corner */}
            <div className="absolute top-4 right-4">
              <img src={Cancel} alt="Cancel" className="w-8" />
            </div>
    
            {/* Heading and description */}
            <div className="justify-center items-center p-4 md:p-10">
              <p className="text-2xl md:text-4xl">Login or register</p>
              <p className="text-gray-400 mt-4 md:mt-8">
                Join India’s largest doctors community by registering account with
                us.
              </p>
            </div>
    
            {/* Phone number input */}
            <div className="flex flex-row border p-5 rounded-xl border-gray-700">
              <p className="ml-3 mr-3">+91</p>
              <span className="border border-gray-700 mr-3" />
              <input
                placeholder="Enter phone number"
                className="flex-1 outline-none"
              />
            </div>
    
            {/* Button */}
            <Button>
              Get otp now
              <img
                src={Arrow_right}
                className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 w-8"
                alt="Arrow Right"
              />
            </Button>
    
            {/* Terms and Conditions link */}
            <p className="mt-4 md:mt-14 ml-4 md:ml-8 text-gray-400 flex items-center">
              Proceed signing by accepting all&nbsp;
              <a href="#" className="text-blue-400">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
