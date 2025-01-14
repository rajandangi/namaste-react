import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { restaurantData } from '../utils/restaurantData';

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantData);

    const filterTopRatedRestaurants = () => {
        const topRatedRestaurants = restaurants.filter((restaurant) => restaurant.data.rating > 4);
        setRestaurants(topRatedRestaurants);
    }

    return (
        <div className="body">
            <div className='filter'>
                <button className='filter-btn' onClick={filterTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {restaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.id} data={restaurant.data} />
                })}
            </div>
        </div>
    )
}

export default Body;