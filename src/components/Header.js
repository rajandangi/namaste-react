import { SITE_NAME } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnText, setBtnText] = useState('Sign Up');

    return (
        <div className="header">
            <div className="logo-container">
                <h1 className="logo">{SITE_NAME}</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='contact'>Contact Us</Link></li>
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