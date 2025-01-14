import { SITE_NAME } from '../utils/constants';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <h1 className="logo">{SITE_NAME}</h1>
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

export default Header;