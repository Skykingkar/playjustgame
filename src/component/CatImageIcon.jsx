import React from "react";
import CatBadge from "./CatBadge";

const CatImageIcon = ({ value, badgevalue, title }) => {
  return (
    <div className=" text-center items-center justify-center  border-red-50">
      <div className="relative w-40 h-40  rounded-full border-2 text-center justify-center">
        <img
          src={value}
          alt="profile image"
          className="w-full h-full rounded-full object-cover"
        />
        <CatBadge value={badgevalue} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default CatImageIcon;
