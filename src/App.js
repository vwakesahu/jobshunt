import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import FindJob from "./components/FindJob";
import Navbar from "./components/Navbar";
import { useStateValue } from "./context/StateProvider";
import { data } from "autoprefixer";
import { getAllJobData } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [{ jobData }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllJobData().then((data) => {
      dispatch({
        type: actionType.SET_JOB,
        jobData: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="/findjob" element={<FindJob />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
