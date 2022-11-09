import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleReview from '../singleReview/SingleReview';

const ServiceDetails = () => {
   const {title, img_url, price, description, service_id} = useLoaderData();

   // console.log(service_id)
   
   const {user} = useContext(AuthContext);
   console.log(user)
   
   
   const [reviews, setReviews] = useState([]);
   // console.log(reviews)

   useEffect(()=>{
      fetch(`http://localhost:5000/reviews?service_id=${service_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err))
   },[service_id])

   const reviewHandle =(event)=>{
      event.preventDefault();
      const form = event.target;
      const  rating = form.rating.value;
      const comment = form.comment.value;

      const data = {
         rating, comment, service_id, email: user.email, name: user.displayName, photo: user.photoURL
      }
      
      fetch('http://localhost:5000/reviews', {
         method: 'POST',
         headers:{
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)})
      .catch(err => console.error(err))
   }



   return (
      <div >
         <div className="card bg-base-100 my-14 shadow-xl">
      <figure>
        <img src={img_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='font-semibold'>Price : <span className='text-2xl text-rose-800'>{price}$</span></p>
        <p className='text-gray-500'>{description}</p>
        {/* <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div> */}
      </div>
     
    </div>
         <div className={user?.uid ? 'block' : 'hidden'}>
         <div>
            <h1>review section</h1>
         </div>
         <div>
            <form onSubmit={reviewHandle}>
            
            <input name='rating' type="text" placeholder="Your Rating" className="input input-bordered input-info w-full max-w-xs" /><br />
            <textarea name='comment' className="textarea textarea-bordered h-24" placeholder="Your Comment"></textarea><br />
            <input type="submit" className='btn btn-info' value="Post Review" />
            </form>
         </div>
         </div>

         <div className={user?.uid ? 'hidden' : 'block'}>
            <p className='text-center text-2xl'>Please <span className='text-red-300 hover:bg-gray-500 hover:px-2 rounded'><Link to='/login'>Login</Link></span> to post a review</p>
         </div>

         <div>
            <h1 className='ml-8 text-3xl font-semibold mt-14'>
What Our Client's Said</h1>

            {
               reviews.map(review=> <SingleReview key={review._id} review={review}></SingleReview>)
            }
         </div>
      </div>
   );
};

export default ServiceDetails;