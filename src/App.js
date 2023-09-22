import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="md:p-8 md:px-48 p-7">
        <HeroComponent />
      </div>
    </div>
  );
}

export default App;
