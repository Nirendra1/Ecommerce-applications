import React from 'react';

import { isLoggedId } from './Auth/Authe';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {

 return isLoggedId ()? <Outlet/>: <Navigate to={"/login"}/>
}

export  default PrivateRoute;