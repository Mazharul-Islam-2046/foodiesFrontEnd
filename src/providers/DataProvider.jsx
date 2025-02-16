import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { menuApi } from "@/api/menuApi";

export const DataContext = createContext(null)


const DataProvider = ({children}) => {

    const [allMenu, setAllMenu] = useState([]);
    const [allHealthyItems, setAllHealthyItems] = useState([]);



    const getAllMenu = async (page, limit) => {
        try {
            const response = await menuApi.getAllMenuItems(page, limit);

            setAllMenu(response.data.data);
        } catch (err) {
            console.error(err);
        }
    }



    const getAllHealthyItems = async (page, limit) => {
        try {
            const response = await menuApi.getHealthyItems(page, limit);
            setAllHealthyItems(response.data);
        } catch (err) {
            console.error(err);
        }
    }



    const dataContextValue = {
        allMenu,
        getAllMenu,
        allHealthyItems,
        getAllHealthyItems
    }


    





    return (
        <div>
            <DataContext.Provider value={{dataContextValue}}>{children}</DataContext.Provider>
        </div>
    );
};


DataProvider.propTypes = {
    children: PropTypes.node,
};

export default DataProvider;