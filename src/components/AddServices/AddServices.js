import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {

    useTitle('Add Services')

   const handleSubmit = event =>{
      event.preventDefault();
      const form = event.target;
      const title = form.title.value;
      const price = form.price.value;
      const description = form.description.value;
      const img_url = form.image.value;
      
      const date = new Date();
      const time = ` ${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
      
      const data = {
         title, price, description, img_url, time
      }
      
      fetch('http://localhost:5000/create-service', {
         method: 'POST',
         headers:{
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.acknowledged){
          toast('Services Added SuccesFully')
          form.reset();
        }
      })
      .catch(err => console.error(err))
   }

   return (
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Create Services</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="text" name='title' placeholder="Service Title" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="text" name='price' placeholder="Service Price" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="text" name='description' placeholder="Short Description" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="text" name='image' placeholder="Image Url" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-info">Create Services</button>
        </div>
      </form>
    </div>
  </div>
<ToastContainer></ToastContainer>
</div>
   );
};

export default AddServices;