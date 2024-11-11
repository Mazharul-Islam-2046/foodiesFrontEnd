import CardSlider from "../../../Components/Slider/CardSlider";


const MostPopularFood = () => {
    return (
        <div>
            <h2 className="text-4xl font-semibold mb-12">Most Popular Food</h2>
            {
                <CardSlider cardType="food"/>
            }
        </div>
    );
};

export default MostPopularFood;