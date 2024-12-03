import Navbar from "../../Components/Navbar/Navbar"
import Hero from "./Sections/Hero";
import MostPopularFood from "./Sections/MostPopularFood";
import SpiceUp from "./Sections/SpiceUp";

const Home = () => {
  return (
    <div className="bg-[#ffffff]">
      <Navbar/>
      <Hero/>
      <MostPopularFood/>
      <SpiceUp/>
    </div>
  );
};

export default Home;
