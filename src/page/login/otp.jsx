import React, { useRef } from "react";
import Woman from "../../assets/woman_login.svg";
import Cancel from "../../assets/icon/cancel.svg";
import Arrow_right from "../../assets/icon/arrow_right.svg";
import chevron_left from "../../assets/icon/chevron_left.svg";
import Button from "../../component/Button"; // Import the Button component

const Login = () => {
  // Create refs for each OTP input field
  const otpFields = Array.from({ length: 6 }, () => useRef(null));

  // Function to focus on the next input field
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
    <div className="flex flex-col md:flex-row justify-center items-center border border-gray-400 rounded-2xl bg-slate-50 w-[1260px]">
      <div className="bg-orange-400 w-full md:w-1/2 rounded-t rounded-t-xl">
        <img src={Woman} alt="Woman" className="w-full" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col p-4 md:p-20 relative">
        <div className="absolute top-4 right-4">
          <img src={Cancel} alt="Cancel" className="w-8" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="absolute left-4 top-10">
            <img src={chevron_left} alt="chevron_left" className="w-8" />
          </div>
          <div className="absolute left-12 top-11 text-blue-400">Back</div>
        </div>

        <div className="justify-center items-center p-4 md:p-10">
          <p className="text-2xl md:text-4xl">Phone verification</p>
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
              className="border-none border-b border-gray-400 w-8 h-8 text-center mx-1 outline-none"
              style={{ borderBottomStyle: "solid", borderBottomWidth: "2px" }}
              maxLength={1}
              placeholder="*"
              onChange={(e) => {
                if (e.target.value && e.target.value.length === 1) {
                  focusNextInput(index);
                } else if (e.target.value === "") {
                  focusPreviousInput(index);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !e.target.value) {
                  focusPreviousInput(index);
                }
              }}
            />
          ))}
        </div>

        <Button>
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
  );
};

export default Login;
