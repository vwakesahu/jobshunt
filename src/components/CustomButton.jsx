import React from "react";

const CustomButton = ({text, bgColor, textColor, hoverColor}) => {
  return (
    <button className={`p-3 bg-${bgColor} text-${textColor} hover:text-${hoverColor} md:px-10 rounded-lg`}>
      {text}
    </button>
  );
};

export default CustomButton;
