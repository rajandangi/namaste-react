import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(0);
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  return (
    <div className="space-y-4 lg:w-8/12 lg:mx-auto mx-2">
      <div className="flex gap-8 border border-solid border-gray-200 p-4 rounded-md shadow-sm">
        <img
          src={restaurantMenu.data.logo}
          alt={restaurantMenu.data.name}
          className="w-[300px] h-[200px] object-cover rounded-md"
        />
        <div className="space-y-2">
          <h1 className="text-xl font-bold">{restaurantMenu.data.name}</h1>
          <p className="font-medium">
            {restaurantMenu.data.cuisins.join(", ")}
          </p>
          <div className="flex gap-4">
            <span>⭐ {restaurantMenu.data.rating}</span>
            <span>🕒 {restaurantMenu.data.time} mins</span>
            <span>💰 {restaurantMenu.data.costfortwoMessage}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Menu</h2>
        <div className="grid gap-4">
          {restaurantMenu.data.menu.map((item, index) => (
            <MenuCard
              key={item.title}
              menu={item}
              showItems={index === showItems}
              toggleItems={() => setShowItems(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;