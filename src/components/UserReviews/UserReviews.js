import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import { useLoaderData } from 'react-router-dom';
import SingleReview from '../singleReview/SingleReview';

const UserReviews = () => {
   // const {user} = useContext(AuthContext);
   // const [reviews, setReviews] = useState([]);
   const totalReviews = useLoaderData();
      console.log(totalReviews)
  
   return (
      <div>
         <h1>total user reviews here </h1>
         {
            totalReviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
         }
      </div>
   );
};

export default UserReviews;