import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 gap-3 justify-items-center py-10 mt-2">
      <h2 className="text-4xl text-indigo-800">Add A PARTS</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Parts Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>




        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>




        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">available Quantity</span>
          </label>
          <input
            type="text"
            placeholder="available Quantity"
            className="input input-bordered w-full max-w-xs"
          />
        </div>



        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            className="input input-bordered w-full max-w-xs"

          />
        </div>



        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Order Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Order Quantity"
            className="input input-bordered w-full max-w-xs"
          />

        </div>



        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="File"
            placeholder="Photo"
            className="input input-bordered w-full max-w-xs"
          />

        </div>



        <input
          className="btn mt-5 w-full max-w-xs text-white"
          type="submit"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddProduct;
