import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { RESTAURANT_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const filterTopRatedRestaurants = () => {
        const topRatedRestaurants = restaurants.filter((restaurant) => restaurant.data.rating > 4);
        setFilteredRestaurants(topRatedRestaurants);
    }

    const searchRestaurants = () => {
        if (!searchTerm.trim()) {
            setFilteredRestaurants(restaurants);
            return;
        }

        const searchedRestaurants = restaurants.filter((restaurant) => {
            return restaurant.data.name.toLowerCase().includes(searchTerm.toLowerCase())
        })

        setFilteredRestaurants(searchedRestaurants);
    }

    async function fetchRestaurants() {
        const response = await fetch(RESTAURANT_API);
        const data = await response.json();
        setRestaurants(data);
        setFilteredRestaurants(data); // set filteredRestaurants to all restaurants initially
    }

    // useEffect is a hook that runs after the first render of the component
    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (restaurants.length === 0 ? <Shimmer /> :
        <div className="body">
            <div className='filter'>
                <div className="search-container">
                    <input type="text"
                        className='search-input'
                        placeholder="Search Restaurants"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />

                    <button className='btn' onClick={searchRestaurants}>Search</button>
                </div>

                <button className='btn' onClick={filterTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
                            <RestaurantCard data={restaurant.data} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;