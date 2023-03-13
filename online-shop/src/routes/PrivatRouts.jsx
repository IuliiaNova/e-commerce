import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const isLogged = localStorage.getItem('userLogin');
    return isLogged ? children : <Navigate to="/login" />

}

export default PrivateRoutes

 
