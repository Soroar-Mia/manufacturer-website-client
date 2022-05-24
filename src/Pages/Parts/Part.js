import React from 'react';

const Part = ({ service }) => {
    const { _id, name, img, description, price, orderQuantity , availableQuantity} = service;
    return (
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
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
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Part;