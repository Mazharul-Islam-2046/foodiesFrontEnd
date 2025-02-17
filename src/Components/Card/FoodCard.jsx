import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {  // Changed to just destructure `item` 
  // Add null check for item
  if (!item) {
    return null;
  }

  // Format price to include currency
  const formatPrice = (price) => `${parseInt(price).toFixed(2)}tk`;

  // Truncate description to maintain consistent card height
  const truncateDescription = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '... Details';
  };

  return (
    <div className="max-w-80 rounded-2xl overflow-hidden bg-white shadow-md pb-3">
      <div 
        className="imagePart h-32 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        <div className="h-full w-full bg-[#00000040] px-3 pt-3">
          <div className="flex justify-between items-center">
            <p className="rounded-full bg-[#E21B70] px-4 py-1 text-sm font-semibold">
              Price {formatPrice(item.price)}
            </p>
            <div className="w-8 p-2 bg-white rounded-full cursor-pointer">
              <img 
                src="/heart.1024x924.png" 
                alt="Favorite"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="textPart space-y-5 px-3">
        <div className="pt-3">
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {item.category}
          </span>
          {item.healthy && (
            <span className="ml-2 text-sm text-green-500 bg-green-100 px-2 py-1 rounded">
              Healthy
            </span>
          )}
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-xl font-semibold">{item.name}</p>
            <span className="text-sm text-gray-500">
              ⭐ {item.popularity}%
            </span>
          </div>
          <p className="text-sm mb-3">
            {truncateDescription(item.description)}
          </p>
        </div>
        <button className="text-center w-full py-2 rounded-xl bg-[#E21B70] text-white hover:bg-black transition-colors duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    healthy: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    restaurant: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired
};

export default FoodCard;