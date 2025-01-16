import { SITE_NAME } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
    const [btnText, setBtnText] = useState('Sign Up');

    const handleBtnClick = () => {
        btnText === 'Sign Up' ? setBtnText('Sign In') : setBtnText('Sign Up');
    }

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
                    <button
                        className="btn"
                        onClick={() => btnText === 'Sign Up' ? setBtnText('Sign In') : setBtnText('Sign Up')}
                    >
                        {btnText}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;