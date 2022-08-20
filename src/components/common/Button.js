import React from "react";

const Button = ({ bg, text }) => {
  return (
    <button
      className={`${
        bg === "primary"
          ? "bg-secondary"
          : bg === "yellow"
          ? "bg-secondary"
          : bg === "blue"
          ? "bg-quaternary"
          : "bg-[#ffffff]"
      } ${
        bg === "primary" || bg === "yellow"
          ? "text-[#021850]"
          : bg === "blue"
          ? "text-[#ffffff]"
          : "text-[#000103]"
      } px-[18px] py-2 rounded-lg font-medium text-sm md:text-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
