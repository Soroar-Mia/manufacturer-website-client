import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import PurchaseVew from "./PurchaseVew";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  console.log(id);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service-single/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);

  console.log(service);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="grid grid-cols-1 gap-3 justify-items-center">
        <p className="text-4xl text-indigo-800 py-10">PARTS DETAILS</p>
        <div class="card w-96 bg-base-100 shadow-xl ">
          <figure class="px-10 pt-10">
            <img
              className="object-scale-down"
              src={service.img}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{service.name}</h2>
            <p>Per unit price: {service.price}</p>
            <p>Minimum order Quantity:{service.orderQuantity}</p>
            <p>Available Quantity{service.availableQuantity}</p>
            <p>
              <small>{service.description}</small>
            </p>
          </div>
        </div>
      </div>
      <div>
      <form className="grid grid-cols-1 gap-3 justify-items-center mt-5">
      <p className="text-4xl text-indigo-800 py-10">PURCHASE</p>
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="Quantity"
            placeholder="Quantity"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
