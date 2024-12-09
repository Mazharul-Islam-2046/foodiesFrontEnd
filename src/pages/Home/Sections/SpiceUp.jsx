import CardSlider from "../../../Components/Slider/CardSlider";


const SpiceUp = () => {
    return (
        <div className="relative max-w-[1520px] w-11/12 mx-auto px-6 sm:px-6 lg:px-8 h-full pt-14 pb-28">
            <h2 className="text-4xl font-semibold mb-14">Spice Up Your Taste Buds</h2>
            <CardSlider options={{ cardType: "food" }}/>
        </div>
    );
};

export default SpiceUp;