import React from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
    return (
        <div>
            <h1>this is shipping page</h1>
            <p>Back to home page <span><Link to='/'>home</Link></span></p>
        </div>
    );
};

export default Shipping;