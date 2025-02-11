import {api} from "../api/axiosInstance";
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null)


const DataProvider = ({children}) => {

    const [allMenu, setAllMenu] = useState([]);
    const [allHealthyItems, setAllHealthyItems] = useState([]);



    const getAllMenu = async () => {
        try {
            const response = await api.get('/menuItems/getAllMenuItems')
            
            setAllMenu(response.data.data);
        } catch (err) {
            console.error(err);
        }
    }



    const getAllHealthyItems = async () => {
        try {
            const response = await api.get('/menuItems/filterMenuItems', {
                params: {
                    isHealthy: true
                }
            });
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