const MenuCard = (props) => {
    const { menu } = props;

    return (
        <div className="bg-custom-gray-100 rounded-md overflow-hidden shadow-sm">
            <img src={menu.image} alt={menu.name} className="object-cover w-full h-[200px]" />
            <div className="p-4 space-y-4">
                <h3 className="text-xl font-bold">{menu.name}</h3>
                <p className="text-red-600 font-semibold">₹{menu.price}</p>
            </div>
        </div>
    )
}

export default MenuCard;