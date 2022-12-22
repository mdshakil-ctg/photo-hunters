import React from 'react';
import { toast } from 'react-toastify';

const AuthReview = ({review, handleDelete, handleUpdate}) => {
   const {comment, name, photo, rating, title, _id} = review;

   const handleForm = (event)=>{
      event.preventDefault();
      const text = event.target.message.value;
      console.log(text)
      if(!text){
      toast('comment should not empty')
      }
      
   else{
      handleUpdate(_id, text)
   }
   }
   
   return (
     <div className=' m-9 rounded-l-lg shadow-lg p-3'>
         <div className='flex justify-start items-center'>
            <img className='mask mask-squircle w-12 h-12 ' src={photo} alt="" />
            <div className='ml-5'>
            {
               name ? <p>{name}</p> : <p>Unknown User</p>
            }
            {
               title ? <p>Title : {title}</p> : <p>Unknown User</p>
            }
            </div>
         </div>
         <div className=' flex items-center'>
            <p>Ratings : {rating}</p>
            
         </div>
         <div className=' grid grid-cols-1 gap-5 ' >
            <p>Comments : {comment}</p>

            {/* The button to open modal */}
            <div className='lg:flex justify-end'>
            <label htmlFor="my-modal-5" className="btn btn-info glass bg-red-500">Update</label>
            <button onClick={()=>handleDelete(_id)} className='btn btn-info ml-4'>Delete</button>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle modal-open" />
            <div className="modal">
            <form onSubmit={handleForm} className="modal-box w-11/12 max-w-5xl">
               <h3 className="font-bold text-lg mb-3">Please Update Your Review</h3>
               <input type="text" name='message' placeholder="Type here" className="input input-bordered input-md w-full max-w-lg" />
               <p className="py-4">You'r reviews will be updated your reviews section. Look for free!</p>
               <div className="modal-action">
                  <button  type='submit' className='btn btn-info'>Submit</button>
                  <label htmlFor="my-modal-5" className="btn">Close</label>
               </div>
            </form>
            </div>
         </div>
     </div>
   );
};

export default AuthReview;