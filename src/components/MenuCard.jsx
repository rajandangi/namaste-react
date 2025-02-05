const MenuCard = ({ menu, showItems, toggleItems }) => {
    return (
        <section className="rounded-md overflow-hidden shadow-sm grid">
            <div className="bg-custom-gray-100">
                <div className="flex justify-between p-2 cursor-pointer" onClick={toggleItems}>
                    <h3 className="font-bold">{menu.title}</h3>
                    <p>↓</p>
                </div>
                <div className="bg-gray-50 flex flex-col gap-1">
                    {showItems && menu.items.map((item) => (
                        <div className="flex justify-between bg-white p-2 items-center" key={item.id}>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-sm font-medium text-green-600">₹ {item.price}</p>
                                <p className="text-gray-500">{item.ingredients.join(', ')}</p>
                            </div>
                            <div className="relative">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-sm" />
                                <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-200 opacity-50 hover:opacity-90  rounded-sm shadow-sm text-green-700 font-extrabold">
                                    +
                                </button>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default MenuCard;