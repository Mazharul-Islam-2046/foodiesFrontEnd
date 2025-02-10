import { createContext } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null)


const DataProvider = ({children}) => {


    





    return (
        <div>
            <DataContext.Provider value={{}}>{children}</DataContext.Provider>
        </div>
    );
};


DataProvider.propTypes = {
    children: PropTypes.node,
};

export default DataProvider;