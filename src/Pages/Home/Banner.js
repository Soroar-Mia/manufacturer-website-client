import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base bg-purple-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://myfitment.com/wp-content/uploads/2020/12/What-Are-Aftermarket-Car-Parts-1024x584.jpg"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold text-purple-800">BEST CAR PARTS</h1>
          <p class="py-6">
          Always up for a challenge, I have a deep desire to excel and <br />continuously improve in our work.
          </p>
          <button class="btn btn-primary font-bold">SEE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
