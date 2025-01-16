import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    const filterTopRatedRestaurants = () => {
        const topRatedRestaurants = restaurants.filter((restaurant) => restaurant.data.rating > 4);
        setRestaurants(topRatedRestaurants);
    }

    async function fetchRestaurants() {
        const response = await fetch('http://localhost:3001/restaurants');
        const data = await response.json();
        setRestaurants(data);
    }

    // useEffect is a hook that runs after the first render of the component
    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (restaurants.length === 0 ? <Shimmer /> :
        <div className="body">
            <div className='filter'>
                <button className='btn' onClick={filterTopRatedRestaurants}>Top Rated Restaurants</button>
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