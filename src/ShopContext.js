import React,{createContext, useState} from 'react';
import fakeData from './fakeData'

export const ShopInfo = createContext();
export const ShopContext = (props) => {
    const first10 = fakeData.slice(0,10)
    const [products,setProducts]=useState(first10)
   
    
    return (
        <ShopInfo.Provider value={[products,setProducts]} >
            {props.children}
        </ShopInfo.Provider>
    );
};

