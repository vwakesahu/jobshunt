import React from "react";
import Lottie from "lottie-react";
import CustomButton from "./CustomButton";
import Avatar1 from "../img/avatars/av1.json";

const HomeCard = ({
  title,
  subTitle,
  salary,
  type,
  organization,
  shift,
  requirements,
}) => {
  return (
    <div>
      {/* for mobile */}
      <div className="p-6 md:hidden bg-white border rounded-lg mt-6">
        <div className=" flex items-center font-medium gap-4">
          <div>
            <Lottie
              animationData={Avatar1}
              className="w-20 md:w-[15%] mb-3 border rounded-full"
            />
          </div>
          <div>
            <p>{title}</p>
            <p className=" text-sm  text-gray-400">Type: {type}</p>
          </div>
        </div>
        <p className=" text-justify text-gray-500 mt-6">{subTitle}</p>
        <div className=" flex justify-between items-center mt-4">
          <div>
            <p>Salary:</p>
            <p className=" text-lg font-semibold">
              {salary}RS<span className=" text-sm font-medium">/month</span>
            </p>
          </div>
          <CustomButton
            text={"Apply Job"}
            bgColor={"lightBlue"}
            textColor={"white"}
          />
        </div>
      </div>

      {/* for computer */}
      <div className="hidden md:flex mt-8">
        <div className=" flex-1 bg-white rounded-lg p-8">
          <div className="flex gap-12 items-center">
            <Lottie
              animationData={Avatar1}
              className="w-20 md:w-[15%] mb-3 border rounded-full"
            />
            <div className=" flex flex-col">
              <div className=" flex justify-between">
                <p className=" text-xl font-bold">{title}</p>
                <p className=" text-lg font-semibold">
                  {salary}RS<span className=" text-sm font-medium">/month</span>
                </p>
              </div>
              <div className=" flex gap-10">
                <div className=" flex-col mt-3">
                  <p className=" text-gray-500">Type</p>
                  <p className=" font-semibold">{type}</p>
                </div>
                <div className=" flex-col mt-3">
                  <p className=" text-gray-500">Shift</p>
                  <p className=" font-semibold">{shift}</p>
                </div>
                <div className=" flex-col mt-3">
                  <p className=" text-gray-500">Organization</p>
                  <p className=" font-semibold">{organization}</p>
                </div>
                <div className=" flex-col mt-3">
                  <p className=" text-gray-500">Requirements</p>
                  <p className=" font-semibold">{requirements}</p>
                </div>
              </div>
             <div className=" flex justify-between gap-10">
             <p className=" text-gray-500 text-sm mt-3 w-[70%]">{subTitle}</p>
             <CustomButton
            text={"Apply Job"}
            bgColor={"lightBlue"}
            textColor={"white"}
          />
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
