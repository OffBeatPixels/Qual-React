import React, { useEffect } from "react";
import { motion } from "framer-motion";


export default function Career() {

  return (
    <div className=" mx-auto flex  ">
      <div className="w-1/2 px-20 mt-14">
        <h1 className="text-4xl   text-left mb-4">Careers at Qualiinsight</h1>
        <p className="text-lg  justify-center text-left mb-4">
          At Qualiinsight, we are on a mission to redefine the perception of
          quality-from a mere cost center to a powerful transformation engine
          that provides a competitive edge in today's dynamic market. We empower
          businesses with innovative Quality as a Service solutions that elevate
          standards and drive success. If you are passionate about excellence
          and thrive in a collaborative environment, we invite you to explore
          exciting career opportunities with us. Together, let's transform
          quality into a strategic advantage!
        </p>
      </div>

      <motion.svg
        width="800"
        height="800"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -150 10 500"
        className="w-1/2 h-80 "
      >
        <defs>
          <linearGradient id="gradient-id" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#fccbd7" />
            <stop offset="50%" stopColor="#f9c2c250" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        {/* Inner Circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="50"
          fill="url(#gradient-id)" // Reference the gradient
          animate={{
            r: [50, 150, 150], // Radius grows and shrinks
            cx: [50, 200, 100], // Moves left and right
            cy: [100, 150, 100], // Moves up and down
          }}
          transition={{
            duration: 2,
            repeat: 0,
            repeatType: "loop",
          }}
        />
        {/* Outer Circle */}
        <motion.circle
          cx="150" // Start further to the right
          cy="100"
          r="50"
          fill="url(#gradient-id)" // Reference the gradient
          animate={{
            r: [50, 100, 250], // Radius grows and shrinks
            cx: [150, 250, 350], // Moves further to the right and back
            cy: [100, 150, 100], // Moves up and down
          }}
          transition={{
            duration: 1.5,
            repeat: 0,
            repeatType: "loop",
          }}
        />
      </motion.svg>

      
    </div>
  );
}
