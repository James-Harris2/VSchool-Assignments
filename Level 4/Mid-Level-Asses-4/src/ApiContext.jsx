import { useDeferredValue } from 'react';
import React, { createContext, useContext, useState } from 'react';


// setting up API Context File

const ApiContext = createContext();

const useApi = () => {
    return useContext(ApiContext)
};

const ApiProvider = ({ children }) => {
    const [data, setData] = useState(null);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            const pareseError = await error.json();
            console.log(pareseError);
        }
    };

   
    return (
        <ApiContext.Provider value={{data,fetchData}}>
            {children}
        </ApiContext.Provider>

    )
};
export { ApiProvider, ApiContext }