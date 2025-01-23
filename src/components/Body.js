import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { RESTAURANT_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const onlineStatus = useOnlineStatus();

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
        // setRestaurants(data);
        setFilteredRestaurants(data); // set filteredRestaurants to all restaurants initially
    }

    // useEffect is a hook that runs after the first render of the component
    useEffect(() => {
        fetchRestaurants();
    }, []);

    if (onlineStatus === false) {
        return (
            <div className="bg-green-300 border border-solid border-green-400 p-4 rounded-md text-center mx-1 font-semibold">
                <p>You are offline. Please check your internet connection.</p>
            </div>
        )
    }

    return (restaurants.length === 0 ? <Shimmer /> :
        <div className='mx-1'>
            <div className='my-4 flex items-center gap-4'>
                <div className="flex">
                    <input type="text"
                        className='py-2 px-4 border border-solid border-green-200 rounded-l-lg focus:outline-none'
                        placeholder="Search Restaurants"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />

                    <button className='bg-green-200 border-none py-2 rounded-r-lg px-4 cursor-pointer text-[1rem] text-custom-gray-300 hover:bg-green-300' onClick={searchRestaurants}>Search</button>
                </div>

                <button className='bg-green-200 border-none py-2 px-4 rounded-lg cursor-pointer text-[1rem] text-custom-gray-300 hover:bg-green-300' onClick={filterTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="grid grid-container gap-4">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
                            <RestaurantCard data={restaurant.data} />
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}

export default Body;