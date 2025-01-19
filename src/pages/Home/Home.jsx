import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar"
import ExploreDiverseMenu from "./Sections/ExploreDiverseMenu";
import Hero from "./Sections/Hero";
import MostPopularFood from "./Sections/MostPopularFood";
import QuickBites from "./Sections/QuickBites";
import Signup from "./Sections/Signup";
import SpiceUp from "./Sections/SpiceUp";

const Home = () => {
  return (
    <div className="bg-[#ffffff]">
      <Navbar/>
      <Hero/>
      <MostPopularFood/>
      <SpiceUp/>
      <QuickBites/>
      <Signup/>
      <ExploreDiverseMenu/>
      <Footer/>
    </div>
  );
};

export default Home;
