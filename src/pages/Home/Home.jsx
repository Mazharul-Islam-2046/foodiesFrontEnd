import Navbar from "../../Components/Navbar/Navbar"
import Hero from "./Sections/Hero";
import MostPopularFood from "./Sections/MostPopularFood";
import QuickBites from "./Sections/QuickBites";
import SpiceUp from "./Sections/SpiceUp";

const Home = () => {
  return (
    <div className="bg-[#ffffff]">
      <Navbar/>
      <Hero/>
      <MostPopularFood/>
      <SpiceUp/>
      <QuickBites/>
    </div>
  );
};

export default Home;
