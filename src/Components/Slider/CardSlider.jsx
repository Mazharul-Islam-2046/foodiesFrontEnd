import PropTypes from "prop-types";
import FoodCard from "../Card/FoodCard";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import CategoryCard from "../Card/CategoryCard";

const CardSlider = ({options}) => {
  const cardType = options?.cardType;
  console.log(cardType);
  const foodItems = [
    {
      name: "Classic Cheeseburger",
      category: "Fast Food",
      price: 12.99,
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
      description:
        "Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and special sauce",
    },
    {
      name: "Margherita Pizza",
      category: "Italian",
      price: 15.99,
      imageUrl:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80",
      description:
        "Traditional pizza with fresh mozzarella, tomatoes, and basil on a crispy crust",
    },
    {
      name: "Chicken Tikka Masala",
      category: "Indian",
      price: 16.99,
      imageUrl:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80",
      description: "Tender chicken in a rich, creamy tomato-based curry sauce",
    },
    {
      name: "Sushi Roll Platter",
      category: "Japanese",
      price: 24.99,
      imageUrl:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80",
      description:
        "Assorted fresh sushi rolls including California, Spicy Tuna, and Rainbow rolls",
    },
    {
      name: "Caesar Salad",
      category: "Salads",
      price: 10.99,
      imageUrl:
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80",
      description:
        "Crisp romaine lettuce, parmesan cheese, croutons with classic Caesar dressing",
    },
  ];
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
          },
          768: {
            slidesPerView: 2.8,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1440: {
            slidesPerView: 4.2,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        freeMode={true}
      >
        {
        cardType === "food" ?
        foodItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="pr-8 py-2 cursor-grab active:cursor-grabbing"
          >
            <FoodCard />
          </SwiperSlide>
        )) : 

        foodItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="pr-8 py-2 cursor-grab active:cursor-grabbing"
          >
            <CategoryCard/>
          </SwiperSlide>
        ))
      
      }
      </Swiper>
    </div>
  );
};

export default CardSlider;

CardSlider.propTypes = {
  options: PropTypes.object,
};
