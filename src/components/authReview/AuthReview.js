import React from 'react';

const AuthReview = ({review}) => {
   const {comment, name, photo, rating, title} = review;
   console.log(photo)
   return (
     <div className='grid grid-cols-3 gap-6 m-9 rounded-l-lg shadow-lg p-3'>
         <div className='flex justify-start items-center'>
            <img className='mask mask-squircle w-12 h-12 ' src={photo} alt="" />
            <div className='ml-5'>
            <p>{name}</p>
            <p>Title : {title}</p>
            </div>
         </div>
         <div className=' flex items-center'>
            <p>Ratings : {rating}</p>
            
         </div>
         <div className=' flex items-center' >
            <p>Comments : {comment}</p>
            <button className='btn btn-info ml-4'>Edit</button>
            <button className='btn btn-info ml-4'>delete</button>
         </div>
     </div>
   );
};

export default AuthReview;