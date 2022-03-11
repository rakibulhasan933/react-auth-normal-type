import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Register</h2>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" />
                <br />
                <button type="submit">Register</button>
            </form>
            <p>Already registered? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;