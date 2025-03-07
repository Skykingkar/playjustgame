// Login.jsx
import React, { useRef,useState } from "react";
import Woman from "../../assets/woman_login.svg";
import Cancel from "../../assets/icon/cancel.svg";
import Arrow_right from "../../assets/icon/arrow_right.svg";
import Button from "../../component/Button"; // Import the Button component
import chevron_left from "../../assets/icon/chevron_left.svg";

import { Link } from 'react-router-dom';
const Login = ( {onClose }) => {
  const otpFields = Array.from({ length: 6 }, () => useRef(null));
  const [showOtp, setShowOtp] = useState(false); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [phoneError, setPhoneError] = useState("");
  const [otpError, setOtpError] = useState("");
  const DUMMY_OTP = "123456"; // Dummy OTP for validation
  // Function to focus on the next input field


  const handleGetOtp = () => {
    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneError("Enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
      setShowOtp(true);
    }
  };

  // Function to handle OTP verification
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === DUMMY_OTP) {
      alert("Login successful!");
      onClose();
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

  const focusNextInput = (index) => {
    if (otpFields[index + 1]) {
      otpFields[index + 1].current.focus();
    }
  };

  // Function to focus on the previous input field
  const focusPreviousInput = (index) => {
    if (otpFields[index - 1]) {
      otpFields[index - 1].current.focus();
    }
  };
  return (
    <> 
    {!showOtp ? (
    <div className="flex flex-col md:flex-row justify-center items-center border border-gray-400 rounded-2xl bg-slate-50 w-[1260px]">
      <div className="bg-orange-400 w-full md:w-1/2 h-1/2 rounded-t ">
        <img src={Woman} alt="Woman" className="w-full" />
      </div>

      <div className="w-full md:w-1/2 h-1/2 flex flex-col p-4 md:p-20 relative">
        {/* Position cancel button to top right corner */}
        <button
        className="absolute top-1 right-14 p-1 bg-gray-200 rounded-full"
        onClick={onClose}
      >
        <img src={Cancel} alt="Close" className="w-5 h-5" />
      </button>

        {/* Heading and description */}
        <div className="justify-center items-center p-4 md:p-10">
          <p className="text-2xl md:text-4xl text-black">Login or register</p>
          <p className="text-gray-400 mt-4 md:mt-8">
            Join India’s largest doctors community by registering account with
            us.
          </p>
        </div>

        {/* Phone number input */}
        <div className="flex flex-row border p-5 rounded-xl border-gray-700">
          <p className="ml-3 mr-3 text-black">+91</p>
          <span className="border border-gray-700 mr-3" />
          <input
          type="text"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/, ""))}
          className="flex-1 outline-none text-black bg-none"
          maxLength={10}
        />
        </div>
        {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
        {/* Button */}
    
        <Button onClick={handleGetOtp}>
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
    ):(
      <div className="flex flex-col md:flex-row justify-center items-center border border-gray-400 rounded-2xl bg-slate-50 w-[1260px]">
      <div className="bg-orange-400 w-full md:w-1/2 rounded-t rounded-t-xl">
        <img src={Woman} alt="Woman" className="w-full" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col p-4 md:p-20 relative">
      <button
      className="absolute top-1 right-14 p-1 bg-gray-200 rounded-full"
      onClick={onClose}
    >
      <img src={Cancel} alt="Close" className="w-5 h-5" />
    </button>

        <div className="flex flex-col items-center justify-center">
          <div className="absolute left-4 top-10">
            <img src={chevron_left} alt="chevron_left" className="w-8" />
          </div>
          <div
          className="absolute left-12 top-11 text-blue-400 cursor-pointer"
          onClick={() => setShowOtp(false)}
        >
          Back
        </div>
        </div>

        <div className="justify-center items-center p-4 md:p-10">
          <p className="text-2xl md:text-4xl text-black">Phone verification</p>
          <p className="text-gray-400 mt-4 md:mt-8">
            We’ve sent a one-time code to xxxx6655,
          </p>
          <p className="text-gray-400">please enter the code below</p>
        </div>

        <div className="flex justify-center items-center mt-2 md:mt-4">
        {otpFields.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            className="border-none border-b border-gray-400 w-8 h-8 text-center mx-1 outline-none text-black"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => {
              const newOtp = [...otp];
              newOtp[index] = e.target.value.replace(/\D/, "").slice(-1);
              setOtp(newOtp);
              if (e.target.value) focusNextInput(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !otp[index]) {
                focusPreviousInput(index);
              }
            }}
          />
        ))}
        </div>
        {otpError && <p className="text-red-500 text-sm mt-2">{otpError}</p>}
        <Button onClick={handleVerifyOtp}>
          Verify now
          <img
            src={Arrow_right}
            className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 w-8"
            alt="Arrow Right"
          />
        </Button>
 
        <p className="mt-4 md:mt-14 ml-4 md:ml-8 text-gray-400 flex items-center">
          Proceed signing by accepting all&nbsp;
          <a href="#" className="text-blue-400">
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
    )
    }
    </>
  );
};

export default Login;
