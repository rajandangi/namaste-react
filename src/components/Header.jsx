import { SITE_NAME } from '../utils/constants';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnText, setBtnText] = useState('Sign Up');
    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <div className="flex justify-between items-center border-b-custom-gray-200 p-6 shadow-sm bg-white mb-4">
            <div className="logo-container">
                <h1 className="text-2xl font-bold">{SITE_NAME}</h1>
            </div>
            <div>
                <ul className='flex items-center justify-between gap-16'>
                    <li><Link className='text-[1.1rem] font-semibold' to='/'>Home</Link></li>
                    <li><Link className='text-[1.1rem] font-semibold' to='/about'>About Us</Link></li>
                    <li><Link className='text-[1.1rem] font-semibold' to='contact'>Contact Us</Link></li>
                    <li className='text-[1.1rem] font-semibold'>
                        <Link className='text-[1.1rem] font-semibold relative' to='cart'>Cart
                            <span className='absolute flex items-center justify-center top-[-1rem] right-[-1rem] bg-green-300 rounded-full w-6 h-6 p-2 text-[0.9rem]'>
                                {cartItems.length}
                            </span>
                        </Link>
                    </li>
                    <button
                        className="bg-green-200 border-none py-2 px-4 rounded-lg cursor-pointer text-custom-gray-300 hover:bg-green-300 text-[1.1rem] font-semibold"
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