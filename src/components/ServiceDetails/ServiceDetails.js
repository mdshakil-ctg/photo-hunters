import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
   const {title, img_url, price, description} = useLoaderData();

   const reviewHandle =(event)=>{
      event.preventDefault();
      const form = event.target;
      const  rating = form.rating.value;
      const comment = form.comment.value;

      const data = {
         rating, comment
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
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price : {price}</p>
        <p>{description}</p>
        {/* <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div> */}
      </div>
     
    </div>
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
   );
};

export default ServiceDetails;