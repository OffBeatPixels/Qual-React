import React from "react";
import {motion} from "framer-motion"

export default function Company() {
  return (
    <div className="flex">
      <div className="md:w-1/2 md:text-justify  md:ml-20 p-8 md:p-10">
        <h1 className="text-4xl   text-left mb-4">Our Mission</h1>
        <p>
          At QualiInsight, we envision a future where quality, insights,
          innovation, and research are the cornerstones of every business
          decision Our mission is to redefine the perception of quality from a
          mere cost center to a powerful transformation engine that provides a
          competitive edge in today’s dynamic market. We are committed to
          equipping businesses with the right data and insights, empowering them
          to make informed, strategic choices that foster excellence and
          sustainable growth. Our focus extends beyond immediate challenges; we
          aim to cultivate a culture of continuous improvement that paves the
          way for long-term success and innovation.
        </p>
        <p>
          In our pursuit of excellence, we are dedicated to accelerating the
          responsible advancement and deployment of Artificial General
          Intelligence (AGI) through our Quality as a Service (QaaS) framework.
          By integrating expert human feedback, we ensure that AGI outputs meet
          the highest quality standards, promoting fairness, inclusivity, and
          alignment with human values. Together, we strive to revolutionize
          decision-making processes, ensuring that quality remains at the heart
          of every choice. At QualiInsight, we are committed to driving
          innovation, enriching lives, and empowering organizations to thrive in
          an ever-evolving landscape.
        </p>
      </div>
      <div className=" w-1/2">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4500 -3000 10000 6000"
          className="w-full h-screen"
        >
          <defs>
            <linearGradient id="gradient-fill" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#760000" />
              <stop offset="25%" stopColor="#fccbd7" />
              <stop offset="50%" stopColor="#f9c2c250" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          <motion.path
            d="M-15-2866A1 1 0 003098-10 1 1 0 007 3142"
            fill="url(#gradient-fill)"
            stroke="url(#gradient-fill)"
            strokeWidth="10"
            strokeDasharray="1 2000"
            animate={{
              strokeDashoffset: [2000, 0], // Path drawing animation
              scale: [1, 2, 1.5], // Oscillating scale effect
              rotate: [0, 10,0], // Full rotation
            }}
            transition={{
              strokeDashoffset: {
                duration: 2,
                repeat: 0,
                repeatType: "loop",
              },
              scale: {
                duration: 2,
                repeat: 0,
                repeatType: "mirror",
              },
              rotate: {
                duration: 5,
                repeat: 0,
                ease: "linear",
              },
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
}
