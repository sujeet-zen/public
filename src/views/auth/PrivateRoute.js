import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => { 
  const navigate = useNavigate();   
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn); 

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login page if not authenticated
      navigate('/dashboard' );
    }
  }, []);
  return <Outlet />
};  

export default PrivateRoute;







