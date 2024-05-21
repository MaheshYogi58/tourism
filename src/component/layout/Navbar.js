import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDropdown, toggleMenu } from '../redux/action/actions';


const Navbar = ({ info, handleItemClick }) => {
    const [options, setOptions] = useState([]);
  const navigate=useNavigate();
    const { isMenuOpen, activeDropdown } = useSelector(state => state.navbar);
    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu());

        
    };

    const handleToggleDropdown = (id) => {
        dispatch(toggleDropdown(id));
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-4 sticky">
            {/* Logo */}
            <div className="flex items-center">
                <img src="/images/word.png" alt="logo" className="w-16 md:w-24" />
                <img src='./images/home.jpeg' alt='image' className="md:w-48" onClick={() => navigate('/')} />
                <div>
              
            </div>
            </div>

           

            {/* Menu toggle button */}
            {isMenuOpen ? (
                <MdClose className="md:hidden" size={24} onClick={handleToggleMenu} />
            ) : (
                <MdMenu className="md:hidden" size={24} onClick={handleToggleMenu} />
            )}

            {/* Main menu */}
            <div className={`md:flex space-x-5 text-sm ${isMenuOpen ? 'block' : 'hidden'}`}>
                {info.map(item => (
                    <div key={item.id} className="nav-link" onClick={() => handleItemClick(item)}>
                        <span onMouseEnter={() => handleToggleDropdown(item.id)}>{item.name}</span>
                        {activeDropdown === item.id && item.component && (
                            <div className="dropdown-menu absolute bg-white border border-gray-300 mt-1 rounded shadow-md transition-opacity duration-400" onMouseLeave={() => handleToggleDropdown(null)}>
                                {/* Render dropdown content */}
                                <div className="dropdown-item">
                                    {/* Conditionally render child component based on activeDropdown */}
                                    {React.createElement(item.component)}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Auth links */}
            <div className="flex space-x-4 text-sm">
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link>
            </div>
        </div>
    );
};

export default Navbar;
