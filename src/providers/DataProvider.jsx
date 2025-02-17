import { createContext } from "react";
import PropTypes from "prop-types";
import { menuApi } from "@/api/menuApi";
import { useQuery } from "@tanstack/react-query";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  // Query for all menu items
  const {
    data: menuData,
    isLoading: isMenuLoading,
    isError: isMenuError,
    error: menuError,
    refetch: refetchMenu
  } = useQuery({
    queryKey: ['menuItems'],
    queryFn: async () => {
      try {
        const response = await menuApi.getAllMenu(1, 10);
        return response?.data?.data?.menuItems;
      } catch (err) {
        throw new Error(err.message || 'Failed to fetch menu items');
      }
    }
  });

  // Query for healthy items
  const {
    data: healthyItemsData,
    isLoading: isHealthyItemsLoading,
    isError: isHealthyItemsError,
    error: healthyItemsError,
    refetch: refetchHealthyItems
  } = useQuery({
    queryKey: ['healthyItems'],
    queryFn: async () => {
      try {
        const response = await menuApi.getHealthyItems(1, 10);
        return response?.data?.data?.menuItems;
      } catch (err) {
        throw new Error(err.message || 'Failed to fetch healthy items');
      }
    }
  });

  // Handle loading states
  if (isMenuLoading || isHealthyItemsLoading) {
    return <div>Loading...</div>;
  }

  // Handle error states
  if (isMenuError || isHealthyItemsError) {
    return (
      <div>
        Error: {menuError?.message || healthyItemsError?.message}
      </div>
    );
  }

  const dataContextValue = {
    allMenu: menuData || [],
    getAllMenu: refetchMenu,
    allHealthyItems: healthyItemsData || [],
    getAllHealthyItems: refetchHealthyItems
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node
};

export default DataProvider;