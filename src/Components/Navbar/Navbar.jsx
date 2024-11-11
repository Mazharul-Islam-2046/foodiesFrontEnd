

const Navbar = () => {
    return (
        <div className="px-[60px] pt-6 pb-4 flex justify-between items-center shadow-lg bg-white">
            <div className="flex items-center">
                <h2 className="font-logoFont text-3xl text-[#E21B70]">Foodies</h2>
            </div>
            <div className="flex gap-12 items-center">
                <button className="text-sm font-semibold">
                    Home
                </button>
                <button className="text-sm font-semibold">
                    Menu
                </button>
                <button className="text-sm font-semibold">
                    Restaurants
                </button>
                <button className="text-sm font-semibold">
                    About
                </button>
            </div>
            <div className="flex gap-4 items-center justify-between text-xs">
                <button className="border-2 border-[#5B5B5B] font-semibold py-2 pl-[26px] pr-7 rounded-[10px]">Login</button>
                <button className="bg-[#E21B70] text-white font-semibold py-2 pl-[26px] pr-7 rounded-[10px] border-2 border-[#E21B70]">Signup</button>
            </div>
        </div>
    );
};

export default Navbar;