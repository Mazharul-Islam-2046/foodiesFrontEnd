import { useInfiniteQuery } from "@tanstack/react-query";
import CardSlider from "../../../Components/Slider/CardSlider";
import { menuApi } from "@/api/menuApi";

const MostPopularFood = () => {
  const {
    data: foodItems,
    isLoading: foodLoading,
    isError: foodError,
    error: foodErrorData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['foodItems'],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await menuApi.getAllMenu(pageParam, 7);
      console.log(response.data.data.menuItems);
      return response.data.data.menuItems
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 60 * 60 * 200, //
  });

  

  if (foodLoading) {
    return <div>Loading...</div>;
  }

  if (foodError) {
    return <div>Error: {foodErrorData.message}</div>;
  }

  return (
    <div className="relative max-w-[1520px] w-11/12 mx-auto px-4 sm:px-6 lg:px-8 h-full pt-28 pb-14">
      <h2 className="text-4xl font-bold mb-10">Most Popular Food</h2>
      
      {foodItems ? (
        <CardSlider options={{ cardType: "food", menuItems: foodItems.pages.map(page => page), hasNextPage: hasNextPage, isFetchingNextPage: isFetchingNextPage, fetchNextPage: fetchNextPage }} />
      ) : (
        <div>No menu items available</div>
      )}
    </div>
  );
};

export default MostPopularFood;