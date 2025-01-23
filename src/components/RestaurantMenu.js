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
        <div className="mx-1 space-y-4">
            <div className="flex gap-8 border border-solid border-gray-200 p-4 rounded-md">
                <img src={restaurantMenu.data.logo} alt={restaurantMenu.name} className="w-[300px] h-[200px] object-cover rounded-md" />
                <div className="space-y-2">
                    <h1 className="text-xl font-bold">{restaurantMenu.data.name}</h1>
                    <p className="font-medium">{restaurantMenu.data.cuisins.join(", ")}</p>
                    <div className="flex gap-4">
                        <span>⭐ {restaurantMenu.data.rating}</span>
                        <span>🕒 {restaurantMenu.data.time} mins</span>
                        <span>💰 {restaurantMenu.data.costfortwoMessage}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4 font-bold">
                <h2 className="text-2xl">Menu</h2>
                <div className="grid grid-container gap-6">
                    {restaurantMenu.data.menu.map((item) => (
                        <MenuCard key={item.id} menu={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;