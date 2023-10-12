import React, { useState } from "react";
import HomeCard from "./HomeCard";
import Avatar1 from "../img/avatars/av1.json";
import Avatar2 from "../img/avatars/av2.json";
import AddJobForm from "./AddJobForm";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

const RecentJobs = () => {
  const [{ jobData }, dispatch] = useStateValue();



  return (
    <div className=" mt-16">
      <p className="text-2xl font-medium text-center">Recent Jobs</p>

      <HomeCard data={jobData} />
    </div>
  );
};

export default RecentJobs;
