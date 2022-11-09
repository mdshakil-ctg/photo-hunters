import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { useLoaderData } from 'react-router-dom';
import AuthReview from '../authReview/AuthReview';
import { useEffect } from 'react';
import { useState } from 'react';

const UserReviews = () => {
   const {user} = useContext(AuthContext);
   // const totalReviews = useLoaderData();
   const [totalReviews, setTotalReviews] = useState();

   // console.log(totalReviews)
   useEffect(()=>{
      fetch(`http://localhost:5000/reviews/${user.email}`)
      .then(res=>res.json())
      .then(data => setTotalReviews(data))
      .catch(err => console.error(err))
   },[user?.email])
  


   return (
      <div>
         <h1>total user reviews here </h1>
         {
            totalReviews?.map(review => <AuthReview key={review._id} review={review}></AuthReview>)
         }
      </div>
   );
};

export default UserReviews;