import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Login = () => {
    const { singInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_url = location.state?.from || '/'


    const handleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                navigate(redirect_url)
            })
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleLogin}>Sing In Google</button>
            <p>If you are not registered? <Link to='/register'> Register</Link></p>
        </div>
    );
};

export default Login;