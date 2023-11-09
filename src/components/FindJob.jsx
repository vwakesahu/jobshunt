import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import HomeCard from "./HomeCard";

function FindJob() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const featured = new URLSearchParams(location.search).get("featured");

  const [isRecentJobsActive, setIsRecentJobsActive] = useState(true);
  const [isFeaturedJobs, setIsFeaturedJobs] = useState(false);
  const [isAddJobActive, setIsAddJobActive] = useState(false);

  const navigate = useNavigate();
  const [{ jobData }, { user }, dispatch] = useStateValue();
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  useEffect(() => {
    let updatedJobs = jobData;

    if (search) {
      updatedJobs = jobData?.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (featured) {
      updatedJobs = updatedJobs?.filter((job) => job.featured === true);
      setIsFeaturedJobs(true)
      setIsRecentJobsActive(false)
      setIsAddJobActive(false)
    }

    setFilteredJobs(updatedJobs);
  }, [jobData, search, featured]);

  const handleFeaturedJobsClick = () => {
    const featuredJobs = jobData.filter((job) => job.featured === true);
    setIsFeaturedJobs(true);
    setIsRecentJobsActive(false);
    setIsAddJobActive(false);
    setFilteredJobs(featuredJobs);
  };

  const handleRecentJobsClick = () => {
      navigate("/findJob");
    setIsFeaturedJobs(false);
    setIsRecentJobsActive(true);
    setIsAddJobActive(false);
    setFilteredJobs(jobData);
  };

  const handleAddJobClick = () => {
    navigate("/addJob");
  };


  return (
    <div className="md:p-8 md:px-48 p-7">
      <p className="text-center text-2xl md:text-[4rem] font-semibold my-32 leading-tight">
        Join our world-class team of creators &{" "}
        <span className="text-lightBlue">dreamers</span>
      </p>

      <div className="mt-36 flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center text-center">
          <p className="text-3xl font-semibold">New Jobs</p>

          <p className="mt-6 md:w-[500px] text-lighttextGray">
            Post a job to tell us about your project. We'll quickly match you
            with the right freelancers.
          </p>
          <div className="mt-4 flex justify-center gap-5 shadow-lg p-2 rounded-xl">
            <p
              className={`px-4 py-2 rounded-xl cursor-pointer ${
                isRecentJobsActive ? "bg-lightBlue text-white" : ""
              }`}
              onClick={handleRecentJobsClick}
            >
              Recent Jobs
            </p>
            <p
              className={`px-4 py-2 rounded-xl cursor-pointer ${
                isFeaturedJobs ? "bg-lightBlue text-white" : ""
              }`}
              onClick={handleFeaturedJobsClick}
            >
              Featured Jobs
            </p>
            {user && (
              <p
                className={`border px-4 py-2 rounded-xl cursor-pointer ${
                  isAddJobActive ? "bg-lightBlue text-white" : ""
                }`}
                onClick={handleAddJobClick}
              >
                Add Jobs
              </p>
            )}
          </div>
        </div>
      </div>
      {search && (
        <p className="text-center text-xl md:text-[2rem] font-semibold mt-16">
          Search results for: <span className="text-lightBlue">{search}</span>
        </p>
      )}

      {isFeaturedJobs && (
        <p className="text-center text-xl md:text-[2rem] font-semibold mt-16">
          Featured Jobs
        </p>
      )}

      {
        isRecentJobsActive && ( <p className="text-center text-xl md:text-[2rem] font-semibold mt-16">
        Recent Jobs
      </p> )
      }
      <HomeCard data={filteredJobs} />
    </div>
  );
}

export default FindJob;
