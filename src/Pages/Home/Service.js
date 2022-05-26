import React from "react";
import { Link, Navigate } from "react-router-dom";

const Service = ({ service, setItems }) => {
  const { _id, name, img, description, price, orderQuantity , availableQuantity} = service;

  const navigateToServiceDetail = id =>{
    Navigate(`/service/${_id}`);
}

  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          className="object-scale-down"
          src={img} 
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>Per unit price: {price}</p>
        <p>Minimum order Quantity:{orderQuantity}</p>
        <p>Available Quantity{availableQuantity}</p>
        <p><small>{description}</small></p>
        <div class="card-actions">
          <Link to={`/purchase/${_id}`} class="btn btn-primary">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
