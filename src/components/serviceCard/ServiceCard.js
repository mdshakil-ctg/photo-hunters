import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
   const {description, img_url, price, title, _id} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price : {price}</p>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
     
    </div>
  );
};

export default ServiceCard;
