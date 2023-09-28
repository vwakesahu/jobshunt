import React from "react";
import Lottie from "lottie-react";
import HeroAnimation from "../img/heroAnimation.json";
import CustomButton from "./CustomButton";

const HeroComponent = () => {
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
        <div>
          <a href="#">
            <CustomButton
              text={"Find Job"}
              bgColor={"lightBlue"}
              textColor={"white"}
            />
          </a>

          <a href="#">
            <CustomButton text={"Post Job"} hoverColor={"lightBlue"} />
          </a>
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
