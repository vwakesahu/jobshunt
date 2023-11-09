import React, { useState } from "react";
import Lottie from "lottie-react";
import HeroAnimation from "../img/heroAnimation.json";
import CustomButton from "./CustomButton";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const HeroComponent = () => {
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");

  const handleSearch = () => {
    // Redirect to /findjob with the searchField value as a query parameter
    navigate(`/findjob?search=${searchField}`);  };

  const handleInputChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 items-center ">
      <div className=" flex flex-col gap-6 pb-14 md:text-left text-center">
        <p className=" md:text-[3rem] text-[2.5rem] font-medium leading-tight">
          THE SMARTEST WAY TO BUILD YOUR WEB3{" "}
          <span className=" text-lightBlue ">CAREER</span>
        </p>
        <p className=" text-gray-400">
          We’re offering all projects, no matter their size, the opportunity to
          post jobs for free for 7 days. That’s not an offer. That’s forever.
        </p>

        <div className=" flex items-center justify-center gap-4 w-full bg-white px-5 py-4 rounded-lg shadow-smF hover:shadow-lg">
          {/* <a href="#">
            <CustomButton
              text={"Find Job"}
              bgColor={"lightBlue"}
              textColor={"white"}
            />
          </a>

          <a href="#">
            <CustomButton text={"Post Job"} hoverColor={"lightBlue"} />
          </a> */}
          <BiSearch className="" />
          <form
            action=""
            className=" w-full flex items-center justify-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type="text"
              placeholder="Job Title"
              className=" w-full focus:outline-none h-full"
              value={searchField}
              onChange={handleInputChange}
            />
            <button
              className=" w-32 h-full bg-lightBlue text-white py-2 rounded-lg px-2"
              type="submit"
            >
              Find Job
            </button>
          </form>
        </div>
      </div>
      <div className="pb-14 ">
        <Lottie
          animationData={HeroAnimation}
          className="border md:border-none bg-white md:bg-transparent rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
