import React from 'react'
import { Navigate } from 'react-router-dom';

// children kaise use kare
const PrivateRoute = ({isLoggedIn, children}) => {
  
    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to='/Login'/>   // aise bhi kar skte hai navigate
    }
}

export default PrivateRoute;