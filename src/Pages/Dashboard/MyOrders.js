import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://mighty-basin-34792.herokuapp.com/get-orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user]);
  console.log(orders);
  return (
    <div>
      <h2 className="text-indigo-800 text-2xl">my order</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Order Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .slice(0, 6)
              .map(({ productName, email, quantity, phone }, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{productName}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{quantity}</td>
                  <td>
                    <button class="btn btn-secondary">Cancel</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
