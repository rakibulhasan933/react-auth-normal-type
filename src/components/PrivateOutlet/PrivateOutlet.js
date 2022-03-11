import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const PrivateOutlet = () => {
    const { auth } = useAuth();
    return auth ? <Outlet /> : <Navigate to='/login' />
};

export default PrivateOutlet;