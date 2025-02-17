import { DataContext } from "@/providers/DataProvider";
import CardSlider from "../../../Components/Slider/CardSlider";
import { useContext } from "react";


const SpiceUp = () => {

    const { allMenu } = useContext(DataContext);


    return (
        <div className="relative max-w-[1520px] w-11/12 mx-auto px-6 sm:px-6 lg:px-8 h-full pt-14 pb-28">
            <h2 className="text-4xl font-bold mb-10">Spice Up Your Taste Buds</h2>
            <CardSlider options={{ cardType: "food", menuItems: allMenu }}/>
        </div>
    );
};

export default SpiceUp;