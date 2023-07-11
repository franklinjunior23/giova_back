import { createContext, useContext, useState } from "react";

const ShopContext = createContext();
export const ShopUseContext = ()=>{
    const data = useContext(ShopContext);
    return data;
}

export const ShopProvider= ({children})=>{
    const [ListShop, setListShop] = useState([]);
    
    const addShop= ()=>{

    }

    return (
        <ShopContext.Provider value={{ ListShop,addShop }}>
        {children}
        </ShopContext.Provider>
    )
}