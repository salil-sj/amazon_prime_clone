import React, { useState } from "react";
import { POSTER_URL } from "../utils/TMDBConstants";

const Poster = ({ title, poster, average, details }) => {
  return (
    <div className="p-2 sm:p-8 ">
      <div className="ml-2 relative ">
        <div>
          <img
            className="w-screen h-52  sm:h-[600px] object-cover "
            src={POSTER_URL + poster}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent  to-black "></div>
          <div className="absolute top-10 sm:top-20 left-3 sm:left-24">
            <h1 className="text-2xl sm:text-8xl font-bold text-white">
              {title}
            </h1>
            <h1 className="text-yellow-600 font-bold ml-1 mt-1 text-xs sm:text-lg">
              {average}/10
            </h1>
            <button className="bg-white p-1 sm:p-4 mt-4 sm:mt-10 rounded-md font-bold hover:opacity-20 ">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
