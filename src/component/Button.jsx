// Button.js
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="p-5 border mt-2 rounded-xl border-gray-700 relative text-white"
      onClick={onClick}
      style={{
        background:
          "radial-gradient(circle at center, #D8358D -50%, #0F0829 50%, #0F0829 100%)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
