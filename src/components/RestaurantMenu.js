import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantMenu = useRestaurantMenu(resId);

    if (restaurantMenu === null) {
        return <Shimmer />
    }

    return (
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img src={restaurantMenu.data.logo} alt={restaurantMenu.name} className="restaurant-img" />
                <div className="restaurant-info">
                    <h1>{restaurantMenu.data.name}</h1>
                    <p>{restaurantMenu.data.cuisins.join(", ")}</p>
                    <div className="meta-info">
                        <span>⭐ {restaurantMenu.data.rating}</span>
                        <span>🕒 {restaurantMenu.data.time} mins</span>
                        <span>💰 {restaurantMenu.data.costfortwoMessage}</span>
                    </div>
                </div>
            </div>

            <div className="menu-items">
                <h2>Menu</h2>
                <div className="menu-list">
                    {restaurantMenu.data.menu.map((item) => (
                        <MenuCard key={item.id} menu={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;