import React from "react";

const CustomButton = ({text, bgColor, textColor}) => {
  return (
    <button className={`p-3 bg-${bgColor} text-${textColor} md:px-10 rounded-lg`}>
      {text}
    </button>
  );
};

export default CustomButton;
