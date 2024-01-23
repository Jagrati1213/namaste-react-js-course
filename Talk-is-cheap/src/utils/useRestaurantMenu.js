import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useRestaurantMenu = ({ resId }) => {

    // state for handling menuList
    const [resMenuList, setResMenuList] = useState(null);

    // fetch Menu list
    const fetchMenuList = async () => {
        const response = await fetch(`${SWIGGY_MENU_API}${resId}`);
        const json = await response?.json();
        setResMenuList(json?.data);
    }
    // Render only once 
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMenuList();
    }, []);
    return resMenuList;
}

export default useRestaurantMenu;