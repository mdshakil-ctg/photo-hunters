import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import AuthReview from '../authReview/AuthReview';
import { useEffect } from 'react';
import { useState } from 'react';

const UserReviews = () => {
   const {user} = useContext(AuthContext);
   const [totalReviews, setTotalReviews] = useState();

 
   useEffect(()=>{
      fetch(`http://localhost:5000/reviews/${user.email}`)
      .then(res=>res.json())
      .then(data => setTotalReviews(data))
      .catch(err => console.error(err))
   },[user?.email])
  
   const handleDelete = id =>{
      console.log(id)
      const proceed = window.confirm('Are You Confirm To Delete?');
      if(proceed){
         fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'DELETE'
         })
         .then(res=>res.json())
         .then(data => {
            if(data.deletedCount > 0){
               alert('data is deleted')
               const remaining = totalReviews.filter(review=> review._id !== id);
               setTotalReviews(remaining);
            }
            console.log(data)})
         .catch(err => console.error(err))
      }
   }

   return (
      <div>
         <h1>total user reviews here </h1>
         {
            totalReviews?.map(review => <AuthReview key={review._id} review={review} handleDelete={handleDelete}></AuthReview>)
         }
      </div>
   );
};

export default UserReviews;