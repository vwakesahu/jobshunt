import React from "react";
import {
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import RecentJobs from "./RecentJobs";
import FeaturedJobs from "./FeaturedJobs";
import { useStateValue } from "../context/StateProvider";

const Joblist = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();

  // Set the initial state to true for Recent Jobs
  const isRecentJobsActive =
    location.pathname === "/recentJobs" || location.pathname === "/";

  const handleRecentJobsClick = () => {
    navigate("/recentJobs");
  };

  const handleFeaturedJobsClick = () => {
    navigate("/featuredJobs");
  };

  return (
    <div className="mt-36 flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center text-center">
        <p className="text-3xl font-semibold">New & Random Jobs</p>
        {user && (
          <button className=" text-lightBlue text-2xl mt-4">Add New Job</button>
        )}

        <p className="mt-6 md:w-[500px] text-lighttextGray">
          Post a job to tell us about your project. We'll quickly match you with
          the right freelancers.
        </p>
        <div className="mt-4 flex justify-center gap-5 shadow-lg p-2 rounded-xl">
          <Link to="/recentJobs" className="flex">
            <p
              onClick={handleRecentJobsClick}
              className={`px-4 py-2 rounded-xl ${
                isRecentJobsActive ? "bg-lightBlue text-white" : ""
              }`}
            >
              Recent Jobs
            </p>
          </Link>
          <Link to="/featuredJobs" className="flex">
            <p
              onClick={handleFeaturedJobsClick}
              className={`px-4 py-2 rounded-xl ${
                !isRecentJobsActive ? "bg-lightBlue text-white" : ""
              }`}
            >
              Featured Jobs
            </p>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<RecentJobs />} />
        <Route path="/recentJobs" element={<RecentJobs />} />
        <Route path="/featuredJobs" element={<FeaturedJobs />} />
      </Routes>
    </div>
  );
};

export default Joblist;
