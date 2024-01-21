import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isUserLogin } from '../auth'

const PrivateRoutes = () =>{
  return isUserLogin() ? <Outlet/> : <Navigate  to={"/login"}/>
}

export default PrivateRoutes