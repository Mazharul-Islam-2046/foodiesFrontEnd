

const FoodCard = () => {
    return (
        <div className="max-w-80 rounded-2xl overflow-hidden bg-white shadow-md pb-3">
            <div className="imagePart h-32 bg-[url('https://atanurrannagharrecipe.com/wp-content/uploads/2024/01/Kolkata-style-Mutton-Biriyani-Atanur-Rannaghar.jpg')] text-white bg-cover">
                <div className="h-full w-full bg-[#00000040] px-3 pt-3">
                    <div className="flex justify-between items-center">
                        <p className="rounded-full bg-[#E21B70] px-4 py-1 text-sm font-semibold">Price 250tk</p>
                        <div className="w-8 p-2 bg-white rounded-full cursor-pointer">
                            <img src="/heart.1024x924.png"></img>
                        </div>
                    </div>
                </div>

            </div>
            <div className="textPart space-y-5 px-3">
                <div></div>
                <div>
                    <p className="text-xl font-semibold mb-2">Best Biriyani Ever</p>
                    <p className="text-sm mb-3">Ingredients: Basmati rice, protein (chicken, mutton, beef, fish, or vegetables), yogurt... Details</p>
                </div>
                <button className="text-center w-full py-2 rounded-xl bg-[#E21B70] text-white hover:bg-black">Order Now</button>
            </div>
        </div>
    );
};

export default FoodCard;