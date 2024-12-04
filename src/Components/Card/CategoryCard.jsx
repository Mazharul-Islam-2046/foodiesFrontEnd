const CategoryCard = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img
        className="aspect-square object-cover "
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
        alt=""
      />

      {/* Overlay and Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
        <p className="text-3xl font-semibold text-white">Fast Food</p>
      </div>
    </div>
  );
};

export default CategoryCard;
