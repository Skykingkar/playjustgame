import React from "react";

const CatBadge = ({ value }) => {
  return (
    <div
      className="rounded-3xl text-white px-4 py-2 m-2 absolute -bottom-0.5 right-0"
      style={{
        background:
          "radial-gradient(circle at center, #D8358D -50%, #0F0829 50%, #0F0829 100%)",
      }}
    >
      {value}
    </div>
  );
};

export default CatBadge;
