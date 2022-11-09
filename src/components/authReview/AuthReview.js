import React from 'react';

const AuthReview = ({review, handleDelete, handleUpdate}) => {
   const {comment, name, photo, rating, title, _id} = review;

   const handleForm = (event)=>{
      event.preventDefault();
      const text = event.target.message.value;
      console.log(text)
      if(!text){
      alert('comment should not empty')
      }
      
   else{
      handleUpdate(_id, text)
   }
   }
   // console.log(photo)
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

            {/* The button to open modal */}
            <label htmlFor="my-modal-5" className="btn">Update</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
            <form onSubmit={handleForm} className="modal-box w-11/12 max-w-5xl">
               <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
               <input type="text" name='message' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
               <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
               <div className="modal-action">
                  <button type='submit' className='btn btn-info'>Submit</button>
                  <label htmlFor="my-modal-5" className="btn">Close</label>
               </div>
            </form>
            </div>

            <button onClick={()=>handleDelete(_id)} className='btn btn-info ml-4'>delete</button>
            {/* <button onClick={()=>handleUpdate(_id)} className='btn btn-info ml-4'>update</button> */}


         </div>
     </div>
   );
};

export default AuthReview;