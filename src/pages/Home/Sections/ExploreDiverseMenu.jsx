import CategoryCard from "../../../Components/Card/CategoryCard";


const ExploreDiverseMenu = () => {
    return (
        <div className="relative max-w-[1520px] w-11/12 mx-auto px-4 sm:px-6 lg:px-8 h-full pb-14">
            <h2 className="text-4xl font-bold mb-10">Explore Our Diverse Menu</h2>
            <div className="menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
            </div>
        </div>
    );
};

export default ExploreDiverseMenu;