import React from 'react';
import './layoutRoutes.scss';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Main from "../main/main";
import Admin from "../admin/admin";


const LayoutRoutes = () => {
    const access= localStorage.getItem('accessToken');

   if(!access) return (
        <div className='not_auth'>
            <h1>Not Auth</h1>
            <Link to='/auth/register'>Go to registration</Link>
        </div>
    )
   return (
       <Routes>
           <Route path='/' element={<Main/>}/>
           <Route path='/admin' element={<Admin/>}/>
           <Route path='/*' element={<Navigate to='/'/>} />
       </Routes>
   )
};

export default LayoutRoutes;