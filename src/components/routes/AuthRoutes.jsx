import React from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Auth from "../reg/auth";
import Register from "../reg/reg";

const AuthRoutes = () => {
    const access = localStorage.getItem('accessToken');
    const navigate= useNavigate()

    const goToMain = () => navigate('/');

    if (access) goToMain();

    return (
        <Routes>
            <Route path='/login' element={<Auth/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/*' element={<Navigate to='/auth/register'/>}/>
        </Routes>
    );
};

export default AuthRoutes;