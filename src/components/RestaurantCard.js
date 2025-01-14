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

export default RestaurantCard;