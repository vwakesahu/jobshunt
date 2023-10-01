
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
     <Routes >
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Homepage />} />
     </Routes>
    </div>
  );
}

export default App;
