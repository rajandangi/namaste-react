import React from "react";
import ReactDOM from "react-dom/client";
/**
 * === UI Structure ===
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 * - Search
 * - Restaurant Container
 * - Restaurant Card
    * - Dish Name
    * - Image
    * - Restaurant Name
    * - Rating
    * - Cuisines
    * - Time to Deliver
 *
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <h1 className="logo">Namaste Food</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { data } = props;

    return (
        <div className="restaurant-card">
            <img
                src={data.logo || "https://picsum.photos/200/300"}
                alt="Restaurant food"
                className="restaurant-img"
            />
            <div className="card-body">
                <h3 className="restaurant-name">{data.name}</h3>
                <div className="dish-name">{data.cuisins.join(', ')}</div>
                <h4 className="rating">{"Rating: " + data.rating}</h4>
                <h4>{data.time + " Minutes"}</h4>
            </div>
        </div>
    )
}

const restaurantData = [
    {
        id: 1,
        data: {
            name: "KFC",
            logo: "https://picsum.photos/seed/1/200/300",
            cuisins: ["Fast Food", "Burgers", "Wraps"],
            rating: 4.5,
            time: 38,
        }
    },
    {
        id: 2,
        data: {
            name: "Dominos",
            logo: "https://picsum.photos/seed/2/200/300",
            cuisins: ["Pizza", "Burgers", "Wraps"],
            rating: 4.5,
            time: 38,
        }
    },
    {
        id: 3,
        data: {
            name: "Burger King",
            cuisins: ["Fast Food", "Burgers", "Wraps"],
            rating: 4.5,
            time: 34,
        }
    },
    {
        id: 4,
        data: {
            name: "Subway",
            logo: "https://picsum.photos/seed/4/200/300",
            cuisins: ["Fast Food", "Burgers", "Wraps"],
            rating: 4.3,
            time: 35,
        }
    },
    {
        id: 5,
        data: {
            name: "McDonalds",
            logo: "https://picsum.photos/seed/5/200/300",
            cuisins: ["Fast Food", "Burgers", "Wraps"],
            rating: 4.7,
            time: 48,
        }
    },
    {
        id: 6,
        data: {
            name: "Pizza Hut",
            logo: "https://picsum.photos/seed/6/200/300",
            cuisins: ["Pizza", "Burgers", "Wraps"],
            rating: 4.5,
            time: 38,
        }
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {restaurantData.map((restaurant) => {
                    return <RestaurantCard key={restaurant.id} data={restaurant.data} />
                })}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);