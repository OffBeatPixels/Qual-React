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
          width="800"
          height="1000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 50 200 200"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient
              id="gradient-infinity"
              gradientTransform="rotate(90)"
            >
              <stop offset="0%" stopColor="#153B56" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#8FABC3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M100 100C1 20 0 180 100 100 195 19 211 183 100 100Z" // Infinity loop path
            fill="none"
            stroke="url(#gradient-infinity)"
            strokeWidth="5"
            strokeLinecap="round"
            animate={{
              strokeDasharray: [1, 400], // Stroke appears and repeats
              strokeDashoffset: [0, -800], // Moves along the path
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
}
