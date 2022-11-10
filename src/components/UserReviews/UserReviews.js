import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import AuthReview from '../authReview/AuthReview';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';



const UserReviews = () => {
   const {user} = useContext(AuthContext);
   const [totalReviews, setTotalReviews] = useState();
   
   useTitle('My Reviews')
 
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
               // alert('data is deleted')
               toast("data deleted")
               const remaining = totalReviews.filter(review=> review._id !== id);
               setTotalReviews(remaining);
            }
            console.log(data)})
         .catch(err => console.error(err))
      }
   }

  const  handleUpdate = (id, text) =>{
      const proceed = window.confirm('Make Sure To Update');
      if(proceed){
         fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'PATCH',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify({comment: text})
         })
         .then(res=>res.json())
         .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
               const remaining = totalReviews.filter(review => review._id !== id);
               const modified = totalReviews.find(rev => rev._id === id);
               modified.comment = text;
               const newReviews = [modified, ...remaining];
               setTotalReviews(newReviews);
            }
         })
         .catch(err=>console.log(err))
      }
   }

   return (
      <div>
         {
           totalReviews?.length === 0 && <h1 className='text-4xl text-red-400 text-center my-10'>No reviews ar added yet! </h1>
         }
         {
            totalReviews?.map(review => <AuthReview key={review._id} review={review} handleDelete={handleDelete} handleUpdate={handleUpdate}></AuthReview>)
         }
         <ToastContainer />
      </div>
   );
};

export default UserReviews;