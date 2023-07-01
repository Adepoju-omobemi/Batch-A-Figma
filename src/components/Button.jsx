import React from "react";
import Arrow from "../assets/arrow.svg";

const Button = ({ type, children, onClick }) => {
  switch (type.toLowerCase()) {
    case "primary":
      return (
        <button
          className="border border-1 border-[#e0e0e0] rounded-3xl px-6 py-2"
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "default":
      return (
        <button
          className="border border-1 border-[#e0e0e0] bg-black py-2 text-[#ffffff] px-6  rounded-3xl flex items-center gap-3 "
          onClick={onClick}
        >
          {children} <img src={Arrow} alt="" />
        </button>
      );
    default:
      return;
  }
};

export default Button;
