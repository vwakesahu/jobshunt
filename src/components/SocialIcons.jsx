import React from "react";
import { BiLogoGithub , BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      <a href="https://twitter.com/vwakesahu" target="_blank">
        <div className=" rounded-full border p-2 hover:bg-white hover:text-lightBlue">
          <FaXTwitter alt="twitter" className=" cursor-pointer text-sm " />
        </div>
      </a>
      <a href="https://www.instagram.com/viveksahu___/" target="_blank">
        <div className=" rounded-full border p-2 hover:bg-white hover:text-lightBlue">
          <BiLogoInstagram  alt="instagram" className="cursor-pointer text-sm" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/vwakesahu/" target="_blank">
        <div className=" rounded-full border p-2 hover:bg-white hover:text-lightBlue">
          <BiLogoLinkedin
            alt="linkedin_icon"
            className=" cursor-pointer text-sm"
          />
        </div>
      </a>
      <a href="https://github.com/vwakesahu" target="_blank">
        <div className=" rounded-full border p-2 hover:bg-white hover:text-lightBlue">
          <BiLogoGithub  alt="github" className=" cursor-pointer text-sm" />
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;
