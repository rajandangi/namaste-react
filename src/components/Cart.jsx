import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="space-y-4 lg:w-8/12 lg:mx-auto mx-2">
            <h2 className="text-3xl font-bold">Cart Items</h2>
            <div className="grid gap-4">
                <section className="rounded-md overflow-hidden shadow-sm grid">
                    <div className="bg-custom-gray-100">
                        <div className="bg-gray-50 flex flex-col gap-1">
                            {cartItems.map((item) => (
                                <div className="flex justify-between bg-white p-2 items-center" key={item.id}>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-sm font-medium text-green-600">₹ {item.price}</p>
                                        <p className="text-gray-500">{item.ingredients.join(', ')}</p>
                                    </div>
                                    <div className="relative">
                                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-sm" />
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Cart;