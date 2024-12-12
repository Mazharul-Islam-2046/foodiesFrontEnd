import CardSlider from "../../../Components/Slider/CardSlider";


const MostPopularFood = () => {
    return (
        <div className="relative max-w-[1520px] w-11/12 mx-auto px-4 sm:px-6 lg:px-8 h-full pt-28 pb-14">
            <h2 className="text-4xl font-bold mb-10">Most Popular Food</h2>
            <CardSlider options={{ cardType: "food" }}/>
        </div>
    );
};

export default MostPopularFood;