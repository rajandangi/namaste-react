const RestaurantCard = (props) => {
    const { data } = props;

    return (
        <div className="bg-custom-gray-100 rounded-lg hover:bg-custom-gray-200">
            <img
                src={data.logo || "https://picsum.photos/200/300"}
                alt="Restaurant food"
                className="w-full h-[200px] object-cover overflow-hidden rounded-t-lg"
            />
            <div className="py-2 px-4 space-y-1">
                <h3 className="font-bold">{data.name}</h3>
                <div>{data.cuisins.join(', ')}</div>
                <h4>{"Rating: " + data.rating}</h4>
                <h4>{data.time + " Minutes"}</h4>
            </div>
        </div>
    )
}

// Higher Order Component
// input -> RestaurantCard => output -> RestaurantCard with label
export const withPromotedLabel= (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute p-2 rounded-tl-lg rounded-br-md bg-gray-400 text-white">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
    
}
export default RestaurantCard;