import {motion} from "framer-motion"
import React from "react";
import { Link } from "react-router-dom";

export function Meeting() {
  return (
    <div className="h-[50vh] mt-10  bg-gradient-to-b from-[#fccbd7] via-[#f9c2c250] to-[#ffffff] relative w-full overflow-hidden flex flex-col md:flex-row">
      {/* Content Section */}
      <div className="w-full z-20 absolute h-full flex flex-col items-center justify-center ">
        {/* Background Mask */}
        <div className="absolute inset-0 w-full h-full z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        {/* Content */}
        {/* <Boxes /> */}
        <h1 className="md:text-4xl text-xl text-black text-center   relative ">
          See how Qualiinsight can help <br /> your business and quality teams
        </h1>
        <Link
          to="/contact"
          className="inline-block my-8 py-3 px-6 text-lg bg-[#d33e5f] text-white   rounded-lg shadow-lg hover:bg-red-600 transition duration-300 relative"
        >
          Book A Meeting
        </Link>
      </div>
      
    </div>
  );
}
