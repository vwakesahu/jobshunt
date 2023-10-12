import React, { useState } from "react";
import Logo from "../img/logo.png";
import MenuIcon from "../img/menu-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="p-4 md:p-5 md:px-48 bg-white font-medium">
      <div className=" flex items-center lg:justify-between md:justify-center justify-between md:gap-5">
        <Link to="/">
          {" "}
          <div className=" flex items-center md:text-lg ">
            <img src={Logo} alt="logo" />
            <p>eb3jobshunt</p>
          </div>{" "}
        </Link>

        {/* for Desktop */}
        <div className="md:visible hidden md:flex gap-5">
          <button>Find Job</button>
          <button className="md:p-3 bg-lightBlue text-white md:px-10 rounded-lg">
            Post Job
          </button>
        </div>

        {/* for mobile */}
        <div className="md:hidden visible w-6">
          <img src={MenuIcon} onClick={handleMenu} />
        </div>
        {isMenu && (
          <div className=" absolute right-4 top-14 bg-white rounded-lg shadow-md ">
            <ul>
              <li className=" p-3 px-6">Find Job</li>
              <li className="p-3 px-6 rounded-b-lg text-white bg-lightBlue">
                Post Job
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
