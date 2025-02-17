import { DataContext } from "@/providers/DataProvider";
import CardSlider from "../../../Components/Slider/CardSlider";
import { useContext } from "react";


const QuickBites = () => {
    const { allMenu } = useContext(DataContext);


    return (
        <div className="relative max-w-[1520px] w-11/12 mx-auto px-4 sm:px-6 lg:px-8 h-full pb-14">
            <h2 className="text-4xl font-bold mb-10">Quick Bites, Big Flavors</h2>
            <CardSlider options={{ cardType: "food", menuItems: allMenu }}/>
        </div>
    );
};

export default QuickBites;