import React from 'react';
import { Link } from 'react-router-dom';

const HomeServices = ({service}) => {
   const {description, img_url, price, title, _id} = service;
   return (
      <div className="card mb-10 lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price : {price}</p>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}><button className="btn btn-info glass bg-red-400 hover:bg-red-600">View all Details</button></Link>
        </div>
      </div>
    </div>
   );
};

export default HomeServices;