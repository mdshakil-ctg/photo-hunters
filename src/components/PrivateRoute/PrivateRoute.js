import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../contexts/UserContext';

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext);

   console.log(user)
   const location = useLocation();
   
   if(loading){
      return <div className='d-flex justify-center mt-2'><Spinner animation="border" variant="primary" /></div>
   }

   if(!user){
      return <Navigate to='/login' state={{from: location}} replace ></Navigate>
   }
   
      return children;
   
};

export default PrivateRoute;