import React from "react";
import HomeCard from "./HomeCard";
const RecentJobs = () => {
  return (
    <div className=" mt-16">
      <p className=" text-2xl font-medium  text-center">Recent Jobs</p>
      <HomeCard
        title="Account Executive Web3"
        type={"Part Time"}
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been is simply dummy text of the printing..."
        salary={"50,000"}
        organization={'Polygon pvt. ltd.'}
        shift={'10:00 - 14:00'}
        requirements={'HTML, CSS, Reactjs'}
      />
    </div>
  );
};

export default RecentJobs;
