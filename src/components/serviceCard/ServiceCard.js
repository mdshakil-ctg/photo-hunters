import React from "react";

const ServiceCard = ({ service }) => {
   const {description, img_url, price, title, _id, service_id} = service;
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
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
