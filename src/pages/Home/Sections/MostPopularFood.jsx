import CardSlider from "../../../Components/Slider/CardSlider";


const MostPopularFood = () => {
    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pt-28 pb-14">
            <h2 className="text-4xl font-semibold mb-14">Most Popular Food</h2>
            <CardSlider/>
        </div>
    );
};

export default MostPopularFood;