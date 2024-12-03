import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-logoFont font-bold text-pink-600">
                foodies
              </span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-pink-600">
                  Restaurants
                </a>
                <a href="#" className="text-gray-700 hover:text-pink-600">
                  Grocery
                </a>
                <a href="#" className="text-gray-700 hover:text-pink-600">
                  Shops
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <FaSearch className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search for food or restaurants"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent w-64"
              />
            </div>
            <button className="flex items-center text-gray-700 hover:text-pink-600">
              <FiShoppingCart />
              <span className="ml-1">Cart</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-pink-600">
              <FaRegCircleUser />
              <span className="ml-1">Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
