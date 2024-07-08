import Navbar from "../../Components/Navbar/Navbar"
import Hero from "./Sections/Hero";
import MostPopularFood from "./Sections/MostPopularFood";

const Home = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Navbar/>
      <Hero/>
      <MostPopularFood/>
    </div>
  );
};

export default Home;
