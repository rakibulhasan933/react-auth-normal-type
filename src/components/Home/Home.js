import React from 'react';
import useAuth from '../../context/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>This a Home page</h1>
            <p>user : {user.displayName}</p>
        </div>
    );
};

export default Home;