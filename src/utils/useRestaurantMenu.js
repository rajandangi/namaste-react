import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(RESTAURANT_API + "/" + resId);
        const data = await response.json();
        setRestaurantMenu(data);
    }

    return restaurantMenu;
}

export default useRestaurantMenu;