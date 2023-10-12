import React from "react";
import HomeCard from "./HomeCard";

import Avatar1 from "../img/avatars/av1.json";
import Avatar2 from "../img/avatars/av2.json";
import { useStateValue } from "../context/StateProvider";

const FeaturedJobs = () => {
  const [{ jobData }, dispatch] = useStateValue();

  return (
    <div className=" mt-16">
      <p className=" text-2xl font-medium  text-center">Featured Jobs</p>

      <HomeCard data={jobData?.filter((n) => n.featured === "True")} />

      
    </div>
  );
};

export default FeaturedJobs;
