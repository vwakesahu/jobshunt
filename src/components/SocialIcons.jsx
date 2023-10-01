import React from "react";
import {
  BiLogoMedium,
  BiLogoLinkedin,
  BiLogoTelegram,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      <a href="https://twitter.com/web3jobshunt">
        <div className=" rounded-full border p-2">
          <FaXTwitter alt="twitter" className=" cursor-pointer text-sm" />
        </div>
      </a>
      <a href="https://web3jobshunt.medium.com/">
        <div className=" rounded-full border p-2">
          <BiLogoMedium alt="medium" className="cursor-pointer text-sm" />
        </div>
      </a>
      <a href="https://www.linkedin.com/company/web3jobhunt/">
        <div className=" rounded-full border p-2">
          <BiLogoLinkedin
            alt="linkedin_icon"
            className=" cursor-pointer text-sm"
          />
        </div>
      </a>{" "}
      <a href="https://t.me/Web3jobshunt">
        <div className=" rounded-full border p-2">
          <BiLogoTelegram alt="telegram" className=" cursor-pointer text-sm" />
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;
