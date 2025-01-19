const MenuCard = (props) => {
    const { menu } = props;

    return (
        <div className="menu-card">
            <img src={menu.image} alt={menu.name} />
            <div className="menu-details">
                <h3>{menu.name}</h3>
                <p>₹{menu.price}</p>
            </div>
        </div>
    )
}

export default MenuCard;