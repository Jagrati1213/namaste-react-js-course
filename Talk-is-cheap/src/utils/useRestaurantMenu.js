import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useRestaurantMenu = ({ resId }) => {

    // state for handling menuList
    const [resMenuList, setResMenuList] = useState(null);

    // Render only once 
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMenuList();
    }, []);

    // fetch Menu list
    const fetchMenuList = async () => {
        const response = await fetch(`${SWIGGY_MENU_API}${resId}`);
        const json = await response.json();
        setResMenuList(json?.data);
        console.log(json.data);
    }

    return resMenuList;
}

export default useRestaurantMenu;