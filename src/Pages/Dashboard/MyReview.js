import React from 'react';

const MyReview = () => {

    return (
        <div>
    <form  className="grid grid-cols-1 gap-3 justify-items-center mt-5">
      <p className="text-4xl text-indigo-800 py-10">My Review</p>
          <input
            type="text"
            name="name"
            disabled
            value="Dr hdsyri"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            disabled
            value="hdsyri@gmail.com"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="Ratings"
            placeholder="Star Ratings(1-5)"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary w-full max-w-xs"
          />
        </form>
        </div>
    );
};

export default MyReview;