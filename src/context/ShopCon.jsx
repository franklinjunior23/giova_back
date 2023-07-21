import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
const ShopContext = createContext();
export const ShopUseContext = ()=>{
    const data = useContext(ShopContext);
    return data;
}

export const ShopProvider= ({children})=>{
    const [ListShop, setListShop] = useState([]);
    
    const addShop= (shop)=>{
        setListShop([...ListShop,shop])
    }

    return (
        <ShopContext.Provider value={{ ListShop,addShop }}>
        {children}
        </ShopContext.Provider>
    )
}
ShopProvider.propTypes = {
children: PropTypes.node.isRequired,
};