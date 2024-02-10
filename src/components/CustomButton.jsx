import React from "react";

const CustomButton = ({ text, bgColor, textColor, hoverColor, width }) => {
  return (
    <button
      className={`p-3 bg-${bgColor} text-${textColor} hover:text-${hoverColor} md:px-10 rounded-lg w-${width}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
