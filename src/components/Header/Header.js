import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/shipping'>Shipping</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/register'>Register</Link>
            <span>{user.displayName} </span>
            {user?.email && <button onClick={logOut}>Sing out</button>}
        </div>
    );
};

export default Header;