import React, { createContext, useContext, useState } from "react";

export const MenuContext = React.createContext();

export default MenuProvider = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    function HiddenMenu(){
        setIsMenuOpen(prevIsMenuOpen=>!prevIsMenuOpen)
    }
    return (
        <MenuContext.Provider value={isMenuOpen}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => useContext(MenuContext);
