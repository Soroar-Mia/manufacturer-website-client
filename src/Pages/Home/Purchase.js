import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service-single/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);

  const handleBooking = (event) => {
    event.preventDefault();
    const booking = {
      productName: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      quantity: event.target.quantity.value,
    }
    console.log(booking);
    fetch("http://localhost:5000/post-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          toast.success('Service added!')
        }
      }); 
  };

 
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
      <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-5">
      <p className="text-4xl text-indigo-800 py-10">PURCHASE</p>
          <input
            type="text"
            name="name"
            disabled
            value={service?.name || ""}
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
            name="quantity"
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
